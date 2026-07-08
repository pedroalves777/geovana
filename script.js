console.log("JS funcionando");

document.addEventListener("mousemove", function(e){

    const heart = document.createElement("div");

    heart.classList.add("cursor-heart");

    heart.innerHTML = "🫧";

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(function(){
        heart.remove();
    },800);

});


// ==========================
// SUAVIDADE NOS LINKS
// ==========================

