var numberOfChars = document.getElementById("numberImput").value;
var submitBtn = document.getElementById("startBtn");
var container = document.getElementById("containerOfCharBoxes");
var addOneMoreChar = document.getElementById("addOneMoreChar");
var startingDiv = document.getElementById("startingDiv");
var messageContainer = document.getElementById("messageContainer");
var message;
var addBtn;
var deleteChar;
var charBoxes = document.getElementsByClassName("charBox");
console.log(numberOfChars);
submitBtn.addEventListener("click", submitBtnClicked);

function submitBtnClicked() {
  let HtmlString = "";

  for (let index = 0; index < numberOfChars; index++) {
    HtmlString +=
      '<div class="boxContainer"><span class="delete">X</span><input type="text" class="charBox" maxlength="1" /> </div>';
  }

  startingDiv.innerHTML = "";
  container.innerHTML = HtmlString;
  addOneMoreChar.innerHTML = '<button id="addBtn">Add</button>';
  messageContainer.innerHTML = '<div class="message" id="message"><div>';

  message = document.getElementById("message");
  addBtn = document.getElementById("addBtn");
  deleteChar = document.getElementsByClassName("delete");
  addEventListeners();
}

function addEventListeners() {
  for (let item of deleteChar) {
    item.addEventListener("click", removeChar);
  }
  charBoxes = document.getElementsByClassName("charBox");
  for (let item of charBoxes) {
    item.addEventListener("input", checkIfValid);
  }
  addBtn.addEventListener("click", addChar);
}

function addChar() {
  let content =
    '<div class="boxContainer"><span class="delete">X</span><input type="text" class="charBox" maxlength="1" /> </div>';
  container.insertAdjacentHTML("beforeend", content);

  deleteChar[deleteChar.length - 1].addEventListener("click", removeChar);
  charBoxes[charBoxes.length - 1].addEventListener("input", checkIfValid);
}

function removeChar() {
  event.target.parentElement.remove();
}

function checkIfValid() {
  let enteredWord = "";
  var letters = /^[A-Za-z]+$/;
  for (let item of charBoxes) {
    if (item.value === "") {
      message.classList.remove("green");
      message.classList.add("red");
      message.innerHTML = "Dont Leave EMpty Cells!";
      return;
    }

    if (item.value.match(letters)) {
      enteredWord += item.value;
      message.classList.remove("red");
      message.classList.add("green");
      message.innerHTML = "OK!";
    } else {
      message.classList.remove("green");
      message.classList.add("red");
      message.innerHTML = "Enter Valid Chars!";
      return;
    }
  }

  if (checkPalindrome(enteredWord)) {
    message.classList.remove("red");
    message.classList.add("green");
    message.innerHTML = "Its a Palyndrome";
  } else {
    message.innerHTML = "Not a Palyndrome";
    message.classList.remove("green");
    message.classList.add("red");
  }
}

function checkPalindrome(str) {
  return str == str.split("").reverse().join("");
}
