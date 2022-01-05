// Assignment Code
let generateBtn = document.querySelector("#generate");
let loweralphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let specialCharaters = "`~!@#$%^&*,./?=+".split("")
let numbers = "0123456789".split("")
let randomArray = [];

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

function generatePassword() {
  let selectedArrays = [];
  
  let passwordCharaterLength = prompt("Choose btween 8 and 128 charaters for your password");
  if (!passwordCharaterLength) {
    alert("Please enter a value");
  } else if (passwordCharaterLength < 8 || passwordCharaterLength > 128){
    return prompt("Please enter a value between 8 and 128")};

  let confirmLowerAlphabet = confirm("Do you want lowercase letters");
  if (confirmLowerAlphabet === true) {
    selectedArrays = [...loweralphabet, ...selectedArrays]
  };

  let confirmUpperAlphabet = confirm("Do you want uppercase letters");
  if (confirmUpperAlphabet === true) {
    selectedArrays = [...upperAlphabet, ...selectedArrays]
  };

  let confirmSCharaters = confirm("Do you want special charaters?");
  if (confirmSCharaters === true) {
    selectedArrays = [...specialCharaters, ...selectedArrays]
  };

  let confirmNumber = confirm("Do you want numbers?");
  if (confirmNumber === true) {
    selectedArrays = [...numbers, ...selectedArrays]
  };
  
  let password = "";
  
  for (let i = 0; i < passwordlength; i++) {
    let randomNumber = Math.floor(Math.random()*selectedArrays.length);
    password = password + selectedArrays[randomNumber];
  }

  return password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
