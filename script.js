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

  function checkAnswer(answer) {
    while (true) {
      answer = prompt("Enter Y or N");
      if (isValid) {
        return answer;
      }
    }
  }
  function isValid(val) {
    return val.toUpperCase() === "Y" || val.toUpperCase() === "N";
  }
  let ask = prompt("Please enter the length of password");
  if (ask === null) {
    return;
  }
  function getRandomNum(question) {
    let num = "";
    for (let i = 0; i < question; i++) {
      let id = Math.floor(Math.random() * 10);
      num += id;
    }
    return num;
  }
  function getRandomlowercase(question) {
    let lower = "";
    for (let i = 0; i < question; i++) {
      let id = Math.floor(Math.random() * lowercase_char.length);
      lower += lowercase_char[id];
    }
    return lower;
  }
  function getRandomUppercase(question) {
    let upper = "";
    for (let i = 0; i < question; i++) {
      let id = Math.floor(Math.random() * uppercase_char.length);
      upper += uppercase_char[id];
    }
    return upper;
  }
  function getRandomChar(question) {
    let char = "";
    for (let i = 0; i < question; i++) {
      let id = Math.floor(Math.random() * cha.length);
      char += cha[id];
    }
    return char;
  }
  function randomPassWord() {
    return (password = password
      .split("")
      .sort(() => Math.random() - 0.5)
      .join(""));
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
    if (!isValid(ask_1)) {
      ask_1 = checkAnswer(ask_1);
    }

    let ask_2 = prompt("Include lowercase, Y OR N?");
    if (ask_2 === null) {
      return;
    }
    if (!isValid(ask_2)) {
      ask_2 = checkAnswer(ask_2);
    }

    let ask_3 = prompt("Include uppercase, Y OR N?");
    if (ask_3 === null) {
      return;
    }
    if (!isValid(ask_3)) {
      ask_3 = checkAnswer(ask_3);
    }

    let ask_4 = prompt("Include special symbols, Y OR N?");
    if (ask_4 === null) {
      return;
    }
    if (!isValid(ask_4)) {
      ask_4 = checkAnswer(ask_4);
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
        let inputLength =
          parseInt(question_1) +
          parseInt(question_2) +
          parseInt(question_3) +
          parseInt(question_4);
        console.log(inputLength);
        console.log(parseInt(ask));
        if (parseInt(ask) !== inputLength) {
          alert("Invalid Length");
          return
        } else {
          typewriter();
          console.log(password);
        }
      }
      password +=
        getRandomNum(question_1) +
        getRandomChar(question_4) +
        getRandomUppercase(question_3) +
        getRandomlowercase(question_2);
      randomPassWord();
      checkLength();
    } else if (
      ask_1.toUpperCase() === "Y" &&
      ask_2.toUpperCase() === "Y" &&
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
      let question_4 = prompt("How many special characters?");
      if (question_4 === null) {
        return;
      }
      function checkLength() {
        let inputLength =
          parseInt(question_1) + parseInt(question_2) + parseInt(question_4);
        console.log(inputLength);
        console.log(parseInt(ask));
        if (parseInt(ask) !== inputLength) {
          alert("Invalid Length");
          return
        } else {
          typewriter();
          console.log(password);
        }
      }
      password +=
        getRandomNum(question_1) +
        getRandomlowercase(question_2) +
        getRandomChar(question_4);
      randomPassWord();
      checkLength();
    } else if (
      ask_1.toUpperCase() === "Y" &&
      ask_3.toUpperCase() === "Y" &&
      ask_4.toUpperCase() === "Y"
    ) {
      let question_1 = prompt("How many numbers?");
      if (question_1 === null) {
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
        let inputLength =
          parseInt(question_1) + parseInt(question_3) + parseInt(question_4);
        console.log(inputLength);
        console.log(parseInt(ask));
        if (parseInt(ask) !== inputLength) {
          alert("Invalid Length");
          return
        } else {
          typewriter();
          console.log(password);
        }
      }
      password +=
        getRandomNum(question_1) +
        getRandomUppercase(question_3) +
        getRandomChar(question_4);
      randomPassWord();
      checkLength();
    } else if (
      ask_1.toUpperCase() === "Y" &&
      ask_2.toUpperCase() === "Y" &&
      ask_3.toUpperCase() === "Y"
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
      function checkLength() {
        let inputLength =
          parseInt(question_1) + parseInt(question_2) + parseInt(question_3);
        console.log(inputLength);
        console.log(parseInt(ask));
        if (parseInt(ask) !== inputLength) {
          alert("Invalid Length");
          return
        } else {
          typewriter();
          console.log(password);
        }
      }
      password +=
        getRandomNum(question_1) +
        getRandomUppercase(question_3) +
        getRandomlowercase(question_2);
      randomPassWord();
      checkLength();
    } else if (
      ask_2.toUpperCase() === "Y" &&
      ask_3.toUpperCase() === "Y" &&
      ask_4.toUpperCase() === "Y"
    ) {
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
        let inputLength =
          parseInt(question_2) + parseInt(question_3) + parseInt(question_4);
        console.log(inputLength);
        console.log(parseInt(ask));
        if (parseInt(ask) !== inputLength) {
          alert("Invalid Length");
          return
        } else {
          typewriter();
          console.log(password);
        }
      }
      password +=
        getRandomChar(question_4) +
        getRandomlowercase(question_2) +
        getRandomUppercase(question_3);
      randomPassWord();
      checkLength();
    } else if (ask_1.toUpperCase() === "Y" && ask_2.toUpperCase() === "Y") {
      let question_1 = prompt("How many numbers?");
      if (question_1 === null) {
        return;
      }
      let question_2 = prompt("How many lowercase?");
      if (question_2 === null) {
        return;
      }
      function checkLength() {
        let inputLength = parseInt(question_1) + parseInt(question_2);
        console.log(inputLength);
        console.log(parseInt(ask));
        if (parseInt(ask) !== inputLength) {
          alert("Invalid Length");
          return
        } else {
          typewriter();
          console.log(password);
        }
      }
      password += getRandomNum(question_1) + getRandomlowercase(question_2);
      randomPassWord();
      checkLength();
    } else if (ask_2.toUpperCase() === "Y" && ask_3.toUpperCase() === "Y") {
      let question_2 = prompt("How many lowercase?");
      if (question_2 === null) {
        return;
      }
      let question_3 = prompt("How many uppercase?");
      if (question_3 === null) {
        return;
      }
      function checkLength() {
        let inputLength = parseInt(question_2) + parseInt(question_3);
        console.log(inputLength);
        console.log(parseInt(ask));
        if (parseInt(ask) !== inputLength) {
          alert("Invalid Length");
          return
        } else {
          typewriter();
          console.log(password);
        }
      }
      password +=
        getRandomUppercase(question_3) + getRandomlowercase(question_2);
      randomPassWord();
      checkLength();
    } else if (ask_3.toUpperCase() === "Y" && ask_4.toUpperCase() === "Y") {
      let question_3 = prompt("How many uppercase?");
      if (question_3 === null) {
        return;
      }
      let question_4 = prompt("How many special characters?");
      if (question_4 === null) {
        return;
      }
      function checkLength() {
        let inputLength = parseInt(question_3) + parseInt(question_4);
        console.log(inputLength);
        console.log(parseInt(ask));
        if (parseInt(ask) !== inputLength) {
          alert("Invalid Length");
          return
        } else {
          typewriter();
          console.log(password);
        }
      }
      password += getRandomChar(question_4) + getRandomUppercase(question_3);
      randomPassWord();
      checkLength();
    } else if (ask_1.toUpperCase() === "Y" && ask_3.toUpperCase() === "Y") {
      let question_1 = prompt("How many numbers?");
      if (question_1 === null) {
        return;
      }
      let question_3 = prompt("How many uppercase?");
      if (question_3 === null) {
        return;
      }
      function checkLength() {
        let inputLength = parseInt(question_1) + parseInt(question_3);
        console.log(inputLength);
        console.log(parseInt(ask));
        if (parseInt(ask) !== inputLength) {
          alert("Invalid Length");
          return
        } else {
          typewriter();
          console.log(password);
        }
      }
      password += getRandomNum(question_1) + getRandomUppercase(question_3);
      randomPassWord();
      checkLength();
    } else if (ask_1.toUpperCase() === "Y" && ask_4.toUpperCase() === "Y") {
      let question_1 = prompt("How many numbers?");
      if (question_1 === null) {
        return;
      }
      let question_4 = prompt("How many special characters?");
      if (question_4 === null) {
        return;
      }
      function checkLength() {
        let inputLength = parseInt(question_1) + parseInt(question_4);
        console.log(inputLength);
        console.log(parseInt(ask));
        if (parseInt(ask) !== inputLength) {
          alert("Invalid Length");
          return
        } else {
          typewriter();
          console.log(password);
        }
      }
      password += getRandomNum(question_1) + getRandomChar(question_4);
      randomPassWord();
      checkLength();
    } else if (ask_2.toUpperCase() === "Y" && ask_4.toUpperCase() === "Y") {
      let question_2 = prompt("How many lowercase?");
      if (question_2 === null) {
        return;
      }
      let question_4 = prompt("How many special characters?");
      if (question_4 === null) {
        return;
      }
      function checkLength() {
        let inputLength = parseInt(question_2) + parseInt(question_4);
        console.log(inputLength);
        console.log(parseInt(ask));
        if (parseInt(ask) !== inputLength) {
          alert("Invalid Length");
          return
        } else {
          typewriter();
          console.log(password);
        }
      }
      password += getRandomChar(question_4) + getRandomlowercase(question_2);
      randomPassWord();
      checkLength();
    } else if (ask_1.toUpperCase() === "Y") {
      let question_1 = prompt("How many numbers?");
      if (question_1 === null) {
        return;
      }
      function checkLength() {
        let inputLength = parseInt(question_1);
        console.log(inputLength);
        console.log(parseInt(ask));
        if (parseInt(ask) !== inputLength) {
          alert("Invalid Length");
          return
        } else {
          typewriter();
          console.log(password);
        }
      }
      password += getRandomNum(question_1);
      randomPassWord();
      checkLength();
    } else if (ask_2.toUpperCase() === "Y") {
      let question_2 = prompt("How many lowercase?");
      if (question_2 === null) {
        return;
      }
      function checkLength() {
        let inputLength = parseInt(question_2);
        console.log(inputLength);
        console.log(parseInt(ask));
        if (parseInt(ask) !== inputLength) {
          alert("Invalid Length");
          return
        } else {
          typewriter();
          console.log(password);
        }
      }
      password += getRandomlowercase(question_2);
      randomPassWord();
      checkLength();
    } else if (ask_3.toUpperCase() === "Y") {
      let question_3 = prompt("How many uppercase?");
      if (question_3 === null) {
        return;
      }
      function checkLength() {
        let inputLength = parseInt(question_3);
        console.log(inputLength);
        console.log(parseInt(ask));
        if (parseInt(ask) !== inputLength) {
          alert("Invalid Length");
          return
        } else {
          typewriter();
          console.log(password);
        }
      }
      password += getRandomUppercase(question_3);
      randomPassWord();
      checkLength();
    } else if (ask_4.toUpperCase() === "Y") {
      let question_4 = prompt("How many special characters?");
      if (question_4 === null) {
        return;
      }
      function checkLength() {
        let inputLength = parseInt(question_4);
        console.log(inputLength);
        console.log(parseInt(ask));
        if (parseInt(ask) !== inputLength) {
          alert("Invalid Length");
          return
        } else {
          typewriter();
          console.log(password);
        }
      }
      password += getRandomChar(question_4);
      randomPassWord();
      checkLength();
    }
    generateBtn.innerHTML = "Regenerate Password";
  }
});
