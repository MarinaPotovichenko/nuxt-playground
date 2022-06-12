import {getFactorial} from '~/utils/factorial';

test('factorial of 4 equal 24', () => {
    expect(getFactorial(4)).toBe(24);
});
