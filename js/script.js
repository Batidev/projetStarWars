// pour changer de page
var page = 1

// variables qui vont permettres de stocker des valeurs données par le serveur API 
var ajout = ""
var inverse = ""
    // ========================== PERSONNAGES ==========================

// Afficher la liste des 10 personnages

var recupeople = document.getElementById('people')
recupeople.addEventListener('click', function() { starwarspeople() })

function starwarspeople() {
    fetch('https://swapi.co/api/people')
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
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
        })
        .catch(function(error) {
            alert('Erreur: ' + error)
        })
}

// afficher les 10 personnages suivant

var ntop = document.getElementById('nextpeople')
ntop.addEventListener('click', function() { affichagePlus() })

function affichagePlus() {
    page++
    fetch(ajout)
        .then(
            function(response) {
                return response.json()
            }
        )
        .then(
            function(data) {
                ajout = data.next
                inverse = data.previous
                if (ajout == null) {
                    bradaca.className = 'mask'
                }
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
nflop.addEventListener('click', function() { affichageMoins() })

function affichageMoins() {
    page--
    fetch(inverse)
        .then(
            function(response) {
                return response.json()
            }
        )
        .then(
            function(data) {
                inverse = data.previous
                ajout = data.next
                if (inverse == null) {
                    bradaca.className = 'mask'
                }
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
    showpeople.addEventListener('click', function())
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            var ImYourFather = document.getElementById('detailPeople')
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

// ========================== PLANETES ==========================

// Afficher la liste des 10 planètes

var recuplanets = document.getElementById('planets')
recuplanets.addEventListener('click', function() { starwarsplanets() })

function starwarsplanets() {
    fetch('https://swapi.co/api/planets')
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            document.getElementById('listPlanets').innerHTML = ""
            for (let i = 0; i < 10; i++) {
                var tr = document.createElement('tr')
                var p = document.getElementById('listPlanets')
                p.appendChild(tr)

                var td1 = document.createElement('td')
                td1.innerHTML = data.results[i].name
                td1.addEventListener('click', function() { dexplanets(data.results[i].name) })
                tr.appendChild(td1)
            }
        })
        .catch(function(error) {
            alert('Erreur: ' + error)
        })
}

// voir le détail d'un planéte

function dexpeople(url) {
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            var earth = document.getElementById('detailPlanet')
            earth.innerHTML = ""

            var nom = document.createElement("h3")
            nom.innerHTML = "Nom"
            earth.appendChild(nom)
            var named = document.createElement("p")
            named.innerHTML = data.name
            earth.appendChild(named)

            var diametre = document.createElement("h3")
            diametre.innerHTML = "Diamètre"
            earth.appendChild(diametre)
            var size = document.createElement("p")
            size.innerHTML = data.diameter
            earth.appendChild(size)

            var climat = document.createElement("h3")
            climat.innerHTML = "Climat"
            earth.appendChild(climat)
            var climate = document.createElement("p")
            climate.innerHTML = data.climate
            earth.appendChild(climate)

            var nature = document.createElement("h3")
            nature.innerHTML = "Type"
            earth.appendChild(nature)
            var type = document.createElement("p")
            type.innerHTML = data.terrain
            earth.appendChild(type)

            var gravit = document.createElement("h3")
            gravit.innerHTML = "Gravité"
            earth.appendChild(gravit)
            var graviti = document.createElement("p")
            graviti.innerHTML = data.gravity
            earth.appendChild(graviti)

            var orbit = document.createElement("h3")
            orbit.innerHTML = "Période orbitale"
            earth.appendChild(orbit)
            var orbital = document.createElement("p")
            orbital.innerHTML = data.orbital_period
            earth.appendChild(orbital)

            var rotate = document.createElement("h3")
            rotate.innerHTML = "Période de rotation"
            earth.appendChild(rotate)
            var roration = document.createElement("p")
            roration.innerHTML = data.rotation_period
            earth.appendChild(roration)

            var eau = document.createElement("h3")
            eau.innerHTML = "Etendu d'eau"
            earth.appendChild(eau)
            var water = document.createElement("p")
            water.innerHTML = data.surface_water
            earth.appendChild(water)

            var popu = document.createElement("h3")
            popu.innerHTML = "Population"
            earth.appendChild(popu)
            var population = document.createElement("p")
            population.innerHTML = data.population
            earth.appendChild(population)
        })
}

//  Barre de recherche

var searchpeople = document.getElementById('search')
searchpeople.addEventListener('click', function() { starwarsearch() })

function starwarsearch() {
    fetch('https://swapi.co/api/people/?search=r2')
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            document.getElementById('listPeoples').innerHTML = ""
            var tr = document.createElement('tr')
            var p = document.getElementById('listPeoples')
            p.appendChild(tr)

            var td1 = document.createElement('td')
            td1.innerHTML = data.results[i].name
            td1.addEventListener('click', function() { dexpeople(data.results[i].name) })
            tr.appendChild(td1)

        })
        .catch(function(error) {
            alert('Erreur: ' + error)
        })
}