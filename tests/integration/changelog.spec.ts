describe('Home', () => {
    beforeAll(async () => {
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
        console.log("Navigating to page");
        await page.goto('http://localhost:8080');
        console.log("Navigated to page");
    });
    it('should have changelog link"', async () => {
        const element = await page.$('[href="#/Changelog"]');
        await expect(page.evaluate(element => element, element)).resolves.toBeTruthy();
    });
    it('should navigate to changelog page', async () => {
        const element = await page.$('[href="#/Changelog"]');
        await element.click();
        const blogsView = await page.waitForSelector('changelog');
        await expect(page.evaluate(element => element, blogsView)).resolves.toBeTruthy();
    });

});