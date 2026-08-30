/* Single place to wire the product's live URLs.
   Swap a PENDING_OWNER value for the real one and the pages pick it up —
   no other file needs editing. Pages that still hold a placeholder render an
   honest "not wired yet" panel instead of a broken embed. */
window.SPIN_WHEEL_CONFIG = {
  /* Google Form "Spin Wheel — Uninstall": one required paragraph question,
     "Why did you uninstall Spin Wheel?". Published 2026-08-30.
     Editor: docs.google.com/forms/d/1qNc9tXnZZajZ4HNsrkl6IwDiCXY8L3rnZ5ma_jQ20AA/edit */
  uninstallForm: 'https://docs.google.com/forms/d/e/1FAIpQLSe0ydHXPZ7kWQiyNGxhyxgYHDzqXQLQp1pB2V8_Ze4Jg4NldQ/viewform',

  /* Google Form "Spin Wheel — Feedback": reason for the rating + what to
     improve, email collection off. Published 2026-08-30.
     Editor: docs.google.com/forms/d/1fR5-Y4cMO9xo6jSz1tygarc5gSl40RXBudVh9sXiHR8/edit */
  feedbackForm: 'https://docs.google.com/forms/d/e/1FAIpQLSeb6J2HfYeXsP8Gb2xIks_Hj5DmEZRxNPtO-EHqzZ-xmqbuIA/viewform',

  /* Chrome Web Store id — exists only once Spin Wheel is published. */
  storeId: 'PENDING_OWNER_EXTENSION_ID',
};

window.SPIN_WHEEL_CONFIG.isWired = (value) =>
  typeof value === 'string' && value.length > 0 && !value.startsWith('PENDING_OWNER');

window.SPIN_WHEEL_CONFIG.reviewsUrl = () =>
  `https://chromewebstore.google.com/detail/${window.SPIN_WHEEL_CONFIG.storeId}/reviews`;
