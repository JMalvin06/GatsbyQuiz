const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score;
let questionCounter;
let availableQuestions = [];
let answerNumber;

let questions = [
    {
        question:"What is the correct way to print a message in java?",
        choice1: "print(\"Hello World\"",
        /*choice2: "System.out.print(\"Hello World\"",*/
        choice2: "system.Out.Print(\"Hello World\"",
        choice3: "printOut(\"Hello World\"",
        /* Answer */
        choice4: "System.out.print(\"Hello World\""
    },
    {
        question: "Test Question (Too much work to make a real one)",
        /*answer: "true",*/
        choice1: "false&&true",
        choice2: "false",
        choice3: "!true",
        /* Answer */
        choice4: "true"
    }

];

startGame = () =>{
    availableQuestions = [...questions];
    score = 0;
    questionCounter = 0;
    getNewQuestion();
};

getNewQuestion = () =>{
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    choices.forEach(choice =>{
        const number = choice.dataset["data-number"];
        choice.innerText = questions["choice" + number];
    });
    questions.splice(questionIndex,1);
    acceptingAnswers = true;
    //choices = shuffle(choices);
};
startGame();
/*function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }*/