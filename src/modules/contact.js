export const contactFunction = () => {
  const content = document.getElementById("content")
  const address = document.createElement("h1")
  address.textContent = "37 Spooner St, Quahog, RI, USA"
  const phone = document.createElement("h1")
  phone.textContent = "+1 234-567-8900"
  const hours = document.createElement("h1")
  hours.textContent = "Open 5:30pm – 10:00pm Tuesday – Saturday"
  const requireReservation = document.createElement("h1");
  requireReservation.textContent = "Reservation Required"
  content.append(address, phone, hours, requireReservation)
};
