 document.addEventListener('DOMContentLoaded', () => {
            const navToggle = document.getElementById('nav-toggle');
            const navMenu = document.getElementById('nav-menu');

            if (navToggle && navMenu) {
                navToggle.addEventListener('click', () => {
                    // Toggle the 'active' class on the menu
                    navMenu.classList.toggle('active');
                    
                    // Optional: Change button text/state
                    if (navMenu.classList.contains('active')) {
                        navToggle.textContent = 'CLOSE';
                    } else {
                        navToggle.textContent = 'MENU';
                    }
                });

                // Close the menu when a link is clicked (for better mobile UX)
                navMenu.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        if (navMenu.classList.contains('active')) {
                            navMenu.classList.remove('active');
                            navToggle.textContent = 'MENU';
                        }
                    });
                });
            }
        });