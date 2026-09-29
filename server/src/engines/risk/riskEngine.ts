import {Asset,BusinessService,ControlState,RiskScenario,Vulnerability,ThreatActor,FinancialAssumption} from '../../models/index.js';
import {runMonteCarlo} from './monteCarlo.js';
export async function calculateRisk(organizationId:any,iterations=10000,seed=26105,controlOverrides:Record<string,number>={}){
 const scenarios=await RiskScenario.find({organizationId});
 const scenarioInputs:any[]=[];
 for(const sc of scenarios){const asset=await Asset.findById(sc.assetId);const svc=await BusinessService.findById(sc.businessServiceId);const threat=await ThreatActor.findById(sc.threatActorId);const vulns=await Vulnerability.find({_id:{$in:sc.vulnerabilityIds}});const cstates=await ControlState.find({organizationId,assetId:asset?._id});
  const baseSus=Math.min(1,Math.max(0,(vulns.reduce((a,v)=>a+((v.epss||0)*(v.cvss||0)/10)*(v.kev?1.35:1),0)/Math.max(1,vulns.length))*(asset?.internetExposed?1.25:0.85)*(1+(asset?.patchDays||0)/60)));
  const effect=cstates.reduce((a,c)=>a+(c.effectiveness?.preventive||0),0)/Math.max(1,cstates.length); const controlFactor=Math.min(.8,Math.max(0, effect));
  const ctrlAdj=Math.min(.8,Math.max(0, controlFactor+(Object.values(controlOverrides).reduce((a,b)=>a+b,0)||0)));
  scenarioInputs.push({scenarioId:sc.scenarioId,tef:Math.max(.05,threat?.frequencyPerYear||1),susceptibility:baseSus,controlFactor:ctrlAdj,loss:{type:'triangular',params:{min:Math.max(10000,(sc.lossComponents as any[]).reduce((a,b)=>a+(b.min||0),0)),max:Math.max(50000,(sc.lossComponents as any[]).reduce((a,b)=>a+(b.max||0),0)),mode:Math.max(25000,(sc.lossComponents as any[]).reduce((a,b)=>a+(b.mode||0),0))}}});
 }
 const result=runMonteCarlo(scenarioInputs,iterations,seed);
 const drivers=scenarioInputs.map((s:any)=>({scenarioId:s.scenarioId,contribution:s.tef*s.susceptibility*(1-s.controlFactor)})).sort((a,b)=>b.contribution-a.contribution).slice(0,10);
 return {result,drivers,modelVersion:'RAVEN-CRQ-v1.0',datasetVersion:'DEMO-2026-09-19',confidence:'MEDIUM',scenarioCount:scenarios.length};
}
