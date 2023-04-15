const rootElement = document.querySelector("#root");
const startBox = document.querySelector(".start");
const startBtn = document.querySelector(".startBtn");
const audioPunch = new Audio("./audio/punch-140236.mp3");
const audioPotion = new Audio("./audio/085594_potion-35983.mp3");
const themeBtn = document.querySelector(".theme");
const body = document.querySelector("body");
const audioBtn = document.querySelector(".audioBtn");
const audioSource = document.querySelector(".audioSource");
const mainAudio = document.querySelector(".mainAudio");
const modal = document.querySelector(".modalBox");
const modalBtn = document.querySelector(".modalBtn");

const fighters = [
  {
    id: "1",
    name: "Wizard",
    shortDesc: "Sorcerer from the east",
    attack: 8,
    specialAttack: 12,
    defence: 5,
    criticAttack: { name: "Rain of fire", value: 20 },
    health: 100,
    potions: { count: 3, value: 15 },
    avatar: "./images/wizard-g090ae14b0_640.png",
  },
  {
    id: "2",
    name: "Soldier",
    shortDesc: "Firearms Master",
    attack: 10,
    specialAttack: 12,
    defence: 3,
    criticAttack: { name: "Headshot", value: 19 },
    health: 100,
    potions: { count: 2, value: 15 },
    avatar: "./images/army-g76cac165d_640.png",
  },
  {
    id: "3",
    name: "Hunter",
    shortDesc: "Exquisite Archer",
    attack: 11,
    specialAttack: 12,
    defence: 10,
    criticAttack: { name: "Poisoned arrow", value: 21 },
    health: 100,
    potions: { count: 4, value: 15 },
    avatar: "./images/hunter-gc9223ba2f_640.png",
  },
  {
    id: "4",
    name: "Mummy",
    shortDesc: "An ancient mummy",
    attack: 10,
    specialAttack: 13,
    defence: 11,
    criticAttack: { name: "Mind binding", value: 22 },
    health: 100,
    potions: { count: 5, value: 15 },
    avatar: "./images/mummy-g1c81f21c2_640.png",
  },
  {
    id: "5",
    name: "Orc",
    shortDesc: "Bruiser from Khorinis",
    attack: 13,
    specialAttack: 17,
    defence: 5,
    criticAttack: { name: "Bloody blow", value: 25 },
    health: 100,
    potions: { count: 5, value: 15 },
    avatar: "./images/orc-gceeba25b3_640.png",
  },
  {
    id: "6",
    name: "Alb",
    shortDesc: "Modern warrior",
    attack: 14,
    specialAttack: 16,
    defence: 15,
    criticAttack: { name: "Drone recall", value: 23 },
    health: 100,
    potions: { count: 5, value: 15 },
    avatar: "./images/man-gc51459306_640.png",
  },
  {
    id: "7",
    name: "Werewolf",
    shortDesc: "Mythical Lord of the Forest",
    attack: 10,
    specialAttack: 18,
    defence: 5,
    criticAttack: { name: "Deep bite", value: 28 },
    health: 100,
    potions: { count: 5, value: 15 },
    avatar: "./images/creature-ga4abd64dd_640.png",
  },
  {
    id: "8",
    name: "Knight",
    shortDesc: "Medieval warrior",
    attack: 15,
    specialAttack: 18,
    defence: 12,
    criticAttack: { name: "Deep cut wound", value: 30 },
    health: 100,
    potions: { count: 4, value: 15 },
    avatar: "./images/man-ge89997f6d_640.png",
  },
  {
    id: "9",
    name: "Troll",
    shortDesc: "Thick-skinned reptile",
    attack: 18,
    specialAttack: 21,
    defence: 4,
    criticAttack: { name: "Leveling with the ground", value: 35 },
    health: 100,
    potions: { count: 3, value: 15 },
    avatar: "./images/troll-gfba5855dd_640.png",
  },
  {
    id: "10",
    name: "The Witcher",
    shortDesc: "White Wolf",
    attack: 18,
    specialAttack: 22,
    defence: 10,
    criticAttack: { name: "Aard", value: 33 },
    health: 100,
    potions: { count: 5, value: 15 },
    avatar: "./images/man-g7c45e935f_640.png",
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
        <p class="desc"><b>${fighter.name}</b></p>
        <p class="desc">${fighter.shortDesc}</p>
        <p class="desc">${fighter.criticAttack.name}</p>
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
        <div class="boxHealthPlayer"><div class="progressBarPlayer"></div><p class="healthPlayer">${fighters[choosePlayer].health}</p></div>
        <p class="desc"><b>${fighters[choosePlayer].name}</b></p>
        <p class="desc">${fighters[choosePlayer].shortDesc}</p>
        <p class="desc">${fighters[choosePlayer].criticAttack.name}</p>
        `;
  characters.appendChild(userPlayer);

  //Create character pc choose

  const pcPlayer = document.createElement("div");
  pcPlayer.classList.add("item");
  pcPlayer.innerHTML = `
      <img src="${fighters[choosePc].avatar}" class="itemAvatar"/>
      <div class="boxHealthPC"><div class="progressBarPc"></div><p class="healthPc">${fighters[choosePc].health}</p></div>
      <p class="desc"><b>${fighters[choosePc].name}</b></p>
      <p class="desc">${fighters[choosePc].shortDesc}</p>
      <p class="desc">${fighters[choosePc].criticAttack.name}</p>
      `;
  characters.appendChild(pcPlayer);
  fightMain.appendChild(characters);
  // const divHealthPC = document.querySelector(".healthPc");

  //Create buttons to fight and event log
  const fightButtons = document.createElement("div");
  fightButtons.classList.add("fightButtons");
  for (i = 0; i <= 3; i++) {
    const fightButton = document.createElement("button");
    fightButton.classList.add("fightButton", "mainBtn");
    fightButtons.appendChild(fightButton);
  }
  fightMain.appendChild(fightButtons);

  const eventLogHeader = document.createElement("h2");
  eventLogHeader.classList.add("eventLogHeader");
  eventLogHeader.textContent = "Event Log:";
  fightMain.appendChild(eventLogHeader);

  const eventLog = document.createElement("ul");
  eventLog.classList.add("eventLog");
  fightMain.appendChild(eventLog);

  const playAgainBtn = document.createElement("button");
  playAgainBtn.classList.add("mainBtn", "playAgainBtn");
  playAgainBtn.textContent = "Play Again!";
  fightMain.appendChild(playAgainBtn);

  console.log(eventLog);
  rootElement.appendChild(fightMain);

  if (eventLog.children.length === 0) {
    eventLog.innerHTML = "<p class='eventLogInfo'>Event log is empty.</p>";
  } else {
    eventLog.innerHTML = "";
  }
};
let hPc = fighters[choosePc].health;

const attackPlayer = () => {
  const divHealthPC = document.querySelector(".healthPc");
  const progressBarPc = document.querySelector(".progressBarPc");
  console.log(divHealthPC);
  hPc =
    hPc -
    (Math.floor(Math.random() * fighters.length) +
      fighters[choosePlayer].attack);

  divHealthPC.textContent = hPc;
  const AllFightButtons = document.querySelectorAll(".fightButton");
  AllFightButtons.forEach((item) => {
    item.setAttribute("disabled", true);
  });

  const eventLog = document.querySelector(".eventLog");
  const eventLogInfo = document.querySelector(".eventLogInfo");
  const action = document.createElement("li");
  const winText = document.createElement("li");
  const playAgainBtn = document.querySelector(".playAgainBtn");
  // action.textContent =
  //   fighters[choosePlayer].name + " attacks with a normal attack";

  action.innerHTML = `<b>${fighters[choosePlayer].name}</b> attacks with a normal attack.`;

  eventLog.appendChild(action);
  const items = document.querySelectorAll(".item");
  items[0].classList.remove("active");
  items[1].classList.add("active");

  if (hPc <= 0) {
    divHealthPC.textContent = 0;
    // winText.textContent = fighters[choosePlayer].name + " won the duel!";

    winText.innerHTML = `<b>${fighters[choosePlayer].name} won the duel!</b>`;
    eventLog.appendChild(winText);
    AllFightButtons.forEach((item) => {
      item.setAttribute("disabled", true);
    });
    progressBarPc.style.display = "none";
    items[1].classList.remove("active");
    items[0].classList.add("winner");

    playAgainBtn.style.display = "block";
    playAgainBtn.addEventListener("click", () => {
      location.reload();
    });

    mainAudio.src = "./audio/success-fanfare-trumpets-6185.mp3";
    mainAudio.play();
  } else {
    setTimeout(() => {
      pcMoves();
    }, 5000);
  }

  progressBarPc.style.width = hPc + "%";
  eventLogInfo.style.display = "none";
  eventLog.scrollTop = eventLog.scrollHeight;
  audioPunch.play();
};

const specialAttackPlayer = () => {
  const divHealthPC = document.querySelector(".healthPc");
  const progressBarPc = document.querySelector(".progressBarPc");
  const eventLogInfo = document.querySelector(".eventLogInfo");
  const playAgainBtn = document.querySelector(".playAgainBtn");

  hPc =
    hPc -
    (Math.floor(Math.random() * fighters.length) +
      fighters[choosePlayer].specialAttack);

  divHealthPC.textContent = hPc;

  const AllFightButtons = document.querySelectorAll(".fightButton");
  AllFightButtons.forEach((item) => {
    item.setAttribute("disabled", true);
  });

  const eventLog = document.querySelector(".eventLog");
  const action = document.createElement("li");
  const winText = document.createElement("li");
  // action.textContent =
  //   fighters[choosePlayer].name + " ";

  action.innerHTML = `<b>${fighters[choosePlayer].name}</b> attacks with a special attack.`;
  eventLog.appendChild(action);
  const items = document.querySelectorAll(".item");
  items[0].classList.remove("active");
  items[1].classList.add("active");

  if (hPc <= 0) {
    divHealthPC.textContent = 0;
    // winText.textContent = fighters[choosePlayer].name + " won the duel!";

    winText.innerHTML = `<b>${fighters[choosePlayer].name} won the duel!</b>`;

    eventLog.appendChild(winText);
    AllFightButtons.forEach((item) => {
      item.setAttribute("disabled", true);
    });
    progressBarPc.style.display = "none";
    items[1].classList.remove("active");
    items[0].classList.add("winner");

    playAgainBtn.style.display = "block";
    playAgainBtn.addEventListener("click", () => {
      location.reload();
    });

    mainAudio.src = "./audio/success-fanfare-trumpets-6185.mp3";
    mainAudio.play();
  } else {
    setTimeout(() => {
      pcMoves();
    }, 5000);

    eventLogInfo.style.display = "none";
  }
  progressBarPc.style.width = hPc + "%";
  // const items = document.querySelectorAll(".item");
  // items[0].classList.remove("active");
  // items[1].classList.add("active");
  eventLog.scrollTop = eventLog.scrollHeight;
  audioPunch.play();
};

const criticAttackPlayer = () => {
  const divHealthPC = document.querySelector(".healthPc");
  const progressBarPc = document.querySelector(".progressBarPc");
  const eventLogInfo = document.querySelector(".eventLogInfo");
  const playAgainBtn = document.querySelector(".playAgainBtn");

  hPc = hPc - fighters[choosePlayer].criticAttack.value;

  divHealthPC.textContent = hPc;
  const AllFightButtons = document.querySelectorAll(".fightButton");
  AllFightButtons[2].style.display = "none";

  AllFightButtons.forEach((item) => {
    item.setAttribute("disabled", true);
  });

  const eventLog = document.querySelector(".eventLog");
  const action = document.createElement("li");
  const winText = document.createElement("li");
  // action.textContent =
  //   fighters[choosePlayer].name +
  //   " attacks with a critical attack(" +
  //   fighters[choosePlayer].criticAttack.name +
  //   ")";

  action.innerHTML = `<b>${fighters[choosePlayer].name}</b> attacks with a critical attack (<b>${fighters[choosePlayer].criticAttack.name}</b>)`;
  eventLog.appendChild(action);

  const items = document.querySelectorAll(".item");
  items[0].classList.remove("active");
  items[1].classList.add("active");

  if (hPc <= 0) {
    divHealthPC.textContent = 0;
    // winText.textContent = fighters[choosePlayer].name + " wygrał pojedynek!";
    winText.innerHTML = `<b>${fighters[choosePlayer].name} won the duel!</b>`;
    eventLog.appendChild(winText);
    AllFightButtons.forEach((item) => {
      item.setAttribute("disabled", true);
    });
    progressBarPc.style.display = "none";

    items[1].classList.remove("active");
    items[0].classList.add("winner");

    playAgainBtn.style.display = "block";
    playAgainBtn.addEventListener("click", () => {
      location.reload();
    });

    mainAudio.src = "./audio/success-fanfare-trumpets-6185.mp3";
    mainAudio.play();
  } else {
    setTimeout(() => {
      pcMoves();
    }, 5000);
  }
  progressBarPc.style.width = hPc + "%";

  eventLogInfo.style.display = "none";
  eventLog.scrollTop = eventLog.scrollHeight;
  audioPunch.play();
};

let potionsCount = null;
let hPlayer = null;

// let potionsCount = fighters[choosePlayer].potions.count;
const potionsPlayer = () => {
  const divHealthPlayer = document.querySelector(".healthPlayer");
  const progressBarPlayer = document.querySelector(".progressBarPlayer");
  const potionBtn = document.querySelector(".potion");
  // hPlayer = fighters[choosePlayer].health;

  potionsCount--;
  const AllFightButtons = document.querySelectorAll(".fightButton");
  potionBtn.textContent = "Potions(" + potionsCount + ")";

  hPlayer = hPlayer + fighters[choosePlayer].potions.value;

  divHealthPlayer.textContent = hPlayer;

  if (hPlayer > 75) {
    potionBtn.setAttribute("disabled", true);
  }

  if (potionsCount === 0) {
    potionBtn.setAttribute("disabled", true);
  }

  console.log(hPlayer);
  console.log(potionsCount);
  const eventLog = document.querySelector(".eventLog");
  const action = document.createElement("li");
  // action.textContent =
  //   fighters[choosePlayer].name + " użył mikstury uzdarwiającej";

  action.innerHTML = `<b>${fighters[choosePlayer].name}</b> used the potion.</b>)`;
  eventLog.appendChild(action);

  setTimeout(() => {
    pcMoves();
  }, 5000);
  progressBarPlayer.style.width = hPlayer + "%";

  const items = document.querySelectorAll(".item");
  items[0].classList.remove("active");
  items[1].classList.add("active");

  AllFightButtons.forEach((item) => {
    item.setAttribute("disabled", true);
  });
  eventLog.scrollTop = eventLog.scrollHeight;
  audioPotion.play();
};

let countPotionsPc = fighters[choosePc].potions.count;
let countCriticAttackPC = 0;

const pcMoves = () => {
  const divHealthPlayer = document.querySelector(".healthPlayer");
  const divHealthPC = document.querySelector(".healthPc");
  const AllFightButtons = document.querySelectorAll(".fightButton");
  const progressBarPc = document.querySelector(".progressBarPc");
  const progressBarPlayer = document.querySelector(".progressBarPlayer");
  const potionBtn = document.querySelector(".potion");
  const items = document.querySelectorAll(".item");
  const playAgainBtn = document.querySelector(".playAgainBtn");
  // items[0].classList.remove("active");
  // items[1].classList.add("active");
  // hPlayer = fighters[choosePlayer].health;
  // console.log(hPlayer);

  //Losowanie akcji

  let actionNumber = Math.floor(Math.random() * 4);

  if (
    actionNumber === 2 &&
    countCriticAttackPC === 1 &&
    hPc < 75 &&
    countPotionsPc !== 0
  ) {
    actionNumber = Math.floor(Math.random() * 2) || 3;
  } else if (
    actionNumber === 2 &&
    countCriticAttackPC === 1 &&
    hPc > 75 &&
    countPotionsPc !== 0
  ) {
    actionNumber = Math.floor(Math.random() * 1);
  } else if (hPc > 75) {
    actionNumber = Math.floor(Math.random() * 3 && countPotionsPc !== 0);
  }
  console.log(actionNumber);

  if (actionNumber === 0) {
    hPlayer =
      hPlayer -
      Math.floor(Math.random() * fighters.length) -
      fighters[choosePc].attack;
    // console.log(hPlayer);

    divHealthPlayer.textContent = hPlayer;
    audioPunch.play();
  } else if (actionNumber === 1) {
    hPlayer =
      hPlayer -
      (Math.floor(Math.random() * fighters.length) +
        fighters[choosePc].specialAttack);

    divHealthPlayer.textContent = hPlayer;
    audioPunch.play();
  } else if (actionNumber === 2) {
    hPlayer = hPlayer - fighters[choosePc].criticAttack.value;
    countCriticAttackPC = 1;
    divHealthPlayer.textContent = hPlayer;
    audioPunch.play();
  } else {
    hPc = hPc + fighters[choosePc].potions.value;
    audioPotion.play();

    divHealthPC.textContent = hPc;
  }

  AllFightButtons.forEach((item) => {
    item.removeAttribute("disabled");
  });

  if (hPlayer > 75) {
    potionBtn.setAttribute("disabled", true);
  }

  if (potionsCount === 0) {
    potionBtn.setAttribute("disabled", true);
  }

  const eventLog = document.querySelector(".eventLog");
  const action = document.createElement("li");
  const winText = document.createElement("li");

  if (actionNumber === 0) {
    action.innerHTML = `<b>${fighters[choosePc].name}</b> attacks with a normal attack.`;

    progressBarPlayer.style.width = hPlayer + "%";
  } else if (actionNumber === 1) {
    action.innerHTML = `<b>${fighters[choosePc].name}</b> attacks with a special attack.`;
    progressBarPlayer.style.width = hPlayer + "%";
  } else if (actionNumber === 2) {
    action.innerHTML = `<b>${fighters[choosePc].name}</b> attacks with a critical attack (<b>${fighters[choosePc].criticAttack.name}</b>)`;
    progressBarPlayer.style.width = hPlayer + "%";
  } else {
    action.innerHTML = `<b>${fighters[choosePc].name}</b> used the potion.</b>`;
    progressBarPc.style.width = hPc + "%";
  }

  action.classList.add("pc");
  eventLog.appendChild(action);

  items[0].classList.add("active");
  items[1].classList.remove("active");

  if (hPlayer <= 0) {
    divHealthPlayer.textContent = 0;
    winText.innerHTML = `<b>${fighters[choosePc].name} won the duel!</b>`;
    eventLog.appendChild(winText);
    AllFightButtons.forEach((item) => {
      item.setAttribute("disabled", true);
    });
    progressBarPlayer.style.display = "none";
    items[0].classList.remove("active");
    items[1].classList.add("winner");

    playAgainBtn.style.display = "block";
    playAgainBtn.addEventListener("click", () => {
      location.reload();
    });

    mainAudio.src = "./audio/success-fanfare-trumpets-6185.mp3";
    mainAudio.play();
  }
  eventLog.scrollTop = eventLog.scrollHeight;
};
// const AllFightButtons = document.querySelectorAll(".fightButton");

const startGame = () => {
  if (currentElement === null) {
    modal.style.display = "flex";
  } else {
    rootElement.innerHTML = "";
    startBox.style.display = "none";
    console.log(currentElement.attributes["data-id"]);
    renderFight();

    const items = document.querySelectorAll(".item");
    items[0].classList.add("active");

    if (themeBtn.textContent === "Light Mode") {
      const items = document.querySelectorAll(".item");
      items.forEach((item) => {
        item.classList.toggle("themeItems");
      });
    }

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
    AllFightButtons[3].classList.add("potion");
    AllFightButtons[3].addEventListener("click", potionsPlayer);

    if (fighters[choosePlayer].health > 85) {
      AllFightButtons[3].setAttribute("disabled", true);
    }
    mainAudio.src = "./audio/heroic-intro-21468.mp3";
    mainAudio.play();
  }
  // audioSource.setAttribute("src", "./audio/heroic-intro-21468.mp3");
};
startBtn.addEventListener("click", startGame);

const themeFn = () => {
  body.classList.toggle("themeBody");
  themeBtn.textContent =
    themeBtn.textContent === "Dark Mode" ? "Light Mode" : "Dark Mode";
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.classList.toggle("themeItems");
  });
};

themeBtn.addEventListener("click", themeFn);

const audioFn = () => {
  mainAudio.classList.toggle("activeMainAudio");
  audioBtn.classList.toggle("pressed");
};
audioBtn.addEventListener("click", audioFn);
const removeModal = () => {
  modal.style.display = "none";
};
modalBtn.addEventListener("click", removeModal);
