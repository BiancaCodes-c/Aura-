# API

## POST /v1/check
Body: `{ "token": "..." }`
Returns claims only: `{ valid, isHuman, over13, over18, region }`

## POST /v1/check-code
Body: `{ "code": "123456" }` — for games, Discord, TV. The code burns on use.
Returns the same AuraResult.

## OIDC
Aura speaks OpenID Connect, so platforms can add it like "Sign in with Google" —
except the claims are proof (isHuman, over13, over18, region), never a profile.

## SDKs
- JS: `new Aura(apiKey).check(token)` / `.checkCode(code)` / `.button()`
- React: `<AuraButton onVerified={...} />`
- Python: `Aura(api_key).check(token)`
- Unity, Discord, iOS, Android: see `packages/`
