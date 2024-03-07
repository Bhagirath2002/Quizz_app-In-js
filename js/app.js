const questions = [
  {
    que: "What is the capital of France?",
    a: ["Paris"],
    b: ["Lyon"],
    c: ["Marseille"],
    d: ["Bordeaux"],
    correct_answer: "a",
  },
  {
    que: "Who is the CEO of Tesla, Inc.?",
    a: ["Elon Musk"],
    b: ["Jeff Bezos"],
    c: ["Mark Zuckerberg"],
    d: ["Bill Gates"],
    correct_answer: "a",
  },
  {
    que: "Which programming language is used for web development?",
    a: ["JavaScript"],
    b: ["Python"],
    c: ["Java"],
    d: ["C#"],
    correct_answer: "a",
  },
  {
    que: "What is the largest planet in our solar system?",
    a: ["Jupiter"],
    b: ["Saturn"],
    c: ["Uranus"],
    d: ["Neptune"],
    correct_answer: "a",
  },
];
console.log(questions);

let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");

const loadquestions = () => {
  if (index === total) {
    return endQuiz();
  }

  reset();

  const data = questions[index];
  quesBox.innerText = `${index + 1}.)${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans == data.correct_answer) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadquestions();
  return;
};

const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
    <h3>Quiz Ended</h3>
    <h2 > ${right} /${total} are correct.</h2>
    `;
};
loadquestions();
