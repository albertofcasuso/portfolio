import { EMPTY_FUNC } from './constants';

test('EMPTY_FUNC should be a function', () => {
  expect(EMPTY_FUNC()).toBe(null);
});
