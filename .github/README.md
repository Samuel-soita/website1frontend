# GitHub Repository Setup

This repository is set up with CI/CD pipelines and branch protection for the SMIRROR Solutions frontend.

## Repository Structure

- **Main Branch**: Production-ready code (auto-deploys to production)
- **Development Branch**: Integration branch for features (auto-deploys to development/preview)
- **Feature Branches**: Individual feature development

## CI/CD Pipeline

### Automatic Workflows

1. **On Pull Request**:
   - Runs linter
   - Type checks code
   - Builds application
   - Creates preview deployment

2. **On Push to `development`**:
   - Runs all checks
   - Builds application
   - Deploys to development environment (Vercel preview)

3. **On Push to `main`**:
   - Runs all checks and tests
   - Builds application
   - Deploys to production environment (Vercel production)

### Manual Deploy

You can trigger manual deployments from the GitHub Actions tab:
- Go to Actions → Manual Deploy
- Select environment (development/production)
- Select branch
- Run workflow

## Required GitHub Secrets

For Vercel deployment, add these secrets in GitHub Settings → Secrets:

- `VERCEL_TOKEN` - Vercel access token
- `VERCEL_ORG_ID` - Vercel organization ID
- `VERCEL_PROJECT_ID` - Vercel project ID

### How to get Vercel secrets:

1. **VERCEL_TOKEN**:
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login and get token
   vercel login
   vercel link
   ```

2. **VERCEL_ORG_ID** and **VERCEL_PROJECT_ID**:
   - Found in `.vercel/project.json` after linking
   - Or in Vercel dashboard → Project Settings → General

## Branch Protection Rules

### Main Branch (Production)
- ✅ Require pull request reviews (minimum 1 approval)
- ✅ Require status checks to pass before merging
- ✅ Require branches to be up to date
- ✅ Include administrators

### Development Branch
- ✅ Require pull request reviews (minimum 1 approval)
- ✅ Require status checks to pass before merging
- ✅ Require branches to be up to date

## Workflow

1. Create feature branch from `development`
2. Make changes and push
3. Create Pull Request to `development`
4. Wait for CI checks to pass
5. Get code review approval
6. Merge to `development` (triggers development deployment)
7. When ready, create PR from `development` to `main`
8. Merge to `main` (triggers production deployment)

## Local Development

```bash
# Clone repository
git clone git@github.com:Samuel-soita/website1frontend.git
cd website1frontend

# Install dependencies
npm install

# Run development server
npm run dev

# Create feature branch
git checkout development
git pull origin development
git checkout -b feature/your-feature-name
```

## Troubleshooting

### CI/CD Pipeline Failing

1. Check Actions tab for error details
2. Verify Node.js version (should be 20)
3. Ensure all dependencies are in package-lock.json
4. Check build errors in workflow logs

### Deployment Issues

1. Verify Vercel secrets are set correctly
2. Check Vercel project is linked
3. Verify branch name matches workflow conditions
4. Check Vercel dashboard for deployment logs

## Support

For issues or questions, contact the development team or create an issue in this repository.
