import puppeteer from 'puppeteer';
import * as settings from '../config/settings.json';

(async () => {
  try {
    const browser: puppeteer.Browser = await launchBrowser();
    const page = await navigateToPage(settings.baseUrl, browser);
    await close(page, browser);
  } catch (err) {
    console.error(err);
  }
})();

async function launchBrowser() {
  const launchOptions = settings.puppeteer;
  const browser = await puppeteer.launch(launchOptions);
  return browser;
}

async function navigateToPage(pageUrl: string, browser: puppeteer.Browser) {
  const page = await browser.newPage();
  const navigationPromise = page.waitForNavigation();
  await page.goto(pageUrl);
  await navigationPromise;
  return page;
}

async function close(page: puppeteer.Page, browser: puppeteer.Browser) {
  await page.close();
  await browser.close();
}
