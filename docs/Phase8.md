# Phase 8: Portfolio Polish & Deployment

## Objective
Deploy the application and finalize all GitHub documentation to serve as a professional QA/SDET portfolio piece.

## Scope
* Cloud deployment.
* CI/CD pipeline integration.
* Portfolio documentation.

## Features
* Live accessible project URL.
* Automated tests running in GitHub Actions.

## Learning Topics
* CI/CD concepts.
* Cloud hosting (Render/Heroku/Vercel).

## Frontend Work
* Environment variable configuration for production APIs.

## Backend Work
* PostgreSQL migration from SQLite. Production server setup (Gunicorn).

## Testing Activities
* Verify tests run successfully in the CI/CD pipeline against the deployed environment.

## API Activities
* Production endpoint verification.

## SQL Activities
* PostgreSQL setup and schema migration.

## Playwright Activities
* Configure Playwright to run in headless mode on GitHub Actions.

## Deliverables & GitHub Artifacts
* `.github/workflows/playwright.yml`.
* Thorough `README.md` explaining the testing methodology, architecture, and tech stack.

## Completion Criteria
* App is live.
* GitHub Actions automatically runs Playwright tests on push/pull requests.