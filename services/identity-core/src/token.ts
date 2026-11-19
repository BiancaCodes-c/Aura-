import crypto from 'crypto';
import { sign, verify } from './keys';
import { forget } from './forget';

export type IDLayerToken = {
  sub: string; isHuman: true; over13: boolean; over18: boolean;
  region: "US"|"EU"|"OTHER"; iat: number; exp: number; nonce: string;
};

export async function mintToken(input:{realDateOfBirth:string; countryCode:string; livenessPassed:boolean}) {
  if(!input.livenessPassed) throw new Error("Not a live human");
  const age = calculateAge(input.realDateOfBirth);
  const sub = "usr_"+crypto.randomBytes(16).toString("hex");
  const token: IDLayerToken = {
    sub, isHuman:true, over13: age>=13, over18: age>=18,
    region: mapRegion(input.countryCode),
    iat: Date.now(), exp: Date.now()+1000*60*60*24*30,
    nonce: crypto.randomBytes(16).toString("hex")
  };
  const signed = await sign(token);
  forget(input.realDateOfBirth);
  return { token: signed, sub };
}
export async function checkToken(signedToken:string){ return verify(signedToken); }
function calculateAge(dob:string){ const b=new Date(dob); const n=new Date(); let a=n.getFullYear()-b.getFullYear(); if(n<new Date(n.getFullYear(),b.getMonth(),b.getDate())) a--; return a; }
function mapRegion(c:string){ if(c==="US") return "US" as const; if(["DE","FR","IT","ES"].includes(c)) return "EU" as const; return "OTHER" as const; }
