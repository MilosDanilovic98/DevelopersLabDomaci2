const questions = [
  {
    question: "What’s the shortcut for the “copy” function on most computers?",
    offeredAnswers: [
      { answerText: "alt+x", isTrue: false },
      { answerText: "ctrl+c", isTrue: true },
      { answerText: "ctrl+d", isTrue: false },
      { answerText: "shift+c", isTrue: false },
    ],
  },
  {
    question: "What does “HTTP” stand for?",
    offeredAnswers: [
      { answerText: "HyperText Transfer Protocol", isTrue: true },
      { answerText: "HyperText Transformation Protocol", isTrue: false },
      { answerText: "Html Transfer Protocol", isTrue: false },
      { answerText: "HyperText Transfer Part", isTrue: false },
    ],
  },
  {
    question: "Which email service is owned by Microsoft?",
    offeredAnswers: [
      { answerText: "Hotmail", isTrue: true },
      { answerText: "Gmail", isTrue: false },
      { answerText: "MeMail", isTrue: false },
      { answerText: "YahooMail", isTrue: false },
    ],
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
  },
  {
    question: "What are the primitive JS types?",
    offeredAnswers: [
      { answerText: "number", isTrue: true },
      { answerText: "object", isTrue: false },
      { answerText: "boolean", isTrue: true },
      { answerText: "array", isTrue: false },
    ],
  },
  {
    question: "How are color images saved in computer graphics?",
    offeredAnswers: [
      { answerText: "1D Vectors", isTrue: true },
      { answerText: "3D Vectors", isTrue: false },
      { answerText: "Matrices made out of 1D arrays", isTrue: true },
      { answerText: "1.5D Vestors", isTrue: false },
    ],
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
  },
  {
    question: "What does CPU stand for?",
    offeredAnswers: [
      { answerText: "Central processing unit", isTrue: true },
      { answerText: "Computer processing unit", isTrue: false },
      { answerText: "Computer processor unit", isTrue: false },
      { answerText: "Central processed unity", isTrue: false },
    ],
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
  },
];

var options = document.getElementsByClassName("option");

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
optionAddEventListeners();
