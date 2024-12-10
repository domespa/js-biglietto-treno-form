// FORM
const ticketElm = document.getElementById("ticket");

// DOM ELMS
const fullNameElm = document.getElementById("full-name");
const kmsElm = document.getElementById("kms");
const ageElm = document.getElementById("age");

// CARD
const ticketNameElm = document.getElementById("ticket-name");
const ticketTypeElm = document.getElementById("ticket-type");
const ticketSideElm = document.getElementById("ticket-side");
const ticketCodeElm = document.getElementById("ticket-code");
const ticketPriceElm = document.getElementById("ticket-price");

// DOM EVENTS
ticketElm.addEventListener("submit", function(event) {
event.preventDefault();

const userName = fullNameElm.value;
const userKms = parseFloat(kmsElm.value);
const ageGroup = ageElm.value;

let basePrice = 0.21 * userKms;
let ticketType = "";
let discountPrice = 0;

if (ageGroup === "1") {
    ticketType = "Sconto Minorenne";
    discountPrice = basePrice * 0.2;
} else if (ageGroup === "2") { 
    ticketType = "Biglietto Standard";
    discountPrice = 0;
} else if (ageGroup === "3") { 
    ticketType = "Sconto over65";
    discountPrice = basePrice * 0.4;
}

const finalPrice = basePrice - discountPrice;
const ticketCode = Math.round(Math.random() * 100000);
const ticketSide = Math.round(Math.random() * 10);

ticketNameElm.innerHTML = userName;
ticketTypeElm.innerHTML = ticketType;
ticketSideElm.innerHTML = ticketSide;  
ticketCodeElm.innerHTML = ticketCode;
ticketPriceElm.innerHTML = `€ ${finalPrice.toFixed(2)}`;
});
