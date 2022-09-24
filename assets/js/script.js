const startButton = document.getElementById('start_btn')
const nextButton = document.getElementById('next_btn')
const questionContainerElement = document.getElementById ('question_container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer_buttons') 

let shuffledQuestions, currentQuestionsIndex 

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionsIndex + 1){
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Go Again'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
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
    },
    {
        question: "The distance between earth and the moon is...",
        answers: [
            {text: '756,067 km', correct: false},
            {text: '384,400 km', correct: true},
            {text: '1,200,000 km', correct: false},
            {text: '543,860 km', correct: false}
        ]
    },
    {
        question: "The biggest tank battle in history is known as...",
        answers: [
            {text: 'The Battle of Berlin', correct: false},
            {text: 'The Battle of France', correct: false},
            {text: 'The Battle of Kursk', correct: true},
            {text: 'The Battle of Bulge', correct: false}
        ]
    },
    {
        question: "The largest animal known to have ever existed is...",
        answers: [
            {text: 'Blue whale', correct: false},
            {text: 'African elephant', correct: false},
            {text: 'Polar bear', correct: true},
            {text: 'Southern elephant seal', correct: false}
        ]
    },
    {
        question: "The largest animal known to have ever existed is...",
        answers: [
            {text: 'Blue whale', correct: true},
            {text: 'African elephant', correct: false},
            {text: 'Polar bear', correct: false},
            {text: 'Southern elephant seal', correct: false}
        ]
    },
    {
        question: "The first person known to have proposed a heliocentric system was...",
        answers: [
            {text: 'Al-Battānī', correct: false},
            {text: 'Nicolaus Copernicus', correct: false},
            {text: 'Aryabhata', correct: false},
            {text: 'Aristarchus of Samos', correct: true}
        ]
    },
    {
        question: "Chief Manuelito was a prominent leader of which Native American tribe?",
        answers: [
            {text: 'Cherokee', correct: false},
            {text: 'Mascalero', correct: false},
            {text: 'Navajo', correct: true},
            {text: 'Chiricahua', correct: false}
        ]
    },
    {
        question: "What was the name of the first Canadian satellite to be launched into space?",
        answers: [
            {text: 'Explorer', correct: false},
            {text: 'Asterix', correct: false},
            {text: 'Ariel', correct: false},
            {text: 'Alouette', correct: true}
        ]
    },
    {
        question: "The Punic Wars was a series of wars fought between...",
        answers: [
            {text: 'Rome and Carthage', correct: true},
            {text: 'Egypt and Seleucid Empire', correct: false},
            {text: 'Mycenaean Empire and Egypt', correct: false},
            {text: 'Armenia and Pontus', correct: false}
        ]
    },
]