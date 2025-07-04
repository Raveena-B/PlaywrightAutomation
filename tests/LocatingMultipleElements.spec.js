const { test, expect } = require('@playwright/test');

test('Get multiple elements using XPath', async ({ page }) => {
  await page.goto('https://www.orivet.com/');

  // Use XPath to select all matching elements
  const elements = await page.$$('xpath=//div[contains(@class,"p-140pt")]/div[@class="relative"]//div[contains(@class,"max-w-")]/div[2]');

  console.log(`Found ${elements.length} elements`);

  for (const [index, element] of elements.entries()) {
    const text = await element.textContent();
    console.log(`Element ${index + 1}:`, text?.trim());
  }
});

