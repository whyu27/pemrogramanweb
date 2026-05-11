// Tema Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});


// Navbar Scroll
const navbar = document.querySelector('.navbar');
        
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
    }
    else {
        navbar.classList.remove('scrolled');
    }
});


// Faq
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
            
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
                    
        // Close all items
        faqItems.forEach(i => i.classList.remove('active'));
                    
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});


// Active Nav Link Highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
            
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = 'var(--accent-primary)';
        }
    });
});


// Counter Animation
const counters = document.querySelectorAll(".stat-number");

let countersAnimated = false;

const animateCounters = () => {
    if (countersAnimated) return;

    counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-count"));
        const suffix = counter.textContent.replace(/[0-9]/g, "");

        let current = 0;

        const increment = target / 50;
        const duration = 50;

        const updateCounter = () => {
            current += increment;

            if (current < target) {
                counter.textContent = Math.floor(current) + suffix;

                setTimeout(updateCounter, duration);
            } else {
                counter.textContent = target + suffix;
            }
        };

        updateCounter();
    });

    countersAnimated = true;
};

// Trigger counter animation when hero section is visible
const heroSection = document.querySelector(".hero");

const counterObserver = new IntersectionObserver(
    (entries) => {
        if (entries[0].isIntersecting) {
            setTimeout(animateCounters, 500);
        }
    },
    {
        threshold: 0.5,
    }
);

counterObserver.observe(heroSection);