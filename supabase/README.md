# Supabase Database Assets — Draft Only

The SQL migration and seed from the initial implementation package are intentionally not deployed.

## Blocking issues
- The migration targets the public schema.
- The connected Supabase project currently available for VLTHR Lab is shared with other VLTHR OS workloads.
- The migration has not been executed against a disposable database or passed SQL/RLS review.
- The supplied automatic migration workflow is not enabled in this repository.

## Required before deployment
1. Provision a dedicated IDIP Supabase project or explicitly approve a rigorously isolated schema design.
2. Review every table, foreign key, trigger, function, RLS policy and grant.
3. Verify tenant isolation and cross-organization negative cases.
4. Test clean install and upgrade against disposable database.
5. Confirm backup/PITR and rollback approach.
6. Require production environment approval before any production migration.

Do not run db push against the shared VLTHR Lab Supabase project.
