
const cartas = [
    {
        tipo: "WILL",
        pergunta: "I think our team _____ win the game.",
        traducao: "Eu acho que nosso time vai vencer o jogo.",
        opcoes: ["will", "is going to"],
        correta: 0,
        explicacao: "WILL é usado para previsões baseadas em opiniões."
    },
    {
        tipo: "BE GOING TO",
        pergunta: "Look at those clouds! It _____ rain.",
        traducao: "Olhe aquelas nuvens! Vai chover.",
        opcoes: ["will", "is going to"],
        correta: 1,
        explicacao: "BE GOING TO é usado para previsões com evidências."
    },
    {
        tipo: "WILL",
        pergunta: "I promise I _____ help you.",
        traducao: "Prometo que vou ajudar você.",
        opcoes: ["will", "am going to"],
        correta: 0,
        explicacao: "WILL é usado para fazer promessas."
    },
    {
        tipo: "BE GOING TO",
        pergunta: "She has a plan. She _____ travel next month.",
        traducao: "Ela tem um plano. Vai viajar no próximo mês.",
        opcoes: ["will", "is going to"],
        correta: 1,
        explicacao: "BE GOING TO expressa planos já decididos."
    },
    {
        tipo: "WILL",
        pergunta: "The phone is ringing. I _____ answer it!",
        traducao: "O telefone está tocando. Eu vou atender!",
        opcoes: ["will", "am going to"],
        correta: 0,
        explicacao: "WILL expressa uma decisão tomada na hora."
    },
    {
        tipo: "BE GOING TO",
        pergunta: "They bought paint. They _____ paint the room.",
        traducao: "Eles compraram tinta. Vão pintar o quarto.",
        opcoes: ["will", "are going to"],
        correta: 1,
        explicacao: "A compra da tinta indica um plano já existente."
    },
    {
        tipo: "WILL",
        pergunta: "Maybe people _____ live on Mars one day.",
        traducao: "Talvez as pessoas vivam em Marte um dia.",
        opcoes: ["will", "are going to"],
        correta: 0,
        explicacao: "WILL é usado para previsões e opiniões."
    },
    {
        tipo: "BE GOING TO",
        pergunta: "We _____ have a party on Saturday.",
        traducao: "Vamos dar uma festa no sábado.",
        opcoes: ["will", "are going to"],
        correta: 1,
        explicacao: "BE GOING TO indica um plano já decidido."
    },
    {
        tipo: "WILL",
        pergunta: "I think she _____ pass the test.",
        traducao: "Acho que ela vai passar na prova.",
        opcoes: ["will", "is going to"],
        correta: 0,
        explicacao: "WILL expressa uma previsão baseada em opinião."
    },
    {
        tipo: "BE GOING TO",
        pergunta: "He bought a ticket. He _____ travel tomorrow.",
        traducao: "Ele comprou uma passagem. Vai viajar amanhã.",
        opcoes: ["will", "is going to"],
        correta: 1,
        explicacao: "BE GOING TO indica um plano já decidido."
    },
    {
        tipo: "WILL",
        pergunta: "I am sure you _____ like this movie.",
        traducao: "Tenho certeza de que você vai gostar deste filme.",
        opcoes: ["will", "are going to"],
        correta: 0,
        explicacao: "WILL é usado para previsões e opiniões."
    },
    {
        tipo: "BE GOING TO",
        pergunta: "Look! The boy _____ fall!",
        traducao: "Olhe! O menino vai cair!",
        opcoes: ["will", "is going to"],
        correta: 1,
        explicacao: "BE GOING TO é usado quando existem evidências."
    },
    {
        tipo: "WILL",
        pergunta: "I think Brazil _____ win the match.",
        traducao: "Acho que o Brasil vai ganhar a partida.",
        opcoes: ["will", "is going to"],
        correta: 0,
        explicacao: "WILL expressa uma opinião ou previsão."
    },
    {
        tipo: "BE GOING TO",
        pergunta: "They are saving money. They _____ buy a car.",
        traducao: "Eles estão economizando dinheiro. Vão comprar um carro.",
        opcoes: ["will", "are going to"],
        correta: 1,
        explicacao: "BE GOING TO indica um plano."
    },
    {
        tipo: "WILL",
        pergunta: "Don't worry! I _____ call you later.",
        traducao: "Não se preocupe! Vou ligar para você mais tarde.",
        opcoes: ["will", "am going to"],
        correta: 0,
        explicacao: "WILL pode ser usado para promessas."
    },
    {
        tipo: "BE GOING TO",
        pergunta: "She studied a lot. She _____ take the exam tomorrow.",
        traducao: "Ela estudou bastante. Vai fazer a prova amanhã.",
        opcoes: ["will", "is going to"],
        correta: 1,
        explicacao: "BE GOING TO indica uma intenção ou plano."
    },
    {
        tipo: "WILL",
        pergunta: "I believe technology _____ change the world.",
        traducao: "Acredito que a tecnologia vai mudar o mundo.",
        opcoes: ["will", "is going to"],
        correta: 0,
        explicacao: "WILL é usado para previsões baseadas em opiniões."
    },
    {
        tipo: "BE GOING TO",
        pergunta: "We planned everything. We _____ start tomorrow.",
        traducao: "Planejamos tudo. Vamos começar amanhã.",
        opcoes: ["will", "are going to"],
        correta: 1,
        explicacao: "BE GOING TO expressa planos já definidos."
    },
    {
        tipo: "WILL",
        pergunta: "I think it _____ be a great day.",
        traducao: "Acho que será um ótimo dia.",
        opcoes: ["will", "is going to"],
        correta: 0,
        explicacao: "WILL expressa uma previsão ou opinião."
    },
    {
        tipo: "BE GOING TO",
        pergunta: "He has his suitcase. He _____ travel.",
        traducao: "Ele está com a mala. Vai viajar.",
        opcoes: ["will", "is going to"],
        correta: 1,
        explicacao: "BE GOING TO é usado quando há evidências de uma intenção."
    },
    {
        tipo: "WILL",
        pergunta: "I promise I _____ study harder.",
        traducao: "Prometo que vou estudar mais.",
        opcoes: ["will", "am going to"],
        correta: 0,
        explicacao: "WILL é usado para promessas."
    },
    {
        tipo: "BE GOING TO",
        pergunta: "They decided. They _____ play soccer tomorrow.",
        traducao: "Eles decidiram. Vão jogar futebol amanhã.",
        opcoes: ["will", "are going to"],
        correta: 1,
        explicacao: "BE GOING TO expressa uma decisão já tomada."
    },
    {
        tipo: "CHALLENGE",
        pergunta: "Make a promise using WILL.",
        traducao: "Faça uma promessa usando WILL.",
        opcoes: [
            "I will help you.",
            "I am going to help you."
        ],
        correta: 0,
        explicacao: "I will help you = Eu vou ajudar você."
    },
    {
        tipo: "CHALLENGE",
        pergunta: "Translate: Nós vamos estudar amanhã. Use BE GOING TO.",
        traducao: "Traduza a frase para inglês.",
        opcoes: [
            "We are going to study tomorrow.",
            "We will study tomorrow."
        ],
        correta: 0,
        explicacao: "BE GOING TO expressa o plano de estudar."
    }
];

