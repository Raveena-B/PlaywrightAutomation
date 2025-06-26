// @ts-check
import { test, expect } from '@playwright/test';


test('Login test with locators', async ({ page }) => {
  await page.goto('https://www.orivet.com/login');

  await page.click("//a[normalize-space()='Login']");
  await page.fill("input[id='email']", 'Charlie');
  await page.fill("input[id='password']", 'Charlie2017');
  await page.click("//button[normalize-space()='Login']");

  const logoutLink = page.locator("//button[normalize-space()='Logout']");
  await expect(logoutLink).toBeVisible();

  await page.close()
});
