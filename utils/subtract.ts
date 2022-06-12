export function subtractProductAndSum(arg: number) {
    const res = arg.toString().split('').reduce((acc, curr) => {
        let currNumber = Number(curr);
        if (!Object.keys(acc).length) {
            acc[0] = currNumber;
            acc[1] = currNumber;
        } else {
            acc[0] = acc[0] * currNumber;
            acc[1] = acc[1] + currNumber;
        }
        return acc;
    }, {});

    return res[0] - res[1];
}
