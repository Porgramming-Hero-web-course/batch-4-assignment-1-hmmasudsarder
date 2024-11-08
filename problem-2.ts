// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

function removeDuplicates(number: number[]) {
    let removedDupli: number[] = [];
    for (let index = 0; index < number.length; index++) {
      const element = number[index];
      if (removedDupli.includes(element) === false) {
        removedDupli.push(element);
      }
    }
    return removedDupli;
  }


  
  // console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))