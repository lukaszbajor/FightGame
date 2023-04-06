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
    potions: { count: 3, value: 15 },
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
    potions: { count: 2, value: 15 },
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
    potions: { count: 4, value: 15 },
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
let choosePlayer = null;
let choosePc = Math.floor(Math.random() * fighters.length);

const renderFight = () => {
  // Create character user choose
  const fightMain = document.createElement("div");
  fightMain.classList.add("fightBox");
  const characters = document.createElement("div");
  characters.classList.add("characters");
  choosePlayer = currentElement.attributes["data-id"].value - 1;
  const userPlayer = document.createElement("div");
  userPlayer.classList.add("item");
  userPlayer.innerHTML = `
        <img src="${fighters[choosePlayer].avatar}" class="itemAvatar"/>
        <div class="healthPlayer">${fighters[choosePlayer].health}</div>
        <p class="desc"><b>Type: </b>${fighters[choosePlayer].name}</p>
        <p class="desc">Description: ${fighters[choosePlayer].shortDesc}</p>
        <p class="desc">Best skill: ${fighters[choosePlayer].criticAttack.name}</p>
        `;
  characters.appendChild(userPlayer);

  //Create character pc choose

  const pcPlayer = document.createElement("div");
  pcPlayer.classList.add("item");
  pcPlayer.innerHTML = `
      <img src="${fighters[choosePc].avatar}" class="itemAvatar"/>
      <div class="healthPc">${fighters[choosePc].health}</div>
      <p class="desc"><b>Type: </b>${fighters[choosePc].name}</p>
      <p class="desc">Description: ${fighters[choosePc].shortDesc}</p>
      <p class="desc">Best skill: ${fighters[choosePc].criticAttack.name}</p>
      `;
  characters.appendChild(pcPlayer);
  fightMain.appendChild(characters);

  //Create buttons to fight and event log
  const fightButtons = document.createElement("div");
  fightButtons.classList.add("fightButtons");
  for (i = 0; i <= 3; i++) {
    const fightButton = document.createElement("button");
    fightButton.classList.add("fightButton");
    fightButtons.appendChild(fightButton);
  }
  fightMain.appendChild(fightButtons);

  const eventLog = document.createElement("ul");
  eventLog.classList.add("eventLog");
  fightMain.appendChild(eventLog);

  rootElement.appendChild(fightMain);
};
let hPc = fighters[choosePc].health;

const attackPlayer = () => {
  const divHealthPC = document.querySelector(".healthPc");
  hPc =
    hPc -
    (Math.floor(Math.random() * fighters.length) +
      fighters[choosePlayer].attack);

  divHealthPC.textContent = hPc;
  const AllFightButtons = document.querySelectorAll(".fightButton");
  AllFightButtons.forEach((item) => {
    item.setAttribute("disabled", true);
  });

  setTimeout(() => {
    pcMoves();
  }, 5000);
  const eventLog = document.querySelector(".eventLog");
  const action = document.createElement("li");
  action.textContent = "Atakuje " + fighters[choosePlayer].name;
  eventLog.appendChild(action);
};

const specialAttackPlayer = () => {
  const divHealthPC = document.querySelector(".healthPc");

  hPc =
    hPc -
    (Math.floor(Math.random() * fighters.length) +
      fighters[choosePlayer].specialAttack);

  divHealthPC.textContent = hPc;
};

const criticAttackPlayer = () => {
  const divHealthPC = document.querySelector(".healthPc");

  hPc = hPc - fighters[choosePlayer].criticAttack.value;

  divHealthPC.textContent = hPc;
  const AllFightButtons = document.querySelectorAll(".fightButton");
  AllFightButtons[2].setAttribute("disabled", true);
};

let potionsCount = null;
let hPlayer = null;
// let potionsCount = fighters[choosePlayer].potions.count;
const potionsPlayer = () => {
  const divHealthPlayer = document.querySelector(".healthPlayer");
  // hPlayer = fighters[choosePlayer].health;

  potionsCount--;
  const AllFightButtons = document.querySelectorAll(".fightButton");
  AllFightButtons[3].textContent = "Potions(" + potionsCount + ")";

  hPlayer = hPlayer + fighters[choosePlayer].potions.value;

  divHealthPlayer.textContent = hPlayer;

  if (potionsCount === 0 || hPlayer > 75) {
    AllFightButtons[3].setAttribute("disabled", true);
  }
  console.log(hPlayer);
  console.log(potionsCount);
};

const pcMoves = () => {
  const divHealthPlayer = document.querySelector(".healthPlayer");
  const AllFightButtons = document.querySelectorAll(".fightButton");
  // hPlayer = fighters[choosePlayer].health;
  console.log(hPlayer);
  hPlayer =
    hPlayer -
    Math.floor(Math.random() * fighters.length) -
    fighters[choosePc].attack;
  console.log(hPlayer);

  divHealthPlayer.textContent = hPlayer;
  AllFightButtons.forEach((item) => {
    item.removeAttribute("disabled");
  });

  if (hPlayer > 75) {
    AllFightButtons[3].setAttribute("disabled", true);
  }
  const eventLog = document.querySelector(".eventLog");
  const action = document.createElement("li");
  action.textContent = "Atakuje " + fighters[choosePc].name;
  eventLog.appendChild(action);
};

const startGame = () => {
  if (currentElement === null) {
    alert("Wybierz character!");
  } else {
    rootElement.innerHTML = "";
    startBtn.style.display = "none";
    console.log(currentElement.attributes["data-id"]);
    renderFight();
    const AllFightButtons = document.querySelectorAll(".fightButton");
    AllFightButtons[0].textContent = "Attack";
    AllFightButtons[0].addEventListener("click", attackPlayer);

    AllFightButtons[1].textContent = "Special Attack";
    AllFightButtons[1].addEventListener("click", specialAttackPlayer);

    AllFightButtons[2].textContent = fighters[choosePlayer].criticAttack.name;
    AllFightButtons[2].addEventListener("click", criticAttackPlayer);

    potionsCount = fighters[choosePlayer].potions.count;
    hPlayer = fighters[choosePlayer].health;

    AllFightButtons[3].textContent = "Potions(" + potionsCount + ")";
    AllFightButtons[3].addEventListener("click", potionsPlayer);

    if (fighters[choosePlayer].health > 85) {
      AllFightButtons[3].setAttribute("disabled", true);
    }
  }
};
startBtn.addEventListener("click", startGame);
