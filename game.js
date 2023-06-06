const question = document.getElementById("question");
let choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
//let acceptingAnswers = false;
let score;
let questionCounter;
let availableQuestions = [];
let answerNumber;
let questionIndex = 0;
let isScoring = true;

const MAXQUESTIONS = 10;

let questions = [
    {
        question:"What is the correct way to print a message in java?",
        choice1: "print(\"Hello World\")",
        /*choice2: "System.out.print(\"Hello World\"",*/
        choice2: "system.Out.Print(\"Hello World\")",
        choice3: "printOut(\"Hello World\");",
        /* Answer */
        choice4: "System.out.print(\"Hello World\");",
        image: "car.png"
    },
    {
        question: "Test Question (Too much work to make a real one)",
        /*answer: "true",*/
        choice1: "false&&true",
        choice2: "false",
        choice3: "!true",
        /* Answer */
        choice4: "true",
        image: "ash.png"
    }

];

startGame = () =>{
    availableQuestions = [...questions];
    score = 0;
    questionCounter = 0;
    console.log(choices);
    getNewQuestion();
};

getNewQuestion = () =>{
    if(availableQuestions == 0 || questionCounter >= MAXQUESTIONS){
        return window.location.assign("/index.html");
    }
    questionCounter++;
    questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    let currentImage = document.getElementsByClassName("gatsby-image");
    currentImage[0].src = "images/" + currentQuestion["image"];
    choices = shuffle(choices);
    console.log(choices);
    let number = 0;
    choices.forEach(choice =>{
        number++;
        //const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });
    availableQuestions.splice(questionIndex,1);
    //acceptingAnswers = true;
    
};

choices.forEach(choice =>{
    choice.addEventListener("click", e => {
        
        //if(!acceptingAnswers) return;
        acceptingAnswers = false
        let selectedChoice = e.target;
        let selectedAnswer = selectedChoice.innerText;
        console.log("click");
        if(selectedAnswer == currentQuestion["choice4"]) {
            if(isScoring)
                score++;
            isScoring = true;
            console.log(score);
            getNewQuestion();
        }
        else if(!selectedChoice.innerText.includes("❌")){
            selectedChoice.innerText += " ❌";
            isScoring = false;
        } 
        //getNewQuestion();
    });
});
startGame();
function shuffle(array) {
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
  }