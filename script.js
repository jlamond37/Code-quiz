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
var question = document.querySelector('.question').textContent=questionList[questionNumber];
var one = document.querySelector('.answer1').textContent = answerListOne[questionNumber];
var two = document.querySelector('.answer2').textContent = answerListTwo[questionNumber];
var three = document.querySelector('.answer3').textContent = answerListThree[questionNumber];
var four = document.querySelector('.answer4').textContent = answerListFour [questionNumber];
var result = document.querySelector('.result');
var answers = document.querySelector('.answers');



question.textContent = questionList[questionNumber];
one.textContent = document.querySelector('.answer1');
two.textContent = document.querySelector('.answer2');
three.textContent = document.querySelector('.answer3');
four.textContent = document.querySelector('.answer4');

function navigate(next) {
  questionNumber = questionNumber + next;
  question.textContent = questionList [questionNumber];
  one.textContent = answerListOne[questionNumber];
  two.textContent = answerListTwo[questionNumber];
  three.textContent = answerListThree[questionNumber];
  four.textContent = answerListFour[questionNumber];
};


answers.addEventListener('click', event => {
  var element=event.target
  if (element.matches(correctAnswers[questionNumber])) {
    result.classList.remove('show');
    void result.offsetWidth;
    result.classList.add('show');
    result.textContent = 'Correct!';
    event.stopPropagation();
    navigate(1);
  

  } else {
    result.classList.remove('show');
    void result.offsetWidth;
    result.classList.add('show');
    result.textContent= 'That answer is incorrect';
  }

if (questionNumber === 5) {
  global.removeChild(quiz);
  congrats.textContent = 'you won!';
}


});



// //  Selects carousel element
// var carousel = document.querySelector(".carouselbox");

// // Selects buttons using their parent carousel element
// var next = carousel.querySelector(".next");
// var prev = carousel.querySelector(".prev");
// var index = 0;
// var currentImage;

// var images = [
//   "https://picsum.photos/300/200",
//   "https://picsum.photos/300/201",
//   "https://picsum.photos/300/202",
//   "https://picsum.photos/300/203"
// ];

// carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

// function navigate(direction) {
//   index = index + direction;
//   if (index < 0) { 
//     index = images.length - 1; 
//   } else if (index > images.length - 1) { 
//     index = 0;
//   }
//   currentImage = images[index];
//   carousel.style.backgroundImage = "url('" + currentImage + "')";
// }

// // Clicking on image opens a new window containing the image
// carousel.addEventListener("click", function() {
//   window.location.href = images[index];
// });

// // Clicking on next button displays next image in carousel
// next.addEventListener("click", function(event) {
//   // Stops event from bubbling up and new window opening
//   event.stopPropagation();

//   navigate(1);
// });

// // Clicking previous displays previous image in carousel
// prev.addEventListener("click", function(event) {
//   // Event bubbling would occur and a new window would open if we did not include the following line of code.
//   event.stopPropagation();

//   navigate(-1);
// });

// navigate(0);
