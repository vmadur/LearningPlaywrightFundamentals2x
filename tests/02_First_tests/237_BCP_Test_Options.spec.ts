import { test, expect } from '@playwright/test';

test('context with options', async ({ browser }) => {
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 },
        locale: 'fr-FR',
        timezoneId: 'Europe/Paris',
        geolocation: { latitude: 48.8566, longitude: 2.3522 },
        permissions: ['geolocation'],
    });
    const page = await context.newPage();
    await page.goto('https://app.vwo.com/#login');
    await context.close();

});

test('mobile context', async ({ browser }) => {
    const iPhone = {
        viewport: { width: 375, height: 667 },
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)',
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
    };
    const context = await browser.newContext(iPhone);
    const page = await context.newPage();
    await page.goto("https://app.vwo.com/#login");
    await context.close();
});
//WORKING FINE

// * TASK FOR JULY 6, 2026 //*

/*
Browser 
Context - 1 - https://app.thetestingacademy.com/playwright/ttacart/
Context - 2 → https://tta-bank-digital-973242068062.us-west1.run.app/
*/

//import { test, expect } from '@playwright/test';

test("Open Pages in seperate contexts", async ({ browser }) => {
    let ttaCartContext = await browser.newContext();
    let ttaCartPage = await ttaCartContext.newPage();
    await ttaCartPage.goto("https://app.thetestingacademy.com/playwright/ttacart/")
    console.log("Title: " + await ttaCartPage.title())
    await expect(ttaCartPage).toHaveTitle('TTACart - Login');

    let ttaBankContext = await browser.newContext();
    let ttaBankPage = await ttaBankContext.newPage();
    await ttaBankPage.goto("https://tta-bank-digital-973242068062.us-west1.run.app/")
    console.log("Title: " + await ttaBankPage.title());
    await expect(ttaBankPage).toHaveTitle(/TTA Bank/);

    await ttaBankContext.close();
    await ttaCartContext.close();
});