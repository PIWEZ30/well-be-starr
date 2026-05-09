function showPopup(){

    const popup = document.createElement("div");

    popup.innerHTML = "X-7 Forever Together ❤️";

    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%,-50%)";
    popup.style.background = "#0f172a";
    popup.style.padding = "25px 40px";
    popup.style.borderRadius = "20px";
    popup.style.boxShadow = "0 0 20px #38bdf8";
    popup.style.fontSize = "24px";
    popup.style.zIndex = "999";

    document.body.appendChild(popup);

    setTimeout(()=>{
        popup.remove();
    },2000);

}

/* MUSIC */

function toggleMusic(){

    const music = document.getElementById("music");

    if(music.paused){
        music.play();
    }else{
        music.pause();
    }

}
document.querySelectorAll(".card img").forEach(img=>{

    img.onclick = ()=>{

        const popup = document.createElement("div");

        popup.style.position = "fixed";
        popup.style.top = "0";
        popup.style.left = "0";
        popup.style.width = "100%";
        popup.style.height = "100%";
        popup.style.background = "rgba(0,0,0,.9)";
        popup.style.display = "flex";
        popup.style.justifyContent = "center";
        popup.style.alignItems = "center";
        popup.style.zIndex = "9999";

        popup.innerHTML = `
            <img src="${img.src}" 
            style="max-width:90%; max-height:90%; border-radius:20px;">
        `;

        popup.onclick = ()=>{
            popup.remove();
        }

        document.body.appendChild(popup);

    }

});
const hidden = document.querySelectorAll(".hidden");

window.addEventListener("scroll",()=>{

    hidden.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight-100){

            el.classList.add("show");

        }

    });

});