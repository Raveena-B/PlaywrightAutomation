const{test,expect} = require('@playwright/test')

test('Built-inLocators' , async({page}) => {

    await page.goto("https://www.orivet.com/login")

    const logoImage = await page.getByAltText('dog-cat-img')
    await expect(logoImage).toBeVisible();

    
})