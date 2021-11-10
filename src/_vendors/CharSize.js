/**
 * @file CharSize vendor
 */

let charCount = 100,
    charSize = {};

function calculateCharWidth(char, testEl) {

    if (!char || !testEl) {
        return 0;
    }

    if (char in charSize) {
        return charSize[char];
    }

    testEl.innerHTML = char.repeat(charCount);

    return charSize[char] = testEl.getBoundingClientRect().width / charCount;

}

function calculateStringWidth(string, testEl) {

    if (!string || !testEl) {
        return 0;
    }

    let width = 0;
    for (let char of string) {
        width += calculateCharWidth(char, testEl);
    }

    return width;

}

export default {
    calculateCharWidth,
    calculateStringWidth
};
