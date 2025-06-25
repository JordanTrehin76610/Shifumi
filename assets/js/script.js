let nbvictoire = 0
let scoreboard = 0
let adversaire = 0
let choixjoueur = -1
const image = document.getElementById('adversaire')
let tambour = document.getElementById('tambour')
let solution = document.getElementById('solution')
const pierre = document.getElementById('pierre')
const papier = document.getElementById('papier')
const ciseaux = document.getElementById('ciseaux')
let fun = Math.floor(Math.random() * 100)
let partie = 1
let pierreJouer = 0
let papierJouer = 0
let ciseauxJouer = 0
let secret = 0

function choixadversaire() {
    if (fun == 20) {
        adversaire = 3
        secret = secret + 1
    } else {
        adversaire = Math.floor(Math.random() * 3) //L'adversaire définis à l'avance son choix entre 0 et 2 (3 propositions)
    }
    return adversaire
}

function choix(jeu) {
    if (partie == 1) {
        play1()
        secret = secret + 1
        document.getElementById("secret").textContent = `Succès: ${secret}/10`
    }
    if (partie == 2) {
        play2()
        secret = secret + 1
        document.getElementById("secret").textContent = `Succès: ${secret}/10`
    }
    if (partie == 3) {
        play3()
        secret = secret + 1
        document.getElementById("secret").textContent = `Succès: ${secret}/10`
    }
    partie = partie + 1
    papier.style.pointerEvents = 'none'
    pierre.style.pointerEvents = 'none'
    ciseaux.style.pointerEvents = 'none'
    console.log("tu as appuyé")
    image.src = "assets/img/mystere.png"
    choixadversaire()
    choixjoueur = jeu
    if (choixjoueur == 0) {
        pierreJouer = pierreJouer + 1
        papierJouer = 0
        ciseauxJouer = 0
    }
    if (choixjoueur == 1) {
        papierJouer = papierJouer + 1
        pierreJouer = 0
        ciseauxJouer = 0
    }
    if (choixjoueur == 2) {
        ciseauxJouer = ciseauxJouer + 1
        pierreJouer = 0
        papierJouer = 0
    }
    if (pierreJouer == 5) {
        pierre5()
        secret = secret + 1
        document.getElementById("secret").textContent = `Succès: ${secret}/10`
    }
    if (papierJouer == 5) {
        papier5()
        secret = secret + 1
        document.getElementById("secret").textContent = `Succès: ${secret}/10`
    }
    if (ciseauxJouer == 5) {
        ciseaux5()
        secret = secret + 1
        document.getElementById("secret").textContent = `Succès: ${secret}/10`
    }
    tambour.play()
    setTimeout(() => revelation(), 3500)
}

function revelation() {
    switch (adversaire) {
        case 0:
            image.src = "assets/img/Pierre.png"
            break
        case 1:
            image.src = "assets/img/Feuille.png"
            break
        case 2:
            image.src = "assets/img/Ciseaux.png"
            break
        case 3:
            image.src = "assets/img/puit.png"
            break
    }
    battle()
}


function battle() {
    solution.play()
    if ((choixjoueur == 0 && adversaire == 2) || (choixjoueur == 1 && adversaire == 0) || (choixjoueur == 2 && adversaire == 1)) {
        nbvictoire++

        nbvictoire > scoreboard ? scoreboard = nbvictoire : ""
        if (scoreboard == 3) {
            successWin3()
            secret = secret + 1
            document.getElementById("secret").textContent = `Succès: ${secret}/10`
        }
        if (scoreboard == 5) {
            successWin5()
            secret = secret + 1
            document.getElementById("secret").textContent = `Succès: ${secret}/10`
        }
        if (scoreboard == 10) {
            successWin10()
            secret = secret + 1
            document.getElementById("secret").textContent = `Succès: ${secret}/10`
        }
        document.getElementById("nbvictoire").textContent = `Nombre de victoire: ${nbvictoire}`
        document.getElementById("scoreboard").textContent = `Meilleur score: ${scoreboard}`
        document.getElementById("vOuD").textContent = `Victoire !`
        document.getElementById("vOuD").style.color = 'green'
    } else if (choixjoueur == adversaire) {
        document.getElementById("vOuD").textContent = `Egalité`
        document.getElementById("vOuD").style.color = 'gray'
    } else {
        nbvictoire = 0
        document.getElementById("nbvictoire").textContent = `Nombre de victoire: ${nbvictoire}`
        document.getElementById("vOuD").textContent = `Défaite`
        document.getElementById("vOuD").style.color = 'red'
        if (adversaire == 3) {
            puit()
            secret = secret + 1
            document.getElementById("secret").textContent = `Succès: ${secret}/10`
        }
    }
    papier.style.pointerEvents = 'auto'
    pierre.style.pointerEvents = 'auto'
    ciseaux.style.pointerEvents = 'auto'
}

function Nuit() {
    document.getElementById("body").style.color = "white"
    document.getElementById("body").style.backgroundColor = "black"
}

function Jour() {
    document.getElementById("body").style.color = "black"
    document.getElementById("body").style.backgroundColor = "white"
}



// LES SUCCESS
function successWin3() {
    var win3 = document.getElementById("win3");

    win3.className = "show";

    setTimeout(function () { win3.className = win3.className.replace("show", ""); }, 3000);

    success.play()
}

function successWin5() {
    var win5 = document.getElementById("win5");

    win5.className = "show";

    setTimeout(function () { win5.className = win5.className.replace("show", ""); }, 3000);

    success.play()
}

function successWin10() {
    var win10 = document.getElementById("win10");

    win10.className = "show";

    setTimeout(function () { win10.className = win10.className.replace("show", ""); }, 3000);

    success.play()
}

function play1() {
    var play1 = document.getElementById("play1");

    play1.className = "show";

    setTimeout(function () { play1.className = play1.className.replace("show", ""); }, 3000);

    success.play()
}

function play2() {
    var play2 = document.getElementById("play2");

    play2.className = "show";

    setTimeout(function () { play2.className = play2.className.replace("show", ""); }, 3000);

    success.play()
}

function play3() {
    var play3 = document.getElementById("play3");

    play3.className = "show";

    setTimeout(function () { play3.className = play3.className.replace("show", ""); }, 3000);

    success.play()
}

function pierre5() {
    var pierre5 = document.getElementById("pierre5");

    pierre5.className = "show";

    setTimeout(function () { pierre5.className = pierre5.className.replace("show", ""); }, 3000);

    success.play()
}

function papier5() {
    var papier5 = document.getElementById("papier5");

    papier5.className = "show";

    setTimeout(function () { papier5.className = papier5.className.replace("show", ""); }, 3000);

    success.play()
}

function ciseaux5() {
    var ciseaux5 = document.getElementById("ciseaux5");

    ciseaux5.className = "show";

    setTimeout(function () { ciseaux5.className = ciseaux5.className.replace("show", ""); }, 3000);

    success.play()
}

function puit() {
    var puit = document.getElementById("puit");

    puit.className = "show";

    setTimeout(function () { puit.className = puit.className.replace("show", ""); }, 3000);

    success.play()
}