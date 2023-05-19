function tarkista() {
  let buttonit = document.getElementsByClassName("form-check-input");
  let nappi = document.getElementById("tarkistus_nappi");

  let ruksitetut = [];
  for (let i = 0; i < buttonit.length; i++) {
    if (buttonit[i].checked) {
      ruksitetut.push(buttonit[i]);
    }
  }
  if (ruksitetut.length < 6) {
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

function naytaVastaus2() {
  let esimerkki = document.getElementById("vastaus2");
  let buttoni = document.getElementById("vastaus2button");

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

function naytaVastaus3() {
  let esimerkki = document.getElementById("vastaus3");
  let buttoni = document.getElementById("vastaus3button");

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
naytaVastaus3();
