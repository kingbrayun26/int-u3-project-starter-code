const quizData = [
    {
        question: "What kind of creature does Daxter transform into after falling into Dark Eco?",
        answers: ["A Precursor", "An Ottsel", "A Lurker", "A Klaww"],
        correct: "An Ottsel"
    },
    {
        question: "What are the three main types of Eco you can collect in the first game?",
        answers: ["Green, Blue, and Red", "Light, Dark, and Eco", "Yellow, Blue, and Green", "Orange, Purple, and White"],
        correct: "Yellow, Blue, and Green"
    },
    {
        question: "Who was the first carator?",
        answers: ["Baron Praxis", "Krew", "Count Vegar", "Metal Kor"],
        correct: "Metal Kor"
    }
];

const questionElement = document.getElementById("question-text");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quizContainer = document.getElementById("quiz");
const scoreContainer = document.getElementById("score-container");
const scoreText = document.getElementById("score-text");
const restartButton = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreContainer.classList.add("hidden");
    quizContainer.querySelector('h1').classList.remove("hidden");
    document.getElementById("question-container").classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add("hidden");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.innerText === quizData[currentQuestionIndex].correct;

    if (correct) {
        score++;
        selectedButton.style.backgroundColor = "#4ade80"; // Green for correct
    } else {
        selectedButton.style.backgroundColor = "#f87171"; // Red for wrong
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
        if (button.innerText === quizData[currentQuestionIndex].correct) {
            button.style.backgroundColor = "#4ade80"; // Highlight correct
        }
    });

    nextButton.classList.remove("hidden");
}

function showScore() {
    quizContainer.querySelector('h1').classList.add("hidden");
    document.getElementById("question-container").classList.add("hidden");
    nextButton.classList.add("hidden");
    scoreContainer.classList.remove("hidden");
    scoreText.innerText = `You scored ${score} out of ${quizData.length}!`;
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showScore();
    }
});

restartButton.addEventListener("click", startQuiz);

// Initialize quiz on load
startQuiz();
