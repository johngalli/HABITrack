/* Data para a tabela de hábitos */
var data = new Date();
var dia = String(data.getDate()).padStart(2, "0");
var mes = String(data.getMonth() + 1).padStart(2, "0");
var ano = data.getFullYear();
const dataAtual = dia + "/" + mes + "/" + ano;

console.log(dataAtual);

/* Tabela: 1 Data: DD/MM - 2 Habito Água - 3 Hábito Corrida
- 4 Hábito Ler - 5 Hábito Academia - 6 Hábito Estudos */

/* Tabela de hábitos Banco de dados */
function adicionarItensTabela() {
  const listaDeHabitos = [
    {
      data: dataAtual,
      habitos: [
        { nome: "agua", checked: true },
        { nome: "corrida", checked: false },
        { nome: "leitura", checked: false },
        { nome: "academia", checked: true },
        { nome: "estudos", checked: true },
      ],
    },
    {
      data: "27/05/2024",
      habitos: [
        { nome: "agua", checked: true },
        { nome: "corrida", checked: false },
        { nome: "leitura", checked: false },
        { nome: "academia", checked: false },
        { nome: "estudos", checked: true },
      ],
    },
    {
      data: "26/05/2024",
      habitos: [
        { nome: "agua", checked: true },
        { nome: "corrida", checked: false },
        { nome: "leitura", checked: false },
        { nome: "academia", checked: false },
        { nome: "estudos", checked: true },
      ],
    },
  ];

  listaDeHabitos.forEach((element) => {
    const trDataDb = document.createElement("tr");
    const tdDataDb = document.createElement("td");

    const dataTabela = document.createElement("span");
    dataTabela.innerHTML = element.data;

    tdDataDb.appendChild(dataTabela);
    const trElemento = document.getElementById("linha-tabela");
    trDataDb.appendChild(tdDataDb);
    trElemento.appendChild(trDataDb);

    adicionarCheckHabitos(trDataDb, element.habitos);
  });
}

function adicionarCheckHabitos(trDataDb, listaHabitos) {
  listaHabitos.forEach((element) => {
    console.log(element);

    const tdHabitoDb = document.createElement("td");

    const checkElemento = document.createElement("input");
    checkElemento.setAttribute("type", "checkbox");

    checkElemento.checked = element.checked;

    /* Aqui tem que conectar o checkbox com o banco */
    checkElemento.innerHTML = element;

    trDataDb.appendChild(tdHabitoDb);
    tdHabitoDb.appendChild(checkElemento);
  });
}

/* Calendário Extra */
const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toLocaleDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();