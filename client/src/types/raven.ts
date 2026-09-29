export type Role='EXECUTIVE'|'CISO'|'SECURITY_FINANCE'|'ANALYST'|'AUDITOR'|'REGULATOR'|'SUPER_ADMIN'|'CEO'|'CSFO'|'Executive'|'SuperAdmin';
export interface User{ id:string; email:string; name:string; role:Role; organizationId:string; }
export interface RiskResult{result:{eal:number;p10:number;p50:number;p90:number;var95:number;cvar95:number;pml95:number;pml99:number;iterations:number;seed:number};drivers:{scenarioId:string;contribution:number}[];modelVersion:string;datasetVersion:string;confidence:string;scenarioCount:number}
