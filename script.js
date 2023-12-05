const questions = [
  {
    question: "An Example of Amphibians",
    answer: [
      { text: "Tiger", correct: false },
      { text: "Tortoise", correct: true },
      { text: "Fish", correct: false },
      { text: "Goat", correct: false },
    ],
  },
  {
    question: "An Example of Amphibians",
    answer: [
      { text: "Tiger", correct: false },
      { text: "Tortoise", correct: true },
      { text: "Fish", correct: false },
      { text: "Goat", correct: false },
    ],
  },
  {
    question: "An Example of Amphibians",
    answer: [
      { text: "Tiger", correct: false },
      { text: "Tortoise", correct: true },
      { text: "Fish", correct: false },
      { text: "Goat", correct: false },
    ],
  },
  {
    question: "An Example of Amphibians",
    answer: [
      { text: "Tiger", correct: false },
      { text: "Tortoise", correct: true },
      { text: "Fish", correct: false },
      { text: "Goat", correct: false },
    ],
  },
  {
    question: "An Example of Amphibians",
    answer: [
      { text: "Tiger", correct: false },
      { text: "Tortoise", correct: true },
      { text: "Fish", correct: false },
      { text: "Goat", correct: false },
    ],
  },
  {
    question: "An Example of Amphibians",
    answer: [
      { text: "Tiger", correct: false },
      { text: "Tortoise", correct: true },
      { text: "Fish", correct: false },
      { text: "Goat", correct: false },
    ],
  },
];

const queTag = document.getElementById("question");
const ansBtns = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let questionIndex = 0;
let score = 0;

function startQuiz() {
  resetQuestion();
  if (questionIndex === questions.length - 1) {
    //all questions are attempted
    displayScoreCard();
    return;
  }
  queTag.innerHTML =
    questionIndex + 1 + "." + questions[questionIndex].question;
  //use forEach loop to print answers
  questions[questionIndex].answer.forEach((option) => {
    let opt = document.createElement("button");
    opt.classList.add("btn");
    opt.innerHTML = option.text;
    if (option.correct) {
      opt.dataset.correct = option.correct;
    }
    opt.addEventListener("click", selectAns);
    ansBtns.appendChild(opt);
  });
  //   nextBtn.style.display = "block";
}
startQuiz();

function resetQuestion() {
  nextBtn.style.display = "none";
  ansBtns.innerHTML = "";
}
nextBtn.addEventListener("click", () => {
  questionIndex = questionIndex + 1;
  startQuiz();
});

function displayScoreCard() {
  queTag.innerHTML = "Score is :10";
}
function selectAns(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct;
  if (isCorrect) {
    selectedBtn.classList.add("correct");
  } else {
    selectedBtn.classList.add("incorrect");
  }
  nextBtn.style.display = "block";
  Array.from(ansBtns.children).forEach((btn) => {
    if (btn.dataset.correct) {
      btn.classList.add("correct");
    }
  });
}
