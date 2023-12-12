import { writeFile } from "fs/promises";
import puppeteer from "puppeteer";
import { createServer } from "vite";

const vite = await (await createServer()).listen();

const browser = await puppeteer.launch({
  headless: "new",
  defaultViewport: {
    width: 1680,
    height: 1050,
    deviceScaleFactor: 1,
  },
});
const page = await browser.newPage();

// Render the card component in a new page
await page.goto("http://localhost:5173/card/?generate=1");

// Take a screenshot of the card component
const screenshotPNG = await page.screenshot({ type: "png" });
const screenshotWEBP = await page.screenshot({ type: "webp" });

await browser.close();

await writeFile("src/public/assets/img/card.png", screenshotPNG);
await writeFile("src/public/assets/img/card.webp", screenshotWEBP);

await vite.close();
