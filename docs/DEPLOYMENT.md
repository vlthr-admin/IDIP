# Deployment Runbook — GitHub, Vercel and Supabase

## Prerequisites
Use a dedicated Supabase project for IDIP. Do not target the existing shared VLTHR Lab project. Vercel must be connected to this GitHub repository. Use Node.js 20+ and the Supabase CLI for migration testing.

## GitHub
Protect the production branch and require CI checks. Add a production environment with reviewer approval where supported. Configure deployment secrets only after the target database is isolated and migration review passes. Never commit Supabase service-role keys or Financial Datasets credentials.

## Supabase
1. Create a dedicated project and confirm region/data-residency requirements.
2. Configure project URL and anon/publishable key in Vercel.
3. Keep service-role credentials server-only.
4. Test migrations against a disposable database before production.
5. Run RLS negative tests across at least two organization contexts.
6. Configure Auth redirect URLs for local, preview and production domains.
7. Configure private Storage buckets only when evidence/document upload is implemented.

The current SQL migration is a draft targeting the public schema. It is not approved for deployment. Review and test it in a dedicated IDIP project first.

## Vercel
Import vlthr-admin/IDIP. Use repository root as project root, build command npm run build and install command npm install. Configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY. Add server-only secrets only when required. Set production branch to main and enable preview deployments for pull requests. Verify build logs and production health.

## Deployment separation
GitHub push/PR triggers Vercel preview builds after project linkage. Merge to main triggers production deployment. Supabase migrations do not run because Vercel built; they require a separate reviewed deployment workflow. Do not enable automatic migration deployment until the migration is validated and production environment protection is configured.

## Rollback
Web rollback uses a prior known-good Vercel deployment. Database recovery uses a tested backup restore or forward corrective migration. Confirm backup/PITR availability before production migration.

This runbook is a plan, not evidence of deployment.
