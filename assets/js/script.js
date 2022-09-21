const question = document.querySelector('#question');
const optioins = Array.from(document.querySelectorAll('option_text')); 
const progressText = document.querySelector('');
const scoreText = document.querySelector('');
const progressBarFull = doc.querySelector('');

let currentQuestion = {};
let checkAnswer = true;
let score = 0;
let questionCounter = 0;
let avaliableQuestions = []

let questions = [
    {
        question: 'The capital of South Africa is...',
        optionA: 'Bloemfontein',
        optionB: 'Cape Town',
        optionC: 'Pretoria',
        optionD: 'All of the above',
        answer: 4,
    },
    {
        question: 'The capital of South Africa is...',
        optionA: 'Bloemfontein',
        optionB: 'Cape Town',
        optionC: 'Pretoria',
        optionD: 'All of the above',
        answer: 4,
    }
]
