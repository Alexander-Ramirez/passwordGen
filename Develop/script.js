// Assignment Code
let generateBtn = document.querySelector("#generate");
let loweralphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let specialCharaters = "`~!@#$%^&*,./?=+".split("")
let numbers = "0123456789".split("")
let selectedArrays = [];
let randomArray = [];

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  enter = parseInt(prompt("Choose btween 8 and 128 charaters for your password"));
  if (!enter) {
    alert("Please enter a value");
  } else if (enter < 8 || enter > 128){
    enter = parseInt(prompt("Please enter a value between 8 and 128"));
  }
}

// let randomNumber = Math.floor(Math.random()*upperAlphabet.length);

// upperAlphabet[randomNumber];

// let password = "";
// for(let i=0; i<100; 1++){
//   password+="a";
// };

// if (placeHolder){
//   selectedArrays = [...loweralphabet, ...upperAlphabet];

// };