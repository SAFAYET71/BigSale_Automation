import { test as setup, expect } from '@playwright/test';

setup('authenticate', async ({ page }) => {

  await page.goto('auth/login');

  await page.fill('input[type="email"]', '63oasietoq@bwmyga.com');
  await page.fill('input[type="password"]', 'Pa$$w0rd!');

  await page.click('button:has-text("Login")');

  await page.waitForURL('**/');

  await page.context().storageState({ path: 'storageState.json' });

});