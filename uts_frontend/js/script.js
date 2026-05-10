// ============ NAVBAR SCROLL EFFECT ============
const navbar = document.querySelector('.navbar');
        
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
    });

// ============ FAQ ACCORDION ============
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