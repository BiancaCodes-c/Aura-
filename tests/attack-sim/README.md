# Attack simulations

Prove the design by attacking it:

1. **Steal an ID** — breach the vault after minting. Expected: nothing there.
2. **Fake a token** — forge a signature. Expected: gateway rejects it.
3. **Replay a token** — reuse a captured token after expiry or revocation.
   Expected: rejected, and the attempt is logged.
