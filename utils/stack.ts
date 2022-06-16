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
