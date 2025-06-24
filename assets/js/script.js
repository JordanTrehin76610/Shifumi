let nbvictoire = 0
let scoreboard = 0
let adversaire = 0
let choixjoueur = -1
const image = document.getElementById('adversaire')

function choixadversaire() {
    adversaire = Math.floor(Math.random() * 3) //L'adversaire définis à l'avance son choix entre 0 et 2 (3 propositions)
    return adversaire
}

function choix(jeu) {
    choixadversaire()
    choixjoueur = jeu
    setTimeout(() => revelation(), 3000)
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
    }
    battle()
}


function battle() {
    if ((choixjoueur == 0 && adversaire == 2) || (choixjoueur == 1 && adversaire == 0) || (choixjoueur == 2 && adversaire == 1)) {
        nbvictoire++
        nbvictoire > scoreboard ? scoreboard = nbvictoire : ""
        document.getElementById("nbvictoire").textContent = `Nombre de victoire: ${nbvictoire}`
        document.getElementById("scoreboard").textContent = `Meilleur score: ${scoreboard}`
        document.getElementById("vOuD").textContent = `Victoire !`
    } else if (choixjoueur == adversaire) {
        document.getElementById("vOuD").textContent = `Egalité`
    } else {
        nbvictoire = 0
        document.getElementById("nbvictoire").textContent = `Nombre de victoire: ${nbvictoire}`
        document.getElementById("vOuD").textContent = `Défaite`
    }
}