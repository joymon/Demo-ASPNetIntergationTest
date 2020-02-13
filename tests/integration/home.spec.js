describe('Home', () => {
    beforeAll(async () => {
        //await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
        await page.goto('http://localhost:8080');
    });

    it('should be titled "Joymon Online"', async () => {
        await expect(page.title()).resolves.toMatch('Joymon Online');
        //await page.waitFor(1000);
    });
    it('should navigate to home page', async () => {
        //await page.waitFor(1000);
        const element = await page.$('[href="#/Default"]');
        await element.click();
        const blogsView = await page.waitForSelector('home');
        await expect(page.evaluate(element => element, blogsView)).resolves.toBeTruthy();
    });
    it('should have email at left side"', async () => {
        const element = await page.$('#sidebar > a');
        const text= await element.getProperty('textContent');
        await expect(page.evaluate(element => element.textContent, element)).resolves.toContain('joymon@gmail.com');
    });
    it('should be copyrighted current year"', async () => {
        const element = await page.$('.footer > .ng-binding');
        const text= await element.getProperty('textContent');
        await expect(page.evaluate(element => element.textContent, element)).resolves.toContain('2020');
    });
});