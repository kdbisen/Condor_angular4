import { CondorPage } from './app.po';

describe('condor App', () => {
  let page: CondorPage;

  beforeEach(() => {
    page = new CondorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
