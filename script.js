// ==============================
// Mobile Menu
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


// ==============================
// Dark / Light Mode
// ==============================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = "☀️";
        localStorage.setItem("theme","dark");
    }else{
        themeBtn.innerHTML = "🌙";
        localStorage.setItem("theme","light");
    }

});


// ==============================
// Load Saved Theme
// ==============================

window.onload = function(){

    const theme = localStorage.getItem("theme");

    if(theme==="dark"){
        document.body.classList.add("dark");
        themeBtn.innerHTML="☀️";
    }

};


// ==============================
// Smooth Button Click
// ==============================

const heroBtn = document.querySelector(".hero button");

heroBtn.addEventListener("click",()=>{

    document.getElementById("courses").scrollIntoView({

        behavior:"smooth"

    });

});


// ==============================
// Course Button Alert
// ==============================

const courseButtons = document.querySelectorAll(".card button");

courseButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        alert("Course Details Page will be added in the next version.");

    });

});


// ==============================
// Scroll Animation
// ==============================

const cards=document.querySelectorAll(".card,.feature");

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.6s";

    observer.observe(card);

});

// ======================
// LOGIN MODAL
// ======================

const loginBtn=document.getElementById("loginBtn");

const modal=document.getElementById("loginModal");

const close=document.getElementById("closeModal");

loginBtn.onclick=()=>{

modal.style.display="flex";

}

close.onclick=()=>{

modal.style.display="none";

}

window.onclick=(e)=>{

if(e.target==modal){

modal.style.display="none";

}

}
