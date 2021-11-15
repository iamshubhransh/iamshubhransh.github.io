$("nav").find("a").click(function(e) {
  e.preventDefault();
  var section = $(this).attr("href");
  $("html, body").animate({ 
    scrollTop: $(section).offset().top }, 10);
  });

  

// navigation
const tl = gsap.timeline({paused:true, reversed: true});
tl.to('.box', {height: '100vh', duration: .5, transformOrigin: 'bottom', stagger: .3})
tl.to('.mobile-logo', {opacity: '1'})
tl.to('.nav-main__content', {opacity: '1', visibility: 'visible', yPercent: -5, duration: .5, transformOrigin: 'bottom', stagger: .3})

const navIcon = document.querySelector('.nav-icon');
navIcon.onclick = function() {
    if (tl.reversed()) {
        this.classList.add('nav-anim')
        tl.play()
        document.body.classList.add('noScroll');
    } else {
        this.classList.remove('nav-anim')
        tl.reverse()
        document.body.classList.remove('noScroll');
    }
}

const allLinks = document.querySelectorAll('.list__item a');

allLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('noScroll');
        tl.reverse()
        navIcon.classList.remove('nav-anim')
    })
})

