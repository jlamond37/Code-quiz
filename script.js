var questionList = [
    'What is a document method Query Selector?',
    'What does a for function do?',
    'What is a global object?',
    'What does a math random function do?', 'What does .textContent do?'
];
var answerListOne = ['Returns the first element within the document that matches the the specified selector(s).', 'Assigns a value to a variable','A sequence of characters used to represent text', 'Last value returned by event handler', 'Offer space distriution between items'];
var answerListTwo = ['Returns the number of child elements of the document.', 'Composes a string of elements', 'Ojeect that exists in a global scope', 'Used to store various key collections', 'Represents text content of node'];
var answerListThree = ['A special variable which can hold more than one value.', 'Creates a loop', 'Used to change current web page', 'Manipulates the class list', 'Prevents further propogation of event'];
var answerListFour = ['Allows you to break up your code into separate fields.', 'Converts objects into a boolean', 'Matches an event handler to an element', 'Returns a random interger between specified values', 'Sets or returns elements display type'];
var correctAnswers = ['.answer1', '.answer3', '.answer2', '.answer4', '.answer2'];

var questionNumber = 0;

var global = document.querySelector('.global');
var quiz = document.querySelector('.container');
var question = document.querySelector('.question');
question.textContent = questionList[questionNumber];
var one = document.querySelector('.answer1');
one.innerText = answerListOne[questionNumber];
// console.log(one.innerText);
var two = document.querySelector('.answer2');
two.innerText = answerListTwo[questionNumber];
var three = document.querySelector('.answer3');
three.innerText = answerListThree[questionNumber];
var four = document.querySelector('.answer4');
four.innerText = answerListFour [questionNumber];
var result = document.querySelector('.result');
var answers = document.querySelector('.answers');
var timer = document.querySelector('.timer');
var timeLeft = 60;


// question.textContent = questionList[questionNumber];
// one.textContent = document.querySelector('.answer1');
// two.textContent = document.querySelector('.answer2');
// three.textContent = document.querySelector('.answer3');
// four.textContent = document.querySelector('.answer4');
timer.textContent = 'Timer: ' + timeLeft + ' seconds';

function setTime() {
  var timerInterval = setInterval(function() {
    timeLeft--;
    timer.textContent = 'Time: ' + timeLeft + ' seconds';
    if(timeLeft <1) {
        timer.textContent= 'time ran out'
    }
  
    if(timeLeft <= 0) {
        clearInterval(timerInterval);
        secondsLeft = 0;
        
    }
    if(questionNumber === 5) {
        clearInterval(timerInterval);
    }
 
  }, 1000);
} 

function proceedToNextQuestion () {
  console.log('You are inside proceedToNextQuestion()');
  // questionNumber = questNum + 1;
  // console.log(questionNumber);
  // console.log(questionList[questionNumber]);
  question.textContent = questionList[questionNumber];
  one.innerText = answerListOne[questionNumber];
  two.innerText = answerListTwo[questionNumber];
  three.innerText = answerListThree[questionNumber];
  four.innerText = answerListFour[questionNumber];
};

answers.addEventListener('click', event => {
  var element=event.target
  if (element.matches(correctAnswers[questionNumber])) {
    questionNumber++; // questionNUmber = questionNumber + 1;
    result.classList.remove('show');
    void result.offsetWidth;
    result.classList.add('show');
    result.textContent = 'Correct!';
    event.stopPropagation();
    proceedToNextQuestion();
  } else {
    result.classList.remove('show');
    void result.offsetWidth;
    result.classList.add('show');
    result.textContent= 'That answer is incorrect';
  }
if (questionNumber === 5) {
  global.removeChild(quiz);
  // define a variable 'congrats' whose text content you can change
  congrats.textContent = 'you won!';
}

// navigate(0);

});

setTime();
