// ==========================
// ESTRELAS NO FUNDO
// ==========================


const stars = document.getElementById("stars");


for(let i = 0; i < 220; i++){


let star = document.createElement("div");


star.className = "star";



star.style.left =
Math.random() * 100 + "%";



star.style.top =
Math.random() * 100 + "%";



star.style.animationDelay =
Math.random() * 5 + "s";



star.style.opacity =
Math.random();



stars.appendChild(star);



}







// ==========================
// ANIMAÇÃO AO SCROLL
// ==========================


const elements = document.querySelectorAll(
"section, .card, .music-card, .service"
);

document.querySelector("header")
.style.opacity="1";

document.querySelector("header")
.style.transform="none";



elements.forEach(el=>{


el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="1s";


});






function reveal(){



elements.forEach(el=>{


let position =
el.getBoundingClientRect().top;



let screen =
window.innerHeight - 120;



if(position < screen){


el.style.opacity="1";

el.style.transform=
"translateY(0)";


}



});



}



window.addEventListener(
"scroll",
reveal
);



reveal();









const trail = document.getElementById("mouse-trail");

document.addEventListener("mousemove", (e) => {
    trail.style.transform =
        `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
});




/* ===========================
   PARTÍCULAS DO FUNDO
=========================== */

const particles = document.getElementById("particles");

for(let i=0;i<90;i++){

    let p = document.createElement("div");

    p.className="particle";

    p.style.left=Math.random()*100+"vw";

    p.style.animationDuration=(8+Math.random()*10)+"s";

    p.style.animationDelay=Math.random()*10+"s";

    p.style.opacity=Math.random();

    p.style.width=(2+Math.random()*5)+"px";
    p.style.height=p.style.width;

    particles.appendChild(p);

}


/* ===========================
   EFEITO DO MOUSE
=========================== */

document.addEventListener("mousemove",e=>{

    let dot=document.createElement("div");

    dot.className="cursor-particle";

    dot.style.left=e.clientX+"px";
    dot.style.top=e.clientY+"px";

    document.body.appendChild(dot);

    setTimeout(()=>{
        dot.remove();
    },800);

});