Vise = 0;

var Button = document.getElementById("OptionAttaque");

Button.onclick = function() {
    var Attaque = Math.floor(Math.random() * 3) + 4;

    if (Vise == 0){
        var PV = document.getElementById("PVmonster01");
    }
    else if (Vise == 1){
        var PV = document.getElementById("PVmonster02");
    }
    if (Vise == 2){
        var PV = document.getElementById("PVmonster03");
    }
    PV.innerHTML -= Attaque;
    if (PV <= 0){
        PV.innerHTML = 0;
    }
    Vise += 1;
    if (Vise == 3) {
        Vise = 0;
    }
}