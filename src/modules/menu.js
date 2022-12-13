export const menuFunction = () => {
  const content = document.getElementById("content");
  const menu = document.createElement("ul");
  const breakfast = document.createElement("A");
  breakfast.href =
    "https://thepembrokedc.com/wp-content/uploads/2022/11/The-Pembroke-Washington-DC-Breakfast.pdf";
  breakfast.textContent = "Breakfast";
  breakfast.target = "_blank";
  const brunch = document.createElement("A");
  brunch.href =
    "https://thepembrokedc.com/wp-content/uploads/2022/11/The-Pembroke-Washington-DC-Brunch.pdf";
  brunch.textContent = "Brunch";
  brunch.target = "_blank";
  const lunch = document.createElement("A");
  lunch.href =
    "https://thepembrokedc.com/wp-content/uploads/2022/11/The-Pembroke-Washington-DC-Lunch.pdf";
  lunch.textContent = "Lunch";
  lunch.target = "_blank";
  const dinner = document.createElement("A");
  dinner.href =
    "https://thepembrokedc.com/wp-content/uploads/2022/11/The-Pembroke-Washington-DC-Dinner.pdf";
  dinner.textContent = "Dinner";
  dinner.target = "_blank";
  const dessert = document.createElement("A");
  dessert.href =
    "https://thepembrokedc.com/wp-content/uploads/2022/11/The-Pembroke-Washington-DC-Dessert.pdf";
  dessert.textContent = "Dessert";
  dessert.target = "blank";
  menu.append(breakfast, brunch, lunch, dinner, dessert);
  content.appendChild(menu);
};
