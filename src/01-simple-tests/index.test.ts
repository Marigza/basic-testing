// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const testingFunction = simpleCalculator({
      a: 1,
      b: 3,
      action: Action.Add,
    });
    expect(testingFunction).toBe(4);
  });

  test('should subtract two numbers', () => {
    const testingFunction = simpleCalculator({
      a: 10,
      b: 3,
      action: Action.Subtract,
    });
    expect(testingFunction).toBe(7);
  });

  test('should multiply two numbers', () => {
    const testingFunction = simpleCalculator({
      a: 10,
      b: 3,
      action: Action.Multiply,
    });
    expect(testingFunction).toBe(30);
  });

  test('should divide two numbers', () => {
    const testingFunction = simpleCalculator({
      a: 33,
      b: 3,
      action: Action.Divide,
    });
    expect(testingFunction).toBe(11);
  });

  test('should exponentiate two numbers', () => {
    const testingFunction = simpleCalculator({
      a: 2,
      b: 3,
      action: Action.Exponentiate,
    });
    expect(testingFunction).toBe(8);
  });

  test('should return null for invalid action', () => {
    const testingFunction = simpleCalculator({
      a: 2,
      b: 3,
      action: '**',
    });
    expect(testingFunction).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const testingFunction = simpleCalculator({
      a: 'one',
      b: 'two',
      action: Action.Add,
    });
    expect(testingFunction).toBeNull();
  });
});
