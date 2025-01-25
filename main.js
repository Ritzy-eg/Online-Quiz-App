const questionElement=document.getElementById('question');
const answerButton=document.getElementbyId('answer-buttons');
const nextButton=document.getElementById('next-btn');
let currentQuestionIndex=0;
let score=0;
function startquiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    let currentQuestion=questions[currentQuestionIndex];
    let questions=currentQuestionIndex+1;
    questionElement.innnerHTML=questionNo +"."+currentQuestion.question;

}