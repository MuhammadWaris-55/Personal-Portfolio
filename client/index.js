// let menuIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('active');
//     navbar.classList.toggle('active');

//     if (menuIcon.classList.contains('active')) {
//         menuIcon.classList.remove('fa-bars');
//         menuIcon.classList.add('fa-xmark');
//     } else {
//         menuIcon.classList.remove('fa-xmark');
//         menuIcon.classList.add('fa-bars');
//     }
// }

// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });

//     let header = document.querySelector('header');

//     header.classList.toggle('sticky', window.scrollY > 100);

//     navbar.classList.remove("active");
//     menuIcon.classList.remove("fa-xmark");
//     menuIcon.classList.add("fa-bars");

// };

// ScrollReveal({
//     reset: false,
//     distance: '40px',
//     duration: 1200,
//     delay: 100,
//     easing: 'ease-in-out',
//     mobile: true
// });


// ScrollReveal().reveal('.home-content > *', { origin: 'top' });
// ScrollReveal().reveal('.home-img, .services-container , .projects-box, .contact form', { origin: 'bottom' });
// ScrollReveal().reveal('.home-content h1 , .about-img', { origin: 'left' });
// ScrollReveal().reveal('.about-content', { origin: 'right' });


// const typed = new Typed('.multiple-text', {
//     strings: ['MERN Stack Developer', 'React Developer'],
//     typeSpeed: 100,
//     backSpeed: 80,
//     typeDelay: 1000,
//     loop: true
// });


// //  SKILLS SECTION — Tab switching + bar animation
// //  Add this code into your existing index.js file

// // --- Tab Switching ---
// const skillsTabs = document.querySelectorAll('.skills-tab');
// const skillsPanels = document.querySelectorAll('.skills-panel');

// skillsTabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         // Remove active from all tabs & panels
//         skillsTabs.forEach(t => t.classList.remove('active'));
//         skillsPanels.forEach(p => p.classList.remove('active'));

//         // Activate clicked tab
//         tab.classList.add('active');
//         const targetPanel = document.getElementById('tab-' + tab.dataset.tab);
//         if (targetPanel) {
//             targetPanel.classList.add('active');
//             // Animate bars inside the newly shown panel
//             animateBars(targetPanel);
//         }
//     });
// });

// // --- Bar Animation ---
// function animateBars(panel) {
//     const fills = panel.querySelectorAll('.skill-fill');
//     fills.forEach(fill => {
//         fill.style.width = '0';               // reset first
//         requestAnimationFrame(() => {
//             requestAnimationFrame(() => {      // double rAF ensures transition fires
//                 fill.style.width = fill.dataset.width;
//             });
//         });
//     });
// }

// // --- Animate bars on scroll into view (for the initially active panel) ---
// const skillsSection = document.getElementById('skills');

// const skillsObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             const activePanel = document.querySelector('.skills-panel.active');
//             if (activePanel) animateBars(activePanel);
//             skillsObserver.unobserve(entry.target); // only once
//         }
//     });
// }, { threshold: 0.15 });

// if (skillsSection) skillsObserver.observe(skillsSection);


// //  STATS COUNTER ANIMATION
// //  Counts up when the strip scrolls into view

// function animateCounter(el) {
//     const target = +el.dataset.target;
//     const duration = 1600;
//     const stepTime = 16;
//     const steps = duration / stepTime;
//     const increment = target / steps;
//     let current = 0;

//     const timer = setInterval(() => {
//         current += increment;
//         if (current >= target) {
//             el.textContent = target;
//             clearInterval(timer);
//         } else {
//             el.textContent = Math.floor(current);
//         }
//     }, stepTime);
// }

// const statsStrip = document.querySelector('.stats-strip');
// let countersStarted = false;

// const statsObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting && !countersStarted) {
//             countersStarted = true;
//             document.querySelectorAll('.stat-number').forEach(animateCounter);
//             statsObserver.unobserve(entry.target);
//         }
//     });
// }, { threshold: 0.3 });

