const menuToggle = document.querySelector('.menu-toggle');
const closeMenu = document.querySelector('.close-menu');
const sideMenu = document.querySelector('.side-menu');
const navItems = document.querySelectorAll('.nav-item');
const sideItems = document.querySelectorAll('.side-item');
const sections = document.querySelectorAll('section');
const header = document.querySelector('header');

menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    sideMenu.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        sideMenu.classList.remove('active');
    }
});

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });

    sideItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });

    if (window.scrollY > 100) {
        header.style.padding = '10px 5%';
    } else {
        header.style.padding = '25px 5%';
    }
});

const observerOptions = {
    threshold: 0.15
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

const elementsToReveal = document.querySelectorAll('.hero-content h2, .hero-content p, .hero-btns');
elementsToReveal.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 1s cubic-bezier(0.2, 1, 0.3, 1)';
    revealObserver.observe(el);
});

window.addEventListener('load', () => {
    setTimeout(() => {
        elementsToReveal.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 300);
});
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.about-visual, .about-text-content > *, .feature-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    aboutObserver.observe(el);
});
const glassCards = document.querySelectorAll('.glass-card');

const glassObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150);
        }
    });
}, { threshold: 0.1 });

glassCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(60px)';
    card.style.transition = 'all 0.8s cubic-bezier(0.2, 1, 0.3, 1)';
    glassObserver.observe(card);
});
const filterBtns = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        items.forEach(item => {
            const type = item.getAttribute('data-type');
            if (filter === 'all' || type === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 400);
            }
        });
    });
});

const io = new IntersectionObserver((es) => {
    es.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

items.forEach(i => {
    i.style.opacity = '0';
    i.style.transform = 'translateY(40px)';
    io.observe(i);
});
const whyCards = document.querySelectorAll('.why-card');

const whyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.1 });

whyCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(80px)';
    card.style.transition = 'all 1s cubic-bezier(0.2, 1, 0.3, 1)';
    whyObserver.observe(card);
});
const contactCards = document.querySelectorAll('.contact-item-card');

const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }, index * 200);
        }
    });
}, { threshold: 0.1 });

contactCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px) scale(0.9)';
    card.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    contactObserver.observe(card);
});
const areaCards = document.querySelectorAll('.area-card');

const areaObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

areaCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    areaObserver.observe(card);
});