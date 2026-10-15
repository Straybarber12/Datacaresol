const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('enquiry-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const name = (data.get('name') || '').toString().trim();
  const organisation = (data.get('organisation') || '').toString().trim();
  const service = (data.get('service') || '').toString().trim();
  const message = (data.get('message') || '').toString().trim();

  const subject = encodeURIComponent(`Website enquiry: ${service}`);
  const body = encodeURIComponent(
    `Hello DataCare Compliance Solutions team,\n\nMy name is ${name}.\nOrganisation: ${organisation || 'Not provided'}\nService of interest: ${service}\n\nDetails:\n${message || 'I would like to discuss my organisation’s data protection needs.'}\n\nPlease let me know the next steps.\n\nKind regards,\n${name}`
  );
  document.getElementById('form-status').textContent = 'Opening your email app with the enquiry prepared…';
  window.location.href = `mailto:stephenkufa01@gmail.com?subject=${subject}&body=${body}`;
});
