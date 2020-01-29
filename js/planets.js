// pour changer de page
var page = 1

// variables qui vont permettres de stocker des valeurs données par le serveur API 
var appendPlanets = ""
var returnPlanets = ""

// ========================== PLANETES ==========================

// Afficher la liste des 10 planètes

var recuplanets = document.getElementById('planets')
recuplanets.addEventListener('click', function() { starwarsplanets() })

function starwarsplanets() {
    var sectionplanet = document.getElementById('sectionplanet')
    sectionplanet.className = "show"
    fetch('https://swapi.co/api/planets')
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            document.getElementById('listPlanets').innerHTML = ""
            appendPlanets = data.next
            returnPlanets = data.previous
            for (let i = 0; i < 10; i++) {
                var tr = document.createElement('tr')
                var p = document.getElementById('listPlanets')
                p.appendChild(tr)

                var td1 = document.createElement('td')
                td1.innerHTML = data.results[i].name
                td1.addEventListener('click', function() { dexplanets(data.results[i].url) })
                tr.appendChild(td1)
            }
        })
        .catch(function(error) {
            alert('Erreur: ' + error)
        })
}

// afficher les 10 planetes suivante

var ntop = document.getElementById('nextplanet')
ntop.addEventListener('click', function() { plusPlanet() })

function plusPlanet() {
    page++
    fetch(appendPlanets)
        .then(
            function(response) {
                return response.json()
            }
        )
        .then(
            function(data) {
                appendPlanets = data.next
                returnPlanets = data.previous
                document.getElementById('listPlanets').innerHTML = ""
                for (let i = 0; i < 10; i++) {
                    var tr = document.createElement('tr')
                    var p = document.getElementById('listPlanets')
                    p.appendChild(tr)

                    var td1 = document.createElement('td')
                    td1.innerHTML = data.results[i].name
                    td1.addEventListener('click', function() { dexplanets(data.results[i].url) })
                    tr.appendChild(td1)
                }
            }
        )
}

// afficher les 10 personnages précédent
var nflop = document.getElementById('backplanet')
nflop.addEventListener('click', function() { affichageMoins() })

function affichageMoins() {
    page--
    fetch(returnPlanets)
        .then(
            function(response) {
                return response.json()
            }
        )
        .then(
            function(data) {
                returnPlanets = data.previous
                appendPlanets = data.next
                document.getElementById('listPlanets').innerHTML = ""
                for (let i = 0; i < 10; i++) {
                    var tr = document.createElement('tr')
                    var p = document.getElementById('listPlanets')
                    p.appendChild(tr)

                    var td1 = document.createElement('td')
                    td1.innerHTML = data.results[i].name
                    td1.addEventListener('click', function() { dexplanets(data.results[i].url) })
                    tr.appendChild(td1)
                }
            }
        )
}


// voir le détail d'un planéte

function dexplanets(url) {
    var showplanet = document.getElementById('showplanet')
    showplanet.addEventListener('click', function() {})
    showplanet.className = "show"
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            var earth = document.getElementById('detailPlanet')
            earth.className = "show"
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

            var perso = document.createElement("h3")
            perso.innerHTML = "Résidents"
            earth.appendChild(perso)
            var resident = document.createElement("div")
            resident.id = "residents"
            earth.appendChild(resident)
            for (let i = 0; i < data.residents.length; i++) {
                peoplearth(data.residents[i])
            }

            var popu = document.createElement("h3")
            popu.innerHTML = "Population"
            earth.appendChild(popu)
            var population = document.createElement("p")
            population.innerHTML = data.population
            earth.appendChild(population)
        })
}

function peoplearth(url) {
    console.log('attention')
    var resident = document.getElementById('residents')
    resident.className = "show"
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {

            var ul = document.createElement('ul')
            var p = document.getElementById('residents')
            p.appendChild(ul)

            var li1 = document.createElement('li')
            li1.innerHTML = data.name
            li1.addEventListener('click', function() { dexpeople(data.url) })
            ul.appendChild(li1)

        })
        .catch(function(error) {
            alert('Erreur: ' + error)
        })
}