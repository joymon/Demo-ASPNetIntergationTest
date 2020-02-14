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
});