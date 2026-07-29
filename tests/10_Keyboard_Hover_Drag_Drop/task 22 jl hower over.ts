import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Hover over the Add On and Find All menu optins and click on the wifi', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu#');
    await page.getByTestId("nav-add-ons").hover();
    await page.getByTestId('test-id-Wifi').click();

    const allsubmenu: Locator[] = await page.locator('[data-testid="nav-add-ons"] .submenu a').all();
    console.log('Total Number of Submenu: ' + allsubmenu.length);

    for (const item of allsubmenu) {
        const text = await item.innerText();
        console.log('Submenu item: ' + text);
    }
    await page.pause();

});