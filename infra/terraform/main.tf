# Aura infrastructure — cluster + namespaces.
# The shape enforces the promise: core isolated, gateway public, decoys watching.

terraform {
  required_version = ">= 1.5"
}

# TODO: provider + cluster (see cluster.tf), Redis (see redis.tf)
