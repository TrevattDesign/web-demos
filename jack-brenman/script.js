/* ============================================================
   Jack Brenman — script.js
   1. Header: transparent over hero, solid on scroll
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
    var threshold = hero ? hero.offsetHeight * 0.08 : 80;
    if (window.scrollY > threshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

})();
