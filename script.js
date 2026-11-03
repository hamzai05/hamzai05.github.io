// Mobile menu
const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
if (btn && menu) {
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    btn.textContent = open ? 'Close' : 'Menu';
  });
}

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Enquiry form: opens the visitor's email app with the message filled in
const form = document.getElementById('enquiry');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const subject = `Property enquiry: ${d.get('service')} in ${d.get('city')}`;
    const body =
      `Name: ${d.get('name')}\nPhone / WhatsApp: ${d.get('phone')}\n` +
      `I need help with: ${d.get('service')}\nCity: ${d.get('city')}\n\n${d.get('message')}`;
    window.location.href =
      `mailto:hamzaislam0998@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.getElementById('form-status').textContent =
      'Your email app should open with your enquiry ready to send. If it does not, email hamzaislam0998@gmail.com directly.';
  });
}
