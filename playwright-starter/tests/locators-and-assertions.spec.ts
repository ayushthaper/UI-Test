import { expect, test } from '@playwright/test';

test.describe('locators and assertions', () => {
  test('checks important navigation items', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('nav')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'API' })).toBeVisible();
    await expect(page.getByRole('button', { name: /search/i })).toBeVisible();
  });

  test('search input can be opened from the keyboard shortcut label', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: /search/i }).click();

    await expect(page.getByRole('searchbox', { name: /search/i })).toBeVisible();
  });
});
