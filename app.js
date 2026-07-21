// =========================================
// YONO GAME KA MELA
// Main JavaScript File
// Version 1.0
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Yono Game Ka Mela Loaded Successfully");

    // ==========================
    // Scroll To Top Button
    // ==========================

    const scrollBtn = document.getElementById("scrollTop");

    if (scrollBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {

                scrollBtn.style.display = "block";

            } else {

                scrollBtn.style.display = "none";

            }

        });

        scrollBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    // ==========================
    // Search Button
    // ==========================

    const searchInput = document.getElementById("searchBox");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            console.log("Searching:", this.value);

            // Firebase Search baad me yahin connect karenge.

        });

    }

});
