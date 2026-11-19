// keys.ts — Ed25519 signing keys, rotated every 24h (infra/keys/rotation-cron.yaml).
// identity-core signs; the gateway verifies with published public keys.

export async function sign(payload: object): Promise<string> {
  // TODO: Ed25519-sign the payload with the current private key
  throw new Error("not implemented");
}

export async function verify(signedToken: string): Promise<any> {
  // TODO: verify signature against current + previous public keys; return claims
  throw new Error("not implemented");
}

export async function rotateKeys(): Promise<void> {
  // TODO: generate fresh Ed25519 pair; keep prior public key published until its tokens expire
  throw new Error("not implemented");
}
