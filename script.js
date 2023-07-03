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

let password = "";
generateBtn.addEventListener("click", function () {
  let index = 0;
  function typewriter() {
    if (index < password.length) {
      passwordText.value += password[index];
      index++;
      setTimeout(typewriter, 200);
    }
  }
  if (password.length > 0) {
    passwordText.value = "";
    password = "";
  }

  // let ask_1;
  // let ask_2;
  // let ask_3;
  // let ask_4;
  // function checkAnswer(answer) {
  //   while (answer.toUpperCase() !== "Y" && answer.toUpperCase() !== "N") {
  //     answer = prompt("Enter Y or N");
  //     return answer;
  //     if (answer === null) {
  //       return;
  //     }
  //   }
  // }

  let ask = prompt("Please enter the length of password");
  if (ask === null) {
    return;
  }
  while (ask < 8 || ask > 128) {
    ask = prompt(
      "Password should be at least 8 characters and no more than 128 characters"
    );
    if (ask === null) {
      return;
    }
  }
  if (Number(ask) >= 8 || Number(ask) <= 128) {
    let ask_1 = prompt("Include numbers, Y OR N?");
    if (ask_1 === null) {
      return;
    }
    // checkAnswer(ask_1);
    while (ask_1.toUpperCase() !== "Y" && ask_1.toUpperCase() !== "N") {
      ask_1 = prompt("Enter Y or N");
      if (ask_1 === null) {
        return;
      }
    }
    let ask_2 = prompt("Include lowercase, Y OR N?");
    if (ask_2 === null) {
      return;
    }
    // checkAnswer(ask_2);
    while (ask_2.toUpperCase() !== "Y" && ask_2.toUpperCase() !== "N") {
      ask_2 = prompt("Enter Y or N");
      if (ask_2 === null) {
        return;
      }
    }
    let ask_3 = prompt("Include uppercase, Y OR N?");
    if (ask_3 === null) {
      return;
    }
    // checkAnswer(ask_3);
    while (ask_3.toUpperCase() !== "Y" && ask_3.toUpperCase() !== "N") {
      ask_3 = prompt("Enter Y or N");
      if (ask_3 === null) {
        return;
      }
    }
    let ask_4 = prompt("Include special symbols, Y OR N?");
    if (ask_4 === null) {
      return;
    }
    // checkAnswer(ask_4);
    while (ask_4.toUpperCase() !== "Y" && ask_4.toUpperCase() !== "N") {
      ask_4 = prompt("Enter Y or N");
      if (ask_4 === null) {
        return;
      }
    }
    if (
      ask_1.toUpperCase() === "Y" &&
      ask_2.toUpperCase() === "Y" &&
      ask_3.toUpperCase() === "Y" &&
      ask_4.toUpperCase() === "Y"
    ) {
      let question_1 = prompt("How many numbers?");
      if (question_1 === null) {
        return;
      }
      let question_2 = prompt("How many lowercase?");
      if (question_2 === null) {
        return;
      }
      let question_3 = prompt("How many uppercase?");
      if (question_3 === null) {
        return;
      }
      let question_4 = prompt("How many special characters?");
      if (question_4 === null) {
        return;
      }
      function checkLength() {
        if (password.length !== parseInt(ask)) {
          alert("Invalid Length");
        } else {
          typewriter();
          console.log(password);
        }
      }
      // getRandomItems(num, question_1);
      // getRandomItems(lowercase_char, question_2);
      // getRandomItems(uppercase_char, question_3);
      // getRandomItems(cha, question_4);
      let getRandomNum = function randomNum() {
        let num = "";
        for (let i = 0; i < question_1; i++) {
          let id = Math.floor(Math.random() * 10);
          num += id;
        }
        return num;
      };
      let getRandomlowercase = function randomLowercase() {
        let lower = "";
        for (let i = 0; i < question_2; i++) {
          let id = Math.floor(Math.random() * lowercase_char.length);
          lower += lowercase_char[id];
        }
        return lower;
      };
      let getRandomUppercase = function randomUppercase() {
        let upper = "";
        for (let i = 0; i < question_3; i++) {
          let id = Math.floor(Math.random() * uppercase_char.length);
          upper += uppercase_char[id];
        }
        return upper;
      };
      let getRandomChar = function randomChar() {
        let char = "";
        for (let i = 0; i < question_4; i++) {
          let id = Math.floor(Math.random() * cha.length);
          char += cha[id];
        }
        return char;
      };

      password +=
        getRandomNum() +
        getRandomChar() +
        getRandomUppercase() +
        getRandomlowercase();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      checkLength();
    } else if (
      ask_1.toUpperCase() === "Y" &&
      ask_3.toUpperCase() === "Y" &&
      ask_4.toUpperCase() === "Y"
    ) {
      let question_1 = prompt("How many numbers?");
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
      let getRandomUppercase = function randomUppercase() {
        let upper = "";
        for (let i = 0; i < question_3; i++) {
          let id = Math.floor(Math.random() * uppercase_char.length);
          upper += uppercase_char[id];
        }
        return upper;
      };
      let getRandomChar = function randomChar() {
        let char = "";
        for (let i = 0; i < question_4; i++) {
          let id = Math.floor(Math.random() * cha.length);
          char += cha[id];
        }
        return char;
      };
      password += getRandomNum() + getRandomUppercase() + getRandomChar();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      checkLength();
    } else if (
      ask_1.toUpperCase() === "Y" &&
      ask_2.toUpperCase() === "Y" &&
      ask_3.toUpperCase() === "Y"
    ) {
      let question_1 = prompt("How many numbers?");
      let question_2 = prompt("How many lowercase?");
      let question_3 = prompt("How many uppercase?");
      let getRandomNum = function randomNum() {
        let num = "";
        for (let i = 0; i < question_1; i++) {
          let id = Math.floor(Math.random() * 10);
          num += id;
        }
        return num;
      };
      let getRandomlowercase = function randomLowercase() {
        let lower = "";
        for (let i = 0; i < question_2; i++) {
          let id = Math.floor(Math.random() * lowercase_char.length);
          lower += lowercase_char[id];
        }
        return lower;
      };
      let getRandomUppercase = function randomUppercase() {
        let upper = "";
        for (let i = 0; i < question_3; i++) {
          let id = Math.floor(Math.random() * uppercase_char.length);
          upper += uppercase_char[id];
        }
        return upper;
      };
      password += getRandomNum() + getRandomUppercase() + getRandomlowercase();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      checkLength();
    } else if (
      ask_2.toUpperCase() === "Y" &&
      ask_3.toUpperCase() === "Y" &&
      ask_4.toUpperCase() === "Y"
    ) {
      let question_2 = prompt("How many lowercase?");
      let question_3 = prompt("How many uppercase?");
      let question_4 = prompt("How many special characters?");
      let getRandomlowercase = function randomLowercase() {
        let lower = "";
        for (let i = 0; i < question_2; i++) {
          let id = Math.floor(Math.random() * lowercase_char.length);
          lower += lowercase_char[id];
        }
        return lower;
      };
      let getRandomUppercase = function randomUppercase() {
        let upper = "";
        for (let i = 0; i < question_3; i++) {
          let id = Math.floor(Math.random() * uppercase_char.length);
          upper += uppercase_char[id];
        }
        return upper;
      };
      let getRandomChar = function randomChar() {
        let char = "";
        for (let i = 0; i < question_4; i++) {
          let id = Math.floor(Math.random() * cha.length);
          char += cha[id];
        }
        return char;
      };
      password += getRandomChar() + getRandomlowercase() + getRandomUppercase();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      checkLength();
    } else if (ask_1.toUpperCase() === "Y" && ask_2.toUpperCase() === "Y") {
      let question_1 = prompt("How many numbers?");
      let question_2 = prompt("How many lowercase?");
      let getRandomNum = function randomNum() {
        let num = "";
        for (let i = 0; i < question_1; i++) {
          let id = Math.floor(Math.random() * 10);
          num += id;
        }
        return num;
      };
      let getRandomlowercase = function randomLowercase() {
        let lower = "";
        for (let i = 0; i < question_2; i++) {
          let id = Math.floor(Math.random() * lowercase_char.length);
          lower += lowercase_char[id];
        }
        return lower;
      };
      password += getRandomNum() + getRandomlowercase();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      checkLength();
    } else if (ask_2.toUpperCase() === "Y" && ask_3.toUpperCase() === "Y") {
      let question_2 = prompt("How many lowercase?");
      let question_3 = prompt("How many uppercase?");
      let getRandomlowercase = function randomLowercase() {
        let lower = "";
        for (let i = 0; i < question_2; i++) {
          let id = Math.floor(Math.random() * lowercase_char.length);
          lower += lowercase_char[id];
        }
        return lower;
      };
      let getRandomUppercase = function randomUppercase() {
        let upper = "";
        for (let i = 0; i < question_3; i++) {
          let id = Math.floor(Math.random() * uppercase_char.length);
          upper += uppercase_char[id];
        }
        return upper;
      };
      password += getRandomUppercase() + getRandomlowercase();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      checkLength();
    } else if (ask_3.toUpperCase() === "Y" && ask_4.toUpperCase() === "Y") {
      let question_3 = prompt("How many uppercase?");
      let question_4 = prompt("How many special characters?");
      let getRandomUppercase = function randomUppercase() {
        let upper = "";
        for (let i = 0; i < question_3; i++) {
          let id = Math.floor(Math.random() * uppercase_char.length);
          upper += uppercase_char[id];
        }
        return upper;
      };
      let getRandomChar = function randomChar() {
        let char = "";
        for (let i = 0; i < question_4; i++) {
          let id = Math.floor(Math.random() * cha.length);
          char += cha[id];
        }
        return char;
      };
      password += getRandomChar() + getRandomUppercase();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      checkLength();
    } else if (ask_1.toUpperCase() === "Y" && ask_3.toUpperCase() === "Y") {
      let question_1 = prompt("How many numbers?");
      let question_3 = prompt("How many uppercase?");
      let getRandomNum = function randomNum() {
        let num = "";
        for (let i = 0; i < question_1; i++) {
          let id = Math.floor(Math.random() * 10);
          num += id;
        }
        return num;
      };
      let getRandomUppercase = function randomUppercase() {
        let upper = "";
        for (let i = 0; i < question_3; i++) {
          let id = Math.floor(Math.random() * uppercase_char.length);
          upper += uppercase_char[id];
        }
        return upper;
      };
      password += getRandomNum() + getRandomUppercase();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      checkLength();
    } else if (ask_1.toUpperCase() === "Y" && ask_4.toUpperCase() === "Y") {
      let question_1 = prompt("How many numbers?");
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
        for (let i = 0; i < question_4; i++) {
          let id = Math.floor(Math.random() * cha.length);
          char += cha[id];
        }
        return char;
      };
      password += getRandomNum() + getRandomChar();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      checkLength();
    } else if (ask_2.toUpperCase() === "Y" && ask_4.toUpperCase() === "Y") {
      let question_2 = prompt("How many lowercase?");
      let question_4 = prompt("How many special characters?");
      let getRandomlowercase = function randomLowercase() {
        let lower = "";
        for (let i = 0; i < question_2; i++) {
          let id = Math.floor(Math.random() * lowercase_char.length);
          lower += lowercase_char[id];
        }
        return lower;
      };
      let getRandomChar = function randomChar() {
        let char = "";
        for (let i = 0; i < question_4; i++) {
          let id = Math.floor(Math.random() * cha.length);
          char += cha[id];
        }
        return char;
      };
      password += getRandomChar() + getRandomlowercase();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      checkLength();
    } else if (ask_1.toUpperCase() === "Y") {
      let question_1 = prompt("How many numbers?");
      let getRandomNum = function randomNum() {
        let num = "";
        for (let i = 0; i < question_1; i++) {
          let id = Math.floor(Math.random() * 10);
          num += id;
        }
        return num;
      };
      password += getRandomNum();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      checkLength();
    } else if (ask_2.toUpperCase() === "Y") {
      let question_2 = prompt("How many lowercase?");
      let getRandomlowercase = function randomLowercase() {
        let lower = "";
        for (let i = 0; i < question_2; i++) {
          let id = Math.floor(Math.random() * lowercase_char.length);
          lower += lowercase_char[id];
        }
        return lower;
      };
      password += getRandomlowercase();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      checkLength();
    } else if (ask_3.toUpperCase() === "Y") {
      let question_3 = prompt("How many uppercase?");
      let getRandomUppercase = function randomUppercase() {
        let upper = "";
        for (let i = 0; i < question_3; i++) {
          let id = Math.floor(Math.random() * uppercase_char.length);
          upper += uppercase_char[id];
        }
        return upper;
      };

      password += getRandomUppercase();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      checkLength();
    } else if (ask_4.toUpperCase() === "Y") {
      let question_4 = prompt("How many special characters?");
      let getRandomChar = function randomChar() {
        let char = "";
        for (let i = 0; i < question_4; i++) {
          let id = Math.floor(Math.random() * cha.length);
          char += cha[id];
        }
        return char;
      };
      password += getRandomChar();
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      checkLength();
    }
    generateBtn.innerHTML = "Regenerate Password";
  }
});
