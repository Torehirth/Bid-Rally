# Auction Website

A modern auction platform where users can create listings, place bids, and manage their profiles. Built with Vite and vanilla JavaScript using the Noroff API for backend functionality.

## Features

### User Authentication

- User registration (stud.noroff.no email required)
- User login (with JWT) and logout
- Profile avatar updates
- Credit balance viewing

### Auction Functionality

- Create listings with title, description, deadline, and media gallery
- Place bids on other users' listings
- View all bids made on listings
- Search through available listings (also available to unregistered users)

### Additional Features

- Responsive design with Tailwind CSS
- Real-time bid updates
- User-friendly interface
- Form validation and error handling

## Prerequisites

- Node.js (v20+)
- npm or yarn
- A stud.noroff.no email address for registration

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone [your-repo-url]
cd auction-website
```

2. Install dependencies:

```bash
npm install
```

### Running the project

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Running tests

Run the test suite with Vitest:

```bash
npm run test
```

For watch mode during development:

```bash
npm run test:watch
```

## Environment Variables

Create a `.env` file in the root directory:

```bash
VITE_API_BASE_URL=https://v2.api.noroff.dev
VITE_API_KEY=your-api-key-here
```

> **Note**: The Noroff API key will be provided by your course instructor.

## Available Scripts

- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run test` - Run tests with Vitest
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run prepare` - Set up Husky git hooks

## Technologies

- **Frontend Framework**: Vite
- **Styling**: Tailwind CSS
- **JavaScript**: Vanilla JavaScript (ES6+)
- **Testing**: Vitest
- **Linting**: ESLint
- **Formatting**: Prettier
- **Git Hooks**: Husky
- **API**: Noroff API v2
- **Deployment**: GitHub Pages

## API Documentation

This project uses the Noroff API v2. Key endpoints include:

- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /auction/listings` - Get all listings
- `POST /auction/listings` - Create a new listing
- `POST /auction/listings/{id}/bids` - Place a bid

> For complete API documentation, refer to the Noroff API documentation provided in your course materials.

## Development Workflow

This project uses GitHub Actions for CI/CD and Husky for pre-commit hooks:

- **Pre-commit**: Runs linting and formatting checks
- **CI/CD**: Automated testing and deployment to GitHub Pages
- **Branch protection**: Ensures tests pass before merging

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Ensure tests pass: `npm run test`
4. Ensure linting passes: `npm run lint`
5. Create a pull request

## Deployment

The application is automatically deployed to GitHub Pages when changes are pushed to the `main` branch using GitHub Actions.

### Initial Setup (One-time only)

To enable GitHub Pages for your repository:

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The workflow file (`.github/workflows/deploy.yml`) handles the rest automatically

### Automatic Deployment

Once set up, every push to the `main` branch will:

- Automatically run tests
- Build the project
- Deploy to GitHub Pages
- Make your site available at `https://[username].github.io/[repository-name]`

## License

This project is created for educational purposes as part of the Noroff Front-End Development course.

## Author

[Tore Hirth](https://github.com/Torehirth)
