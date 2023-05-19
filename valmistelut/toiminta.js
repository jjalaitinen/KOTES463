function paivitaProgress() {
    let inputit = document.getElementsByClassName("form-check-input");
    let prog_bar = document.getElementsByClassName("progress-bar")[0];
    let summa = 0
    for (let i = 0; i< inputit.length; i++) {
        if (inputit[i].checked == true) {
            summa++;
        }
    }
    if (summa == 0) {
        prog_bar.style.width = "0%";
        return;
    } else if (summa == 1) {
        prog_bar.style.width = "33%";
        
    } else if (summa == 2) {
        prog_bar.style.width = "66%";
    } else {
        prog_bar.style.width = "100%";
    }

}

window.addEventListener("load", function() {
    let inputit = document.getElementsByClassName("form-check-input");
    //let prog_bar = document.getElementsByClassName("progress-bar")[0];
    //prog_bar.style.width = "";
    for ( let i = 0; i < inputit.length; i++ ) {
        inputit[i].addEventListener("change", paivitaProgress);
    }
  });