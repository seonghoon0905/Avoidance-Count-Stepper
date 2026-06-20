const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    page.on('console', msg => {
        console.log(`[BROWSER CONSOLE] ${msg.type().toUpperCase()}: ${msg.text()}`);
    });
    
    page.on('pageerror', error => {
        console.error(`[BROWSER ERROR] ${error.message}`);
    });

    await page.goto(`file://${__dirname.replace(/\\/g, '/')}/index.html`, { waitUntil: 'networkidle0' });
    
    await browser.close();
})();
