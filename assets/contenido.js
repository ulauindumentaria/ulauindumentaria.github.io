var fnName='contenidoUlau'
var docId="1yWKI9yLcFdjFCT3FlPVjQrl4XE6G6yIYXvChJkKDNg4"

function contenidoUlau(data){
    data.feed.entry.map(function(linea){return linea.gsx$contenidoparamodificar.$t}).map(function(c,index){$(`#inno-${index}`).text(`${c}`)})  
}

$.ajax({
    url:`https://spreadsheets.google.com/feeds/list/${docId}/od6/public/values?alt=json-in-script&callback=${fnName}`,
    dataType:"jsonp",
    jsonpCallback:`${fnName}`
})



