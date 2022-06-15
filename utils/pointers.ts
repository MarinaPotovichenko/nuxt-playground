export function isValidPalindrome(str: string) {
    const lowercaseReplacedStr = str.toLocaleLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = [...lowercaseReplacedStr].reverse().join('');
    return lowercaseReplacedStr === reversed;
}
