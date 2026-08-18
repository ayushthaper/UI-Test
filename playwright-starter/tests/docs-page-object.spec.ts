import { test } from '@playwright/test';
import { PlaywrightDocsPage } from '../pages/PlaywrightDocsPage';

test.describe('page object example', () => {
  test('opens docs using reusable page actions', async ({ page }) => {
    const docsPage = new PlaywrightDocsPage(page);

    await docsPage.openHomePage();
    await docsPage.expectHomePageLoaded();
    await docsPage.openDocs();
    await docsPage.expectDocsPageLoaded();
  });
});
