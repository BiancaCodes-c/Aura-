# Aura — idlayer

**Prove you're human, over 13, over 18 — without handing over who you are.**

Aura verifies a real ID **once**, mints a signed token, and then *forgets the ID*.
Apps never see identities. They ask the token-gateway yes/no questions and get
yes/no answers:

- `isHuman` — a verified human? true / false
- `over13` / `over18` — age band? true / false
- `region` — US / EU / etc. No city. No name. No document. Ever.

## The promise

- We never sell data.
- We never store raw ID. Raw documents are deleted **60 seconds** after a token is minted (see `services/vault/policies/retention.md`).
- Revoking a token needs no personal data — because we don't keep any.

## Layout

- `apps/` — verifier-app (the one-time check) and dashboard (revocations, not identities)
- `services/` — identity-core (the only place that ever touches real ID), token-gateway, vault, decoy-maze
- `packages/` — SDKs and shared token types
- `infra/` — terraform, k8s, signing-key rotation
- `docs/` — architecture, threat model, privacy promise, API
- `tests/` — unit, integration, and attack simulations

Part of the Nemyra family of systems.
