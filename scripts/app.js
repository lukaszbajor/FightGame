const rootElement = document.querySelector("#root");
const startBtn = document.querySelector(".start");

const fighters = [
  {
    id:"1",
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
    id:"2",
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
    id:"3",
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
    fightersItem.innerHTML = `
        <li class="item" data-id=${fighter.id}>
        <img src="${fighter.avatar}" class="itemAvatar"/>
        <p class="desc"><b>Type: </b>${fighter.name}</p>
        <p class="desc">Description: ${fighter.shortDesc}</p>
        <p class="desc">Best skill: ${fighter.criticAttack.name}</p>
        </li>
        `;
    fightersList.appendChild(fightersItem);
  });
  rootElement.appendChild(fightersList);
};

renderFighters();

const allPlayers = [...document.querySelectorAll(".item")];
let currentElement=null;
allPlayers.forEach((item) => {
item.addEventListener("click", () => {
item.classList.add("active"); 

  if(currentElement !== null){
    currentElement.classList.remove("active");
  }

currentElement=item;
   
  });
 
});

const startGame = () => {
  rootElement.innerHTML = "";
  startBtn.style.display = "none";
  console.log(currentElement);
};
startBtn.addEventListener("click", startGame);
