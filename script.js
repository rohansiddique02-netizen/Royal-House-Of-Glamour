document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.background = 'rgba(2, 2, 2, 0.98)';
        } else {
            navbar.style.padding = '0';
            navbar.style.background = 'rgba(5, 5, 5, 0.95)';
        }
    });

    // Intersection Observer for scroll animations
    const revealElements = document.querySelectorAll('.reveal');

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed so it doesn't animate every time
                observer.unobserve(entry.target); 
            }
        });
    };

    const revealOptions = {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Centralized WhatsApp Function
    const triggerWhatsApp = () => {
        const phoneNumber = '917070202083';
        const message = encodeURIComponent('Hi, I would like to book an appointment at Royal House Of Glamour.');
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    // Google Maps Function
    const triggerMaps = () => {
        const address = encodeURIComponent('Royal House Of Glamour, Golapbag More, below Universal Fitness Gym, near Regent Crown, Khagragorh, Bardhaman, West Bengal 713104');
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
        window.open(mapsUrl, '_blank');
    };

    // Attach to buttons
    const heroWhatsapp = document.getElementById('heroWhatsapp');
    const contactWhatsapp = document.getElementById('whatsappBtn');
    const directionsBtn = document.getElementById('directionsBtn');

    if (heroWhatsapp) heroWhatsapp.addEventListener('click', triggerWhatsApp);
    if (contactWhatsapp) contactWhatsapp.addEventListener('click', triggerWhatsApp);
    if (directionsBtn) directionsBtn.addEventListener('click', triggerMaps);
});
// Mobile Hamburger Menu Logic
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // Toggles the 'active' class on both the icon and the menu
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close the mobile menu automatically when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
