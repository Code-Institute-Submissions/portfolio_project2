const startButton = document.getElementById('begin_btn')
const questionContainerElement = document.getElementById('question')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.querySelector('.answer_container')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log("started")
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() -  .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function selectAnswer(event) {

}

let questions = [
    {
        question: 'The capital of South Africa is...',
        answers: [
            {text: 'Bloemfontein', correct: false},
            {text: 'Cape Town', correct: false},
            {text: 'Pretoria', correct: false},
            {text: 'All of the above', correct: true}
        ]
    }
]
