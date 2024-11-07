// Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

// function countWordOccurrences(str: string, str1: string): number {
//   const firstArray = str.toLocaleLowerCase();
//   const secoundArray = str1.toLocaleLowerCase();
//   let count = 0;
//   let wordCount = 0;
//   for (let index = 0; index < firstArray.length; index++) {
//     if (firstArray[index] === secoundArray[wordCount]) {
//       wordCount++;
//       if (wordCount === secoundArray.length) {
//         count++;
//         wordCount = 0;
//       }
//     } else {
//       wordCount = 0;
//     }
//   }
//   return count;
// }

function countWordOccurrences(sentence: string, word: string): number {
  const lowercaseSentence = sentence.toLowerCase();
  const lowercaseWord = word.toLowerCase();

  return lowercaseSentence.split(lowercaseWord).length -1;
}

console.log(
  countWordOccurrences("I love typescript try to learn typescript", "typescript")
);
