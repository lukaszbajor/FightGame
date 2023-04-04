const createFighter = (fighter) => {
  const fightersItem = document.createElement("li");
  fightersItem.innerHTML = `
        <li class="item">
        <img src="${fighter.avatar}" class="itemAvatar"/>
        <p class="desc"><b>Type: </b>${fighter.name}</p>
        <p class="desc">Description: ${fighter.shortDesc}</p>
        <p class="desc">Best skill: ${fighter.criticAttack.name}</p>
        </li>
        `;
  return fightersItem;
};

const createFightersList = (fighters) => {
  const fightersList = document.createElement("ul");
  fighters.forEach((fighter) => {
    fightersList.appendChild(createFighter(fighter));
  });
  return fightersList;
};
export const renderFighterList = (fighters) => {
  const rootElement = document.querySelector("#root");
  rootElement.appendChild(createFightersList(fighters));
  console.log(fighters);
};
