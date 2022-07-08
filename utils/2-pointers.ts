export function isValidPalindrome(str: string) {
    return str === str.toLocaleLowerCase().replace(/[^a-z0-9]/g, '').split('').reverse().join('');
}

export function isValidPalindromeNotImproved(str: string) {
    const lowercaseReplacedStr = str.toLocaleLowerCase().replace(/[^a-z0-9]/g, '').split('');
    let isValid = true;
    lowercaseReplacedStr.forEach((curr, index) => {
        if (curr !== lowercaseReplacedStr[lowercaseReplacedStr.length - index - 1] && index < lowercaseReplacedStr.length - index - 1) {
            isValid = false;
        }
    });
    return isValid;
}
