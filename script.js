const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

function closeMenu() {
  if (!menuButton || !nav) return;
  menuButton.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('is-open', !open);
  document.body.classList.toggle('menu-open', !open);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

const quoteForm = document.querySelector('[data-quote-form]');

quoteForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!quoteForm.reportValidity()) return;

  const data = new FormData(quoteForm);
  const message = [
    'Olá, Melquiades! Vim pelo site da Salvador Refrigeração e gostaria de solicitar atendimento.',
    '',
    `Nome: ${data.get('nome')}`,
    `Equipamento: ${data.get('equipamento')}`,
    `Problema: ${data.get('problema')}`,
    `Bairro/região: ${data.get('bairro')}`,
    data.get('detalhes') ? `Detalhes: ${data.get('detalhes')}` : '',
    '',
    'Pode me orientar sobre o atendimento?'
  ].filter(Boolean).join('\n');

  window.open(`https://wa.me/5571986472730?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

document.querySelectorAll('[data-year]').forEach((node) => { node.textContent = new Date().getFullYear(); });
