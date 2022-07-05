/*
    Create a function that takes an integer
    as an argument and returns "Even" for
     even numbers or "Odd" for odd numbers.
*/

function even_or_odd(number) {
    const remainderEqual = number % 2;
    if (remainderEqual === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}