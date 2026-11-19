# Retention policy — we keep nothing longer than 60s

- **Raw ID material lives at most 60 seconds**, in the encrypted temp-store,
  and is dropped the moment a token is minted.
- The vault stores no names, no document images, no birthdates, no selfies. Ever.
- What may persist: token ids (for revocation), coarse claims, and audit
  metadata that contains no personal data.
- Deletion is verified, not assumed: every mint writes a deletion receipt
  (token id + timestamp) to the audit log.
