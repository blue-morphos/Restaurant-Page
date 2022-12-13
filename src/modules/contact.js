export const contactFunction = () => {
  const content = document.getElementById("content");
  const address = document.createElement("h1");
  address.textContent = "1500 New Hampshire Ave NW, Washington, DC 20036, USA";
  const phone = document.createElement("h1");
  phone.textContent = "+1 202-448-430";
  content.append(address, phone);
};
