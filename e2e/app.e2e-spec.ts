import { ImprovedPortalPage } from './app.po';

describe('improved-portal App', () => {
  let page: ImprovedPortalPage;

  beforeEach(() => {
    page = new ImprovedPortalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
