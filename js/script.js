// Bouton Home pour restaurer la page avec sa fonction
$('#home').on('click', function() { homeReset() })

function homeReset() {
    var sectionpeople = document.getElementById('sectionpeople')
    sectionpeople.className = "mask"
    var sectionplanet = document.getElementById('sectionplanet')
    sectionplanet.className = "mask"
    var detailPeople = document.getElementById('detailPeople')
    detailPeople.className = "mask"
    var detailPlanet = document.getElementById('detailPlanet')
    detailPlanet.className = "mask"
}

// =============== Barre de recherche ==================

$('#search').on('click', function() {
    $('#listPeoples').html("")
    $('#detailPeople').html("")
    $('#listPlanets').html("")
    $('#detailPlanet').html("")
    searchPeople()
    searchPlanet()
})

// Fonction de recherche parmis les personnages
function searchPeople() {
    $.get({
        url: "https://swapi.co/api/people/?search=",
        data: {
            search: $('#idsearch').val(),
        },
        success: function(data) {
            $('#sectionpeople').removeClass("mask")
            $('#listPeoples')
            for (let i = 0; i < data.results.length; i++) {
                $('#listPeoples').append("<tr><td onclick=dexpeople('" + data.results[i].url + "')>" + data.results[i].name + "</td></tr>")
            }
        },
        dataType: "json"
    })
}

// Fonction de recherche parmis les planètes
function searchPlanet() {
    $.get({
        url: "https://swapi.co/api/planets/?search=",
        data: {
            search: $('#idsearch').val(),
        },
        success: function(data) {
            $('#sectionplanet').removeClass("mask")
            $('#listPlanets').empty()
            for (let i = 0; i < data.results.length; i++) {
                $('#listPlanets').append("<tr><td onclick=dexplanets('" + data.results[i].url + "')>" + data.results[i].name + '</td></tr>')

            }
        },
        dataType: "json"
    })
}