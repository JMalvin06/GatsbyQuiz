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
        
        choice1: "display of false pretenses",
        /*choice2: "System.out.print(\"Hello World\"",*/
        choice2: "Represents the mood",
        choice3: "smoldering remains of the lower class that is trying to rise up",
        /* Answer */
        choice4: "materialism, extravagance, idea of a different life",
        image: "shirt.png"
    },
    {
        choice1: "false&&true",
        choice2: "false",
        choice3: "!true",
        /* Answer */
        choice4: "Display of Gatsby\'s actuality, his \"realness\"",
        image: "library.png"
    },
    {
        
        choice1: "print(\"Hello World\")",
        /*choice2: "System.out.print(\"Hello World\"",*/
        choice2: "system.Out.Print(\"Hello World\")",
        choice3: "printOut(\"Hello World\");",
        /* Answer */
        choice4: "new era, isolation, absoluteness (nothing new)",
        image: "balloon.png"
    },
    {
        
        choice1: "print(\"Hello World\")",
        /*choice2: "System.out.print(\"Hello World\"",*/
        choice2: "system.Out.Print(\"Hello World\")",
        choice3: "printOut(\"Hello World\");",
        /* Answer */
        choice4: "display of false pretenses",
        image: "child.png"
    },
    {
        
        choice1: "print(\"Hello World\")",
        /*choice2: "System.out.print(\"Hello World\"",*/
        choice2: "system.Out.Print(\"Hello World\")",
        choice3: "printOut(\"Hello World\");",
        /* Answer */
        choice4: "success, wealth",
        image: "car.png"
    },
    {
        
        choice1: "print(\"Hello World\")",
        /*choice2: "System.out.print(\"Hello World\"",*/
        choice2: "system.Out.Print(\"Hello World\")",
        choice3: "printOut(\"Hello World\");",
        /* Answer */
        choice4: "All knowing and all seeing",
        image: "eyes.png"
    },
    {
        
        choice1: "print(\"Hello World\")",
        /*choice2: "System.out.print(\"Hello World\"",*/
        choice2: "system.Out.Print(\"Hello World\")",
        choice3: "printOut(\"Hello World\");",
        /* Answer */
        choice4: "death, despair, decay of morality as a result of wealth, the \"leftovers\" of this society",
        image: "ash.png"
    },
    {
        
        choice1: "print(\"Hello World\")",
        /*choice2: "System.out.print(\"Hello World\"",*/
        choice2: "system.Out.Print(\"Hello World\")",
        choice3: "printOut(\"Hello World\");",
        /* Answer */
        choice4: "new money, success",
        image: "west.png"
    },
    {
        
        choice1: "print(\"Hello World\")",
        /*choice2: "System.out.print(\"Hello World\"",*/
        choice2: "system.Out.Print(\"Hello World\")",
        choice3: "printOut(\"Hello World\");",
        /* Answer */
        choice4: "old money, power",
        image: "east.png"
    },
    {
        
        choice1: "print(\"Hello World\")",
        /*choice2: "System.out.print(\"Hello World\"",*/
        choice2: "system.Out.Print(\"Hello World\")",
        choice3: "printOut(\"Hello World\");",
        /* Answer */
        choice4: "smoldering remains of the lower class that is trying to rise up",
        image: "death.png"
    },
    {
        
        choice1: "print(\"Hello World\")",
        /*choice2: "System.out.print(\"Hello World\"",*/
        choice2: "system.Out.Print(\"Hello World\")",
        choice3: "printOut(\"Hello World\");",
        /* Answer */
        choice4: "violence,heatlessness of the society",
        image: "gun.png"
    },
    {
        
        choice1: "print(\"Hello World\")",
        /*choice2: "System.out.print(\"Hello World\"",*/
        choice2: "system.Out.Print(\"Hello World\")",
        choice3: "printOut(\"Hello World\");",
        /* Answer */
        choice4: "want, hope, desire, longing",
        image: "green.png"
    },
    {
        
        choice1: "print(\"Hello World\")",
        /*choice2: "System.out.print(\"Hello World\"",*/
        choice2: "system.Out.Print(\"Hello World\")",
        choice3: "printOut(\"Hello World\");",
        /* Answer */
        choice4: "represents his life, how much he has worked and sacrificed to impress daisy",
        image: "house.png"
    },
    {
        
        choice1: "print(\"Hello World\")",
        /*choice2: "System.out.print(\"Hello World\"",*/
        choice2: "system.Out.Print(\"Hello World\")",
        choice3: "printOut(\"Hello World\");",
        /* Answer */
        choice4: "Lost romance",
        image: "daisy.png"
    },
    {
        
        choice1: "print(\"Hello World\")",
        /*choice2: "System.out.print(\"Hello World\"",*/
        choice2: "system.Out.Print(\"Hello World\")",
        choice3: "printOut(\"Hello World\");",
        /* Answer */
        choice4: "the simultaneous desire to reach our future and relive our past",
        image: "time.png"
    },
    {
        
        choice1: "print(\"Hello World\")",
        /*choice2: "System.out.print(\"Hello World\"",*/
        choice2: "system.Out.Print(\"Hello World\")",
        choice3: "printOut(\"Hello World\");",
        /* Answer */
        choice4: "Represents the mood",
        image: "weather.png"
    },
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
        localStorage.setItem("score") = score;
        return window.location.assign("/results.html");
    }
    questionCounter++;
    questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
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