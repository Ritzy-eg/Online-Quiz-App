const question = [
    {
        question:"what has hands but cant clap?",
        Answers:[
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
currentQuestion.answers.forEach(answers=> {
    const button = document.createElement("button");
    button.innerHTML = answers.text;
    button.classList.add("btn");
    answerbutton.appendChild(button);
    if (answers.correct){
        button.dataset.correct=answers.correct;
    }
    button.addEventListener("click",selectAnswer);
});
}


function resetState(){
nextbutton.style.display="none";
while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons)
}
}

function selectAnswer(e){
const selectedBtn=e.target;
const isCorrect=selectedBtn.dataset.correct==="true";
if(isCorrect){
selectedBtn.classList.add("correct");
}else{
    selectedBtn.classList.add("Incorrect");}
}
