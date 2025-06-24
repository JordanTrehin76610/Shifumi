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


function choixadversaire() {
    adversaire = Math.floor(Math.random() * 3) //L'adversaire définis à l'avance son choix entre 0 et 2 (3 propositions)
    return adversaire
}

function choix(jeu) {
    papier.style.pointerEvents = 'none'
    pierre.style.pointerEvents = 'none'
    ciseaux.style.pointerEvents = 'none'
    console.log("tu as appuyé")
    image.src = "assets/img/mystere.png"
    choixadversaire()
    choixjoueur = jeu
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
    }
    battle()
}


function battle() {
    solution.play()
    if ((choixjoueur == 0 && adversaire == 2) || (choixjoueur == 1 && adversaire == 0) || (choixjoueur == 2 && adversaire == 1)) {
        nbvictoire++
        nbvictoire > scoreboard ? scoreboard = nbvictoire : ""
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
    }
    papier.style.pointerEvents = 'auto'
    pierre.style.pointerEvents = 'auto'
    ciseaux.style.pointerEvents = 'auto'
}

