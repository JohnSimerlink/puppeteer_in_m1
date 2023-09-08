const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch(
    {
        executablePath: '/usr/bin/chromium',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
 
  const page = await browser.newPage();
  const localFilePath = `file://${path.join(__dirname, 'index.html')}`;
  await page.goto(localFilePath);

  const titleElement = await page.$('#title');
  const contentElement = await page.$('.content');

  if (titleElement && contentElement) {
    console.log('Elements are present on the page.');
  } else {
    console.log('Elements are not present on the page.');
  }

  await browser.close();
})();