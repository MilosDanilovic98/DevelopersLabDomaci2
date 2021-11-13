const questions = [
  {
    question: "What’s the shortcut for the “copy” function on most computers?",
    offeredAnswers: [
      { answerText: "alt+x", isTrue: false },
      { answerText: "ctrl+c", isTrue: true },
      { answerText: "ctrl+d", isTrue: false },
      { answerText: "shift+c", isTrue: false },
    ],
    correctAnswers: 1,
  },
  {
    question: "What does “HTTP” stand for?",
    offeredAnswers: [
      { answerText: "HyperText Transfer Protocol", isTrue: true },
      { answerText: "HyperText Transformation Protocol", isTrue: false },
      { answerText: "Html Transfer Protocol", isTrue: false },
      { answerText: "HyperText Transfer Part", isTrue: false },
    ],
    correctAnswers: 1,
  },
  {
    question: "Which email service is owned by Microsoft?",
    offeredAnswers: [
      { answerText: "Hotmail", isTrue: true },
      { answerText: "Gmail", isTrue: false },
      { answerText: "MeMail", isTrue: false },
      { answerText: "YahooMail", isTrue: false },
    ],
    correctAnswers: 1,
  },
  {
    question:
      "Google Chrome, Safari, Firefox, and Explorer are different types of what?",
    offeredAnswers: [
      { answerText: "Browsers", isTrue: true },
      { answerText: "Games", isTrue: false },
      { answerText: "Programming Languages", isTrue: false },
      { answerText: "Search Engines", isTrue: false },
    ],
    correctAnswers: 1,
  },
  {
    question:
      "Which information storage is used to store short-term running programs and data in a computer?",
    offeredAnswers: [
      { answerText: "RAM", isTrue: true },
      { answerText: "HDD", isTrue: false },
      { answerText: "ROM", isTrue: false },
      { answerText: "CD-ROM", isTrue: false },
    ],
    correctAnswers: 1,
  },
  {
    question: "What are the primitive JS types?",
    offeredAnswers: [
      { answerText: "number", isTrue: true },
      { answerText: "object", isTrue: false },
      { answerText: "boolean", isTrue: true },
      { answerText: "array", isTrue: false },
    ],
    correctAnswers: 2,
  },
  {
    question: "How are color images saved in computer graphics?",
    offeredAnswers: [
      { answerText: "1D Vectors", isTrue: true },
      { answerText: "3D Vectors", isTrue: false },
      { answerText: "Matrices made out of 1D arrays", isTrue: true },
      { answerText: "1.5D Vestors", isTrue: false },
    ],
    correctAnswers: 2,
  },
  {
    question:
      "The current richest man in the world Jeff Bezos is CEO and President of which online retailer?",
    offeredAnswers: [
      { answerText: "Amazon", isTrue: true },
      { answerText: "AliBaba", isTrue: false },
      { answerText: "Ebay", isTrue: false },
      { answerText: "Patuljak.me", isTrue: false },
    ],
    correctAnswers: 1,
  },
  {
    question: "What does CPU stand for?",
    offeredAnswers: [
      { answerText: "Central processing unit", isTrue: true },
      { answerText: "Computer processing unit", isTrue: false },
      { answerText: "Computer processor unit", isTrue: false },
      { answerText: "Central processed unity", isTrue: false },
    ],
    correctAnswers: 1,
  },
  {
    question:
      "What is the name of the classic 1972 arcade game based on table tennis?",
    offeredAnswers: [
      { answerText: "Pong", isTrue: true },
      { answerText: "Tong", isTrue: false },
      { answerText: "Kong", isTrue: false },
      { answerText: "Mong", isTrue: false },
    ],
    correctAnswers: 1,
  },
];
var answerBtn = document.getElementById("answerBtn");
var options = document.getElementsByClassName("option");
var questionText = document.getElementById("questionText");
var scoreElement = document.getElementById("score");
var scoreInt = 0;
var rq;
var counter = 0;
answerBtn.addEventListener("click", startGameEvent);

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function optionClicked(e) {
  if (e.target.classList.contains("selected")) {
    e.target.classList.remove("selected");
  } else {
    e.target.classList.add("selected");
  }
}

function optionAddEventListeners() {
  for (let item of options) {
    item.addEventListener("click", optionClicked);
  }
}

function checkAnswers(e) {
  if (counter > 0) {
    e = rq[counter - 1];
  }

  var isCorrect = true;
  let selectedAnswers = [];
  for (let item of options) {
    if (item.classList.contains("selected")) {
      selectedAnswers.push(item.innerHTML);
    }
  }

  selectedAnswers.forEach((selected) => {
    e.offeredAnswers.forEach((answer) => {
      if (
        (answer.answerText === selected && !answer.isTrue) ||
        selectedAnswers.length < e.correctAnswers
      ) {
        console.log("ssss");
        isCorrect = false;
      }
    });
  });

  if (selectedAnswers.length > 0) {
    console.log(isCorrect);
    if (isCorrect) {
      scoreInt++;
      console.log(score.toString());
      scoreElement.innerHTML = scoreInt;
    }
    return isCorrect;
  } else {
    isCorrect = false;
    console.log(isCorrect);
    alert("Your final score is " + scoreInt);
    location.reload();
    return isCorrect;
  }
}

function startGame() {
  rq = shuffle(questions);
  optionAddEventListeners();
  let question = rq[counter];
  console.log(question);
  questionText.innerHTML = question.question;
  let i = 0;
  for (let item of options) {
    item.innerHTML = question.offeredAnswers[i].answerText;
    i++;
  }
  console.log(counter);
  counter++;
  answerBtn.innerHTML = "ANSWER";
}
function startGameEvent() {
  startGame();
  answerBtn.removeEventListener("click", startGameEvent);
  answerBtn.addEventListener("click", nextQuestion);
}
function nextQuestion() {
  if (counter === 10) {
    alert("Your final score is " + scoreInt);
    location.reload();
  }

  checkAnswers();
  console.log(counter);
  let question = rq[counter];
  console.log(question);
  questionText.innerHTML = question.question;
  let i = 0;
  for (let item of options) {
    if (item.classList.contains("selected")) {
      item.classList.remove("selected");
    }
    item.innerHTML = question.offeredAnswers[i].answerText;

    i++;
  }
  counter++;
}
