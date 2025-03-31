precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio
function plus1(){
    shuma = document.querySelector('.cantidad')
    cuenta = Number(shuma.innerHTML)
    cuenta = cuenta + 1
    shuma.innerHTML = cuenta
    totar = document.querySelector('.valor-total')
    totar.innerHTML= precio * cuenta
    }
    function minus1(){
        minus = document.querySelector('.cantidad')
        cuent = Number(minus.innerHTML)
        cuent = cuent - 1
        minus.innerHTML = cuent
        tota  = document.querySelector('.valor-total')
        tota.innerHTML= precio * cuent
    }
