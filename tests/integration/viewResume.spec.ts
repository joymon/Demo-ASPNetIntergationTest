describe("viewResume",()=>{
    beforeAll(async () => {
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
        console.log("Navigating to page");
        await page.goto('http://localhost:8080/#/ViewResume');
        console.log("Navigated to page");
    });
    it("should navigate to viewResume page",async()=>{
        //const title= await page.title();
        await expect(page.title()).resolves.toMatch('Joymon Online');
    });
    it('should have the view-resume tag',async ()=>{
        const blogsView = await page.waitForSelector('view-resume');
        await expect(page.evaluate(element => element, blogsView)).resolves.toBeTruthy();
    })
    it('should have the iframe inside view-resume ',async ()=>{
        const blogsView = await page.waitForSelector('view-resume > iframe');
        await expect(page.evaluate(element => element, blogsView)).resolves.toBeTruthy();
    })
});