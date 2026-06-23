const quizData = [
    {
        question: "What genre Jak and Daxter?",
        options: ["Shooter", "Action Adventure", "", "Hyper Text Makeup Language"],
        correct: 0
    },
    {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correct: 1
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<style>", "<css>", "<script>", "<link>"],
        correct: 0
    }
];

const questionEl = document.getElementById('question-text');
const optionsBox = document.getElementById('options-box');
const submitBtn = document.getElementById('submit-btn');
const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result-container');

let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;

function loadQuestion() {
    const currentQuizData = quizData[currentQuestionIndex];
    questionEl.innerText = currentQuizData.question;
    optionsBox.innerHTML = '';

    currentQuizData.options.forEach((option, index) => {
        const optionEl = document.createElement('div');
        optionEl.classList.add('option');
        optionEl.innerText = option;
        
        optionEl.addEventListener('click', () => selectOption(index, optionEl));
        
        optionsBox.appendChild(optionEl);
    });
}

function selectOption(index, element) {
    // Clear previously selected options
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(opt => opt.classList.remove('selected'));
    
    // Select new option
    element.classList.add('selected');
    selectedOptionIndex = index;
}

submitBtn.addEventListener('click', () => {
    if (selectedOptionIndex === null) {
        alert("Please select an answer!");
        return;
    }

    const currentQuizData = quizData[currentQuestionIndex];
    if (selectedOptionIndex === currentQuizData.correct) {
        score++;
    }

    currentQuestionIndex++;
    selectedOptionIndex = null; // Reset selection

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    quizContainer.style.display = 'none';
    submitBtn.style.display = 'none';
    resultContainer.classList.remove('hidden');
    resultContainer.innerHTML = `<h2>You scored ${score}/${quizData.length}!</h2>`;
}

// Initialize Quiz
loadQuestion();
