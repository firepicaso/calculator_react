import calculate from "./calculate";

describe('testing calculate logic function', () => {
  it('1 + 2 = 3 ', () => {
    const state = {
      total: '1',
      next: '2',
      operation: '+',
    };
    const btn = '=';
    const result = calculate(state, btn);
    expect(result).toEqual({ total: '3', next: null, operation: null });
  });

  it('2 - 1 = 1 ', () => {
    const state = {
      total: '2',
      next: '1',
      operation: '-',
    };
    const btn = '=';
    const result = calculate(state, btn);
    expect(result).toEqual({ total: '1', next: null, operation: null });
  });

  it('2 x 3 = 6 ', () => {
    const state = {
      total: '2',
      next: '3',
      operation: 'x',
    };
    const btn = '=';
    const result = calculate(state, btn);
    expect(result).toEqual({ total: '6', next: null, operation: null });
  });

  it('6 ÷ 2 = 3 ', () => {
    const state = {
      total: '6',
      next: '2',
      operation: '÷',
    };
    const btn = '=';
    const result = calculate(state, btn);
    expect(result).toEqual({ total: '3', next: null, operation: null });
  });
});
