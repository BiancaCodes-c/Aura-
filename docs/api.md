# API — token-gateway

All endpoints take an Aura token and return claims only.

- `checkHuman(token)` -> `{ verifiedHuman: boolean }`
- `checkAge(token)` -> `{ over13: boolean, over18: boolean }`
- `checkRegion(token)` -> `{ region: string }` (coarse: US / EU / ...)

SDK (JavaScript): `verifyUser(token) -> { isHuman, over13 }`
