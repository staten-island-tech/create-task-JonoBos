const createBtn = document.getElementById("createBtn");
const submitBtn = document.getElementById("submitBtn");
const tellBtn = document.getElementById("tellBtn");
const showBtn = document.getElementById("showBtn"); // ✅ FIXED
const userInput = document.getElementById("userInput");
const output = document.getElementById("output");

let jokes = [
  { question: "What is 9 + 10?", answer: "21" },
  { question: "Why don't scientists trust atoms?", answer: "Because they make up everything." },
  { question: "Why did the computer go to the doctor?", answer: "It caught a virus." },
  { question: "Why did the scarecrow win an award?", answer: "Because he was outstanding in his field." },
  { question: "Why don't programmers like nature?", answer: "Too many bugs." },
  { question: "Why did the golfer bring two pairs of pants?", answer: "In case he got a hole in one." },
  { question: "Why did the picture go to jail?", answer: "Because it was framed." },
  { question: "Why did the music teacher need a ladder?", answer: "To reach the high notes." },
  { question: "Why don't eggs tell jokes?", answer: "They might crack up." },
  { question: "Why was the math book sad?", answer: "It had too many problems." }
];

let createQ = "";

createBtn.addEventListener("click", createJoke);
submitBtn.addEventListener("click", submitJoke);
tellBtn.addEventListener("click", tellJoke);
showBtn.addEventListener("click", showAllQuestions);

function createJoke() {
  createQ = "";
  userInput.value = "";
  output.textContent = "Type your joke QUESTION, then click Submit.";
}

function submitJoke() {
  let input = userInput.value.trim();

  if (createQ === "" && input !== "") {
    createQ = input;
    userInput.value = "";
    output.textContent = "Now type the ANSWER, then click Submit.";
  } 
  else if (createQ !== "" && input !== "") {
    jokes.push({
      question: createQ,
      answer: input
    });

    createQ = "";
    userInput.value = "";
    output.textContent = "Joke added!";
  } 
  else {
    output.textContent = "Please type something before submitting.";
  }
}

function tellJoke() {
  let randomIndex = Math.floor(Math.random() * jokes.length);
  let joke = jokes[randomIndex];

  output.textContent = joke.question + " → " + joke.answer;
}

function showAllQuestions() {
  output.innerHTML = "";

  for (let i = 0; i < jokes.length; i++) {
    output.innerHTML += (i + 1) + ". " + jokes[i].question + "<br>";
  }
}
