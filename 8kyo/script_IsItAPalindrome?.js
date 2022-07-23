// Write a function that checks if a given string (case insensitive) is a palindrome.

const thisPallindrome = someStr => {

    let cloneArr = [];
    const newArr = someStr.split("");

    for (let i = newArr.length - 1; i >= 0; i -= 1) {
        cloneArr.push(newArr[i]);
    }

    const result = cloneArr.toString().toLowerCase() === newArr.toString().toLowerCase();
    return result;

};