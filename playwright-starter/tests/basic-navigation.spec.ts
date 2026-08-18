import { expect, test } from '@playwright/test';

test.describe('basic navigation', () => {
  test('opens the Playwright homepage', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Playwright/);
    await expect(page.getByRole('heading', { name: /playwright enables/i })).toBeVisible();
  });

  test('navigates from homepage to docs', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'Docs' }).click();

    await expect(page).toHaveURL(/.*\/docs\/intro/);
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
});
