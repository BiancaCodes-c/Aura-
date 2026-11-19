# Retention policy — the vault holds NOTHING long-term

- **Raw ID material is deleted 60 seconds after a token is minted.** No exceptions.
- The vault stores no names, no document images, no birthdates, no selfies.
- What may persist: token ids (for revocation), coarse claims, and audit
  metadata that contains no personal data.
- Deletion is verified, not assumed: every mint writes a deletion receipt
  (token id + timestamp) to the audit log.
