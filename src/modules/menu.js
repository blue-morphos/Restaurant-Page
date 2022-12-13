export const menuFunction = () => {
  const menu = document.createElement("div")
  menu.id="menu"
  content.appendChild(menu)
  const food1 = document.createElement("div")
  food1.textContent="Wagyu burger, $13"
  const food2 = document.createElement("div")
  food2.textContent = "Tomahawk steak, $38"
  const food3 = document.createElement("div")
  food3.textContent = "Split pea soup, $9"
  const food4 = document.createElement("div")
  food4.textContent = "Chef salad, $14"
  const food5 = document.createElement("div")
  food5.textContent = "Devil's food cake, $9"
  const food6 = document.createElement("div")
  food6.textContent = "Apple pie, $9"
  menu.append(food1, food2, food3, food4, food5, food6)
};
