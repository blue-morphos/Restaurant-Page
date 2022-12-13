export const initialPageLoadFunction = () => {
  const content = document.getElementById("content");
  const h1 = document.createElement("h1");
  h1.textContent = "Le Meilleur dans le Monde";
  const copy = document.createElement("p");
  copy.textContent =
    "Named the country's best restaraunt by Redundant Magazine";
  const image = document.createElement("IMG");
  content.append(h1, copy, image);
};
