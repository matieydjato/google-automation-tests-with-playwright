import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://google.com');
});

test('Lunch Google', async ({page}) => {
    await expect(page).toHaveTitle(/Google/);
});

test('Search Microsoft', async ({page}) => {
    const text = 'Microsoft Corporation est une multinationale informatique';
    const searchInput = page.getByRole('combobox');
    await searchInput.fill('Microsoft');
    await searchInput.press('Enter');
    await expect(page.getByText(text)).toBeVisible();
});