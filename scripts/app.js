const rootElement = document.querySelector("#root");
const startBtn = document.querySelector(".start");

const fighters = [
  {
    id: "1",
    name: "Wizard",
    shortDesc: "Lorem ipsum",
    attack: 8,
    specialAttack: 12,
    defence: 5,
    criticAttack: { name: "Czar złości", value: 20 },
    health: 100,
    potions: 3,
    avatar: "./images/wizard-g090ae14b0_640.png",
  },
  {
    id: "2",
    name: "Soldier",
    shortDesc: "Lorem ipsum",
    attack: 10,
    specialAttack: 12,
    defence: 3,
    criticAttack: { name: "Headshot", value: 20 },
    health: 100,
    potions: 3,
    avatar: "./images/army-g76cac165d_640.png",
  },
  {
    id: "3",
    name: "Hunter",
    shortDesc: "Lorem ipsum",
    attack: 11,
    specialAttack: 12,
    defence: 10,
    criticAttack: { name: "Zatruta strzała", value: 20 },
    health: 100,
    potions: 3,
    avatar: "./images/hunter-gc9223ba2f_640.png",
  },
];

const renderFighters = () => {
  const fightersList = document.createElement("ul");
  fightersList.classList.add("list");
  fighters.forEach((fighter) => {
    const fightersItem = document.createElement("li");
    fightersItem.classList.add("item");
    fightersItem.setAttribute("data-id", fighter.id);
    fightersItem.innerHTML = `
        <img src="${fighter.avatar}" class="itemAvatar"/>
        <p class="desc"><b>Type: </b>${fighter.name}</p>
        <p class="desc">Description: ${fighter.shortDesc}</p>
        <p class="desc">Best skill: ${fighter.criticAttack.name}</p>
        `;
    fightersList.appendChild(fightersItem);
  });
  rootElement.appendChild(fightersList);
};

renderFighters();

const allPlayers = [...document.querySelectorAll(".item")];
let currentElement = null;
allPlayers.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.add("active");

    if (currentElement !== null) {
      currentElement.classList.remove("active");
    }

    currentElement = item;
  });
});

const renderFight = () => {
  // Create character user choose
  const fightMain = document.createElement("div");
  fightMain.classList.add("fightBox");
  let choosePlayer = currentElement.attributes["data-id"].value - 1;
  const userPlayer = document.createElement("div");
  userPlayer.classList.add("item");
  userPlayer.innerHTML = `
        <img src="${fighters[choosePlayer].avatar}" class="itemAvatar"/>
        <div class="health">${fighters[choosePlayer].health}</div>
        <p class="desc"><b>Type: </b>${fighters[choosePlayer].name}</p>
        <p class="desc">Description: ${fighters[choosePlayer].shortDesc}</p>
        <p class="desc">Best skill: ${fighters[choosePlayer].criticAttack.name}</p>
        `;
  fightMain.appendChild(userPlayer);

  //Create character pc choose
  let choosePc = Math.floor(Math.random() * fighters.length);

  const pcPlayer = document.createElement("div");
  pcPlayer.classList.add("item");
  pcPlayer.innerHTML = `
      <img src="${fighters[choosePc].avatar}" class="itemAvatar"/>
      <div class="health">${fighters[choosePc].health}</div>
      <p class="desc"><b>Type: </b>${fighters[choosePc].name}</p>
      <p class="desc">Description: ${fighters[choosePc].shortDesc}</p>
      <p class="desc">Best skill: ${fighters[choosePc].criticAttack.name}</p>
      `;
  fightMain.appendChild(pcPlayer);

  //Create buttons to fight and event log
  const fightButtons = document.createElement("div");
  fightMain.classList.add("fightButtons");
  for (i = 0; i <= 3; i++) {
    const fightButton = document.createElement("button");
    fightMain.classList.add("fightButton");
    fightMain.appendChild(fightButton);
  }
  fightMain.appendChild(fightButtons);

  const eventLog = document.createElement("div");
  fightMain.classList.add("eventLog");
  fightMain.appendChild(eventLog);

  rootElement.appendChild(fightMain);
};

const startGame = () => {
  if (currentElement === null) {
    alert("Wybierz character!");
  } else {
    rootElement.innerHTML = "";
    startBtn.style.display = "none";
    console.log(currentElement.attributes["data-id"]);
    renderFight();
  }
};
startBtn.addEventListener("click", startGame);
