(function () {
  'use strict';

  // Header scroll effect
  var header = document.getElementById('header');
  if (header) {
    function onScroll() {
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile menu toggle
  var menuToggle = document.querySelector('.menu-toggle');
  var navMain = document.querySelector('.nav-main');
  if (menuToggle && navMain) {
    menuToggle.addEventListener('click', function () {
      navMain.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', navMain.classList.contains('open'));
    });
    navMain.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMain.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Fade-in on scroll
  var fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.1 }
    );
    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    fadeEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // Contact form (prevent default, show message)
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = contactForm.querySelector('button[type="submit"]');
      var text = btn.textContent;
      btn.textContent = 'Thank you — we\'ll be in touch.';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = text;
        btn.disabled = false;
        contactForm.reset();
      }, 3000);
    });
  }
})();
