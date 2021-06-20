/*The length of the sentence (the number of characters).*/
function findLongestWord(str) {
  return str.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

/*The number of words in the sentence (assuming that the words are separated by a single space).*/
function wordCount(arrayOfStrings) {
    const map = {};

    const arr = arrayOfStrings;

    for (let i = 0; i < arr.length; i++) {

        let arr2 = arr.charAt(i);

        if (arr.indexOf(arr2) === arr.lastIndexOf(arr2)) {
            map.push({
                arr: arr2
            });
        }
    }
}

 test(`Expect the wordCount of ["the", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"] to equal { the:2, quick: 1, brown: 1, fox: 1, jumped: 1, over: 1, lazy: 1, dog:1}`, () => {
            expect(wordCount([ 'the', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog' ])).toEqual({ the:2, quick: 1, brown: 1, fox: 1, jumped: 1, over: 1, lazy: 1, dog:1 });
            })

            // The number of vowels in the sentence.

function countVowel(str) { 

    // find the count of vowels
    const count = str.match["the", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"].length;

    // return number of vowels
    return count;
}

// take input
const string = prompt('["the", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"] ');

const result = countVowel(string);

console.log(result);
