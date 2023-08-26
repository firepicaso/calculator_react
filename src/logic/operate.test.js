import operate from './operate';

describe('testing operate logic function', () => {
  it('1 + 2 = 3 ', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  it('2 - 1 = 1 ', () => {
    expect(operate(2, 1, '-')).toBe('1');
  });

  it('2 x 3 = 6 ', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });

  it('6 ÷ 2 = 3 ', () => {
    expect(operate(6, 2, '÷')).toBe('3');
  });

  it('division by zero thorows message ', () => {
    expect(operate(6, 0, '÷')).toBe('Cannot divide by 0.');
  });
});
