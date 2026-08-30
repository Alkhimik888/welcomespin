/* Star gating (owner approved 2026-08-30): 1-3 stars go to our private feedback
   page, 4-5 stars go to the public Chrome Web Store reviews page.

   The markup ships with every star pointing at ../feedback/ so the page is never
   broken. Once config.js carries a real storeId, 4 and 5 are repointed at the
   store. Until then a happy user still lands somewhere useful rather than on a
   dead chromewebstore.google.com/detail/PENDING.../reviews URL. */
(() => {
  const config = window.SPIN_WHEEL_CONFIG;
  if (!config) return;

  const storeWired = config.isWired(config.storeId);
  const subtitle = document.getElementById('rate-sub');

  if (storeWired) {
    const reviews = config.reviewsUrl();
    document.querySelectorAll('a.star').forEach((star) => {
      if (Number(star.dataset.stars) >= 4) {
        star.href = reviews;
        star.target = '_blank';
        star.rel = 'noopener';
      }
    });
  }

  if (subtitle) {
    subtitle.textContent = storeWired
      ? 'Pick a star. Four or five opens the Chrome Web Store; anything lower opens a private form that only we read.'
      : 'Pick a star and tell us what to change.';
  }
})();
