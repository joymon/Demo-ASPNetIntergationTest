describe('Home', () => {
    beforeAll(async () => {
        //await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');

        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
        console.log("Navigating to page");
        await page.goto('http://localhost:8080');
        console.log("Navigated to page");
    });
    it('should have Projects link"', async () => {
        const element = await page.$('[href="#/Projects"]');
        await expect(page.evaluate(element => element, element)).resolves.toBeTruthy();
    });
    it('should navigate to Projects page', async () => {
        await expect(page.title()).resolves.toMatch('Joymon Online');
        const element = await page.$('[href="#/Projects"]');
        await element.click();
        const ProjectsView = await page.waitForSelector('projects');
        await expect(page.evaluate(element => element, ProjectsView)).resolves.toBeTruthy();
    });
    it('should have 5 project sections', async () => {
        await page.waitForSelector('#content > div > h4')
        const elementLength = (await page.$$('#content > div')).length;
        expect(elementLength).toBe(5);
    });
    it('should have header in first project', async () => {
        var element= await page.waitForSelector('#content > div > h4');

        //const elementLength = (await page.$$('#content > div')).length;
        expect( page.evaluate(element=>element.textContent.length , element)).resolves.toBeGreaterThan(5);
    });
    it('should have desc in first project', async () => {
        var element= await page.waitForSelector('#content > div > p');
        expect( page.evaluate(element=>element.textContent.length , element)).resolves.toBeGreaterThan(5);
    });
});