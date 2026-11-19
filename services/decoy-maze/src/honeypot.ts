// honeypot.ts — fake endpoints: /v1/admin, /v1/users, /v1/ids.
// They look like the crown jewels. They hold nothing real.
// Anything that touches them is, by definition, not a real client.

export const HONEYPOT_PATHS = ["/v1/admin", "/v1/users", "/v1/ids"];

export function registerHoneypots(): string[] {
  // TODO: mount the fake routes with convincing, endless fake data
  return HONEYPOT_PATHS;
}
