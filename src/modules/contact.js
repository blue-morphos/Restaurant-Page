export const contactFunction = () => {
  const content = document.getElementById("content");
  const address = document.createElement("h1");
  address.textContent = "37 Spooner St, Quahog, RI, USA";
  const phone = document.createElement("h1");
  phone.textContent = "+1 234-567-8900";
  content.append(address, phone);
};
