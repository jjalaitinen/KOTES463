function tarkista() {
  let buttonit = document.getElementsByClassName("form-check-input");
  let nappi = document.getElementById("tarkistus_nappi");

  let ruksitetut = [];
  for (let i = 0; i < buttonit.length; i++) {
    if (buttonit[i].checked) {
      ruksitetut.push(buttonit[i]);
    }
  }
  if (ruksitetut.length < 5) {
    alert("Vastaathan kaikkiin kysymyksiin ennen tarkastamista!");
    return;
  }
  for (let i = 0; i < ruksitetut.length; i++) {
    if (ruksitetut[i].value == "vaarin") {
      nappi.setAttribute("class", "btn btn-danger");
      nappi.textContent = "Kokeile uudestaan";
      return;
    }
    nappi.setAttribute("class", "btn btn-success");
    nappi.textContent = "Kaikki oikein!";
  }
}
function nayta() {
  // Katsotaan, missä tilassa vastaus on
  let vastaus = document.getElementById("vastaus3");
  let buttoni = document.getElementById("naytaVastausButton");
  if (vastaus.style.display == "none") {
    vastaus.style.display = "block";
    buttoni.setAttribute("class", "btn btn-secondary");
    buttoni.textContent = "Piilota vastaus";
  } else {
    vastaus.style.display = "none";
    buttoni.setAttribute("class", "btn btn-primary");
    buttoni.textContent = "Näytä vastaus";
  }
}

nayta();
