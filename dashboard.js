// ========================================
// MyLMS - DASHBOARD JAVASCRIPT
// ========================================


// ========================================
// CHECK LOGIN
// ========================================

const isLoggedIn =
    localStorage.getItem("isLoggedIn");


if (isLoggedIn !== "true") {

    window.location.href = "index.html";

}


// ========================================
// DASHBOARD DARK / LIGHT MODE
// ========================================

const dashboardTheme =
    document.getElementById("dashboardTheme");


function loadDashboardTheme() {

    const savedTheme =
        localStorage.getItem("theme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        if (dashboardTheme) {

            dashboardTheme.innerHTML = "☀️";

        }

    } else {

        document.body.classList.remove("dark");

        if (dashboardTheme) {

            dashboardTheme.innerHTML = "🌙";

        }

    }

}


// ========================================
// THEME BUTTON
// ========================================

if (dashboardTheme) {

    dashboardTheme.addEventListener("click", function () {

        document.body.classList.toggle("dark");


        if (
            document.body.classList.contains("dark")
        ) {

            dashboardTheme.innerHTML = "☀️";

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            dashboardTheme.innerHTML = "🌙";

            localStorage.setItem(
                "theme",
                "light"
            );

        }

    });

}


// ========================================
// LOAD SAVED THEME
// ========================================

loadDashboardTheme();


// ========================================
// LOAD STUDENT EMAIL
// ========================================

const studentEmail =
    localStorage.getItem("studentEmail");


const emailElement =
    document.getElementById("studentEmail");


if (
    studentEmail &&
    emailElement
) {

    emailElement.innerText =
        studentEmail;

}


// ========================================
// LOGOUT
// ========================================

const logoutBtn =
    document.getElementById("logoutBtn");


if (logoutBtn) {

    logoutBtn.addEventListener("click", function (event) {

        event.preventDefault();


        // Remove login information

        localStorage.removeItem(
            "isLoggedIn"
        );

        localStorage.removeItem(
            "studentEmail"
        );


        // Go back to Home

        window.location.href =
            "index.html";

    });

}