let jogadores = [];
let posicoes = [];
let jogadorAtual = 0;
let cartaAtual = null;
let escolha = null;
let esperando = false;
let destinoAtual = 0;
let movimentoAtual = 0;

const cores = ["🔴", "🔵", "🟡", "🟢"];

function criarTabuleiro() {

    const tabuleiro = document.getElementById("tabuleiro");

    tabuleiro.innerHTML = "";

    for (let i = 0; i < 24; i++) {

        let tipo = "";

        if (i === 0) {
            tipo = "start";
        } else if (i === 23) {
            tipo = "finish";
        } else {
            const tipos = [
                "will",
                "going",
                "challenge",
                "mixed"
            ];

            tipo = tipos[(i - 1) % 4];
        }

        const casa = document.createElement("div");

        casa.className = "casa " + tipo;

        let nome = tipo.toUpperCase();

        if (i === 0) nome = "START";
        if (i === 23) nome = "FINISH";

        const peoes = jogadores
            .map((j, index) =>
                posicoes[index] === i ? cores[index] : ""
            )
            .join("");

        casa.innerHTML = `
            <small>${i + 1}</small>
            ${nome}
            <div>${peoes}</div>
            <small>QUESTÃO ${i + 1}</small>
        `;

        tabuleiro.appendChild(casa);
    }

    document.getElementById("vez").textContent =
        jogadores[jogadorAtual] + ": sua vez!";
}

