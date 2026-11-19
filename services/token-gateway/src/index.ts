// index.ts — token-gateway entrypoint. THE BOUNCER: public, scales (3-10 replicas, HPA).
// Express / Fastify on port 3000. The ONLY public API surface of Aura.

const PORT = 3000;

export function start() {
  // TODO: mount routes: POST /v1/check, POST /v1/check-code, OIDC adapter
  console.log(`token-gateway listening on :${PORT}`);
}
