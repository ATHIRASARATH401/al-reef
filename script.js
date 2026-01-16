// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to top button
const scrollTopBtn = document.createElement('a');
scrollTopBtn.href = '#';
scrollTopBtn.className = 'scroll-top';
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.feature-card, .dish-card, .testimonial-card');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll Down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll Up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Add CSS for header scroll effect
const headerScrollCSS = `
    .header {
        transition: transform 0.3s ease;
    }
    .header.scroll-down {
        transform: translateY(-100%);
    }
    .header.scroll-up {
        transform: translateY(0);
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = headerScrollCSS;
document.head.appendChild(styleSheet);

// Form validation (for contact/reservation forms)
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return true;
    
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
            
            // Remove error class on input
            input.addEventListener('input', () => {
                if (input.value.trim()) {
                    input.classList.remove('error');
                }
            });
        }
    });
    
    return isValid;
}

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Phone validation (UAE format)
function validatePhone(phone) {
    const re = /^(\+971|0)?[5][0-9]{8}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// Loading spinner
function showSpinner() {
    const spinner = document.createElement('div');
    spinner.className = 'spinner';
    spinner.innerHTML = '<div class="spinner-circle"></div>';
    document.body.appendChild(spinner);
    return spinner;
}

function hideSpinner(spinner) {
    if (spinner) {
        spinner.remove();
    }
}

// Add spinner CSS
const spinnerCSS = `
    .spinner {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }
    .spinner-circle {
        width: 50px;
        height: 50px;
        border: 5px solid #f3f3f3;
        border-top: 5px solid #FF6B35;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    .error {
        border-color: #ff4444 !important;
        box-shadow: 0 0 0 2px rgba(255, 68, 68, 0.2) !important;
    }
`;

const spinnerStyleSheet = document.createElement('style');
spinnerStyleSheet.textContent = spinnerCSS;
document.head.appendChild(spinnerStyleSheet);

// Cookie consent
function showCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) return;
    
    const cookieBanner = document.createElement('div');
    cookieBanner.className = 'cookie-consent';
    cookieBanner.innerHTML = `
        <div class="cookie-content">
            <p>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
            <div class="cookie-buttons">
                <button id="acceptCookies">Accept</button>
                <button id="declineCookies">Decline</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(cookieBanner);
    
    document.getElementById('acceptCookies').addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieBanner.remove();
    });
    
    document.getElementById('declineCookies').addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'declined');
        cookieBanner.remove();
    });
}

// Add cookie consent CSS
const cookieCSS = `
    .cookie-consent {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #333;
        color: #fff;
        padding: 20px;
        z-index: 1000;
        transform: translateY(100%);
        transition: transform 0.3s ease;
    }
    .cookie-consent.show {
        transform: translateY(0);
    }
    .cookie-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
    }
    .cookie-buttons {
        display: flex;
        gap: 10px;
    }
    .cookie-buttons button {
        padding: 8px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 500;
        transition: background 0.3s;
    }
    #acceptCookies {
        background: #FF6B35;
        color: #fff;
    }
    #acceptCookies:hover {
        background: #e55a2b;
    }
    #declineCookies {
        background: #666;
        color: #fff;
    }
    #declineCookies:hover {
        background: #555;
    }
`;

const cookieStyleSheet = document.createElement('style');
cookieStyleSheet.textContent = cookieCSS;
document.head.appendChild(cookieStyleSheet);

// Show cookie consent after page load
setTimeout(showCookieConsent, 1000);

// Image lazy loading
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.classList.add('lazy');
        imageObserver.observe(img);
    });
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Add lazy loading CSS
const lazyCSS = `
    .lazy {
        opacity: 0;
        transition: opacity 0.3s;
    }
    .lazy.loaded {
        opacity: 1;
    }
`;

const lazyStyleSheet = document.createElement('style');
lazyStyleSheet.textContent = lazyCSS;
document.head.appendChild(lazyStyleSheet);

// Print functionality
function printPage() {
    window.print();
}

// Add print CSS
const printCSS = `
    @media print {
        .header, .footer, .scroll-top, .cookie-consent {
            display: none !important;
        }
        body {
            font-size: 12pt;
            line-height: 1.4;
        }
        .hero {
            margin-top: 0;
        }
    }
`;

const printStyleSheet = document.createElement('style');
printStyleSheet.textContent = printCSS;
document.head.appendChild(printStyleSheet);

// Utility functions
const utils = {
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    formatDate: function(date) {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    },
    
    formatTime: function(date) {
        return new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    }
};

// Export utils for use in other scripts
window.utils = utils;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Al Reef Restaurant website loaded successfully!');
    
    // Add any initialization code here
    lazyLoadImages();
    showCookieConsent();
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Performance monitoring
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
});
