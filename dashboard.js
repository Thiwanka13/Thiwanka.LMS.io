// ========================================
// MyLMS - DASHBOARD JAVASCRIPT
// ========================================


// ========================================
// CHECK LOGIN
// ========================================

const isLoggedIn =
    localStorage.getItem("isLoggedIn");


if (isLoggedIn !== "true") {

    window.location.href =
        "index.html";

}


// ========================================
// DASHBOARD THEME
// ========================================

const dashboardTheme =
    document.getElementById(
        "dashboardTheme"
    );


if (dashboardTheme) {

    dashboardTheme.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark"
            );


            if (
                document.body.classList.contains(
                    "dark"
                )
            ) {

                dashboardTheme.innerHTML =
                    "☀️";

                localStorage.setItem(
                    "theme",
                    "dark"
                );

            } else {

                dashboardTheme.innerHTML =
                    "🌙";

                localStorage.setItem(
                    "theme",
                    "light"
                );

            }

        }
    );

}


// ========================================
// LOAD SAVED THEME
// ========================================

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add(
        "dark"
    );


    if (dashboardTheme) {

        dashboardTheme.innerHTML =
            "☀️";

    }

}


// ========================================
// LOAD STUDENT EMAIL
// ========================================

const studentEmail =
    localStorage.getItem(
        "studentEmail"
    );


const emailElement =
    document.getElementById(
        "studentEmail"
    );


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
    document.getElementById(
        "logoutBtn"
    );


if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        (event) => {

            event.preventDefault();


            localStorage.removeItem(
                "isLoggedIn"
            );

            localStorage.removeItem(
                "studentEmail"
            );


            window.location.href =
                "index.html";

        }
    );

}
