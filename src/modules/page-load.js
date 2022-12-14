export const initialPageLoadFunction = () => {
  const content = document.getElementById("content");
  const image = document.createElement("IMG");
  image.setAttribute('src', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"')
  const para = document.createElement("div");
  para.setAttribute('class', 'para')
  const p1 = document.createElement("p")
  p1.textContent = 
    "Named the country's best restaraunt by Redundant Magazine"
  const p2 = document.createElement("p")
  p2.textContent = 
    "Located in the heart of City Circle, Le Meilleur dans le Monde is an elegant dining destination with downtown city views. Featuring modern American cuisine with French influences, The National Paper described Le Meilluer dans le Monde as “the finest in the world.”"
  const p3 = document.createElement("p")
  p3.textContent = 
    "The incredible architecture, designed by Billy Bob Thornton, features a solid gold toilet, 100% diamond windows, edible white chocolate walls, artwork by Van Gogh, and panoramic views of the city, while a seasonal terrace offers al fresco dining from spring to fall."
  const p4 = document.createElement("p")
  p4.textContent = 
    "Reserve your table today to see why Le Meilluer dans le Monde is considered the best in the world."
  para.append(p1, p2, p3, p4)
  content.append(image, para);
};
