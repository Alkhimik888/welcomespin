/* Single place to wire the product's live URLs.
   Swap a PENDING_OWNER value for the real one and the pages pick it up —
   no other file needs editing. Pages that still hold a placeholder render an
   honest "not wired yet" panel instead of a broken embed. */
window.SPIN_WHEEL_CONFIG = {
  /* Google Form: "Spin Wheel — Uninstall", one required paragraph question
     ("Why did you uninstall Spin Wheel?"). Paste the /viewform URL. */
  uninstallForm: 'PENDING_OWNER_UNINSTALL_FORM_URL',

  /* Google Form: "Spin Wheel — Feedback", 2 questions (reason for rating +
     what to improve), email collection OFF. Paste the /viewform URL. */
  feedbackForm: 'PENDING_OWNER_FEEDBACK_FORM_URL',

  /* Chrome Web Store id — exists only once Spin Wheel is published. */
  storeId: 'PENDING_OWNER_EXTENSION_ID',
};

window.SPIN_WHEEL_CONFIG.isWired = (value) =>
  typeof value === 'string' && value.length > 0 && !value.startsWith('PENDING_OWNER');

window.SPIN_WHEEL_CONFIG.reviewsUrl = () =>
  `https://chromewebstore.google.com/detail/${window.SPIN_WHEEL_CONFIG.storeId}/reviews`;
