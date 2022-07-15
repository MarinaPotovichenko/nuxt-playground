export function isParenthesesValid(str: string) {
    let closedToOpen = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    let stack = [];

    let isCorrect = true;
    [...str].forEach(curr => {
        if (Object.keys(closedToOpen).includes(curr)) {
            if (stack.length && stack[stack.length - 1] === closedToOpen[curr]) {
                stack.pop();
            } else {
                isCorrect = false;
            }
        } else {
            stack.push(curr)
        }
    });


    return isCorrect;
}

var largestRectangleArea = function (heights) {

    // 1. брать посл элемент и проходиться до конца массива, минусуя и получая самую длинную последовательность с такой высотой O(n*n*(maxHeight))
    // Проходимся по высотам. Если высота больше предыд, то пушим в стек. Если меньше, то должны убрать те элементы, которые больше него, получая их значение, сколько максимум до текущей позиции они могли набрать, т.к все по возрастанию, значит, этот элемент до текущего момента мог увеличивать площадь. В конце пройтись по остатку элементов с теке, их площадь от их позиции до конца.

    let stack = [];
    let i = 0;
    let max = 0;
    let start = 0;

    while (i < heights.length) {
        start = i;

        while (stack.length && stack[stack.length - 1][1] > heights[i]) {
            let [index, height] = stack.pop();
            console.log(max, i, index, height * (i - index))
            max = Math.max(max, height * (i - index));
            start = index;
            console.log('pop', [index, height], start)
        }

        stack.push([start, heights[i]])
        console.log('push', [start, heights[i]])

        i++;
    }
    console.log(max)
    for (let i = 0; i < stack.length; i++) {
        max = Math.max(max, stack[i][1] * (heights.length - 1 - i));
    }

    console.log(stack)
    return max;
};
