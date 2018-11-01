/* url general*/
var general="www.facebook.com/pg/ulautienda/shop/%3Fref%3Dpage_internal%26cid%3D"

/* objeto que guarda las url de las distintas categorias de las tiendas*/
var categories={
    remeras:`${general}1917144228587351`,
    camisas:`${general}1917144128587361`,
}
/* funcion que busca los productos de la tienda de acuerdo a el parametro que se le pasa*/
function setProducts(category){
    $.getJSON(`https://allorigins.me/get?url=https%3A//${categories[category]}&callback=?`, function(data){
        console.log("Facebook cargado")
        var htmlAdd=""
        var element=document.createElement('html')
        element.innerHTML = data.contents;
        var products=element.getElementsByClassName("_4-47 _3if6")
        for (let i = 0; i < products.length; i++) {
            var contenido=products[i].childNodes[0].childNodes
            htmlAdd+=`<div class="card"><img class="card-img-top _uwr " src=${contenido[0].children[0].src} style='background-image:${contenido[0].children[0].style.backgroundImage}' alt=${contenido[1].children[0].title}><div class="card-body"><h5 class="card-title">${contenido[1].children[0].title}</h5><p class="card-text">${contenido[1].children[1].textContent}</p></div></div>`
            
        }
        document.getElementById("loading").innerHTML=""
            document.getElementById("prueba").innerHTML=htmlAdd
        });
}
/* Selecciono a los radios y ordeno que en cada cambio, vuelvan a buscar los productos*/
var radios = $( ".facebookShop" )
for (let i = 0; i < radios.length; i++) {
    radios[i].onclick=function(e){
        document.getElementById("prueba").innerHTML=""
        document.getElementById("loading").innerHTML="<img  src='loading.gif' alt=''>"
        setProducts(e.target.name)
    };
}
/*Seteo el default */
document.getElementById("loading").innerHTML="<img  src='loading.gif' alt=''>"
setProducts("remeras")