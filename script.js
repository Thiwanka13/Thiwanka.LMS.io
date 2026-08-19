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

// ==============================
// REGISTER MODAL
// ==============================

const registerLink =
    document.getElementById("registerLink");

const registerModal =
    document.getElementById("registerModal");

const closeRegister =
    document.getElementById("closeRegister");

const backToLogin =
    document.getElementById("backToLogin");


// Open Register

registerLink.addEventListener("click", function(e){

    e.preventDefault();

    loginModal.style.display = "none";

    registerModal.style.display = "flex";

});


// Close Register

closeRegister.addEventListener("click", function(){

    registerModal.style.display = "none";

});


// Back to Login

backToLogin.addEventListener("click", function(e){

    e.preventDefault();

    registerModal.style.display = "none";

    loginModal.style.display = "flex";

});


// ==============================
// PASSWORD SHOW / HIDE
// ==============================

const registerPassword =
    document.getElementById("registerPassword");

const togglePassword =
    document.getElementById("togglePassword");

togglePassword.addEventListener("click", function(){

    if(registerPassword.type === "password"){

        registerPassword.type = "text";

        togglePassword.innerHTML = "🙈";

    }else{

        registerPassword.type = "password";

        togglePassword.innerHTML = "👁️";

    }

});


// Confirm Password

const confirmPassword =
    document.getElementById("confirmPassword");

const toggleConfirmPassword =
    document.getElementById("toggleConfirmPassword");

toggleConfirmPassword.addEventListener("click", function(){

    if(confirmPassword.type === "password"){

        confirmPassword.type = "text";

        toggleConfirmPassword.innerHTML = "🙈";

    }else{

        confirmPassword.type = "password";

        toggleConfirmPassword.innerHTML = "👁️";

    }

});


// ==============================
// REGISTER VALIDATION
// ==============================

const registerSubmit =
    document.getElementById("registerSubmit");

registerSubmit.addEventListener("click", function(){

    const name =
        document.getElementById("registerName").value.trim();

    const email =
        document.getElementById("registerEmail").value.trim();

    const password =
        registerPassword.value;

    const confirm =
        confirmPassword.value;


    if(name === "" || email === "" || password === "" || confirm === ""){

        alert("Please fill in all fields.");

        return;

    }


    if(password.length < 6){

        alert("Password must contain at least 6 characters.");

        return;

    }


    if(password !== confirm){

        alert("Passwords do not match.");

        return;

    }


    alert(
        "Registration successful! Database connection will be added later."
    );

    registerModal.style.display = "none";

});


// ==============================
// FORGOT PASSWORD
// ==============================

const forgotPassword =
    document.getElementById("forgotPassword");

forgotPassword.addEventListener("click", function(e){

    e.preventDefault();

    alert(
        "Password recovery system will be connected with PHP and MySQL later."
    );

});
