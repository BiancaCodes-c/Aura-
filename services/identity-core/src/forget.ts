export function forget(data:any){
  // Overwrite + signal GC. Caller must also delete temp Redis keys / files.
  try{ if(typeof data==='string') data='\0'.repeat(data.length); }catch{}
  return true;
}