function novoJogo() {

    const quantidade = Number(
        document.getElementById("quantidade").value
    );

    jogadores = [];

    for (let i = 0; i < quantidade; i++) {
        jogadores.push("Jogador " + (i + 1));
    }

    posicoes = jogadores.map(() => 0);

    jogadorAtual = 0;
    cartaAtual = null;
    escolha = null;
    esperando = false;
    destinoAtual = 0;
    movimentoAtual = 0;

    document.getElementById("status").textContent =
        "Clique no dado para começar!";

    document.getElementById("dado").textContent = "🎲";

    document.getElementById("botaoDado").disabled = false;

    document.getElementById("responder").disabled = true;

    document.getElementById("proximo").hidden = true;

    document.getElementById("pergunta").textContent =
        "Prepare-se para começar!";

    document.getElementById("traducao").textContent = "";

    document.getElementById("alternativas").innerHTML = "";

    document.getElementById("resposta").textContent = "";

    document.getElementById("tipo").textContent =
        "YOUR MISSION";

    document.getElementById("proximo").textContent =
        "PRÓXIMO JOGADOR";

    criarTabuleiro();
}

function jogarDado() {

    if (esperando) return;

    movimentoAtual = Math.floor(Math.random() * 6) + 1;

    document.getElementById("dado").textContent =
        movimentoAtual;

    // Calcula onde o jogador chegará se acertar
    destinoAtual = Math.min(
        23,
        posicoes[jogadorAtual] + movimentoAtual
    );

    // A questão pertence à casa de destino
    cartaAtual = cartas[destinoAtual];

    escolha = null;
    esperando = true;

    document.getElementById("botaoDado").disabled = true;

    document.getElementById("status").textContent =
        "Você tirou " + movimentoAtual +
        "! Responda à questão da casa " + (destinoAtual + 1) + ".";

    document.getElementById("tipo").textContent =
        cartaAtual.tipo;

    document.getElementById("pergunta").textContent =
        cartaAtual.pergunta;

    document.getElementById("traducao").textContent =
        cartaAtual.traducao;

    document.getElementById("resposta").textContent = "";

    const alternativas =
        document.getElementById("alternativas");

    alternativas.innerHTML = "";

    cartaAtual.opcoes.forEach((opcao, index) => {

        const botao = document.createElement("button");

        botao.className = "alternativa";

        botao.textContent =
            String.fromCharCode(65 + index) + ") " + opcao;

        botao.onclick = function() {

            escolha = index;

            document.querySelectorAll(".alternativa")
                .forEach(b =>
                    b.classList.remove("selecionada")
                );

            botao.classList.add("selecionada");
        };

        alternativas.appendChild(botao);
    });

    document.getElementById("responder").disabled = false;

    document.getElementById("proximo").hidden = true;
}

function verResposta() {

    if (escolha === null) {

        document.getElementById("status").textContent =
            "Escolha uma alternativa primeiro!";

        return;
    }

    const acertou = escolha === cartaAtual.correta;

    if (acertou) {

        // Avança exatamente o número que saiu no dado
        posicoes[jogadorAtual] = destinoAtual;

    }

    const resultado = acertou
        ? "✅ Parabéns! Você acertou!"
        : "❌ Resposta incorreta!";

    document.getElementById("resposta").innerHTML = `
        <b>${resultado}</b><br>
        Resposta correta: ${cartaAtual.opcoes[cartaAtual.correta]}<br>
        ${cartaAtual.explicacao}
        ${acertou
            ? "<br>Você avançou " + movimentoAtual + " casas!"
            : "<br>Você permaneceu na mesma casa."}
    `;

    criarTabuleiro();

    document.getElementById("responder").disabled = true;

    document.getElementById("proximo").hidden = false;

    if (posicoes[jogadorAtual] === 23) {

        document.getElementById("status").textContent =
            jogadores[jogadorAtual] +
            " venceu o FUTURE QUEST! 🚀";

        document.getElementById("proximo").textContent =
            "NOVO JOGO";

    } else {

        document.getElementById("status").textContent =
            acertou
            ? "Resposta certa! Você avançou!"
            : "Resposta errada! Você não avançou.";

        document.getElementById("proximo").textContent =
            "PRÓXIMO JOGADOR";
    }
}

function proximoJogador() {

    if (posicoes[jogadorAtual] === 23) {
        novoJogo();
        return;
    }

    jogadorAtual =
        (jogadorAtual + 1) % jogadores.length;

    esperando = false;
    cartaAtual = null;
    escolha = null;

    document.getElementById("botaoDado").disabled = false;

    document.getElementById("proximo").hidden = true;

    document.getElementById("pergunta").textContent =
        "Sua vez! Clique em Jogar Dado.";

    document.getElementById("traducao").textContent = "";

    document.getElementById("alternativas").innerHTML = "";

    document.getElementById("resposta").textContent = "";

    document.getElementById("tipo").textContent =
        "YOUR MISSION";

    document.getElementById("status").textContent =
        "Boa sorte!";

    document.getElementById("dado").textContent = "🎲";

    criarTabuleiro();
}

novoJogo();
