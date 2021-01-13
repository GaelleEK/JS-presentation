//peut-etre utilisé à la place du mot clé 'defer' présent dans la ligne script du html
// window.onload = function() {

//je sélectionne le titre grace à son ID
const eltTitre = document.getElementById('titre')

// je demande à écouter le clic sur le titre
eltTitre.addEventListener('click', function remplaceTitre(){
    //je remplace le texte contenu dans h1 au clic
    eltTitre.innerHTML = 'Modifier le DOM'
    })

//je déclare des variables contenant les éléments à modifier
let doc = document.body
let img = document.getElementById('img')
let newP = document.createElement('p')
let fonctions = document.querySelector('#functions')

// je selectionne la balise qui a pour id titre
const eltText = document.getElementById('text')
// j'écoute le clic
eltText.addEventListener('click', function() {
    // je remplace le texte
    eltText.innerHTML = "pour modifier le Dom il nous faut accéder à ces eléments JS a plein de functions pour cela !"
})
img.addEventListener('click', function () {
    //je supprime l img
    img = img.remove()
    //j insere le text dans la balise créer avec newP
    newP.textContent = 'liste fonctions JS à utiliser sur l\'objet JS \'document\''
    // j insere la balise et le texte à la fin du document avec append()
    doc.append(newP)
    fonctions.style.display = 'block'
})





// }







