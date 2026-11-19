export type AuraResult={valid:boolean;isHuman:boolean;over13:boolean;over18:boolean;region:string;auraGlow:string};
export class Aura{
  constructor(private apiKey:string){}
  async check(auraToken:string):Promise<AuraResult>{
    const r=await fetch("https://api.aura.social/v1/check",{method:"POST",headers:{Authorization:`Bearer ${this.apiKey}`,"Content-Type":"application/json"},body:JSON.stringify({auraToken})});
    return r.json();
  }
  async checkCode(code:string):Promise<AuraResult>{
    const r=await fetch("https://api.aura.social/v1/check-code",{method:"POST",headers:{Authorization:`Bearer ${this.apiKey}`},body:JSON.stringify({code})});
    return r.json();
  }
  button(containerId:string,onSuccess:(r:AuraResult)=>void){
    const el=document.getElementById(containerId); if(!el) return;
    el.innerHTML=`<button>✨ Verify with Aura</button>`;
    el.onclick=()=>{ window.open("https://aura.social/verify","_blank","width=400,height=600"); window.addEventListener("message",(e)=>{ if(e.data?.type==="AURA_VERIFIED") onSuccess(e.data.result); }); };
  }
}
