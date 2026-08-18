# Playwright Starter

This module is for learning Playwright test writing inside this framework repo.

## Run

```bash
npm run test:starter
```

Run with a visible browser:

```bash
npm run test:starter:headed
```

Open Playwright UI mode:

```bash
npm run test:ui
```

## What To Practice

- `basic-navigation.spec.ts`: page navigation, titles, headings, and links.
- `locators-and-assertions.spec.ts`: role-based locators and common assertions.
- `docs-page-object.spec.ts`: a small Page Object example for reusable test actions.

## Test Writing Pattern

```ts
import { expect, test } from '@playwright/test';

test('clear behavior name', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: /playwright/i })).toBeVisible();
});
```

Prefer user-facing locators such as `getByRole`, `getByLabel`, and `getByText`. They keep tests close to how a user experiences the page.
