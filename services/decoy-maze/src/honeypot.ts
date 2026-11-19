export const honeypots=["/v1/admin","/v1/users","/v1/ids","/v1/private"];
export function isHoneypot(path:string){ return honeypots.includes(path); }
