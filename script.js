let btn = document.querySelector("button");
let newP = document.querySelector(".newpw");

let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let signs = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?"];
let upperCase = [
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
let lowerCase = [
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
btn.addEventListener("click", function () {
  getPW();
});
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function getPW() {
  let ask = prompt("How many letters,6-10?");
  if (ask === null || ask === "") {
    return;
  } else if (isNaN(ask)) {
    alert("Please enter the correct length!");
    return;
  } else if (parseInt(ask) < 6 || parseInt(ask) > 10) {
    alert("Please retry the length! The length must be < 6 and >,67 10");
    return;
  }

  let uppercaseChoose = confirm("Would you like to pick Uppercase?");
  let lowercaseChoose = confirm("Would you like to pick Lowerercase?");
  let numberChoose = confirm("Would you like to pick number?");
  let signChoose = confirm("Would you like to pick Sign?");
  let chooseArr = [];
  let text = "";

  if (!uppercaseChoose && !lowercaseChoose && !numberChoose && !signChoose) {
    alert("You must choose at least one of the above!");
    return;
  } else {
    if (uppercaseChoose) {
      text += getRandomElement(upperCase);
      chooseArr = chooseArr.concat(upperCase);
    }
    if (lowercaseChoose) {
      text += getRandomElement(lowerCase);
      chooseArr = chooseArr.concat(lowerCase);
    }
    if (numberChoose) {
      text += getRandomElement(number);
      chooseArr = chooseArr.concat(number);
    }
    if (signChoose) {
      text += getRandomElement(signs);
      chooseArr = chooseArr.concat(signs);
    }
  }
  for (var i = text.length; i < ask; i++) {
    text += chooseArr[Math.floor(Math.random() * chooseArr.length)];
  }
  console.log(text);
  //string to arry and shuffle array to get the random array
  let arrayText = text.split("");
  for (let i = arrayText.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayText[i], arrayText[j]] = [arrayText[j], arrayText[i]];
  }
  //array to string
  return (newP.innerHTML = arrayText.join(""));
}
