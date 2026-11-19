import { sign, verify } from './keys';
import crypto from 'crypto';

// This is ALL a token ever contains. No name. No DOB. No ID number.
type IDLayerToken = {
  sub: string;          // random user id, like "usr_9f2k..."
  isHuman: true;        // we verified a real person once
  over13: boolean;      // true / false only
  over18: boolean;      // true / false only
  region: "US" | "EU" | "OTHER"; // coarse only, no city/state
  iat: number;          // issued at
  exp: number;          // expires, so stolen tokens die fast
  nonce: string;        // stops replay attacks
};

// STEP 1: Mint - happens ONCE, right after ID check
export async function mintToken(input: {
  realDateOfBirth: string; // only lives here for 1 second
  countryCode: string;
  livenessPassed: boolean;
}) {
  if (!input.livenessPassed) {
    throw new Error("Not a live human");
  }

  // Calculate ONLY the booleans, then throw the DOB away
  const age = calculateAge(input.realDateOfBirth);
  const over13 = age >= 13;
  const over18 = age >= 18;

  // Random ID, not linked to their real name anywhere
  const sub = "usr_" + crypto.randomBytes(16).toString("hex");

  const token: IDLayerToken = {
    sub,
    isHuman: true,
    over13,
    over18,
    region: mapRegion(input.countryCode),
    iat: Date.now(),
    exp: Date.now() + 1000 * 60 * 60 * 24 * 30, // 30 days, then re-verify
    nonce: crypto.randomBytes(16).toString("hex"),
  };

  // Sign it so apps can trust it, but can't fake it
  const signed = await sign(token);

  // *** THIS IS THE IMPORTANT PART ***
  // We never save realDateOfBirth. It dies here.
  // input.realDateOfBirth = undefined;

  return { token: signed, sub };
}

// STEP 2: Check - what Instagram / TikTok / any app calls
export async function checkToken(signedToken: string) {
  const decoded = await verify(signedToken);

  if (Date.now() > decoded.exp) {
    return { valid: false, reason: "expired" };
  }

  // App ONLY gets this back. Nothing else.
  return {
    valid: true,
    isHuman: decoded.isHuman,
    over13: decoded.over13,
    over18: decoded.over18,
    region: decoded.region,
    // NO name, NO birthday, NO ID number, NO photo
  };
}

// STEP 3: Revoke - if account is stolen / used for scams
export async function revokeToken(sub: string) {
  // We add sub to a blocklist. That's it.
  // We don't need to know WHO sub is to block them.
  await addToBlocklist(sub);
  return { revoked: true };
}

function calculateAge(dob: string) {
  const birth = new Date(dob);
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  if (now < new Date(now.getFullYear(), birth.getMonth(), birth.getDate())) {
    age--;
  }
  return age;
}

function mapRegion(code: string) {
  if (code === "US") return "US";
  if (["DE","FR","IT","ES"].includes(code)) return "EU";
  return "OTHER";
}
