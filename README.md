# Aura
> Aura doesn't hold your data. It holds your proof.

Verify once. Get a token that says: human, over13, over18. Apps check the token. No one ever sees your ID.

- Identity Core: verifies once, deletes ID in 60s, mints token
- Token Gateway: public, answers yes/no only
- Code Service: 6-digit codes for games / Discord / TV
- Decoy Maze: honeypots for bots
- SDKs: JS, React, Python, Unity, Discord, iOS, Android

## Quick Start
```bash
kubectl apply -f infra/k8s/namespaces/
kubectl apply -f infra/k8s/deployments/
kubectl apply -f infra/k8s/services/
kubectl apply -f infra/k8s/ingress/
```

## How an app uses Aura
```ts
import { Aura } from '@aura/sdk';
const aura = new Aura(process.env.AURA_API_KEY);
const user = await aura.check(userAuraToken);
if (!user.over13) block();
```
