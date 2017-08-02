import { SecondWeekPage } from './app.po';

describe('second-week App', () => {
  let page: SecondWeekPage;

  beforeEach(() => {
    page = new SecondWeekPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
