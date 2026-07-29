import { test, expect, Locator } from '@playwright/test';
const URL = "https://www.flipkart.com/search";

test.describe('Find the lowest Price of product search', () => {

    test.beforeEach(async ({ page }) => {
        console.log("Befor running each TC")
        await page.goto(URL);
    })
    test('TC #1 verify the lowestPrice', async ({ page }) => {
        await page.locator('input[name="q"]').fill("macmini");
        const svgElements: Locator = page.locator('svg');
        await svgElements.first().click();
        await page.waitForTimeout(2000);
        const titleResults: Locator = page.locator("//div[contains(@data-id,'CPU') or contains(@data-id,'ACC') or contains(@data-id,'COM') or contains(@data-id,'MP')]/div/a[2]");
        console.log("count:", await titleResults.count());

        for (const titleResult of await titleResults.all()) {
            console.log("Title:", await titleResult.textContent());
        }
        await page.pause();
        const prices: Locator[] = await page.locator('//div[@data-id]/div/a[3]/div/div[1]').all();
        //const prices:Locator[] = await page.locator('//div[@data-id]/child::div/a[3]').all();
        console.log("Prices:" + prices.length);
        const amounts: number[] = [];
        for (const price of prices) {
            const priceValue = await price.innerText();
            const amount = Number(priceValue.replace(/[^0-9]/g, ''));
            if (amount > 0) amounts.push(amount);

        }
        console.log("FinalPrice:", amounts)
        amounts.sort((a, b) => a - b);
        console.log('Lowest price:', amounts[0]);

    })

});
