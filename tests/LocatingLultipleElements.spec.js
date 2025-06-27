const {test,expect} = require('@playwright/test')

test('LocateMultipleElements',async ({page})=>{
    
    await page.goto('https://www.orivet.com/')

   const product =  await page.$$("xpath=//body/div[contains(@class,'p-140pt lg:p-216pt')]/div[@class='relative']/div[@class='opacity-100 transition-opacity duration-500']/div[@class='pt-10 lg:px-0 px-3 w-full max-w-/div[2]")

   for(const product of product)
   {
    const productName = await product.textContent();
    console.log(productName)

   }
})