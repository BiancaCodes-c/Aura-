// Aura — idlayer

// revoke.ts — kill a token. No personal data needed, because none is kept.
// Revocation is by token id (jti) only.

export async function revokeToken(jti: string): Promise<void> {
  // TODO: add jti to the revocation list the token-gateway checks
  throw new Error("not implemented");
}

export async function isRevoked(jti: string): Promise<boolean> {
  // TODO: revocation list lookup
  throw new Error("not implemented");
}
