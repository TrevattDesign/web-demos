const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.fade').forEach(el => io.observe(el));

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('.btn-submit');
  btn.textContent = 'Message sent. I will be in touch shortly.';
  btn.disabled = true;
});
