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
    const texts = ["Python Developer", "AI Enthusiast", "Web Developer"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
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
            setTimeout(typeEffect, 1000); // Pause before deleting
        } else if (isDeldocument.addEventListener("DOMContentLoaded", function() {
            const nameElement = document.getElementById("dynamic-name");
            const names = ["Sajid Inamdar", "Developer", "AI Enthusiast", "Tech Lover"];
            let nameIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            const typingSpeed = 50; // Adjust this for faster typing
            const pauseTime = 500; // Pause time after a name is fully typed
        
            // Function to type the name dynamically
            function typeEffect() {
                const currentName = names[nameIndex];
        
                if (isDeleting) {
                    nameElement.textContent = currentName.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    nameElement.textContent = currentName.substring(0, charIndex + 1);
                    charIndex++;
                }
        
                if (!isDeleting && charIndex === currentName.length) {
                    isDeleting = true;
                    setTimeout(typeEffect, pauseTime); // Pause before deleting
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    nameIndex = (nameIndex + 1) % names.length; // Move to next name in the list
                }
        
                setTimeout(typeEffect, isDeleting ? typingSpeed / 2 : typingSpeed); // Adjust for faster typing
            }
        
            typeEffect(); // Start typing effect
        });
        

// Mobile Menu Toggle
document.getElementById("menu-icon").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("active");
});


// Mobile Menu Toggle
document.getElementById("menu-icon").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("active");
});
