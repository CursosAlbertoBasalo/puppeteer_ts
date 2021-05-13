/* eslint-disable @typescript-eslint/no-var-requires */

const { puppeteer: setupPuppeteer } = require('./config/settings.json');
module.exports = {
  launch: setupPuppeteer,
  browserContext: 'default',
};
