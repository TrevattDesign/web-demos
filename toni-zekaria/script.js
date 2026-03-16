/* ============================================================
   Toni Zekaria — script.js
   1. Header: transparent over hero, solid on scroll
   2. FAQ accordion
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. HEADER SCROLL BEHAVIOUR
     ---------------------------------------------------------- */
  var header = document.getElementById('header');

  function updateHeader() {
    if (!header) return;
    var hero = document.querySelector('.hero');
    var threshold = hero ? hero.offsetHeight * 0.1 : 80;
    if (window.scrollY > threshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  /* ----------------------------------------------------------
     2. FAQ ACCORDION
     ---------------------------------------------------------- */
  var faqButtons = document.querySelectorAll('.faq-q');

  faqButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var isExpanded = this.getAttribute('aria-expanded') === 'true';
      var answer = this.nextElementSibling;

      // Collapse all
      faqButtons.forEach(function (other) {
        other.setAttribute('aria-expanded', 'false');
        var a = other.nextElementSibling;
        if (a) a.hidden = true;
      });

      // Expand this one if it was collapsed
      if (!isExpanded) {
        this.setAttribute('aria-expanded', 'true');
        if (answer) answer.hidden = false;
      }
    });
  });

})();
