// api.ts — the verifier-app's only door: identity-core via the gateway.
// Sends ID material exactly once; keeps nothing.

export async function verify(idImage: unknown, selfie: unknown) {
  // TODO: POST to identity-core (ClusterIP only, via gateway relay)
  throw new Error("not implemented");
}

export async function revoke(sub: string) {
  // TODO: POST revoke by sub
  throw new Error("not implemented");
}
