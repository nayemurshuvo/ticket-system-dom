let seatCount = 0;
let totalSeat = 40;
const ticketPrice = 550;
let totalPrice = 0;
let grandTotal = 0;

// When user click a seat
const allSeats = document.querySelectorAll(".seat");
for (const seat of allSeats) {
  seat.addEventListener("click", function (e) {
    const selectedSeat = e.target;

    // Seat Count
    seatCount++;
    totalSeat--;

    // Validation: One user can not add more that 4 seats
    if (seatCount > 4) {
      alert("You can not buy more than 4 tickets.");
      return;
    }

    // Validation: Next Button enable/disable
    const phone = document.getElementById("phone");

    phone.addEventListener("keyup", function (e) {
      let phoneLength = e.target.value.length;
      if (phoneLength > 0 && seatCount != 0) {
        document.getElementById("nextBtn").removeAttribute("disabled");
      } else {
        document.getElementById("nextBtn").setAttribute("disabled", true);
      }
    });

    // Validation:Coupon Apply Button
    if (seatCount == 4) {
      document.getElementById("couponApply").removeAttribute("disabled");
      document.getElementById("couponInput").removeAttribute("disabled");
    }

    // Append the table data
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

    // Price COunt
    totalPrice = seatCount * ticketPrice;
    grandTotal = totalPrice;

    // Style Chnage & One Click logic
    selectedSeat.style.backgroundColor = "#1DD100";
    selectedSeat.setAttribute("disabled", true);

    // Dyanamic Change
    setText("seatsLeft", totalSeat);
    setText("buySeats", seatCount);
    setText("totalPrice", totalPrice);
    setText("grandTotal", grandTotal);
  });
}

// Apply Button Coupon
document.getElementById("couponApply").addEventListener("click", function () {
  const couponElement = document.getElementById("couponInput");
  let couponCode = couponElement.value;
  let discountPrice = 0;

  if (couponCode === "NEW15") {
    discountPrice = totalPrice * 0.15;
    grandTotal = grandTotal - discountPrice;
    setText("grandTotal", grandTotal);
    // Append Dyanmic Value
    const discountSection = document.getElementById("discountSection");
    const firstH2 = document.createElement("h2");
    firstH2.innerText = " Discount Price";
    const secondH2 = document.createElement("h2");
    secondH2.innerText = `BDT ${discountPrice}`;
    discountSection.appendChild(firstH2);
    discountSection.appendChild(secondH2);
    // Hide Coupon
    document.getElementById("couponSectn").classList.add("hidden");
  } else if (couponCode === "Couple 20") {
    discountPrice = totalPrice * 0.2;
    grandTotal = grandTotal - discountPrice;
    setText("grandTotal", grandTotal);
    // Append Dyanmic Value
    const discountSection = document.getElementById("discountSection");
    const firstH2 = document.createElement("h2");
    firstH2.innerText = " Discount Price";
    const secondH2 = document.createElement("h2");
    secondH2.innerText = `BDT ${discountPrice}`;
    discountSection.appendChild(firstH2);
    discountSection.appendChild(secondH2);
    // Hide Coupon
    document.getElementById("couponSectn").classList.add("hidden");
  } else {
    document.getElementById("couponInput").value = "";
    alert("Invalid Coupon Code");
  }
});

// setText utility Function
function setText(id, text) {
  document.getElementById(id).innerText = text;
}
