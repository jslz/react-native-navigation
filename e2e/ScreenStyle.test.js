const Utils = require('./Utils');
const elementByLabel = Utils.elementByLabel;

describe('screen style', () => {
  beforeEach(async () => {
    await device.relaunchApp();
  });

  it('declare a navigationOptions on container component', async () => {
    await elementByLabel('Push Options Screen').tap();
    await expect(element(by.label('Static Title').and(by.type('UILabel')))).toBeVisible();
  });

  it('change title on container component', async () => {
    await elementByLabel('Push Options Screen').tap();
    await expect(element(by.label('Static Title').and(by.type('UILabel')))).toBeVisible();
    await elementByLabel('Dynamic Options').tap();
    await expect(element(by.label('Dynamic Title').and(by.type('UILabel')))).toBeVisible();
  });

  it('set dynamic options with valid options will do something and not crash', async () => {
    // we have no way of testing individual styles for the screen
    await elementByLabel('Push Options Screen').tap();
    await elementByLabel('Dynamic Options').tap();
    await expect(element(by.label('Options Screen'))).toBeVisible();
  });
  it('hides Tab Bar when pressing on Hide Tab Bar and shows it when pressing on Show Tab Bar', async () => {
    await elementByLabel('Push Options Screen').tap();
    await elementByLabel('Hide Top Bar').tap();
    await expect(element(by.type('UINavigationBar'))).toBeNotVisible();
    await elementByLabel('Show Top Bar').tap();
    await expect(element(by.type('UINavigationBar'))).toBeVisible();
  });
});
