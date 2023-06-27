// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
let generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");

let cha = [
  "!",
  "@",
  "-",
  "_",
  "=",
  "<",
  ">",
  "#",
  "*",
  "%",
  "+",
  "&",
  "^",
  "$",
];
let lowercase_char = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let uppercase_char = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

generateBtn.addEventListener("click", function () {
  let ask = prompt("Please enter the length of password");
  while (ask < 8 || ask > 128) {
    ask = prompt(
      "Password should be at least 8 characters and no more than 128 characters"
    );
  }

  if (Number(ask) >= 8 || Number(ask) <= 128) {
    let ask_1 = prompt("Include numbers, Y OR N?");
    let ask_2 = prompt("Include lowercase, Y OR N?");
    let ask_3 = prompt("Include uppercase, Y OR N?");
    let ask_4 = prompt("Include special characters, Y OR N?");

    let question_1 = prompt("How many numbers?");
    let question_2 = prompt("How many lowercase?");
    let question_3 = prompt("How many uppercase?");
    let question_4 = prompt("How many special characters?");

    let getRandomNum = function randomNum() {
      let num = "";
      for (let i = 0; i < question_1; i++) {
        let id = Math.floor(Math.random() * 10);
        num += id;
      }
      return num;
    };

    let getRandomChar = function randomChar() {
      let char = "";
      for (let i = 0; i < question_2; i++) {
        let id = Math.floor(Math.random() * cha.length);
        char += cha[id];
      }
      return char;
    };

    let getRandomlowercase = function randomLowercase() {
      let lower = "";
      for (let i = 0; i < question_3; i++) {
        let id = Math.floor(Math.random() * lowercase_char.length);
        lower += lowercase_char[id];
      }
      return lower;
    };

    let getRandomUppercase = function randomUppercase() {
      let upper = "";
      for (let i = 0; i < question_4; i++) {
        let id = Math.floor(Math.random() * uppercase_char.length);
        upper += uppercase_char[id];
      }
      return upper;
    };

    let password = "";
    if (
      ask_1.toUpperCase() === "Y" &&
      ask_2.toUpperCase() === "Y" &&
      ask_3.toUpperCase() === "Y" &&
      ask_4.toUpperCase() === "Y"
    ) {
      password += getRandomNum();
      password += getRandomChar();
      password += getRandomlowercase();
      password += getRandomUppercase();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      passwordText.value = password;
    } else if (
      ask_1.toUpperCase() === "Y" &&
      ask_3.toUpperCase() === "Y" &&
      ask_4.toUpperCase() === "Y"
    ) {
      password += getRandomNum();
      password += getRandomlowercase();
      password += getRandomUppercase();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      passwordText.value = password;
    } else if (
      ask_1.toUpperCase() === "Y" &&
      ask_2.toUpperCase() === "Y" &&
      ask_3.toUpperCase() === "Y"
    ) {
      password += getRandomNum();
      password += getRandomChar();
      password += getRandomlowercase();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      passwordText.value = password;
    } else if (
      ask_2.toUpperCase() === "Y" &&
      ask_3.toUpperCase() === "Y" &&
      ask_4.toUpperCase() === "Y"
    ) {
      password += getRandomChar();
      password += getRandomlowercase();
      password += getRandomUppercase();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      passwordText.value = password;
    } else if (ask_1.toUpperCase() === "Y" && ask_2.toUpperCase() === "Y") {
      password += getRandomNum();
      password += getRandomChar();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      passwordText.value = password;
    } else if (ask_2.toUpperCase() === "Y" && ask_3.toUpperCase() === "Y") {
      password += getRandomChar();
      password += getRandomlowercase();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      passwordText.value = password;
    } else if (ask_3.toUpperCase() === "Y" && ask_4.toUpperCase() === "Y") {
      password += getRandomlowercase();
      password += getRandomUppercase();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      passwordText.value = password;
    } else if (ask_1.toUpperCase() === "Y" && ask_3.toUpperCase() === "Y") {
      password += getRandomNum();
      password += getRandomlowercase();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      passwordText.value = password;
    } else if (ask_1.toUpperCase() === "Y" && ask_4.toUpperCase() === "Y") {
      password += getRandomNum();
      password += getRandomUppercase();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      passwordText.value = password;
    } else if (ask_2.toUpperCase() === "Y" && ask_4.toUpperCase() === "Y") {
      password += getRandomChar();
      password += getRandomUppercase();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      passwordText.value = password;
    } else if (ask_1.toUpperCase() === "Y") {
      password += getRandomNum();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      passwordText.value = password;
    } else if (ask_2.toUpperCase() === "Y") {
      password += getRandomChar();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      passwordText.value = password;
    } else if (ask_3.toUpperCase() === "Y") {
      password += getRandomlowercase();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      passwordText.value = password;
    } else if (ask_4.toUpperCase() === "Y") {
      password += getRandomUppercase();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      passwordText.value = password;
    }
  }
});
