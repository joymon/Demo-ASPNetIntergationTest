describe('Home', () => {
    beforeAll(async () => {
        //await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');

        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
        console.log("Navigating to page");
        await page.goto('http://localhost:8080');
        console.log("Navigated to page");
    });
    it('should have blogs link"', async () => {
        const element = await page.$('[href="#/Blogs"]');
        await expect(page.evaluate(element => element, element)).resolves.toBeTruthy();
    });
    it('should navigate to blogs page', async () => {
        await expect(page.title()).resolves.toMatch('Joymon Online');
        //await page.waitFor(1000);
        const element = await page.$('[href="#/Blogs"]');
        await element.click();
        const blogsView = await page.waitForSelector('blogs-view');
        await expect(page.evaluate(element => element, blogsView)).resolves.toBeTruthy();
    });
    it('should have JoymonsCode blog-feed', async () => {
        const blogsView = await page.waitForSelector('blog-feed[rss="JoymonsCode"]');
        await expect(page.evaluate(element => element, blogsView)).resolves.toBeTruthy();
    });
    it('should have 3 entries on JoymonsCode blog-feed', async () => {

        //Wait for the selector as it is loaded from AJAX call.
        await page.waitForSelector('blog-feed[rss="JoymonsCode"] > div > .blogItems > div');
        const blogsItemsCount = (await page.$$('blog-feed[rss="JoymonsCode"] > div > .blogItems > div')).length;
        expect(blogsItemsCount).toBe(3);

        //TODO - Add test case to check date and text of any of the item.
        var element = await page.$('blog-feed[rss="JoymonsCode"] > div > .blogItems > div:nth-child(2) > table > tbody > tr:nth-child(1) > td');
        await expect(page.evaluate(element => element.textContent.length, element)).resolves.toBeGreaterThan(3);
    });
    it('should have Joyfulwpf blog-feed', async () => {
        const blogsView = await page.waitForSelector('blog-feed[rss="Joyfulwpf"]');
        await expect(page.evaluate(element => element, blogsView)).resolves.toBeTruthy();
    });
    it('should have 3 entries on Joyfulwpf blog-feed', async () => {
        //Wait for the selector as it is loaded from AJAX call.
        await page.waitForSelector('blog-feed[rss="Joyfulwpf"] > div > .blogItems > div');
        const blogsItemsCount = (await page.$$('blog-feed[rss="Joyfulwpf"] > div > .blogItems > div')).length;
        expect(blogsItemsCount).toBe(3);
    });
    it('should have silverlightedweb blog-feed', async () => {
        const blogsView = await page.waitForSelector('blog-feed[rss="silverlightedweb"]');
        await expect(page.evaluate(element => element, blogsView)).resolves.toBeTruthy();
        //Wait for the selector as it is loaded from AJAX call.
        await page.waitForSelector('blog-feed[rss="silverlightedweb"] > div > .blogItems > div');
        const blogsItemsCount = (await page.$$('blog-feed[rss="silverlightedweb"] > div > .blogItems > div')).length;
        expect(blogsItemsCount).toBe(3);
    });
});
