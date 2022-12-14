export const menuFunction = () => {
  const content = document.getElementById("content")

  const titleHeader = document.createElement("h1")
  titleHeader.textContent = "Menu"
  titleHeader.setAttribute('class', 'titleHeader')
  content.appendChild(titleHeader)

  const menu = document.createElement("div")
  menu.setAttribute('class', 'menu')
  menu.setAttribute("id", "menu")
  content.appendChild(menu)
  const food1 = document.createElement("div")
  const food1text = document.createTextNode("Striped Sea Bass, $36")
  food1.appendChild(food1text)
  
  const food2 = document.createElement("div")
  const food2text = document.createTextNode("Lamb Shank, $32")
  food2.appendChild(food2text)

  const food3 = document.createElement("div")
  const food3text = document.createTextNode("Swordfish Burger, $31")
  food3.appendChild(food3text)

  const food4 = document.createElement("div")
  const food4text = document.createTextNode("Braised Beef Cheek, $28")
  food4.appendChild(food4text)

  const food5 = document.createElement("div")
  const food5text = document.createTextNode("Ratatouille, $26")
  food5.appendChild(food5text)

  const food6 = document.createElement("div")
  const food6text = document.createTextNode("Salmon fillet, $30")
  food6.appendChild(food6text)

  const food7 = document.createElement("div")
  const food7text = document.createTextNode("New York Steak, $36")
  food7.appendChild(food7text)

  const food8 = document.createElement("div")
  const food8text = document.createTextNode("Tri-Tip, $36")
  food8.appendChild(food8text)

  const food9 = document.createElement("div")
  const food9text = document.createTextNode("Duck Confit, $26")
  food9.appendChild(food9text)

  const food10 = document.createElement("div")
  const food10text = document.createTextNode("Chocolate Soufflé, $22")
  food10.appendChild(food10text
)
  
  const food11 = document.createElement("div")
  const food11text = document.createTextNode("Profiterole, $12")
  food11.appendChild(food11text
)

  const food12 = document.createElement("div")
  const food12text = document.createTextNode("Crème brûlée, $12")
  food12.appendChild(food12text
)

 menu.append(food1, food2, food3, food4, food5, food6, food7, food8, food9, food10, food11, food12)
};
