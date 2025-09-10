# Contributing to BidRally

Thank you for your interest in contributing!  
This document explains how to set up the project, run tests, and follow coding standards.

---

## Development Setup

1. Fork and clone the repository:
   ```bash
   git clone https://github.com/Torehirth/Bid-Rally.git
   cd bid-rally
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example` and add your Noroff API v2 credentials.

4. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at http://localhost:5173.

## Available Scripts

### Development

- `npm run dev` – Start the development server
- `npm run build` – Build for production
- `npm run preview` – Preview the production build locally

### Testing

- `npm run unit` – Run unit tests with Vitest
- `npm run unit:ui` – Run unit tests with Vitest UI
- `npm run e2e` – Run end-to-end tests with Playwright
- `npm run e2e:ui` – Run Playwright with UI
- `npm run e2e:headed` – Run Playwright in headed mode
- `npm run e2e:debug` – Debug Playwright tests

### Code Quality

- `npm run lint` – Run ESLint
- `npm run lint:fix` – Fix linting issues automatically
- `npm run format` – Format code with Prettier
- `npm run prepare` – Set up Husky git hooks

### Coding Standards

- Use ESLint and Prettier for code formatting.
- Husky runs pre-commit hooks to ensure clean commits.
- Keep commits small and descriptive (e.g., feat: add bidding form validation).

## Branching & Pull Requests

1. Create a new branch from main:

```bash
git checkout -b feature/my-new-feature
```

2. Make your changes and commit:

```bash
git commit -m "feat: add my new feature"
```

3. Push to your fork:

```bash
git push origin feature/my-new-feature
```

4. Open a pull request against the `main` branch.

## Deployment

- The project is deployed automatically to GitHub Pages via GitHub Actions.
- Every push to main triggers:
  - Linting and tests
  - Production build
  - Deployment to GitHub Pages

## License

This project is for educational purposes as part of the Noroff Front-End Development course.
