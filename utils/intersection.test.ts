import {getIntersection} from '~/utils/intersection';

test('reverse of ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"] equal 1,4,13', () => {
    expect(getIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])).toBe('1,4,13');
});
