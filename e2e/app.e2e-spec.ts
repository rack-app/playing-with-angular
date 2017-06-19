import { PlayingWithAngularPage } from './app.po';

describe('playing-with-angular App', () => {
  let page: PlayingWithAngularPage;

  beforeEach(() => {
    page = new PlayingWithAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
