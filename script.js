const menuContainer = document.querySelector('.menu-container');
const nav = document.querySelector('.navigation-container');
const overlay = document.querySelector('.overlay');
const transitionTextElements = document.querySelectorAll('.transition-text');
const header = document.querySelector('.navigation-container');
const menuLinks = document.querySelectorAll('.menu a[href]');
const menuToggle = document.querySelector('.menu-toggle-button');
const exitButton = document.querySelector('.close-button');
const faqItems = document.querySelectorAll('.faq-item');
const faqLink = document.querySelector('.faq-link');
const faqMenu = document.querySelector('.faq');
const exitFaq = document.querySelector('.exit-faq');
const overlayFaq = document.querySelector('.overlay-faq');
const realHeader = document.querySelector('.header');

const scrollThreshold = 50; // Set your scroll threshold in pixels

menuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }

        handleMenuItemClick();
    });
});
// Function to handle menu item click
function handleMenuItemClick() {
    menuContainer.classList.remove('active');
    nav.classList.remove('hide');
    overlay.classList.remove('show');
}

// Function to scroll to a section smoothly
function scrollToSection(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    handleMenuItemClick();
}

// Function to toggle the menu
function toggleMenu() {
    menuContainer.classList.toggle('active');
    overlay.classList.toggle('show');
    nav.classList.toggle('hide');
}

// Function to handle exit button click
function handleExitButtonClick() {
    handleMenuItemClick();
}

// Function to toggle the sticky header
function toggleStickyHeader() {
    const isSticky = window.scrollY > scrollThreshold;
    header.classList.toggle('sticky', isSticky);
}
// Function to reveal text elements on scroll
function revealTextOnScroll() {
    const windowHeight = window.innerHeight;

    transitionTextElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight * 0.75) {
            setTimeout(() => {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }, 300);
        }
    });
}


// Event listener for menu links using event delegation
menuContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu-link')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        scrollToSection(targetId);
    }
});

// Event listener for menu toggle button
menuToggle.addEventListener('click', toggleMenu);

// Event listener for exit button
exitButton.addEventListener('click', handleExitButtonClick);

// Event listener for scroll to toggle sticky header
window.addEventListener('scroll', toggleStickyHeader);



// Trigger the reveal on page load (if already in the viewport)
window.addEventListener('load', revealTextOnScroll);

// Initial animation
setTimeout(() => {
    const waves = document.querySelectorAll('.wind-line');
    waves.forEach(wave => {
        wave.classList.toggle('active');
    });
}, 100);


faqItems.forEach((item) => {
    const question = item.querySelector('h4');

    question.addEventListener('click', () => {
        // Toggle the active class to show/hide the answer
        item.classList.toggle('active');
    });
});

faqLink.addEventListener('click', () => {
    faqMenu.classList.toggle('active');
    overlayFaq.classList.toggle('show'); // Corrected the class name here
    nav.classList.add('hide');
});

exitFaq.addEventListener('click', () => {
    faqMenu.classList.remove('active');
    overlayFaq.classList.remove('show'); // Corrected the class name here
    nav.classList.remove('hide');
});
