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
    strings: ['MERN Stack Developer'],
    typeSpeed: 100,
    backSpeed: 80,
    typeDelay: 1000,
    loop: true
});



const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        message: form.message.value,
    };

    try {
        const res = await fetch("http://localhost:5000/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const data = await res.json();

        Toastify({
            text: data.message + "🎉",
            duration: 3000,
            gravity: "top",
            position: "right",
            className: "toastify-custom",
            style: {
                background: "white",
                color: "green",
            },
        }).showToast();

        form.reset();
    } catch (err) {
        Toastify({
            text: "⚠️ Something went wrong",
            duration: 3000,
            gravity: "top",
            position: "right",
            className: "toastify-custom",
            style: {
                background: "white",
                color: "red",
            },
        }).showToast();
    }
})