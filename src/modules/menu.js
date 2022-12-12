export const menuFunction = () => {
    const content = document.getElementById('content');
    const h1 = document.createElement("h1");
    h1.textContent = "Hot Dog: $34.99";
    content.append(h1);
}