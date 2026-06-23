document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", async function (e) {

            e.preventDefault();

            const formData = new FormData(form);

            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {

                window.location.href = "thank-you.html";

            } else {

                alert("There was a problem submitting your request. Please try again.");

            }

        });

    }

});
