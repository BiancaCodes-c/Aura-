// oidc.ts — OIDC adapter: speaks the "Sign in with Google" language,
// so platforms can adopt Aura like any other identity provider —
// except this provider hands back proof, not profiles.

export const oidcDiscovery = {
  // TODO: /.well-known/openid-configuration pointing at gateway endpoints
  // Claims exposed: isHuman, over13, over18, region. Nothing else exists to expose.
};
