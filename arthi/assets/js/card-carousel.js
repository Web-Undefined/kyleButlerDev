// Example cards array
const cards = [
  { front: '<h3>Acme Co.</h3><p>Jane Doe — CEO</p><p class="muted">jane@example.com</p>', back: '<p>QR / extra info</p>' },
  { front: '<h3>Beta LLC</h3><p>John Smith — CTO</p><p class="muted">john@beta.com</p>', back: '<p>More details here</p>' },
  // ...more cards
];

document.addEventListener('DOMContentLoaded', () => {
  const viewport = document.querySelector('.carousel-viewport');
  if (!viewport) return;

  const cardEl = viewport.querySelector('.business-card');
  const frontContent = cardEl.querySelector('.card-front .card-content');
  const backContent  = cardEl.querySelector('.card-back .card-content');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  let idx = 0;

  function render() {
    // reset flip when changing card
    cardEl.classList.remove('is-flipped');
    cardEl.setAttribute('aria-pressed', 'false');
    cardEl.querySelector('.card-back').setAttribute('aria-hidden', 'true');

    const data = cards[idx];
    frontContent.innerHTML = data.front || '';
    backContent.innerHTML = data.back || '';

    // optional: disable buttons at ends
    prevBtn.disabled = idx === 0;
    nextBtn.disabled = idx === cards.length - 1;
  }

  function prev() { if (idx > 0) { idx--; render(); } }
  function next() { if (idx < cards.length - 1) { idx++; render(); } }

  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  // flip toggle (click or keyboard)
  const toggle = () => {
    const flipped = cardEl.classList.toggle('is-flipped');
    cardEl.setAttribute('aria-pressed', String(flipped));
    cardEl.querySelector('.card-back').setAttribute('aria-hidden', String(!flipped));
  };
  cardEl.addEventListener('click', toggle);
  cardEl.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });

  render();
});