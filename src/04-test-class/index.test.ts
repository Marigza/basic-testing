// Uncomment the code below and write your tests
import { InsufficientFundsError, TransferFailedError, getBankAccount } from '.';

describe('BankAccount', () => {
  let testAccount = getBankAccount(100);

  beforeEach(() => {
    testAccount = getBankAccount(100);
  });

  test('should create account with initial balance', () => {
    expect(testAccount).toEqual({ _balance: 100 });
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => {
      testAccount.withdraw(120);
    }).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const anotherAccount = getBankAccount(200);

    expect(() => testAccount.transfer(120, anotherAccount)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    expect(() => testAccount.transfer(30, testAccount)).toThrow(
      TransferFailedError,
    );
  });

  test('should deposit money', () => {
    expect(testAccount.deposit(50)).toEqual({ _balance: 150 });
  });

  test('should withdraw money', () => {
    expect(testAccount.withdraw(20)).toEqual({ _balance: 80 });
  });

  test('should transfer money', () => {
    const anotherAccount = getBankAccount(200);

    expect(testAccount.transfer(30, anotherAccount)).toEqual({ _balance: 70 });
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const testBalance = await testAccount.fetchBalance();
    if (typeof testBalance === 'number') {
      expect(testBalance).not.toBeNull();
    } else {
      expect(testBalance).toBeNull();
    }
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
