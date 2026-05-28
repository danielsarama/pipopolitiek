const questionText = document.querySelector("#question_text");
const answersBox = document.querySelector("#answers_box");
const nextButton = document.querySelector("#next_button");

let questionNumber = 0;
let score = 0;
let chosenAnswer = "";

const questions = [
    {
        question: "Wie maakt regels in Nederland?",
        answer1: "De Tweede Kamer",
        answer2: "De bakker",
        answer3: "De kapper",
        correct: "De Tweede Kamer"
    },
    {
        question: "Waarom stemmen mensen?",
        answer1: "Om te kiezen",
        answer2: "Om ijs te kopen",
        answer3: "Om te slapen",
        correct: "Om te kiezen"
    },
    {
        question: "Wie helpt een stad besturen?",
        answer1: "De burgemeester",
        answer2: "De dokter",
        answer3: "De juf",
        correct: "De burgemeester"
    },
    {
        question: "Wat betekent democratie?",
        answer1: "Mensen mogen meebeslissen",
        answer2: "Niemand mag praten",
        answer3: "Alleen kinderen beslissen",
        correct: "Mensen mogen meebeslissen"
    },
    {
        question: "Waarom zijn regels belangrijk?",
        answer1: "Voor veiligheid",
        answer2: "Voor ruzie",
        answer3: "Voor straf",
        correct: "Voor veiligheid"
    }
];

let possible_answers = []

refill();

const animationElements = [questionText, answersBox];

function playAnimation() {
    animationElements.forEach(function (element, index) {
        element.style.transition = "none";
        element.style.opacity = "0";
        element.style.transform = "translateY(50px)";

        setTimeout(function () {
            element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }, index * 100);
    });
}

showQuestion();

function showQuestion() {
    chosenAnswer = "";

    questionText.innerHTML = questions[questionNumber].question;

    answersBox.innerHTML = `
        <button class="answer_button">${possible_answers[0]}</button>
        <button class="answer_button">${possible_answers[1]}</button>
        <button class="answer_button">${possible_answers[2]}</button>
    `;

    const answerButtons = document.querySelectorAll(".answer_button");

    answerButtons.forEach(button => {
        button.addEventListener("click", function () {
            chosenAnswer = button.innerHTML;

            answerButtons.forEach(btn => {
                btn.classList.remove("selected_answer");
            });

            button.classList.add("selected_answer");
        });
    });

    playAnimation();
}

function refill() {
    
    possible_answers = [questions[questionNumber].answer1, questions[questionNumber].answer2, questions[questionNumber].answer3].sort(()=> Math.random()- 0.5);
    
}

nextButton.addEventListener("click", function () {
    if (!chosenAnswer) {
        alert("Kies eerst een antwoord");
        return;
    }

    if (chosenAnswer === questions[questionNumber].correct) {
        score++;
    }

    questionNumber++;

    if (questionNumber < questions.length) {
        refill();
        showQuestion();
    } else {
        questionText.innerHTML = "Klaar! Je had " + score + " van de " + questions.length + " goed.";

        playAnimation();

        answersBox.innerHTML = `
            <button id="home_button">
                TERUG NAAR HOME
            </button>
        `;

        nextButton.style.display = "none";

        const homeButton = document.querySelector("#home_button");

        homeButton.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }
});
