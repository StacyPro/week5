document.addEventListener('DOMContentLoaded', function() {
    // Navigation menu items functionality
    const menuItems = {
        'About me': '.name',
        'My works': '.gallery-wrapper',
        'Work process': '.work_process'
    };

    const menuList = document.querySelectorAll('.menu ul li');

    menuList.forEach(item => {
        item.addEventListener('click', function() {
            // Get the corresponding section class from the menuItems object
            const targetClass = menuItems[this.textContent];
            const targetSection = document.querySelector(targetClass);

            if (targetSection) {
                // Smooth scroll to the section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Existing CTA button scroll functionality
    const ctaButton = document.querySelector('.cta-btn');
    const subscriptionSection = document.querySelector('.subscription-box');

    ctaButton.addEventListener('click', function(e) {
        e.preventDefault();
        subscriptionSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    // Project cards hover effects
    const projectCards = document.querySelectorAll('.project_gallery li');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
            this.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Button active states
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.classList.add('button-active');
        });

        button.addEventListener('mouseup', function() {
            this.classList.remove('button-active');
        });

        button.addEventListener('mouseleave', function() {
            this.classList.remove('button-active');
        });
    });

    // Optional: Add active state to menu items when scrolling
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        // Check each section
        for (let [menuText, sectionClass] of Object.entries(menuItems)) {
            const section = document.querySelector(sectionClass);
            if (section) {
                const sectionTop = section.offsetTop - 100; // offset for better UX
                const sectionBottom = sectionTop + section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    // Remove active class from all menu items
                    menuList.forEach(item => item.classList.remove('active'));
                    // Add active class to current menu item
                    const activeMenuItem = Array.from(menuList).find(item => item.textContent === menuText);
                    if (activeMenuItem) {
                        activeMenuItem.classList.add('active');
                    }
                }
            }
        }
    });
});