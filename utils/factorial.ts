export function getFactorial(arg: number) {
    return (arg !== 1) ? arg * getFactorial(arg - 1) : 1;
}
