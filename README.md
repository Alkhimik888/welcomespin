# welcomespin — service pages for Spin Wheel

Hosted on GitHub Pages: https://alkhimik888.github.io/welcomespin/

| Page | URL | Reached from |
|---|---|---|
| Welcome (post-install) | `/` | `chrome.runtime.onInstalled`, first install only |
| Uninstall survey | `/uninstall/` | `chrome.runtime.setUninstallURL` |
| Feedback | `/feedback/` | the extension popup, and 1–3★ on the rate page |
| Rate us | `/rate/` | the extension popup |

## Wiring — one file

Every product URL lives in **`config.js`**. Swap a `PENDING_OWNER_…` value for the
real one and every page picks it up; nothing else needs editing. A page whose URL is
still a placeholder renders an honest "not connected yet" note instead of a broken
embed, so the site is never visibly broken.

Wired 2026-08-30 — both Google Forms live, published, "anyone with the link",
email collection OFF, response notifications ON:

| Form | Editor doc id |
|---|---|
| Spin Wheel — Uninstall | `1qNc9tXnZZajZ4HNsrkl6IwDiCXY8L3rnZ5ma_jQ20AA` |
| Spin Wheel — Feedback | `1fR5-Y4cMO9xo6jSz1tygarc5gSl40RXBudVh9sXiHR8` |

Still open:

- **`storeId`** — exists only once Spin Wheel is published to the Chrome Web Store.
  Until then the 4–5★ stars fall back to `/feedback/` rather than a dead store URL.

Convention (owner, 2026-07-11): the uninstall form and the feedback form are two
SEPARATE forms — a `?src=` parameter is not recorded by Google Forms, so reusing one
form mixes the two response streams beyond separating.

## Star gating

`/rate/` routes 1–3★ to the private feedback page and 4–5★ to the public store
reviews page. The owner approved this trade-off on 2026-08-30. It is a documented
Chrome Web Store policy risk (review manipulation); the compliant alternative is one
card offering both buttons to everyone. Switching back is a change in `rate.js` only.

## Analytics

Not connected. The siblings (`welcomepng`, `welcomeqr`) each carry their own
Yandex.Metrika counter on the welcome page, which doubles as a clean install counter
because the page opens exactly once per install. Spin Wheel needs its own counter id.

## Images

`shot-pin.png` and `shot-click.png` are generated per the `welcome-page-shots` skill
(gpt-image, the product's real 128px icon passed as reference). Regenerate rather
than retouch.
