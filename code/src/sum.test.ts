import sum from '@/sum';
import { expect, test } from 'vitest';

test('sums two numbers', () => {
  expect(sum(4, 7)).toBe(11);
});
