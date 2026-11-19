# Redis — two jobs, both forgetful:
#  1. the blocklist (revoked subs)
#  2. the vault temp-store, every key written with TTL 60s

# TODO: managed Redis instance, encryption at rest, no persistence for the temp-store DB
