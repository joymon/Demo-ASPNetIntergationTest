const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('http://localhost:8080');
  await page.screenshot({path: 'example.png'});
  //await page.waitFor(50000);
  await browser.close();
})();