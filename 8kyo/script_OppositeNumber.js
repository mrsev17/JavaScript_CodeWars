/*
    Very simple, given an integer or a floating-point number, find its opposite.

    Examples:

    1: -1
    14: -14
    -34: 34
*/

function opposite(number) {
    const firstStep = number * 2;
    const secondStep = number - firstStep;
    return secondStep;
}