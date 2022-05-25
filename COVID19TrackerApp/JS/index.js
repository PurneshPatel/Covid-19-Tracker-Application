var base_url = "http://localhost:3000";

$(document).ready(function() {
    getActiveCases();
    getDeaths();
    getRecoveryData();
    getCriticalCases();
    getTotalCases();
});


function getActiveCases(){
    let api_url = base_url+"/cases";
    $.getJSON( api_url, function( data ) {
    $('.active-cases').append($(`<p style="color:white">${data.today}</p>`))

    });
}

function getDeaths(){
    let api_url = base_url+"/deaths";
    $.getJSON( api_url, function( data ) {
    $('.death-cases').append($(`<p style="color:white">${data.today}</p>`))

    });
}

function getRecoveryData(){
    let api_url = base_url+"/recovered";
    $.getJSON( api_url, function( data ) {
    $('.recovered-cases').append($(`<p style="color:white">${data.today}</p>`))

    });
}
function getCriticalCases(){
    let api_url = base_url+"/critical";
    $.getJSON( api_url, function( data ) {
    $('.critical-cases').append($(`<p style="color:white">${data.today}</p>`))

    });
}
function getTotalCases(){
    let api_url = base_url+"/total";
    $.getJSON( api_url, function( data ) {
    $('.total-cases').append($(`<p style="color:white">${data.today}</p>`))

    });
}

