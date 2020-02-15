describe('Home', () => {
    beforeAll(async () => {
        //await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');

        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
        console.log("Navigating to page");
        await page.goto('http://localhost:8080');
        console.log("Navigated to page");
    });
    it('should have Links link"', async () => {
        const element = await page.$('[href="#/Links"]');
        await expect(page.evaluate(element => element, element)).resolves.toBeTruthy();
    });
    it('should navigate to links page', async () => {
        await expect(page.title()).resolves.toMatch('Joymon Online');
        //await page.waitFor(1000);
        const element = await page.$('[href="#/Links"]');
        await element.click();
        const blogsView = await page.waitForSelector('links');
        await expect(page.evaluate(element => element, blogsView)).resolves.toBeTruthy();
    });
    it('should have 4 sections',async ()=>{
        const elementLength = (await page.$$('#content > dl')).length;
        expect(elementLength).toBe(4);
    });
    it('should have Joymon v/s Code link',async ()=>{
        // Alternate selector usage #content > dl > dt:nth-of-type(3)
        const element = await page.$('#content > dl > dt:nth-child(5) > a');
        await expect(page.evaluate(element=>element.textContent,element)).resolves.toBe("Joymon v/s Code");
    });
});