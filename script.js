document.addEventListener("DOMContentLoaded", () => {
    // Current Year for Footer
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Mobile Menu Toggle
    const mobileMenuIcon = document.getElementById("mobile-menu-icon");
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");
    const navLinkItems = document.querySelectorAll(".nav-link");

    if (mobileMenuIcon && menuIcon && navLinks) {
        mobileMenuIcon.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            if (navLinks.classList.contains("active")) {
                menuIcon.classList.remove("fa-bars");
                menuIcon.classList.add("fa-xmark");
            } else {
                menuIcon.classList.remove("fa-xmark");
                menuIcon.classList.add("fa-bars");
            }
        });

        // Close menu when a link is clicked
        navLinkItems.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuIcon.classList.remove("fa-xmark");
                menuIcon.classList.add("fa-bars");
            });
        });
    }

    // Navbar Scroll Effect
    const navbar = document.getElementById("navbar");
    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
        
        // Initial check in case page is loaded not at top
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        }
    }

    // Scroll Reveal Observer
    const revealElements = document.querySelectorAll(".reveal-left, .reveal-right");
    if (revealElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach((el) => {
            observer.observe(el);
        });
    }
});
