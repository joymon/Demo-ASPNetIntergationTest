describe('Home', () => {
    beforeAll(async () => {
        //await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
    });

    it('should be titled "Joymon Online"', async () => {
        
        console.log("Navigating to page");
        await page.goto('http://localhost:8080');
        console.log("Navigated to page");
        await expect(page.title()).resolves.toMatch('Joymon Online');
        //await page.waitFor(1000);
    });
});