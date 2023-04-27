const questionNumber = document.getElementById("question-number");
const questionElement = document.getElementById("question");
const answerInput = document.getElementById("answer-input");
const correctAnswer = document.getElementById("correct-answer");
const questionContainer = document.querySelector(".question-container");
const answerContainer = document.querySelector(".answer-container");
const submitAnswer = document.getElementById("submit-answer");
const quit = document.getElementById("quit");
const continueButton = document.getElementById("continue");

let currentQuestionIndex = 0;

function showQuestion() {
    const question = questionAnswerPairs[currentQuestionIndex];
    questionNumber.textContent = currentQuestionIndex + 1;
    questionElement.textContent = question.question;
}

function showAnswer() {
    const answer = questionAnswerPairs[currentQuestionIndex].answer;
    correctAnswer.textContent = answer;
}

submitAnswer.addEventListener("click", () => {
    showAnswer();
    questionContainer.style.display = "none";
    answerContainer.style.display = "block";
});

continueButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionAnswerPairs.length) {
        showQuestion();
        questionContainer.style.display = "block";
        answerContainer.style.display = "none";
        answerInput.value = "";
    } else {
        alert("Thank you for playing the Breaking Into Wall Street 400 Accounting Questions Chatbot!");
        window.location.reload();
    }
});

quit.addEventListener("click", () => {
    const quitConfirmation = confirm("Are you sure you want to quit?");
    if (quitConfirmation) {
        alert("Thank you for playing the Breaking Into Wall Street 400 Accounting Questions Chatbot!");
        window.location.reload();
    }
});

// Show the first question when the page loads
showQuestion();
