// ========================================
// MyLMS - MAIN JAVASCRIPT
// ========================================


// ========================================
// MOBILE MENU
// ========================================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });

}


// ========================================
// DARK / LIGHT MODE
// ========================================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            themeBtn.innerHTML = "☀️";

            localStorage.setItem("theme", "dark");

        } else {

            themeBtn.innerHTML = "🌙";

            localStorage.setItem("theme", "light");

        }

    });

}


// ========================================
// LOAD SAVED THEME
// ========================================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    if (themeBtn) {
        themeBtn.innerHTML = "☀️";
    }

}


// ========================================
// HERO - GET STARTED BUTTON
// ========================================

const heroBtn = document.getElementById("getStartedBtn");

if (heroBtn) {

    heroBtn.addEventListener("click", () => {

        const courses = document.getElementById("courses");

        if (courses) {

            courses.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


// ========================================
// COURSE BUTTONS
// ========================================

const courseButtons =
    document.querySelectorAll(".card button");

courseButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "Course Details Page will be added soon!"
        );

    });

});


// ========================================
// SCROLL ANIMATION
// ========================================

const animatedElements =
    document.querySelectorAll(".card, .feature");

if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        }, {

            threshold: 0.15

        });


    animatedElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(40px)";

        element.style.transition =
            "0.6s ease";

        observer.observe(element);

    });

}


// ========================================
// LOGIN MODAL
// ========================================

const loginBtn =
    document.getElementById("loginBtn");

const loginModal =
    document.getElementById("loginModal");

const closeModal =
    document.getElementById("closeModal");


/* OPEN LOGIN */

if (loginBtn && loginModal) {

    loginBtn.addEventListener("click", () => {

        loginModal.style.display = "flex";

    });

}


/* CLOSE LOGIN */

if (closeModal && loginModal) {

    closeModal.addEventListener("click", () => {

        loginModal.style.display = "none";

    });

}


// ========================================
// REGISTER MODAL
// ========================================

const registerLink =
    document.getElementById("registerLink");

const registerModal =
    document.getElementById("registerModal");

const closeRegister =
    document.getElementById("closeRegister");

const backToLogin =
    document.getElementById("backToLogin");


/* OPEN REGISTER */

if (registerLink && registerModal) {

    registerLink.addEventListener("click", (event) => {

        event.preventDefault();

        if (loginModal) {
            loginModal.style.display = "none";
        }

        registerModal.style.display = "flex";

    });

}


/* CLOSE REGISTER */

if (closeRegister && registerModal) {

    closeRegister.addEventListener("click", () => {

        registerModal.style.display = "none";

    });

}


/* REGISTER → LOGIN */

if (backToLogin && registerModal && loginModal) {

    backToLogin.addEventListener("click", (event) => {

        event.preventDefault();

        registerModal.style.display = "none";

        loginModal.style.display = "flex";

    });

}


// ========================================
// CLOSE MODALS BY CLICKING OUTSIDE
// ========================================

window.addEventListener("click", (event) => {

    if (
        loginModal &&
        event.target === loginModal
    ) {

        loginModal.style.display = "none";

    }


    if (
        registerModal &&
        event.target === registerModal
    ) {

        registerModal.style.display = "none";

    }

});


// ========================================
// PASSWORD SHOW / HIDE
// ========================================

const registerPassword =
    document.getElementById("registerPassword");

const togglePassword =
    document.getElementById("togglePassword");


if (registerPassword && togglePassword) {

    togglePassword.addEventListener("click", () => {

        if (registerPassword.type === "password") {

            registerPassword.type = "text";

            togglePassword.innerHTML = "🙈";

        } else {

            registerPassword.type = "password";

            togglePassword.innerHTML = "👁️";

        }

    });

}


// ========================================
// CONFIRM PASSWORD SHOW / HIDE
// ========================================

const confirmPassword =
    document.getElementById("confirmPassword");

const toggleConfirmPassword =
    document.getElementById("toggleConfirmPassword");


if (confirmPassword && toggleConfirmPassword) {

    toggleConfirmPassword.addEventListener("click", () => {

        if (confirmPassword.type === "password") {

            confirmPassword.type = "text";

            toggleConfirmPassword.innerHTML = "🙈";

        } else {

            confirmPassword.type = "password";

            toggleConfirmPassword.innerHTML = "👁️";

        }

    });

}


// ========================================
// REGISTER VALIDATION
// ========================================

const registerSubmit =
    document.getElementById("registerSubmit");


if (registerSubmit) {

    registerSubmit.addEventListener("click", () => {

        const name =
            document.getElementById("registerName").value.trim();

        const email =
            document.getElementById("registerEmail").value.trim();

        const password =
            document.getElementById("registerPassword").value;

        const confirm =
            document.getElementById("confirmPassword").value;


        // EMPTY FIELDS

        if (
            name === "" ||
            email === "" ||
            password === "" ||
            confirm === ""
        ) {

            alert(
                "Please fill in all fields."
            );

            return;

        }


        // EMAIL VALIDATION

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            alert(
                "Please enter a valid email address."
            );

            return;

        }


        // PASSWORD LENGTH

        if (password.length < 6) {

            alert(
                "Password must contain at least 6 characters."
            );

            return;

        }


        // PASSWORD MATCH

        if (password !== confirm) {

            alert(
                "Passwords do not match."
            );

            return;

        }


        // SUCCESS

        alert(
            "Registration successful!"
        );


        registerModal.style.display = "none";

    });

}


// ========================================
// FORGOT PASSWORD
// ========================================

const forgotPassword =
    document.getElementById("forgotPassword");


if (forgotPassword) {

    forgotPassword.addEventListener("click", (event) => {

        event.preventDefault();

        alert(
            "Password recovery will be connected with PHP and MySQL later."
        );

    });

}


// ========================================
// LOGIN SYSTEM - DEMO
// ========================================

const loginSubmit =
    document.getElementById("loginSubmit");

const loginEmail =
    document.getElementById("loginEmail");

const loginPassword =
    document.getElementById("loginPassword");


if (loginSubmit) {

    loginSubmit.addEventListener("click", function () {

        const email = loginEmail.value.trim();
        const password = loginPassword.value;


        // Check empty fields

        if (email === "" || password === "") {

            alert("Please enter your email and password.");

            return;

        }


        // DEMO LOGIN DETAILS

        const demoEmail = "student@mylms.com";
        const demoPassword = "123456";


        // Check Login

        if (
            email === demoEmail &&
            password === demoPassword
        ) {

            // Save login status

            localStorage.setItem(
                "isLoggedIn",
                "true"
            );

            localStorage.setItem(
                "studentEmail",
                email
            );


            alert("Login successful!");


            // Go to Dashboard

            window.location.href =
                "dashboard.html";


        } else {

            alert(
                "Invalid email or password.\n\n" +
                "Demo Login:\n" +
                "Email: student@mylms.com\n" +
                "Password: 123456"
            );

        }

    });

}
