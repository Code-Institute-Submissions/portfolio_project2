const startButton = document.getElementById('start_btn')
const questionContainerElement = document.getElementById ('question_container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer_buttons') 

let shuffledQuestions, currentQuestionsIndex 

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.textbutton.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
    })
}

function selectAnswer() {

}

const questions = [
    {
        question: "The capital of South Africa is...",
        answers: [
            {text: 'Pretoria', correct: false},
            {text: 'Cape Town', correct: false},
            {text: 'Bloemfontein', correct: false},
            {text: 'All three', correct: true}
        ]
    }
]