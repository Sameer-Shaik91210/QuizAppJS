const questions = [
  {
    question: "Fathometer is used to measure",
    answer: [
      { text: " Earthquakes", correct: false },
      { text: " Rainfall", correct: false },
      { text: "Ocean depth", correct: true },
      { text: "Sound intensity", correct: false },
    ],
  },
  {
    question: "6 months day and 6 months night - Country Name?",
    answer: [
      { text: "Nepal", correct: false },
      { text: " Tibet", correct: false },
      { text: "Norway ", correct: true },
      { text: " Iceland", correct: false },
    ],
  },
  {
    question: "“One People, One State, One leader” was the policy of",
    answer: [
      { text: "Stalin ", correct: false },
      { text: "Hitler", correct: true },
      { text: "Lenin", correct: false },
      { text: "Mussolin", correct: false },
    ],
  },
  {
    question: "Which is a green planet in the solar system?",
    answer: [
      { text: "Pluto ", correct: false },
      { text: "Venus", correct: false },
      { text: "Uranus ", correct: true },
      { text: " Mars", correct: false },
    ],
  },
  {
    question: "An astronaut in outer space will observe sky as",
    answer: [
      { text: "White", correct: false },
      { text: " Black ", correct: true },
      { text: " Blue", correct: false },
      { text: " Red ", correct: false },
    ],
  },
  {
    question: "Who is known as 'the father of Indian missile technology'?",
    answer: [
      { text: "Dr. U.R. Rao", correct: false },
      { text: "Dr. A.P.J. Abdul Kalam ", correct: true },
      { text: "Dr. Chidambaram", correct: false },
      { text: " Dr. Homi Bhabha", correct: false },
    ],
  },
  {
    question: `Which country has "This is the root of all evil" written on its coins?`,
    answer: [
      { text: " Italy", correct: false },
      { text: "Cuba", correct: false },
      { text: "Russia", correct: false },
      { text: "Vatican City ", correct: true },
    ],
  },
  {
    question: "The most important small scale industry in india is the ",
    answer: [
      { text: " Textile Industry", correct: false },
      { text: "Paper Industry", correct: false },
      { text: "Handloom Industry ", correct: true },
      { text: "Jute industry", correct: false },
    ],
  },
  {
    question: "Which is considered as the biggest port of India?",
    answer: [
      { text: " Kolkata", correct: false },
      { text: "Cochin", correct: false },
      { text: "Chennai", correct: false },
      { text: " Mumbai", correct: true },
    ],
  },
  {
    question: "Bats can fly in the dark because",
    answer: [
      { text: "they have a better vision in the dark", correct: false },
      { text: " the light startles in them", correct: false },
      {
        text: "they produce high pitched sounds called ultrasonics",
        correct: true,
      },
      { text: " none of the above", correct: false },
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
  if (questionIndex === questions.length) {
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
  queTag.innerHTML = "";
}
nextBtn.addEventListener("click", () => {
  questionIndex = questionIndex + 1;
  startQuiz();
});

function displayScoreCard() {
  document.getElementById("title").innerHTML = "Score Card";
  const scoreCard = document.createElement("span");
  scoreCard.classList.add("scoreCard");
  scoreCard.innerHTML = `You have scored  ${score} out of ${questions.length}.`;
  document.querySelector(".quiz").appendChild(scoreCard);
}
function selectAns(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct;
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score = score + 1;
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
