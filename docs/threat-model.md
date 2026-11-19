# Threat model

## Assets
- Raw identity documents (exist for seconds, in memory, in identity-core only)
- Signing keys (private key compromise = forged tokens; mitigated by rotation)
- The revocation list and token integrity

## Attackers
- Bots mass-creating accounts (decoy-maze, rate limits, liveness)
- Token thieves replaying someone else's token (short TTL, revocation)
- Forgers minting fake tokens (signature verification, key rotation)
- Insiders / breaches after the fact (nothing stored = nothing to steal)

## Simulations
See `tests/attack-sim/` — steal an ID, fake a token, replay a token.
