/* ============================================================
   Phoebe Gorry — script.js
   1. Header: transparent over hero, solid on scroll
   2. FAQ accordion with accessible aria attributes
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. HEADER TRANSPARENCY
     ---------------------------------------------------------- */
  var header = document.getElementById('header');

  function updateHeader() {
    if (!header) return;
    var hero = document.querySelector('.hero');
    var threshold = hero ? hero.offsetHeight * 0.08 : 80;

    if (window.scrollY < threshold) {
      header.classList.add('over-hero');
      header.classList.remove('scrolled');
    } else {
      header.classList.remove('over-hero');
      header.classList.add('scrolled');
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

      // Collapse all items
      faqButtons.forEach(function (other) {
        other.setAttribute('aria-expanded', 'false');
        var otherAnswer = other.nextElementSibling;
        if (otherAnswer) otherAnswer.hidden = true;
      });

      // If this one was collapsed, expand it
      if (!isExpanded) {
        this.setAttribute('aria-expanded', 'true');
        if (answer) answer.hidden = false;
      }
    });
  });

})();
