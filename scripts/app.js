import { renderFighterList } from "./renderFighters.js";
let fighters = [
  {
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

renderFighterList(fighters);
