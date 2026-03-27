import { test, expect } from '@playwright/test';

test('Google Search', async ({ page }) => {
  // Navigate to Google
  await page.goto('https://www.google.com');
    // Accept cookies if the prompt appears 
    const acceptButton = page.locator('button', { hasText: 'I agree' });
    if (await acceptButton.isVisible()) {
        await acceptButton.click();
    }

    // Type "Playwright" into the search box and press Enter
    await page.locator('[name="q"]').fill('Playwright');
    await page.locator('[name="q"]').press('Enter');
    // Wait for the search results to load and display the results
    await expect(page.getByText('Playwright: Fast and reliable end-to-end testing for modern web apps')).toBeVisible(); 
});

