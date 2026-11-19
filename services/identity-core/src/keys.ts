import crypto from 'crypto';
const KEY = process.env.AURA_SIGNING_KEY || 'dev-only-change-me';
export async function sign(payload:any){
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const sig = crypto.createHmac('sha256', KEY).update(body).digest('base64url');
  return body+'.'+sig;
}
export async function verify(signed:string){
  try{
    const [body,sig]=signed.split('.');
    const expect=crypto.createHmac('sha256',KEY).update(body).digest('base64url');
    if(expect!==sig) return null;
    return JSON.parse(Buffer.from(body,'base64url').toString());
  }catch{ return null; }
}
