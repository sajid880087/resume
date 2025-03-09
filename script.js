document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling for Navbar Links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typing Effect for Hero Section
    const typingElement = document.getElementById("typing-text");
    const texts = ["Python Developer"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffectHero() {
        let currentText = texts[textIndex];
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffectHero, 1000); // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length; // Move to next text
            setTimeout(typeEffectHero, 500); // Pause between texts
        } else {
            setTimeout(typeEffectHero, isDeleting ? 50 : 100); // Adjust typing speed
        }
    }
    typeEffectHero(); // Start typing effect for hero section

    // Typing Effect for Dynamic Name
    const nameElement = document.getElementById("dynamic-name");
    const names = ["Sajid Inamdar", "Coding Lover"];
    let nameIndex = 0;
    let charIndexName = 0;
    let isDeletingName = false;

    function typeEffectName() {
        const currentName = names[nameIndex];
        
        if (isDeletingName) {
            nameElement.textContent = currentName.substring(0, charIndexName - 1);
            charIndexName--;
        } else {
            nameElement.textContent = currentName.substring(0, charIndexName + 1);
            charIndexName++;
        }

        if (!isDeletingName && charIndexName === currentName.length) {
            isDeletingName = true;
            setTimeout(typeEffectName, 1000); // Pause before deleting
        } else if (isDeletingName && charIndexName === 0) {
            isDeletingName = false;
            nameIndex = (nameIndex + 1) % names.length; // Move to next name in the list
            setTimeout(typeEffectName, 500); // Pause between names
        } else {
            setTimeout(typeEffectName, isDeletingName ? 50 : 100); // Adjust typing speed
        }
    }
    typeEffectName(); // Start typing effect for dynamic name

    // Mobile Menu Toggle
    document.getElementById("menu-icon").addEventListener("click", function() {
        document.querySelector(".navbar").classList.toggle("active");
    });
});

