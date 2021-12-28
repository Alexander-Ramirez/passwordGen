// Assignment Code
let generateBtn = document.querySelector("#generate");
let selectedArrays = [];

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let loweralphabet = "abcdefghijklmnopqrstuvwxyz".split("");

let upperAlphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase.split("");

let randomNumber = Math.floor(Math.random()*upperAlphabet.length);

upperAlphabet[randomNumber];

let password = "";
for(let i=0; i<100; 1++){
  password+="a";
};

if (placeHolder){
  selectedArrays = [...loweralphabet, ...upperAlphabet];

};