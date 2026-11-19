import React from 'react';
export function AuraButton({onVerified}:{onVerified:(r:any)=>void}){
  return <button onClick={()=>window.open("https://aura.social/verify","_blank")}>✨ Verify with Aura</button>;
}
