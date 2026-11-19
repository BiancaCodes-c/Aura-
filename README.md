# Aura — idlayer

**Aura doesn't hold your data. It holds your proof.**

Aura verifies a real ID **once**, mints a signed token, and then *forgets the ID*.
Apps never see identities. They ask yes/no questions and get yes/no answers:

- `isHuman` — a verified human? true / false
- `over13` / `over18` — age band? true / false
- `region` — US / EU / OTHER. No city. No name. No document. Ever.

## The promise

- We never sell data.
- We never store raw ID. Raw documents are deleted **60 seconds** after a token is minted (see `services/vault/policies/retention.md`).
- Revoking a token needs no personal data — because we don't keep any.

## Layout

- `apps/` — verifier-app (verify ONCE) and dashboard (for admins: stats, decoy logs, abuse — no names)
- `services/` — identity-core (the vault: 1 pod, no internet), token-gateway (the bouncer), code-service (games / Discord / TV), vault, decoy-maze
- `packages/` — SDKs (js, react, python, unity, discord, ios, android) and shared token types
- `infra/` — k8s, terraform, signing-key rotation (every 24h)
- `docs/` — architecture, threat model, privacy promise, API, integration guide, compliance
- `tests/` — unit, integration (full flow), attack simulations

Part of the Nemyra family of systems.
