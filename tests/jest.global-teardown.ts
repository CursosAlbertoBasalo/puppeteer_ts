/* eslint-disable @typescript-eslint/no-var-requires */
const { teardown: teardownPuppeteer } = require('jest-environment-puppeteer');
/**
 * Sets up the environment for running tests with Jest
 */
module.exports = async function globalTeardown(globalConfig: unknown) {
  // do stuff which needs to be done after all tests are executed
  await teardownPuppeteer(globalConfig);
};
