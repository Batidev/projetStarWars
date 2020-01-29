// pour changer de page
var page = 1

// variables qui vont permettres de stocker des valeurs données par le serveur API 
var appendpeople = ""
var returnPeople = ""
    // ========================== PERSONNAGES ==========================

// Afficher la liste des 10 personnages

var recupeople = document.getElementById('people')
recupeople.addEventListener('click', function() { starwarspeople() })

function starwarspeople() {
    var sectionpeople = document.getElementById('sectionpeople')
    sectionpeople.className = "show"
    fetch('https://swapi.co/api/people')
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            document.getElementById('listPeoples').innerHTML = ""
            appendpeople = data.next
            returnPeople = data.previous
            for (let i = 0; i < 10; i++) {
                var tr = document.createElement('tr')
                var p = document.getElementById('listPeoples')
                p.appendChild(tr)

                var td1 = document.createElement('td')
                td1.innerHTML = data.results[i].name
                td1.addEventListener('click', function() { dexpeople(data.results[i].url) })
                tr.appendChild(td1)
            }
        })
        .catch(function(error) {
            alert('Erreur: ' + error)
        })
}

// afficher les 10 personnages suivant

var ntop = document.getElementById('nextpeople')
ntop.addEventListener('click', function() { plusPeople() })

function plusPeople() {
    page++
    fetch(appendpeople)
        .then(
            function(response) {
                return response.json()
            }
        )
        .then(
            function(data) {
                appendpeople = data.next
                returnPeople = data.previous
                document.getElementById('listPeoples').innerHTML = ""
                for (let i = 0; i < 10; i++) {
                    var tr = document.createElement('tr')
                    var p = document.getElementById('listPeoples')
                    p.appendChild(tr)

                    var td1 = document.createElement('td')
                    td1.innerHTML = data.results[i].name
                    td1.addEventListener('click', function() { dexpeople(data.results[i].url) })
                    tr.appendChild(td1)
                }
            }
        )
}

// afficher les 10 personnages précédent
var nflop = document.getElementById('backpeople')
nflop.addEventListener('click', function() { moinsPeople() })

function moinsPeople() {
    page--
    fetch(returnPeople)
        .then(
            function(response) {
                return response.json()
            }
        )
        .then(
            function(data) {
                returnPeople = data.previous
                appendpeople = data.next
                document.getElementById('listPeoples').innerHTML = ""
                for (let i = 0; i < 10; i++) {
                    var tr = document.createElement('tr')
                    var p = document.getElementById('listPeoples')
                    p.appendChild(tr)

                    var td1 = document.createElement('td')
                    td1.innerHTML = data.results[i].name
                    td1.addEventListener('click', function() { dexpeople(data.results[i].url) })
                    tr.appendChild(td1)
                }
            }
        )
}

// afficher le détail d'un personnage
function dexpeople(url) {
    var showpeople = document.getElementById('showpeople')
    showpeople.addEventListener('click', function() {})
    showpeople.className = "show"
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            var ImYourFather = document.getElementById('detailPeople')
            ImYourFather.className = "show"
            ImYourFather.innerHTML = ""

            var nom = document.createElement("h3")
            nom.innerHTML = "Nom"
            ImYourFather.appendChild(nom)
            var named = document.createElement("p")
            named.innerHTML = data.name
            ImYourFather.appendChild(named)

            var hauteur = document.createElement("h3")
            hauteur.innerHTML = "Taille"
            ImYourFather.appendChild(hauteur)
            var heighted = document.createElement("p")
            heighted.innerHTML = data.height
            ImYourFather.appendChild(heighted)

            var poid = document.createElement("h3")
            poid.innerHTML = "Poid"
            ImYourFather.appendChild(poid)
            var massed = document.createElement("p")
            massed.innerHTML = data.mass
            ImYourFather.appendChild(massed)

            var couleurcheveux = document.createElement("h3")
            couleurcheveux.innerHTML = "Couleur des cheveux"
            ImYourFather.appendChild(couleurcheveux)
            var hair = document.createElement("p")
            hair.innerHTML = data.hair_color
            ImYourFather.appendChild(hair)

            var couleurpeau = document.createElement("h3")
            couleurpeau.innerHTML = "Couleur de la peau"
            ImYourFather.appendChild(couleurpeau)
            var skincolor = document.createElement("p")
            skincolor.innerHTML = data.skin_color
            ImYourFather.appendChild(skincolor)

            var couleuryeux = document.createElement("h3")
            couleuryeux.innerHTML = "Couleur des yeux"
            ImYourFather.appendChild(couleuryeux)
            var eyecolor = document.createElement("p")
            eyecolor.innerHTML = data.eye_color
            ImYourFather.appendChild(eyecolor)

            var anniversaire = document.createElement("h3")
            anniversaire.innerHTML = "Date d'anniversaire"
            ImYourFather.appendChild(anniversaire)
            var Birthday = document.createElement("p")
            Birthday.innerHTML = data.birth_year
            ImYourFather.appendChild(Birthday)

            var sexe = document.createElement("h3")
            sexe.innerHTML = "Genre"
            ImYourFather.appendChild(sexe)
            var gender = document.createElement("p")
            gender.innerHTML = data.gender
            ImYourFather.appendChild(gender)
        })
}