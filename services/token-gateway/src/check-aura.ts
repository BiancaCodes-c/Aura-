import { verify } from '../../identity-core/src/keys';
import { isRevoked } from '../../identity-core/src/revoke';
export async function checkAura(req:any,res:any){
  const {auraToken}=req.body||{};
  if(!auraToken) return res.status(400).json({valid:false,reason:"no token"});
  const decoded=await verify(auraToken);
  if(!decoded) return res.json({valid:false,reason:"fake token"});
  if(Date.now()>decoded.exp) return res.json({valid:false,reason:"expired"});
  if(await isRevoked(decoded.sub)) return res.json({valid:false,reason:"revoked"});
  return res.json({valid:true,isHuman:true,over13:decoded.over13,over18:decoded.over18,region:decoded.region,auraGlow:decoded.over18?"gold":"blue"});
}
