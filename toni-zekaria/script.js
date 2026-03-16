/* ============================================================
   Toni Zekaria — script.js
   1. Announce bar dismiss + header top adjustment
   2. Header: transparent over hero, solid on scroll
   ============================================================ */

(function () {
  'use strict';

  var announceBar   = document.getElementById('announceBar');
  var announceClose = document.getElementById('announceClose');
  var header        = document.getElementById('header');

  /* ----------------------------------------------------------
     1. ANNOUNCE BAR DISMISS
     ---------------------------------------------------------- */
  function dismissAnnounce() {
    if (!announceBar) return;
    announceBar.classList.add('hidden');
    if (header) header.classList.add('announce-gone');
    updateHeader();
  }

  if (announceClose) {
    announceClose.addEventListener('click', dismissAnnounce);
  }

  /* ----------------------------------------------------------
     2. HEADER SCROLL BEHAVIOUR
     ---------------------------------------------------------- */
  function updateHeader() {
    if (!header) return;

    var hero = document.querySelector('.hero');
    var threshold = hero ? hero.offsetHeight * 0.1 : 80;

    if (window.scrollY > threshold) {
      header.classList.add('scrolled');
      header.classList.remove('over-hero');
    } else {
      header.classList.remove('scrolled');
      header.classList.add('over-hero');
    }
  }

  // Set initial state (hero is dark so header starts transparent)
  header.classList.add('over-hero');

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

})();
