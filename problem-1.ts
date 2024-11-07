// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

function sumArray(number: number[]): number {
    let sum = 0;
    for (let index = 0; index < number.length; index++) {
        const element = number[index];
        if (element % 2 === 0) {
            sum = sum + element
        }
    }
    return sum
}

// const result = [1, 2, 3, 4, 5, 6]
// console.log(sumArray(result));
// problem-1.ts