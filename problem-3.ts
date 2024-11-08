// Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.


function countWordOccurrences(sentence: string, word: string): number {
  const lowercaseSentence = sentence.toLowerCase();
  const lowercaseWord = word.toLowerCase();

  return lowercaseSentence.split(lowercaseWord).length -1;
}

// console.log(
//   countWordOccurrences("I love typescript try to learn typescript", "r")
// );
