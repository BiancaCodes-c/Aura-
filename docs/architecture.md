# Architecture — barrier / data / network / intelligence

1. **Barrier** — the token-gateway (the bouncer) and the decoy-maze.
   Apps ask yes/no questions; bots find honeypots and an endless maze.
2. **Data** — the vault that holds nothing: raw ID deleted within 60 seconds
   of mint; only token ids, coarse claims, and audit metadata persist.
3. **Network** — identity-core: 1 pod, ClusterIP only, NO ingress, no internet.
   The gateway is the only public surface; core talks to gateway + Redis, period.
4. **Intelligence** — intruder logs, audit counts, and revocation patterns
   feed detection. The dashboard shows stats and revocations — never identities.

## Flow

verifier-app -> identity-core (verify once -> mint -> forget in 60s)
apps -> token-gateway (POST /v1/check, /v1/check-code, OIDC)
games / Discord / TV -> code-service (6-digit code, burns on use)
admin -> dashboard (stats, decoy logs, abuse — no names anywhere)
