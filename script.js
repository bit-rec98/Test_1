
function activate(){
    document.getElementById("button").addEventListener("click", function(){
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
