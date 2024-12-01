
/*pagina do jogo js */

const en_questions = [
    {
        "question": "Quem escreveu 'Dom Casmurro'?",
        "options": ["Machado de Assis", "José de Alencar", "Clarice Lispector", "Jorge Amado"],
        "correct": 0
    },
    {
        "question": "Qual é o maior oceano do mundo?",
        "options": ["Oceano Atlântico", "Oceano Índico", "Oceano Pacífico", "Oceano Ártico"],
        "correct": 2
    },
    {
        "question": "Qual é a fórmula química da água?",
        "options": ["H2O", "CO2", "O2", "NaCl"],
        "correct": 0
    },
    {
        "question": "Qual é o nome do autor de 'O Pequeno Príncipe'?",
        "options": ["Antoine de Saint-Exupéry", "Jules Verne", "Mark Twain", "Herman Melville"],
        "correct": 0
    },
    {
        "question": "Qual é a moeda oficial do Japão?",
        "options": ["Yuan", "Won", "Yen", "Dólar"],
        "correct": 2
    },
    {
        "question": "Em que ano o homem pisou na Lua pela primeira vez?",
        "options": ["1965", "1969", "1971", "1975"],
        "correct": 1
    }
];

const pt_questions = [
    {
        "question": "Quem pintou a Capela Sistina?",
        "options": ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
        "correct": 1
    },
    {
        "question": "Qual é a montanha mais alta do mundo?",
        "options": ["K2", "Kangchenjunga", "Everest", "Lhotse"],
        "correct": 2
    },
    {
        "question": "Qual é a fórmula química do sal de cozinha?",
        "options": ["NaCl", "KCl", "CaCO3", "MgO"],
        "correct": 0
    },
    {
        "question": "Qual é o nome do famoso detetive criado por Arthur Conan Doyle?",
        "options": ["Hercule Poirot", "Sherlock Holmes", "Miss Marple", "Philip Marlowe"],
        "correct": 1
    },
    {
        "question": "Qual é o continente conhecido como o berço da civilização?",
        "options": ["África", "Ásia", "Europa", "América"],
        "correct": 0
    },
    {
        "question": "Quem é o autor de 'Cem Anos de Solidão'?",
        "options": ["Gabriel García Márquez", "Julio Cortázar", "Mario Vargas Llosa", "Jorge Luis Borges"],
        "correct": 0
    }
];


let current_en_question = 0;
let current_pt_question = 0;
let en_score = 0;
let pt_score = 0;

function loadQuestion(questions, test_id, question, option, current_question, score) {
    if (current_question < questions.length) {
        const questionData = questions[current_question];
        document.getElementById(question).textContent = questionData.question;
        const options = document.querySelectorAll(option);
        options.forEach((btn, index) => {
            btn.textContent = questionData.options[index];
        });
    } else {
        document.getElementById(test_id).innerHTML = `
            <button id="close_modal_ingles" class="btn btn_fechar_modal" onClick="fechar_modal(modal_teste_ingles)"><i class="bi bi-x-lg"></i></button>
            <h3 class="mb-4">Parabéns! Você completou o jogo.</h3>
            <p>Sua pontuação final é: ${score}</p>
            
        `;
    }
}

function checkAnswer(questions, test_id, question, option, current_question, score, selected) {
    if (selected === questions[current_question].correct) {
    score += 10;
    document.getElementById("score").textContent = `Pontuação: ${score}`;
    }
    current_question++;
    loadQuestion(questions, test_id, question, option, current_question, score);
}

function restartGame(questions, test_id, question, option, current_question, score) {
    current_question = 0;
    score = 0;
    document.getElementById("score").textContent = `Pontuação: 0`;
    loadQuestion(questions, test_id, question, option, current_question, score);
}

loadQuestion(en_questions, "game-container", "en_question", ".en_option", current_en_question, en_score);
loadQuestion(pt_questions, "teste_portugues", "pt_question", ".pt_option", current_pt_question, pt_score);
