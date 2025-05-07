// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('nav button');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transform transition-transform duration-300 translate-x-full md:hidden';
    
    // Create mobile menu content
    const navLinks = document.querySelector('nav .hidden').cloneNode(true);
    navLinks.className = 'flex flex-col space-y-8 text-xl';
    mobileMenu.appendChild(navLinks);
    
    // Close button
    const closeButton = document.createElement('button');
    closeButton.className = 'absolute top-4 right-6 text-2xl';
    closeButton.innerHTML = '<i class="fas fa-times"></i>';
    mobileMenu.appendChild(closeButton);
    
    document.body.appendChild(mobileMenu);
    
    // Toggle mobile menu
    menuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('translate-x-full');
    });
    
    // Close mobile menu
    closeButton.addEventListener('click', function() {
        mobileMenu.classList.add('translate-x-full');
    });
    
    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('translate-x-full');
        });
    });
});

// Toggle more projects function
function toggleMoreProjects() {
    const moreProjects = document.getElementById('moreProjects');
    const moreProjectsBtn = document.getElementById('moreProjectsBtn');
    const moreProjectsIcon = document.getElementById('moreProjectsIcon');
    
    if (moreProjects.classList.contains('hidden')) {
        moreProjects.classList.remove('hidden');
        moreProjectsBtn.textContent = 'Hide Projects';
        moreProjectsIcon.classList.replace('fa-chevron-down', 'fa-chevron-up');
    } else {
        moreProjects.classList.add('hidden');
        moreProjectsBtn.textContent = 'View More Projects';
        moreProjectsIcon.classList.replace('fa-chevron-up', 'fa-chevron-down');
    }
}

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showFormMessage('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showFormMessage('Please enter a valid email address', 'error');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For this example, we'll just show a success message
            showFormMessage('Thank you for your message! I will get back to you soon.', 'success');
            contactForm.reset();
        });
    }
    
    // Helper function to validate email
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
    // Helper function to show form messages
    function showFormMessage(message, type) {
        // Remove any existing message
        const existingMessage = document.getElementById('formMessage');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message element
        const messageDiv = document.createElement('div');
        messageDiv.id = 'formMessage';
        messageDiv.className = type === 'success' 
            ? 'mt-4 p-3 bg-green-100 text-green-700 rounded' 
            : 'mt-4 p-3 bg-red-100 text-red-700 rounded';
        messageDiv.textContent = message;
        
        // Add to form
        contactForm.appendChild(messageDiv);
        
        // Remove message after 5 seconds if it's a success message
        if (type === 'success') {
            setTimeout(() => {
                messageDiv.remove();
            }, 5000);
        }
    }
});

// Dynamic year in footer
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.querySelector('footer .text-center p');
    if (yearSpan) {
        yearSpan.innerHTML = yearSpan.innerHTML.replace('2025', new Date().getFullYear());
    }
}); 