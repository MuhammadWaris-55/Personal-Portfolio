let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('active');
    navbar.classList.toggle('active');

    if (menuIcon.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    navbar.classList.remove("active");
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");

};

ScrollReveal({
    reset: false,
    distance: '40px',
    duration: 1200,
    delay: 100,
    easing: 'ease-in-out',
    mobile: true
});


ScrollReveal().reveal('.home-content > *', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container , .projects-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1 , .about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });


const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 80,
    typeDelay: 1000,
    loop: true
});
