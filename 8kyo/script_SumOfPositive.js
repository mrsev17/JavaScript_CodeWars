/*
    You get an array of numbers, return the sum of all of the positives ones.

    Example [1,-4,7,12] => 1 + 7 + 12 = 20

    Note: if there is nothing to sum, the sum is default to 0.
*/

const positive = (enter) => {
    let result = 0;
    const positiveArr = enter.filter(function(number) {
        return number > 0;
    });
    for (let i = 0; i < positiveArr.length; i += 1) {
        result += positiveArr[i];
    }
    return result;
};