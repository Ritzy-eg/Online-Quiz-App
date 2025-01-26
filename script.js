document.addEventListener("DOMContentLoaded", (event) => {
const question = [
    {
        question:"what has hands but cant clap?",
        answers:[
            {text:"Clock",correct:true},
            {text:"Monkey",correct:false},
            {text:"statue",correct:false},
            {text:"Ghost",correct:false},
        ]
    },
    {question:"What has to be broken before you can use it?",
    answers:[
        {text:"A promise",correct:false},
        {text:"An egg",correct:true},
        {text:"A pencil",correct:false},
        {text:"A lock",correct:false},]  

    },
{question:"What can you catch but not throw?",
 answers: [
    {text:"A fish",correct:false},
    {text:"A bail",correct:false},
    {text:"A cold",correct:true},
    {text:"A tantrum",correct:false},
 ]
 },
{question:"why did the math book look sad?",
 answers: [
    {text:"It had too many problems",correct:true},
    {text:"someone tore it's pages",correct:false},
    {text:"it lose its cover",correct:false},
    {text:"it was bad at math",correct:false}
 ]
},
{question:"what has a neck but no head?",
 answers:[
    {text:"A bottle",correct:true},
    {text:"A shirt",correct:false},
    {text:"A Giraffe",correct:false},
    {text:"A lamp",correct:false},]   
 }
];
const questionElement=document.getElementById('question');
const answerButton=document.getElementById('answer-buttons');
const nextButton=document.getElementById('next-btn');
let currentQuestionIndex=0;
let score=0;
function startquiz() {
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++; // Update score if the answer is correct
    } else {
      selectedBtn.classList.add("incorrect");
    }
    // Enable the next button after an answer is selected
    nextButton.style.display = "block";
  }
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++; 
  
    if (currentQuestionIndex < question.length) {
      showQuestion(); 
    } else {
      // End of quiz 
      questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
      answerButton.innerHTML = ""; 
      nextButton.style.display = "none"; 
    }
  });

startquiz();
});
