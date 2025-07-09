const { test, expect } = require('@playwright/test');

test('Built-inLocators', async ({ page }) => {
  await page.goto("https://www.orivet.com/login");

  // Click on the popup icon to close
  await page.locator('.w-10.h-10').click();

  // Optional: wait if DOM changes after popup
  await page.waitForTimeout(500);

  // getByAltText() - Confirm logo is visible
  const logoImage = page.getByAltText('dog-cat-img');
  await expect(logoImage).toBeVisible();

  // getByPlaceholder()
  //   await page.getByPlaceholder('Username').fill("Charlie")
  //   await page.getByPlaceholder('Password').fill("Charlie2017")

  // Use input field IDs instead of placeholders
  await page.locator('#email').fill('charlie');
  await page.locator('#password').fill('Charlie2017');

  // Submit the form
  await page.getByRole('button', { name: 'Login' }).click(); // we can use the type as submit as well

  const name = await page.locator("//h1[normalize-space()='Welcome Geroge SofronidisS5555']").textContent()
  await expect(page.getByText(name)).toBeVisible()

});
