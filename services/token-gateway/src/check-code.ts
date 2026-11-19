import { checkCode } from '../../code-service/src/redeem-code';
export async function checkCodeHandler(req:any,res:any){
  const {code}=req.body||{};
  const result=await checkCode(code);
  return res.json(result);
}
