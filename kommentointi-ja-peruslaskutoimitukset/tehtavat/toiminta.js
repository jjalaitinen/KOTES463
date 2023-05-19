function naytaVastaus2() {
  let esimerkki = document.getElementById("vastaus2");
  let buttoni = document.getElementById("vastaus2_button");

  if (esimerkki.style.display == "none") {
    esimerkki.style.display = "block";
    buttoni.setAttribute("class", "btn btn-secondary");
    buttoni.textContent = "Piilota vastaus";
  } else {
    esimerkki.style.display = "none";
    buttoni.setAttribute("class", "btn btn-primary");
    buttoni.textContent = "Näytä esimerkkivastaus";
  }
}

naytaVastaus2();
