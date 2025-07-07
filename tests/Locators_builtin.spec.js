const{test,expect} = require('@playwright/test')

test('Built-inLocators' , async({page}) => {

    await page.goto("https://www.orivet.com/login")


    //getByAltText() - 
    const logoImage = await page.getByAltText('dog-cat-img')
    await expect(logoImage).toBeVisible();

    //getByPlaceholder()
    await page.getByPlaceholder("Username").fill("Charlie")
    await page.getByPlaceholder("Password").fill("Charlie2017")

    //getByRole() - to locate implicit and explicit attributes
    
})