/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const cardSuits = ["♦", "♣", "♠", "♥"];
  const values = [2, 3, 4, 5, 6, 7, 8, 9, "J", "K", "Q", "A"];

  function generateRandom(arr) {
    let random = Math.floor(Math.random() * arr.length);
    return arr[random];
  }

  document.getElementById("values").innerHTML = generateRandom(values);

  const randomSuits = generateRandom(cardSuits);

  for (let suit of ["top", "bot"]) {
    suit = document.getElementById(suit);

    suit.style.color =
      randomSuits === "♥" || randomSuits === "♦" ? "red" : "black";

    suit.innerHTML = randomSuits;
  }
};
setInterval(window.onload, 3400);
