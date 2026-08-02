
const API =
"https://script.google.com/macros/s/AKfycbytA55t3KT2s0tuc4r5EuBmOwGRZaHseeaFUDSAjhpYNv_k1z2stPz5NUG2x9A-FuQ/exec";


setTimeout(function(){

document.getElementById("loading").style.display="none";

document.getElementById("main").style.display="block";

},2000);

const params=new URLSearchParams(window.location.search);

const id=params.get("id");

fetch(API+"?id="+id)

.then(r=>r.json())

.then(data=>{

document.getElementById("guestName").innerHTML=data.name;

});

document.getElementById("envelope").onclick = function () {

    // Hide "Click To Open" text
    document.querySelector("#main h3").style.display = "none";

    // Hide envelope
    document.getElementById("envelope").style.display = "none";

    // Show invitation
    document.getElementById("invitation").style.display = "block";

    // Play music
    document.getElementById("music").play();

};