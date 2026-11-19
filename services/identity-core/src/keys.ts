// Aura — idlayer

// keys.ts — signing keys, rotated on a schedule (see infra/keys/rotation-cron.yaml).
// Gateways verify with public keys; only identity-core holds private keys.

export interface SigningKey {
  keyId: string;
  publicKey: string;
}

export async function currentSigningKey(): Promise<{ keyId: string; privateKey: string }> {
  // TODO: load the active private key from the secret store
  throw new Error("not implemented");
}

export async function publicKeys(): Promise<SigningKey[]> {
  // TODO: publish current + previous public keys so gateways can verify during rotation
  throw new Error("not implemented");
}
