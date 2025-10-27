const questions = [
    {
        question:"Professor, você tem noção de quantos anos já está nos aguentando em sala?",
        options: ["2 anos", "3 anos", "4 anos", "5 anos"],
        answer: 1
    },
    {
        question:"Ao longo desses anos, você já nos deu aula de várias matérias, mas lembra de todas?",
        options: [" Foram Lógica Computacional, Banco de Dados, Programação Front-End e Back-end!", "Foram Português, Pensamento computacional, Artes Digitais e Matematica!", " Foram Lógica Computacional, Ciências da Computação, Programação Front-End e Programação Mobile!", "Só algumas..."],
        answer: 2
    },
    {
        question:"Em Programação Mobile, qual é o segredo pra criar um aplicativo que funcione direitinho em qualquer celular sem dar aqueles famosos bugs?",
        options: ["Testar em vários dispositivos", "Ignorar erros", "Fazer tudo no improviso"],
        answer: 0
    },
    {
        question:"Qual é a complexidade de tempo do algoritmo de busca binária?",
        options:["0(n)", "0(log n)", "0(n²)", "0(1)"],
        answer: 1
    },
    {
        question:"Em JavaScript, o que acontece quando você compara `null == undefined`?",
        options:["Retorna true", "Retorna false", "Gera erro", "Retorna undefined"],
        answer: 0
    },
    {
        question:"Com qual dos alunos você já quase saiu na mão?",
        options:["Gustavo", "Isadora", "Kaue", "Fabio"],
        answer: 2
    },
    {
    question: "Qual desses anabolizantes você usa Jeferson? VOCÊ USA SUCO SIM",
    options: ["Monjaro", " Trembolona", "Refri", "Água"],
    answer: 1
},
{
    question: "Qual o seu apelido mais carinhoso?",
    options: ["Jeje", "Jefinho", "Marrom bombom", "Todos pq você é uma diva divonica💅🏼!"],
    answer: 3
  },
    {
        question:"E aí Jeferson? Aceita ser o nosso padrinho de rosas na formatura?",
        options: ["Sim, eu amo vocês!", "Não, prefiro o 2º tds...", "Só se tiver churrasco"],
        answer: 0
    }
];

let currentQuestion = 0;

function startQuiz() {
   currentQuestion = 0;
   showQuestion(); 
}

function showQuestion(){
   const q = questions[currentQuestion];
   document.getElementById("question").textContent = q.question;
   const optionsDiv = document.getElementById("options");
   optionsDiv.innerHTML = "";
   q.options.forEach((options, i) => {
    const button = document.createElement("button");
    button.textContent = options;
    button.onclick = () => checkAnswer(i);
    optionsDiv.appendChild(button);
   })
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      document.getElementById("question").textContent = "Obrigado, Jeferson! você foi um professor incrível! 🏆❤️🖤";
      document.getElementById("options").innerHTML = "";
       
       const hino = document.getElementById("hino");
      hino.play();

      document.getElementById("professor-baitola").style.display = "block";
    
      for (let i = 0; i < 30; i++) {
  const firework = document.createElement("div");
  firework.className = "firework";
  firework.style.left = Math.random() * window.innerWidth + "px";
  firework.style.top = Math.random() * window.innerHeight + "px";
  firework.style.setProperty("--x", (Math.random() * 200 - 100) + "px");
  firework.style.setProperty("--y", (Math.random() * 200 - 100) + "px");
  document.body.appendChild(firework);
  setTimeout(() => firework.remove(), 1000);
}
    }
  } else {
    document.getElementById("question").textContent = "Como teve coragem de errar?! Volte ao início e tente novamente! 😅";
    document.getElementById("options").innerHTML = "";

    const retryBtn = document.createElement("button");
retryBtn.textContent = "Tentar novamente";
retryBtn.onclick = startQuiz;
document.getElementById("options").appendChild(retryBtn);
  }
}

