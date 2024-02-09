// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 10, b: 2, action: Action.Subtract, expected: 8 },
  { a: 11, b: 3, action: Action.Subtract, expected: 8 },
  { a: 8, b: 9, action: Action.Subtract, expected: -1 },
  { a: 8, b: 2, action: Action.Divide, expected: 4 },
  { a: 16, b: 4, action: Action.Divide, expected: 4 },
  { a: 15, b: 3, action: Action.Divide, expected: 5 },
  { a: 15, b: 3, action: Action.Multiply, expected: 45 },
  { a: 10, b: 4, action: Action.Multiply, expected: 40 },
  { a: 9, b: 8, action: Action.Multiply, expected: 72 },
  { a: 3, b: 3, action: Action.Exponentiate, expected: 27 },
  { a: 2, b: 4, action: Action.Exponentiate, expected: 16 },
  { a: 4, b: 3, action: Action.Exponentiate, expected: 64 },
  { a: 4, b: 3, action: '**', expected: null },
  { a: 4, b: 3, action: 'divide', expected: null },
  { a: 4, b: 3, action: '%', expected: null },
  { a: 'four', b: 3, action: Action.Add, expected: null },
  { a: 4, b: 'five', action: Action.Add, expected: null },
  { a: null, b: 5, action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  // Consider to use Jest table tests API to test all cases above
  const table = testCases;
  test.each(table)(
    '($a $action $b) equals $expected',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
});
