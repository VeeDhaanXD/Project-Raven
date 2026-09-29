import {AuditEvent} from '../models/index.js';
import {canonicalize,sha256} from './canonical.js';
export async function appendAudit(organizationId:any, actor:string, action:string, objectType:string, objectId:string, payload:unknown) {
  const previous=await AuditEvent.findOne({organizationId}).sort({timestamp:-1});
  const previousHash=previous?.currentHash || 'GENESIS';
  const payloadHash=sha256(canonicalize(payload));
  const currentHash=sha256(`${previousHash}|${canonicalize({actor,action,objectType,objectId,payloadHash})}`);
  return AuditEvent.create({organizationId,auditEventId:cryptoRandom(),actor,action,objectType,objectId,payload,previousHash,payloadHash,currentHash,timestamp:new Date()});
}
function cryptoRandom(){return `AUD-${Date.now()}-${Math.random().toString(36).slice(2,10)}`;}
export async function verifyAuditChain(organizationId:any){
  const rows=await AuditEvent.find({organizationId}).sort({timestamp:1}); let prev='GENESIS';
  for(const r of rows){const expected=sha256(`${prev}|${canonicalize({actor:r.actor,action:r.action,objectType:r.objectType,objectId:r.objectId,payloadHash:r.payloadHash})}`);if(expected!==r.currentHash||sha256(canonicalize(r.payload))!==r.payloadHash)return {valid:false,checked:rows.length,failedAt:r.auditEventId};prev=r.currentHash;}
  return {valid:true,checked:rows.length};
}
