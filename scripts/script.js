/*
========================================================================================
Main JavaScript Logic
This script manages the preloader, animations, and other dynamic features of the portfolio website.
========================================================================================
*/
// Wait for the entire HTML document to be fully loaded and parsed before running the script.
document.addEventListener('DOMContentLoaded', () => {
    // DOM elements for the preloader
    const preloader = document.getElementById("preloader");
    const preName = document.querySelector(".pre-name");
    const shapeContainer = document.getElementById("shape-container");
    const mainContent = document.getElementById("main-content");
    // Check if all necessary elements exist before proceeding
    if (!preloader || !preName || !shapeContainer || !mainContent) {
        console.error("One or more preloader elements are missing in the HTML.");
        return; // Exit the script if elements are not found
    }
    // Function to generate a random hex color
    function getRandomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }
    // Generates CSS linear-gradient string for the text
    function generateCssGradient() {
        const color1 = getRandomColor();
        const color2 = getRandomColor();
        const color3 = getRandomColor();
        return `linear-gradient(270deg, ${color1}, ${color2}, ${color3})`;
    }
    // The SVG code for a variety of shapes, now accepts colors as arguments
    const shapes = {
        circle: (c1, c2, c3) => `
          <svg viewBox="0 0 100 100">
            <defs>
                <linearGradient id="preloaderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:${c1};" />
                    <stop offset="50%" style="stop-color:${c2};" />
                    <stop offset="100%" style="stop-color:${c3};" />
                </linearGradient>
            </defs>
            <path fill="transparent" stroke="url(#preloaderGradient)" stroke-width="6" d="M50,3 A47,47 0 1,1 50,97 A47,47 0 1,1 50,3" />
          </svg>
        `,
        hexagon_irregular: (c1, c2, c3) => `
          <svg viewBox="0 0 100 100">
            <defs>
                <linearGradient id="preloaderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:${c1};" />
                    <stop offset="50%" style="stop-color:${c2};" />
                    <stop offset="100%" style="stop-color:${c3};" />
                </linearGradient>
            </defs>
            <path fill="transparent" stroke="url(#preloaderGradient)" stroke-width="6" d="M50,3 L93,25 L85,70 L50,97 L15,70 L7,25 Z" />
          </svg>
        `,
        pentagon: (c1, c2, c3) => `
          <svg viewBox="0 0 100 100">
            <defs>
                <linearGradient id="preloaderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:${c1};" />
                    <stop offset="50%" style="stop-color:${c2};" />
                    <stop offset="100%" style="stop-color:${c3};" />
                </linearGradient>
            </defs>
            <path fill="transparent" stroke="url(#preloaderGradient)" stroke-width="6" d="M50,3 L97,38 L78,97 L22,97 L3,38 Z" />
          </svg>
        `,
        heptagon: (c1, c2, c3) => `
          <svg viewBox="0 0 100 100">
            <defs>
                <linearGradient id="preloaderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:${c1};" />
                    <stop offset="50%" style="stop-color:${c2};" />
                    <stop offset="100%" style="stop-color:${c3};" />
                </linearGradient>
            </defs>
            <path fill="transparent" stroke="url(#preloaderGradient)" stroke-width="6" d="M50,3 L90,20 L100,60 L75,97 L25,97 L0,60 L10,20 Z" />
          </svg>
        `,
        infinity: (c1, c2, c3) => `
          <svg viewBox="0 0 100 100">
            <defs>
                <linearGradient id="preloaderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:${c1};" />
                    <stop offset="50%" style="stop-color:${c2};" />
                    <stop offset="100%" style="stop-color:${c3};" />
                </linearGradient>
            </defs>
            <path fill="transparent" stroke="url(#preloaderGradient)" stroke-width="6" d="M25 50 C25 30 45 10 75 10 C105 10 125 30 125 50 C125 70 105 90 75 90 C45 90 25 70 25 50 Z M75 10 C95 10 115 30 115 50 C115 70 95 90 75 90 C55 90 35 70 35 50 C35 30 55 10 75 10 Z" transform="translate(-15) scale(0.7)" />
          </svg>
        `
    };
    // Selects a random shape and injects it into the shape container
    const shapeNames = Object.keys(shapes);
    const randomShapeKey = shapeNames[Math.floor(Math.random() * shapeNames.length)];
    // Generate random colors for the SVG gradient stops
    const svgColor1 = getRandomColor();
    const svgColor2 = getRandomColor();
    const svgColor3 = getRandomColor();
    // Inject the shape with dynamic gradient colors
    shapeContainer.innerHTML = shapes[randomShapeKey](svgColor1, svgColor2, svgColor3);
    // Sets a custom CSS property with a random gradient (for the text)
    document.documentElement.style.setProperty('--preloader-gradient', generateCssGradient());
    // Fades out the preloader after a set delay.
    const fadeOutDelay = 2500; // You can change this value to make the preloader last longer or shorter (in milliseconds)
    // Apply the new text animation duration based on the fadeOutDelay
    preName.style.animation = `text-loading-bar ${fadeOutDelay / 1000}s cubic-bezier(0.8, 0.2, 0.2, 0.8) forwards 0.5s, outline-fade-in 0.5s ease forwards`;
    // Fades out the preloader and shows the main content
    setTimeout(() => {
        preloader.classList.add("fade-out");
        setTimeout(() => {
            preloader.style.display = "none";
            mainContent.style.visibility = "visible";
        }, 700);
    }, fadeOutDelay);
    // Home section typing animation logic
    new Typed("#typed", {
        strings: [
            "App Development.",
            "Database Systems.",
            "Designing.",
            "Data Training.",
            "Technology.",
            "Gaming.",
        ],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true,
    });
    // General scroll animations and active link highlighting
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) e.target.classList.add("show");
            });
        },
        { threshold: 0.2 }
    );
    document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll('header a, .mobile-nav a');
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((sec) => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            if (top >= offset && top < offset + height) {
                current = sec.getAttribute("id");
            }
        });
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });
    // Quote Carousel Logic
    const quotes = [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { text: "The best way to predict the future is to create it.", author: "Abraham Lincoln" },
        { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
        { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas A. Edison" },
        { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
        { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
        { text: "The best revenge is massive success.", author: "Frank Sinatra" },
        { text: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", author: "Thomas A. Edison" },
        { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
        { text: "If you want to achieve greatness stop asking for permission.", author: "Anonymous" },
        { text: "Things work out best for those who make the best of how things work out.", author: "John Wooden" },
        { text: "To live a creative life, we must lose our fear of being wrong.", author: "Joseph Chilton Pearce" },
    ];
    const quoteDisplay = document.getElementById("quote-display");
    const authorDisplay = document.getElementById("author-display");
    function displayRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        quoteDisplay.textContent = quote.text;
        authorDisplay.textContent = `- ${quote.author}`;
    }
    displayRandomQuote();
    document.getElementById("quote-section").addEventListener("click", displayRandomQuote);
    // Mobile Navigation Logic
    const openMenuBtn = document.getElementById('open-menu');
    const closeMenuBtn = document.getElementById('close-menu');
    const mobileNavMenu = document.getElementById('mobile-nav-menu');
    const mobileNavLinks = mobileNavMenu.querySelectorAll('a');
    function openMobileMenu() {
        mobileNavMenu.classList.add('active');
        openMenuBtn.style.display = 'none';
        closeMenuBtn.style.display = 'block';
    }
    function closeMobileMenu() {
        mobileNavMenu.classList.remove('active');
        openMenuBtn.style.display = 'block';
        closeMenuBtn.style.display = 'none';
    }
    if (openMenuBtn) {
        openMenuBtn.addEventListener('click', openMobileMenu);
    }
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', closeMobileMenu);
    }
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
});
/* --- EMAILJS FORM SUBMISSION --- */
(function() {
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS User ID
    emailjs.init('ei2jvO71Le80gH_vr');
})();

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
     e.preventDefault();

    // Set the value of the hidden input with the current time
    document.getElementById('submission-time').value = new Date().toLocaleTimeString();

    emailjs.sendForm('service_jxk7svs', 'template_fzfbibo', this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
            contactForm.reset();
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send the message. Please try again.');
        });
});

 /*
    ========================================================================================
    Project Section Logic (GitHub API Fetch)
    This is commented-out code to show how you would fetch and display your GitHub projects.
    You need to uncomment this code and fill in your GitHub username to make it work.
    ========================================================================================
    */
    /*
    // --- START: GITHUB API FETCHING CODE ---
    // Step 1: Replace 'YOUR_GITHUB_USERNAME' with your actual GitHub username.
    const githubUsername = 'YOUR_GITHUB_USERNAME';
    // The URL for the GitHub API to get your public repositories.
    const githubApiUrl = `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`;
    const projectsGrid = document.getElementById('projects-grid');
    // Function to fetch projects from GitHub and display them on the page
    async function fetchAndDisplayProjects() {
        try {
            const response = await fetch(githubApiUrl);
            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.statusText}`);
            }
            const repos = await response.json();
            // Clear the dummy projects from the page
            projectsGrid.innerHTML = '';
            // Check if any repositories were found
            if (repos.length === 0) {
                projectsGrid.innerHTML = '<p>No public repositories found on GitHub.</p>';
                return;
            }
            // Loop through the fetched repositories and create project cards
            repos.forEach(repo => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card', 'hidden'); // Add 'hidden' class for the scroll animation
                projectCard.innerHTML = `
                    <h4>${repo.name}</h4>
                    <p>${repo.description || 'No description provided.'}</p>
                    <a href="${repo.html_url}" class="project-btn" target="_blank"
                        >View on GitHub<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                            <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"/>
                            <path d="M5 5h5V3H3v7h2z"/>
                        </svg>
                    </a>
                `;
                projectsGrid.appendChild(projectCard);
            });
            // Re-observe the new project cards for the scroll animation
            document.querySelectorAll('.project-card.hidden').forEach(el => observer.observe(el));
        } catch (error) {
            console.error("Failed to fetch GitHub projects:", error);
            projectsGrid.innerHTML = '<p>Failed to load projects. Please try again later.</p>';
        }
    }
    // Call the function to fetch projects when the page loads
    // window.addEventListener('load', fetchAndDisplayProjects);
    // --- END: GITHUB API FETCHING CODE ---
    */
   