/*
    Is the string uppercase?

    Task

    Create a method to see whether the string is ALL CAPS.

    Examples (input -> output)

    "c" -> False
    "C" -> True
    "hello I AM DONALD" -> False
    "HELLO I AM DONALD" -> True
    "ACSKLDFJSgSKLDFJSKLDFJ" -> False
    "ACSKLDFJSGSKLDFJSKLDFJ" -> True

    In this Kata, a string is said to be in ALL CAPS
    whenever it does not contain any lowercase letter
    so any string containing no letters at all is trivially
    considered to be in ALL CAPS.
*/

/*function upperOrLower(input) {
    if (input === undefined) return false;
    const testArr = input.split("");
    let strAfterCheck = "";
    for (let i = 0; i < testArr.length; i += 1) {
        if (testArr[i] === testArr[i].toUpperCase()) {
            strAfterCheck += testArr[i];
        }
    }

    console.log(input);
    console.log(strAfterCheck);

    if (strAfterCheck.length === input.length) return true;
    if (strAfterCheck.length !== input.length) return false;
}

 */

const checkChar = str => {
    const isUpperCase = str => str === str.toUpperCase();
    return isUpperCase();
};

// Already make two solutions for this kata but not of them is passing tests...
