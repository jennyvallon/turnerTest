import { WebapiPage } from './app.po';

describe('webapi App', function() {
  let page: WebapiPage;

  beforeEach(() => {
    page = new WebapiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
