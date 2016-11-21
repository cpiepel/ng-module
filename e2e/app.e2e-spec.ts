import { NgModulePage } from './app.po';

describe('ng-module App', function() {
  let page: NgModulePage;

  beforeEach(() => {
    page = new NgModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
