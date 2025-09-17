const questions = [
  {
    question: 'Which AI coding assistant was trialed by over 1,000 UK government developers in early 2025?',
    answers: [
      { text: 'Google Gemini Code Assist', correct: true },
      { text: 'OpenAI Codex', correct: false },
      { text: 'GitHub Copilot', correct: false },
      { text: 'Amazon CodeWhisperer', correct: false }
    ]
  },
  {
    question: 'Which programming language saw a 7% increase in adoption from 2024 to 2025, making it the fastest-growing language?',
    answers: [
      { text: 'JavaScript', correct: false },
      { text: 'Java', correct: false },
      { text: 'Python', correct: true },
      { text: 'Go', correct: false }
    ]
  },
  {
    question: 'Which company released Java 25 in September 2025, focusing on developer productivity and AI integration?',
    answers: [
      { text: 'Microsoft', correct: false },
      { text: 'IBM', correct: false },
      { text: 'Google', correct: false },
      { text: 'Oracle', correct: true }
    ]
  },
  {
    question: 'What is the name of the new AI-powered coding platform Apple is developing in collaboration with Anthropic?',
    answers: [
      { text: 'Claude Sonnet', correct: true },
      { text: 'Swift Assist', correct: false },
      { text: 'Xcode AI', correct: false },
      { text: 'Vision Pro Code', correct: false }
    ]
  },
  {
    question: 'Which programming language is currently ranked #1 in the TIOBE Index for 2025?',
    answers: [
      { text: 'C', correct: false },
      { text: 'Python', correct: true },
      { text: 'Java', correct: false },
      { text: 'C++', correct: false }
    ]
  },
  {
    question: 'Which tech company introduced Memory Integrity Enforcement (MIE) in its latest iPhone 17 to enhance security?',
    answers: [
      { text: 'Samsung', correct: false },
      { text: 'Google', correct: false },
      { text: 'Huawei', correct: false },
      { text: 'Apple', correct: true }
    ]
  },
  {
    question: 'Which programming language is known for its high performance and is increasingly used in game development?',
    answers: [
      { text: 'C#', correct: false },
      { text: 'Rust', correct: true },
      { text: 'JavaScript', correct: false },
      { text: 'Swift', correct: false }
    ]
  },
  {
    question: 'Which AI model is integrated into Apple’s Xcode to assist developers with code writing and editing?',
    answers: [
      { text: 'GPT-4', correct: false },
      { text: 'Bard', correct: false },
      { text: 'Claude Sonnet', correct: true },
      { text: 'PaLM', correct: false }
    ]
  },
  {
    question: 'Which programming language is gaining popularity for web development due to its simplicity and performance?',
    answers: [
      { text: 'Ruby', correct: false },
      { text: 'PHP', correct: false },
      { text: 'Go', correct: true },
      { text: 'Perl', correct: false }
    ]
  },
  {
    question: 'Which company is collaborating with Anthropic to develop an AI-based coding platform?',
    answers: [
      { text: 'Apple', correct: true },
      { text: 'Microsoft', correct: false },
      { text: 'Amazon', correct: false },
      { text: 'Facebook', correct: false }
    ]
  }
];
const questionsElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons') 
const nextButton = document.getElementById('next-btn') 

let currentQuestionIndex = 0
let score = 0

function startQuiz(){
  currentQuestionIndex = 0
  score = 0 
  nextButton.innerHTML = 'Next'
  showQuestion()
}



function showQuestion() {
  resetState()
  let currentQuestion = questions[currentQuestionIndex]
  let QuestionNo = currentQuestionIndex + 1
  questionsElement.innerHTML = QuestionNo + ". " + currentQuestion.question

  currentQuestion.answers.forEach(answer =>{
    const button = document.createElement('button')
    button.innerHTML = answer.text
    button.classList.add("btn")
    answerButtons.appendChild(button)
    if(answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
  })
}


function resetState(){
  nextButton.style.display = 'none'
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild)
  }
}



function selectAnswer(e) {
  const selectedBtn = e.target
  const isCorrect = selectedBtn.dataset.correct === 'true'
  if(isCorrect){
  selectedBtn.classList.add("correct")
  score++
  }else{
    selectedBtn.classList.add('incorrect')
  }
 Array.from(answerButtons.children).forEach(button => {
  if(button.dataset.correct === 'true'){
    button.classList.add("correct")
  }
  button.disabled = true;
 });
 nextButton.style.display = "block";
}


function showScore() {
  resetState()
  questionsElement.innerHTML = `you scored ${score} out of ${questions.length}!`
  nextButton.innerHTML = "play Again"
  nextButton.style.display = 'block'
}


function handleNextButton() {
  currentQuestionIndex++
  if(currentQuestionIndex < questions.length){
    showQuestion()
  }else{
    showScore()
  }
}


nextButton.addEventListener('click', (e)=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz()
  }

})


startQuiz()