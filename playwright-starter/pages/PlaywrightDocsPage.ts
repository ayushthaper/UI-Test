import { expect, type Page } from '@playwright/test';

export class PlaywrightDocsPage {
  constructor(private readonly page: Page) {}

  async openHomePage() {
    await this.page.goto('/');
  }

  async openDocs() {
    await this.page.getByRole('link', { name: 'Docs' }).click();
  }

  async expectHomePageLoaded() {
    await expect(this.page).toHaveTitle(/Playwright/);
    await expect(this.page.getByRole('link', { name: 'Docs' })).toBeVisible();
  }

  async expectDocsPageLoaded() {
    await expect(this.page).toHaveURL(/.*\/docs\/intro/);
    await expect(this.page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  }
}
