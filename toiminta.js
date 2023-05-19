const quotes = [
  {
    quote: "“First, solve the problem. Then, write the code.”",
    tekija: "John Johnson",
  },
  {
    quote: "“Knowledge is power.”",
    tekija: "Francis Bacon",
  },
  {
    quote: "“Code is like humor. When you have to explain it, it’s bad.”",
    tekija: "Cory House",
  },
  {
    quote:
      "“Programming isn't about what you know; it's about what you can figure out.”",
    tekija: "Chris Pine",
  },
  {
    quote:
      "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”",
    tekija: "Martin Fowler",
  },
];

function vaihdaQuote() {
  let teksti_paikka = document.getElementById("quote");
  let sanojan_paikka = document.getElementById("kertoja");
  let randomQuote = quotes[Math.floor(Math.random() * (quotes.length - 1))];
  teksti_paikka.textContent = randomQuote.quote;
  sanojan_paikka.textContent = randomQuote.tekija;
}

window.addEventListener("DOMContentLoaded", function () {
  vaihdaQuote();
});
