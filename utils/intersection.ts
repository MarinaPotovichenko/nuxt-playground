export function getIntersection(arg: string[]) {
    const firstArr = arg[0].split(', ');
    const secondArr = arg[1].split(', ');

    const helpingArray = firstArr.concat(secondArr).sort();

    const helpingObj = helpingArray.reduce((acc, curr) => {
        acc[curr] = acc[curr] ? acc[curr] + 1 : 1;

        return acc;
    }, {});

    const objKeys = Object.keys(helpingObj);
    let intersection = [];
    objKeys.forEach(item => {
        if (helpingObj[item] > 1) {
            intersection.push(item);
        };
    });


    return intersection.join(',');
}
