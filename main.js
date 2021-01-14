//peut-etre utilisé à la place du mot clé 'defer' présent dans la ligne script du html
// window.onload = function() {

//je sélectionne le titre grace à son ID
let eltTitre = document.getElementById('titre')

//je déclare des variables contenant les éléments à modifier
let doc = document.body
let img = document.getElementById('img')
let newP = document.createElement('p')
let fonctions = document.querySelector('#functions')

// je demande à écouter le clic sur le titre
eltTitre.addEventListener('click', function () {
    //je remplace le texte contenu dans h1 au clic
    eltTitre.innerHTML = 'Modifier le DOM'
    })

// je selectionne la balise qui a pour id text
const eltText = document.getElementById('text')

// j'écoute le clic
eltText.addEventListener('click', function () {
    // je remplace le texte
    eltText.innerHTML = "Pour modifier le Dom il nous faut accéder à ces eléments JS a plein de functions pour cela !"
})
// j'écoute le clic sur la balise img
img.addEventListener('click', function () {
    //je supprime l img
    img = img.remove()
    // je modifie la valeur de la proriété CSS display de l'élément (contenu variable)
    fonctions.style.display = 'block'
    //j insere le text dans la balise créer avec newP
    newP.textContent = 'liste fonctions JS à utiliser sur l\'objet JS \'document\' sans ajouter trop de complexité sachez que en utilisant document.fonctionQuelconque() vous travaillez sur l\'objet document'
    // j insere la balise et le texte à la fin du document avec append()
    doc.append(newP)

})


//petit jeux avec div parent et p enfant
// déclaration variable contenant la div avec id test
let parent = document.getElementById('test')
// déclaration variable contenant la div avec id test et la classe parent
// let parentbis = document.querySelector('div#test.parent')
// déclaration variable sans valeur attribué
let enfants;
// attribution de la valeur / sélectionne les éléments par le nom de leur classe css
// retourne un tableau d éléments
enfants = document.getElementsByClassName('enfant');
// déclaration de variables contenant les enfants un par un
enfant1 = enfants[0]
enfant2 = enfants[1]

// écoute le clic sur parent
parent.addEventListener('click', function () {
    // ajoute du text aux éléments
    // parent.innerHTML += 'c\'est papa !'
    enfant1.innerHTML += 'bb1'
    enfant2.innerHTML += 'bb2'
})

// écoute de parentbis pareil que parent mais le type de sélection d'élément n'est pas le même
// parentbis.addEventListener('click', function () {
//     parentbis.innerHTML += 'c\'est PapaBis!'
// })




// petite fonction pour dump un objet
function dump(obj) {
    var out = '';
    for (var i in obj) {
        out += i + ": " + obj[i] + "\n";
    }

    alert(out);

    // or, if you wanted to avoid alerts...

    var pre = document.createElement('pre');
    pre.innerHTML = out;
    document.body.appendChild(pre)
}





// }







