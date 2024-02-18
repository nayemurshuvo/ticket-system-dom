let seatCount = 0;
let totalSeat = 40;
const ticketPrice = 550;
let totalPrice = 0;

const allSeats = document.querySelectorAll(".seat");
for (const seat of allSeats) {
  seat.addEventListener("click", function (e) {
    const selectedSeat = e.target;
    const seatName = selectedSeat.innerText;
    const list = document.getElementById("list");
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerText = seatName;
    td1.classList.add("text-left");
    const td2 = document.createElement("td");
    td2.innerText = "Economy";
    td2.classList.add("text-center");
    const td3 = document.createElement("td");
    td3.innerText = "550";
    td3.classList.add("text-right");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    list.appendChild(tr);
    seatCount++;
    totalSeat--;
    totalPrice = seatCount * ticketPrice;
    selectedSeat.style.backgroundColor = "#1DD100";
    selectedSeat.setAttribute("disabled", true);
    setText("seatsLeft", totalSeat);
    setText("buySeats", seatCount);
    setText("totalPrice", totalPrice);
  });
}

// setText utility Function
function setText(id, text) {
  document.getElementById(id).innerText = text;
}
