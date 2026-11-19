# Threat model — "what if we're hacked? nothing to steal"

## Assets
- Raw identity documents — exist for seconds, in memory + 60s-TTL temp-store, in identity-core only
- Ed25519 signing keys — rotated every 24h; compromise window is one day of tokens, revocable by sub
- The blocklist and token integrity

## Attackers
- Bots mass-creating accounts -> liveness, decoy-maze, 5-hit auto-ban
- Token thieves -> 30-day expiry, nonce, revocation by sub
- Forgers -> Ed25519 signatures, gateway verification
- Breachers after the fact -> nothing stored = nothing to steal

## Simulations
See `tests/attack-sim/` — steal an ID, forge a token, replay a token, walk into the honeypot.
