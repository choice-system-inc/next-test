// tests/calculator.test.ts
import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './calculator';

describe('四則演算結果確認', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('subtracts two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it('multiplies two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('divides two numbers', () => {
    expect(divide(6, 3)).toBe(2);
  });

  it('throws error when dividing by zero', () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
  });
});
