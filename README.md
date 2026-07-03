# Learning Playwright Fundamentals 2x

A starter project for learning Microsoft Playwright end-to-end testing, built as part of **The Testing Academy** course.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)

## Setup

```bash
npm install
```

## Running Tests

```bash
npx playwright test
```

To run tests in a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

To open the HTML report after a run:

```bash
npx playwright show-report
```

## Project Structure

```
├── tests/          # Test spec files
├── pages/          # Page Object Model classes
├── fixtures/       # Custom Playwright fixtures
├── utils/          # Utility/helper functions
├── data/           # Test data (JSON, CSV, etc.)
└── playwright.config.ts  # Playwright configuration
```

## Browsers

Tests run across Chromium, Firefox, and WebKit (Desktop) by default. Configuration is managed in `playwright.config.ts`.
