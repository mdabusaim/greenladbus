document.addEventListener("DOMContentLoaded", function () {
    const seats = document.querySelectorAll(".grid div[id='seat']");
    let totalPrice = 0;

    const maxSeatsToBuy = 4;


    seats.forEach((seat) => {
        seat.addEventListener("click", function () {
            if (seat.classList.contains("selected")) {
                totalPrice -= 500;
                seat.classList.remove("selected");
            } else if (totalPrice < maxSeatsToBuy * 500) {
                totalPrice += 500;
                seat.classList.add("selected");
            }

            displaySelectedSeat();
            displayTotalPrice(totalPrice);
        });
    });

    function displaySelectedSeat() {
        const divNew = document.querySelector(".div-new");

        divNew.innerHTML = "";
        divNew.classList.remove("economy");

        if (totalPrice > 0) {
            divNew.classList.add("economy");
        }
        seats.forEach((seat, index) => {
            if (seat.classList.contains("selected")) {
                const seatDetailsDiv = document.createElement("div");
                const seatLabel = getSeatLabel(index);
                seatDetailsDiv.innerHTML = `
                    <p>Seat: ${seatLabel}</p>
                    <p>Class: Economy</p>
                    <p>Price: $500</p>
                `;
                divNew.appendChild(seatDetailsDiv);
            }
        });
    }


    function getSeatLabel(index) {
        const row = String.fromCharCode('A'.charCodeAt(0) + Math.floor(index / 4));
        const column = (index % 4) + 1;
        return `${row}${column}`;
    }

    function displayTotalPrice(total) {
        const totalPriceElement = document.getElementById("total-price");
        const totalPriceText = `BDT: ${total}`;
        totalPriceElement.textContent = totalPriceText;
    }
});


