function isPalindrome(word) {
  // Write your algorithm here
  for(let start = 0; start < word.length / 2; start++){
    const end = word.length -1 - start;
    if(word[start] === word[end]) return true;
    return false;
  };
};

/* 
  Add your pseudocode here
    iterate from the start of the string to the middle of the string
    compare the letters we're iterating over to the letter at the end of the string
    and if we reach the middle and the letters match, return true;
    else false
*/

/*
  Add written explanation of your solution here
    isPalindrome is a function that returns either true or false when
  the input string is the same forwards and backwards, it should return true, i.e,
  if the first letter is the same as the last letter up to the middle, return true
  else if the first and the last don't match return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
