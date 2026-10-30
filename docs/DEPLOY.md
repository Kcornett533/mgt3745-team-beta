# Deployment Runbook (docs/DEPLOY.md)

This runbook documents how the Cloudflare Worker and D1 relational database are deployed from a clean checkout, which secrets exist, and how edge validation is configured.

## 1. Prerequisites

- Node.js (v18.0.0 or later)
- npm (v9.0.0 or later)
- Cloudflare Wrangler CLI authenticated to an active Cloudflare account:
```bash
npm install -g wrangler
wrangler login
```

## 2. Local Environment Setup & Verification

1. Clone the repository and navigate into the root directory:
```bash
git clone https://github.com/Kcornett533/mgt3745-team-beta.git
cd mgt3745-team-beta
```

2. Install dependencies:
```bash
npm install
```

3. Execute the automated test suite locally to verify candidate screening logic passes:
```bash
npm test
```

## 3. D1 Relational Database Provisioning

1. Provision the relational D1 database instance on Cloudflare:
```bash
wrangler d1 create mgt3745-dev
```

2. Verify that the output `database_id` matches the database configuration in `wrangler.toml`:
```toml
[[d1_databases]]
binding = "DB"
database_name = "mgt3745-dev"
database_id = "<your-new-database-id-here>"
```

3. Execute the schema migration against the Cloudflare D1 database to create the `candidates` table:
```bash
wrangler d1 execute mgt3745-dev --remote --file=./schema.sql
```

4. Populate baseline synthetic candidate records for evaluation testing:
```bash
npx wrangler d1 execute mgt3745-dev --remote --file=./seed.sql
```

## 4. Edge Worker Deployment

Deploy the unified static client assets and edge screening API to Cloudflare Workers:
```bash
wrangler deploy
```

Following successful deployment, the application is live at the production Worker URL:
`https://team-beta-screening.kdotll.workers.dev`

## 5. Secrets, Sensitive Data, and AI Gateway Configuration
- **Secrets & Credentials:** No private credentials, account tokens, or client secrets are committed to source control or exposed in client assets. Cloudflare authentication is maintained strictly at the CLI/dashboard level.
- **Resource Identifiers:** The non-sensitive database binding name (`DB`) and database UUID are declared in `wrangler.toml`.
- **Model Configuration / AI Gateway:** The core knockout screening engine (`eligibility.js`) uses deterministic algorithmic evaluation rules. The production screening pipeline does not invoke an external LLM endpoint or Cloudflare AI Gateway during runtime evaluation.