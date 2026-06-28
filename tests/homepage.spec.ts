import { expect, test } from '@playwright/test';

test('Playwright homepage has a docs link', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Playwright/);
  await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
});

test('Playwright homepage exposes important navigation links', async ({ page }) => {
  await page.goto('/');

  const docsLink = page.getByRole('link', { name: 'Docs' });
  const apiLink = page.getByRole('link', { name: 'API' });
  const testRunnerHeading = page.getByText('Playwright Test');
  const navbar = page.locator('nav');

  await expect(navbar).toBeVisible();
  await expect(docsLink).toBeVisible();
  await expect(apiLink).toBeVisible();
  await expect(testRunnerHeading).toBeVisible();
});

test('user can open the docs page from the homepage', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Docs' }).click();

  await expect(page).toHaveURL(/.*\/docs\/intro/);
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
