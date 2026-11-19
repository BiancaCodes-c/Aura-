import { getCode } from './generate-code';
export async function checkCode(code:string){
  const e=getCode(code);
  if(!e) return {valid:false,reason:"bad code"};
  if(Date.now()>e.exp) return {valid:false,reason:"expired"};
  return {valid:true,isHuman:true,over13:true,over18:false,region:"US",auraGlow:"blue"};
}
