# playwright-automation

End-to-end test automation using [Playwright](https://playwright.dev).

---

## Prerequisites

Before getting started, make sure you have the following installed:

### 1. Node.js (v18 or higher)

Playwright requires Node.js 18+. Check your current version:

```bash
node --version
```

**Install or upgrade Node.js:**

- **Option A — Download directly:** https://nodejs.org (choose LTS)
- **Option B — Using winget (Windows):**
  ```bash
  winget install OpenJS.NodeJS.LTS
  ```
- **Option C — Using nvm-windows:**
  ```bash
  nvm install 22
  nvm use 22
  ```
  > Download nvm-windows from: https://github.com/coreybutler/nvm-windows/releases

### 2. Git

Check if Git is installed:

```bash
git --version
```

Download from: https://git-scm.com

### 3. A code editor

[VS Code](https://code.visualstudio.com) is recommended. Install the **Playwright Test for VSCode** extension for best experience.

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Suphakorn95/playwright-automation.git
cd playwright-automation
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

This downloads Chromium, Firefox, and WebKit browsers used for testing.

---

## Running Tests

**Run all tests:**

```bash
npx playwright test
```

**Run tests in a specific browser:**

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

**Run a specific test file:**

```bash
npx playwright test tests/example.spec.ts
```

**Run tests in headed mode (see the browser):**

```bash
npx playwright test --headed
```

**Run tests in UI mode (interactive):**

```bash
npx playwright test --ui
```

---

## View Test Report

After running tests, open the HTML report:

```bash
npx playwright show-report
```

---

## GitHub Actions CI

A workflow is already configured at [.github/workflows/playwright.yml](.github/workflows/playwright.yml).

**It runs automatically on:**
- Every push to `main` or `master`
- Every pull request targeting `main` or `master`

**What the workflow does:**
1. Checks out the code
2. Sets up Node.js 22
3. Installs dependencies via `npm ci`
4. Installs Playwright browsers (`--with-deps` includes OS-level dependencies)
5. Runs all Playwright tests
6. Uploads the HTML report as a downloadable artifact (kept for 30 days)

**To view test results after a run:**
1. Go to your repository on GitHub
2. Click **Actions** tab
3. Select a workflow run
4. Download the `playwright-report` artifact at the bottom of the page

**To trigger a run manually:**

Add `workflow_dispatch` to the workflow trigger, or push any commit to `main`.

---

## Project Structure

```
playwright-automation/
├── .github/
│   └── workflows/
│       └── playwright.yml  # GitHub Actions CI workflow
├── tests/                  # Test files (.spec.ts)
│   └── example.spec.ts
├── playwright.config.ts    # Playwright configuration
├── package.json
└── README.md
```