// if (statsStrip) statsObserver.observe(statsStrip);



// //Connecting Frontend with Backend

// const form = document.getElementById("contact-form");

// form.addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const formData = {
//         name: form.name.value,
//         email: form.email.value,
//         phone: form.phone.value,
//         message: form.message.value,
//     };

//     try {
//         const res = await fetch("https://personal-portfolio-gamma-eight-51.vercel.app/send-email", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(formData)
//         });

//         const data = await res.json();

//         Toastify({
//             text: data.message + "🎉",
//             duration: 3000,
//             gravity: "top",
//             position: "right",
//             className: "toastify-custom",
//             style: {
//                 background: "white",
//                 color: "green",
//             },
//         }).showToast();

//         form.reset();
//     } catch (err) {
//         Toastify({
//             text: "⚠️ Something went wrong",
//             duration: 3000,
//             gravity: "top",
//             position: "right",
//             className: "toastify-custom",
//             style: {
//                 background: "white",
//                 color: "red",
//             },
//         }).showToast();
//     }
// })

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
    strings: ['MERN Stack Developer', 'React Developer'],
    typeSpeed: 100,
    backSpeed: 80,
    typeDelay: 1000,
    loop: true
});


// ── SKILLS SECTION — Tab switching + bar animation ────────

const skillsTabs = document.querySelectorAll('.skills-tab');
const skillsPanels = document.querySelectorAll('.skills-panel');

skillsTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        skillsTabs.forEach(t => t.classList.remove('active'));
        skillsPanels.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        const targetPanel = document.getElementById('tab-' + tab.dataset.tab);
        if (targetPanel) {
            targetPanel.classList.add('active');
            animateBars(targetPanel);
        }
    });
});

function animateBars(panel) {
    const fills = panel.querySelectorAll('.skill-fill');
    fills.forEach(fill => {
        fill.style.width = '0';
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                fill.style.width = fill.dataset.width;
            });
        });
    });
}

const skillsSection = document.getElementById('skills');

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const activePanel = document.querySelector('.skills-panel.active');
            if (activePanel) animateBars(activePanel);
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

if (skillsSection) skillsObserver.observe(skillsSection);


// ── STATS COUNTER ANIMATION ───────────────────────────────

function animateCounter(el) {
    const target = +el.dataset.target;
    const duration = 1600;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current);
        }
    }, stepTime);
}

const statsStrip = document.querySelector('.stats-strip');
let countersStarted = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
            countersStarted = true;
            document.querySelectorAll('.stat-number').forEach(animateCounter);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

if (statsStrip) statsObserver.observe(statsStrip);


// ── CUSTOM TOAST ──────────────────────────────────────────

function showToast(message, type = "success") {
    // Remove any existing toast first
    const existing = document.querySelector(".wc-toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "wc-toast wc-toast--" + type;
    toast.innerHTML = `
        <span class="wc-toast-icon">${type === "success" ? "✅" : "⚠️"}</span>
        <span class="wc-toast-msg">${message}</span>
    `;
    document.body.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            toast.classList.add("wc-toast--show");
        });
    });

    // Animate out after 3s
    setTimeout(() => {
        toast.classList.remove("wc-toast--show");
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}


// ── CONTACT FORM ──────────────────────────────────────────

const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    // Manual validation — no ugly browser popups
    if (!name || !email || !message) {
        showToast("Please fill in all required fields", "error");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast("Please enter a valid email address", "error");
        return;
    }

    // Loading state
    const btn = form.querySelector(".btn");
    const originalText = btn.value;
    btn.value = "Sending...";
    btn.style.opacity = "0.7";
    btn.style.cursor = "not-allowed";

    try {
        const res = await fetch("https://personal-portfolio-gamma-eight-51.vercel.app/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone, message })
        });

        const data = await res.json();
        showToast(data.message + " 🎉", "success");
        form.reset();
    } catch (err) {
        showToast("Something went wrong. Try again.", "error");
    } finally {
        btn.value = originalText;
        btn.style.opacity = "";
        btn.style.cursor = "";
    }
});