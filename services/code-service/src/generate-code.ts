const codes=new Map<string,{sub:string;exp:number}>();
export function generateCode(sub:string){
  const code=String(Math.floor(100000+Math.random()*900000));
  codes.set(code,{sub,exp:Date.now()+60000});
  return code;
}
export function getCode(code:string){ return codes.get(code); }
