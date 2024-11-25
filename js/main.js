const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

const removeActive = (id) => {
    document.querySelectorAll('.active').forEach(element => {
        element.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

showMenu('nav-toggle','nav-menu');

gsap.to(".first", 1.5, {delay: .5, top: "-100%", ease: Expo.easeInOut});
gsap.to(".second", 1.5, {delay: .7, top: "-100%", ease: Expo.easeInOut});
gsap.to(".third", 1.5, {delay: .9, top: "-100%", ease: Expo.easeInOut});

gsap.from(".home-img", {opacity: 0, duration: 2, delay: 2, x: 60});

gsap.from(".home-information", {opacity: 0, duration: 3, delay: 2.3, y: 25});
gsap.from(".anime-text", {opacity: 0, duration: 3, delay: 2.3, y: 25, ease: "expo.out", stagger: .3});

gsap.from(".nav-logo", {opacity: 0, duration: 3, delay: 3.2, y: 25, ease: "expo.out"});
gsap.from(".nav-item", {opacity: 0, duration: 3, delay: 3.2, y: 25, ease: "expo.out", stagger: .2});

// gsap.from(".home-social", {opacity: 0, duration: 3, delay: 4, y: 25, ease: "expo.out", stagger: .2});


document.getElementById('home-btn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default behavior
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section
    removeActive('home-btn');
    
    nav = document.getElementById('nav-menu');
    nav.classList.remove("show");

});

document.getElementById('about-btn').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    removeActive('about-btn');

    nav = document.getElementById('nav-menu');
    nav.classList.remove("show");
});

document.getElementById('skills-btn').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
    removeActive('skills-btn');

    nav = document.getElementById('nav-menu');
    nav.classList.remove("show");
});

document.getElementById('projects-btn').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    removeActive('projects-btn');

    nav = document.getElementById('nav-menu');
    nav.classList.remove("show");
});


document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0); 
});
document.addEventListener("scroll", updateActiveMenu);


function updateActiveMenu() {
    const sections = document.querySelectorAll("main");
    const navLinks = document.querySelectorAll(".nav-link");
  
    let currentSection = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY + 60; // Adjust for offset or sticky navbar
  
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });
    
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("data-id") === currentSection) {
        link.classList.add("active");
      }
    });
}