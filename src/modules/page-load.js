export const initialPageLoadFunction = () => {
    const content = document.getElementById("content");
    const h1 = document.createElement("h1");
    h1.textContent = "Pembroke";
    const copy = document.createElement("p");
    copy.textContent = "Named the country's best restaraunt by Redundant Magazine";
    const image = document.createElement("IMG");
    image.setAttribute('src', 'https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2824&q=80')
    content.append(h1, copy, image);

}