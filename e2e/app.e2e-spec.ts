import { TestJQueryDatePickerPage } from './app.po';

describe('test-jquery-date-picker App', () => {
  let page: TestJQueryDatePickerPage;

  beforeEach(() => {
    page = new TestJQueryDatePickerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
