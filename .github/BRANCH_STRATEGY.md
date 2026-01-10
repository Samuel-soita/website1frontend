# Branch Strategy

This repository follows a Git Flow branching strategy with the following branches:

## Main Branches

### `main` (Production)
- **Purpose**: Production-ready code
- **Protection**: Fully protected, requires PR and approvals
- **Deployment**: Auto-deploys to production on push
- **Merge**: Only from `development` via Pull Request

### `development` (Staging/Development)
- **Purpose**: Integration branch for features
- **Protection**: Protected from direct pushes
- **Deployment**: Auto-deploys to development/preview environment
- **Merge**: From feature branches via Pull Request

## Feature Branches

### Naming Convention
- `feature/description` - New features
- `bugfix/description` - Bug fixes
- `hotfix/description` - Critical production fixes
- `refactor/description` - Code refactoring
- `docs/description` - Documentation updates

### Examples:
- `feature/add-contact-form`
- `bugfix/fix-hydration-error`
- `hotfix/fix-login-issue`
- `refactor/improve-components`
- `docs/update-readme`

## Workflow

### Creating a Feature Branch

1. Start from `development`:
   ```bash
   git checkout development
   git pull origin development
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit:
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

3. Push to remote:
   ```bash
   git push origin feature/your-feature-name
   ```

### Creating a Pull Request

1. Push your feature branch to remote
2. Create a Pull Request on GitHub:
   - From: `feature/your-feature-name`
   - To: `development` (for features)
   - To: `main` (only for hotfixes or releases)

3. Wait for CI/CD pipeline to run and pass
4. Get code review approval
5. Merge PR (squash and merge recommended)

### Merging to Production

1. Create PR from `development` to `main`
2. Get approvals and ensure all tests pass
3. Merge to `main`
4. Production deployment triggers automatically

## Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:
- `feat: add contact form submission`
- `fix: resolve hydration mismatch error`
- `docs: update API documentation`
- `refactor: improve component structure`

## Branch Protection Rules

### Main Branch
- ✅ Require pull request reviews (minimum 1 approval)
- ✅ Require status checks to pass
- ✅ Require branches to be up to date
- ✅ Include administrators
- ✅ Restrict pushes that create files larger than 100 MB

### Development Branch
- ✅ Require pull request reviews (minimum 1 approval)
- ✅ Require status checks to pass
- ✅ Require branches to be up to date
- ✅ Allow force pushes (for development flexibility)
- ❌ Do not include administrators (admin can override)

## CI/CD Pipeline

### Automatic Checks on PR:
1. Lint code
2. Type check
3. Build application
4. Run tests (if any)

### Automatic Deployment:
- **Push to `development`** → Deploy to development environment
- **Push to `main`** → Deploy to production environment
- **Pull Request** → Create preview deployment

## Hotfix Workflow

For critical production fixes:

1. Create hotfix branch from `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b hotfix/critical-fix
   ```

2. Make fix and commit:
   ```bash
   git add .
   git commit -m "fix: critical production issue"
   git push origin hotfix/critical-fix
   ```

3. Create PR to `main` (bypass development)
4. After merge, also merge `main` back to `development`

## Release Workflow

1. Merge all features from `development` to `main`
2. Tag release: `git tag -a v1.0.0 -m "Release version 1.0.0"`
3. Push tag: `git push origin v1.0.0`
4. Production deployment happens automatically
