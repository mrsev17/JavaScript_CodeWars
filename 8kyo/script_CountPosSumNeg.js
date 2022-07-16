/*
    Count of positives / sum of negatives

    Given an array of integers.

    Return an array, where the first element is the
    count of positives numbers and the second element
    is sum of negative numbers. 0 is neither positive nor negative.

    If the input is an empty array or is null, return an empty array.

    Example

    For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(input) {

    let posCount = 0;
    let negSum = 0;
    let finalArray = [];

    if ((input === null) || (input === "") || (input.length === 0)) {
        return [];
    } else {

        for (let i = 0; i < input.length; i++) {
            if (input[i] > 0) {
                posCount += 1;
            } else {
                negSum += input[i];
            }
        }

    }

    finalArray.push(posCount);
    finalArray.push(negSum);
    return finalArray;

}