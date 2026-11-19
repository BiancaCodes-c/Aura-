import { blocklist } from './blocklist';
export async function revokeToken(sub:string){ await blocklist.add(sub); return {revoked:true}; }
export async function isRevoked(sub:string){ return blocklist.has(sub); }
