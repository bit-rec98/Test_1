activate()
function activate(){
    document.getElementById("button").addEventListener("click", function(){
        confirmation();
    })
}

function confirmation(){
confirmationAppearance = confirm("¿Acepta?");

if(confirmationAppearance == true){
    console.log("¡Aceptado!")
} else {
    console.log("¡No acepta!")
}
}
