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

document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', function(e) {
    e.stopPropagation();
    mobileNav.classList.toggle('open');
    const opened = mobileNav.classList.contains('open');
    toggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
  });

  // close when clicking outside the mobile menu
  document.addEventListener('click', function(e) {
    if (!mobileNav.classList.contains('open')) return;
    if (mobileNav.contains(e.target) || toggle.contains(e.target)) return;
    mobileNav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

