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




tsParticles.load("particles-js", {

    fullScreen: {
        enable: false
    },

    background: {
        color: "transparent"
    },

    particles: {

        number: {
            value: 180
        },

        color: {
            value: [
                "#ffffff",
                "#c084fc",
                "#9d4edd",
                "#7b2cbf"
            ]
        },

        shape:{
    type:["circle","star"]
},

        opacity: {
            value: {
                min: 0.2,
                max: 1
            },
            animation:{
                enable:true,
                speed:0.5,
                minimumValue:0.1
            }
        },

        size: {
            value: {
                min:1,
                max:3
            }
        },

        move: {
            enable:true,
            speed:0.2,
            direction:"none",
            random:true,
            outModes:{
                default:"out"
            }
        },

        links:{
            enable:false
        }

    }

});