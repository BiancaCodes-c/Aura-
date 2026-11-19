# Integration guide — add Aura in 5 minutes

1. Get an API key (you're the caller — the key identifies YOUR app, never the user).
2. Install the SDK: `npm i @aura/sdk` / `pip install aura-sdk`.
3. Drop in the button: `<AuraButton onVerified={...} />` or `aura.button()`.
4. On your server, call `check(token)` and read the booleans.
5. That's it. You never touch an ID, a birthdate, or a photo — so you never hold the liability either.

No browser? (games, Discord, TV) Use the code flow: `checkCode(code)` — 6 digits, 60 seconds, burns on use.
