document.addEventListener("headerLoaded", () => {
    const btn = document.getElementById("mobile-menu-btn");
    const nav = document.getElementById("mobile-nav");

    if (!btn || !nav) {
        console.error("Burger button or nav not found");
        return;
    }

    btn.addEventListener("click", () => {
        nav.classList.toggle("show");

        btn.innerHTML = nav.classList.contains("show")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });
    // Close mobile menu after clicking any link
    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("show");
        btn.innerHTML = '<i class="fas fa-bars"></i>';
    });
    });
});

