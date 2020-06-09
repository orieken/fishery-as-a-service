import { getRoutePath } from './get-route-path.function';

describe('getRoutePath', () => {
  it('when / returns []', () => {
    expect(getRoutePath('/')).toEqual([]);
  });

  it('when /a returns [\'a\']', () => {
    expect(getRoutePath('/a')).toEqual(['a']);
  });

  it('when /a/b returns [ \'a\',\'b\']', () => {
    expect(getRoutePath('/a')).toEqual(['a']);
  });
});
