# Architecture — the four layers

Aura is built like the rest of the Nemyra family: **barrier, data, network,
intelligence** — wrapped around one rule: identity is touched once, in one
place, and then forgotten.

1. **Barrier** — the decoy-maze and gateway edge. Bots meet honeypots;
   real apps meet three yes/no questions and nothing else.
2. **Data** — the vault that holds nothing: raw ID deleted 60 seconds after
   mint; only token ids, coarse claims, and audit metadata persist.
3. **Network** — identity-core is reachable only by the verifier-app;
   the token-gateway is the only public surface.
4. **Intelligence** — intruder logs and revocation patterns feed detection;
   the dashboard shows revocations and system health, never identities.

## Flow

verifier-app -> identity-core (verify once, mint token, forget ID)
apps -> token-gateway (check-age / check-human / check-region)
admin -> dashboard (revoke by token id; no personal data involved)
