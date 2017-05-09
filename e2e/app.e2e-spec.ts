import { Aot3Page } from './app.po';

describe('aot3 App', () => {
  let page: Aot3Page;

  beforeEach(() => {
    page = new Aot3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
