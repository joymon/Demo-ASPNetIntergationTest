describe('Home', () => {
    beforeAll(async () => {
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
        console.log("Navigating to page");
        await page.goto('http://localhost:8080');
        console.log("Navigated to page");
    });
    it('should have Resume link"', async () => {
        const element = await page.$('[href="#/Resume"]');
        await expect(page.evaluate(element => element, element)).resolves.toBeTruthy();
    });
    it('should navigate to resume page', async () => {
        await expect(page.title()).resolves.toMatch('Joymon Online');
        //await page.waitFor(1000);
        const element = await page.$('[href="#/Resume"]');
        await element.click();
        const blogsView = await page.waitForSelector('resume');
        await expect(page.evaluate(element => element, blogsView)).resolves.toBeTruthy();
    });
    it('should have download resume link', async () => {
        const aResume = await page.waitForSelector('a[href="uploads/joy_resume.pdf');
        await expect(page.evaluate(element => element, aResume)).resolves.toBeTruthy();
    });
    it('should have view resume link', async () => {
        const aResume = await page.waitForSelector('a[href="#/ViewResume');
        await expect(page.evaluate(element => element, aResume)).resolves.toBeTruthy();
    });
    //TODO - Headless mode don't navigate to pdf - https://github.com/puppeteer/puppeteer/blob/master/docs/api.md#pagegotourl-options
    it('should have working downloadable resume link', async () => {
        //const aResume = await page.goto('http://localhost:8080/uploads/joy_resume.pdf');
        //const embed = await page.url();
        //await expect(embed).toBe("http://localhost:8080/uploads/joy_resume.pdf");
    });
});