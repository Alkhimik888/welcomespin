/* Embeds the Google Form named by data-form on #form-slot, but only once
   config.js carries a real URL. While the value is still a PENDING_OWNER
   placeholder the page keeps its honest "not connected yet" note instead of
   rendering a broken iframe. */
(() => {
  const config = window.SPIN_WHEEL_CONFIG;
  const slot = document.getElementById('form-slot');
  if (!config || !slot) return;

  const key = slot.dataset.form;
  const url = config[key];
  if (!config.isWired(url)) return;

  const separator = url.includes('?') ? '&' : '?';
  const frame = document.createElement('iframe');
  frame.src = `${url}${separator}embedded=true`;
  frame.title = slot.dataset.formTitle || 'Form';
  frame.loading = 'lazy';
  frame.textContent = 'Loading';

  slot.replaceChildren(frame);
})();
