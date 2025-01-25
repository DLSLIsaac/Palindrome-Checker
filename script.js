const form = document.getElementById("palindrome-form");
const input = document.getElementById("text-input");
const resultTxt = document.getElementById("result")
let word = "";

function isPalindrome(){
  word = input.value.trim().replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(word);
  
  if(word === "" || word.length === 0) alert("Please input a value.");

  if(word.length >= 1){
    let wordCopy = [];
    
    for(let i = 0; i < word.length; i++)
      wordCopy.push(word[i]);

    wordCopy = wordCopy.reverse().join('');
    console.log(`${word} === ${word} ? `,
       wordCopy === word);

    if(wordCopy === word){
      console.log('Both words are equal...');
      return true;
    }
    else
      return false;
  }
    
  return false;
}

form. addEventListener('submit', event => {
  event.preventDefault();
  resultTxt.innerText = "";

  if(isPalindrome())
    resultTxt.innerText += `${input.value} is a palindrome`;
  else
    resultTxt.innerText += `${input.value} is not a palindrome`;

  resultTxt.classList.remove("hidden");
  resultTxt.classList.add("block");
});
