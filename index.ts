import { chromium, Browser, Page } from 'playwright';
import { cleanText, descriptions } from './common';
import { exportToExcel } from './excel';

async function run(url :string) {
  let browser: Browser | null = null;
  let page: Page | null = null;

  try
  {
    const browserWSEndpoint = 'http://localhost:9222'; // WebSocket de la instancia de chrome
    browser = await chromium.connectOverCDP(browserWSEndpoint);
    console.log(browser.isConnected() && 'Connected to Chrome...');
    console.log(`Contexts in CDP session: ${browser.contexts().length}.`);
    console.log('attach connect...');
    const context = browser.contexts()[0];
    console.log('context...');
    page = await context.newPage();
    console.log('new page');
    // Resto del código para interactuar con la instancia de Edge
    await page.goto(url);
    console.log('ir a maker..');
    page.setDefaultTimeout(15000);
    //await page.waitForTimeout(15000);

    // Verificar el título de la página
    const pageTitle = await page.title();
    console.log(`Page title: ${pageTitle}`);

    await page.waitForSelector('div[title="Tables"] > div:first-of-type');

    const tablesIcon = await page.locator('div[title="Tables"] > div:first-of-type')
    tablesIcon.click();
    await page.waitForTimeout(5000);

    const tableExpand = await page.locator('[aria-level="2"] > .ba-Tree-CollapseExpand');
    const tablesNames = await page.$$('[aria-level="2"]');
    const countTables = await tableExpand.count();

    for (let i = 0; i < countTables; i++) {
      const tableName = cleanText(await tablesNames[i].innerText());
      await tableExpand.nth(i).click();
      await page.waitForTimeout(3000);

      const columns = await page.locator('[aria-level="3"][aria-label="Columns"]');
      columns.click();
      await page.waitForTimeout(3000);

      const dataDict = await extractColumnsData(page);

      exportToExcel(dataDict, tableName, i);

      await tableExpand.nth(i).click();
      await page.waitForTimeout(2000);
    }

    console.log('Proceso completado exitosamente.');

  } catch (err) {
    console.error('Error en el proceso:', err);
  } finally {
    if (browser) await browser.close();
  }
}

async function extractColumnsData(page: Page) {
  const rows = await page.$$('[role="row"]');
  const dataDict: any[] = [];

  for (const row of rows) {
    const cells = await row.$$('.ms-DetailsRow-cell');

    if (cells.length > 0) {
      const displayName = cleanText(await cells[1].innerText());
      const name = cleanText(await cells[3].innerText());
      const dataType = cleanText(await cells[4].innerText());
      const managed = cleanText(await cells[5].innerText());
      const customized = cleanText(await cells[6].innerText());
      const customizable = cleanText(await cells[7].innerText());
      const required = cleanText(await cells[8].innerText());
      const searcheable = cleanText(await cells[9].innerText());
      const descripcion = descriptions[displayName] || "";

      dataDict.push({
        Campo: displayName,
        Nombre: name,
        Tipo: dataType,
        Descripcion: descripcion,
        Requerido: required,
        Buscable: searcheable,
        managed: managed,
        customized: customized,
        customizable: customizable
      });
    }
  }

  return dataDict;
}

run('https://make.powerapps.com/');
