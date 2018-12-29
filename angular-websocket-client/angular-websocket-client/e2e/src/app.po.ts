import { browser, by, element } from 'protractor';

export class AppPage {
  static navigateTo() {
    return browser.get('/');
  }

  static getTitleText() {
    return element(by.css('app-root h1')).getText();
  }
}
