import { IaminModule } from './iamin.module';

describe('IaminModule', () => {
  let iaminModule: IaminModule;

  beforeEach(() => {
    iaminModule = new IaminModule();
  });

  it('should create an instance', () => {
    expect(iaminModule).toBeTruthy();
  });
});
