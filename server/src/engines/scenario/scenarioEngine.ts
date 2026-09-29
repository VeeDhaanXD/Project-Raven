import {calculateRisk} from '../risk/riskEngine.js';
export async function runScenario(organizationId:any,name:string,mutations:Record<string,number>,iterations=10000){return {name,mutations,before:await calculateRisk(organizationId,iterations,26105),after:await calculateRisk(organizationId,iterations,26105,mutations)};}
