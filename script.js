let element = document.getElementsByTagName("button")


function activate(){
    element.addEventListener("click", function(){
        confirmation();
    })
}

function confirmation(){
confirmation = confirm("¿Acepta?");

if(confirmation == true){
    console.log("¡Aceptado!")
} else {
    console.log("¡No acepta!")
}
}
