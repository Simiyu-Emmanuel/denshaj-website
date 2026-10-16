# QA Report — Denshaj Enterprise Website (16 Oct 2026)

## Content verification (PDF vs website)
- Full profile PDF (19 content pages) read page-by-page; all sections mapped in README traceability table.
- Contact details verified: +254702735769, +254707135624, denshajenterprise@gmail.com, Off Uganda Road Oloo St, Box 456-30100 Eldoret.
- No invented services, clients, values, dates, testimonials. MEP scope limited to toilets + rooftop tanks as documented.
- Images: 10 unique supplied JPEGs used, 1 duplicate trio deduped. Alt text descriptive. No stock.
- Discrepancies resolved 16Oct2026: NCA 5 confirmed (used site-wide); AGPO expired 30Aug2026; old KRA cert superseded by 16Oct2026 TCC file.

## Functional verification
- NO-BAD-HREFS-OK: zero `href="#"` (lightbox anchors now point to real image files).
- ALL-IMG-HAVE-ALT-OK.
- All 14 HTML pages + CSS/JS + sitemap + robots present.
- Nav, dropdowns, mobile hamburger, filters (projects), lightbox, cookie bar, back-to-top, enquiry validation implemented in js/main.js.
- Forms: direct-to-team mailto draft to denshajenterprise@gmail.com with 48h reply promise. No fake success.
- tel: / mailto: / WhatsApp wa.me/254702735769 links use verified numbers only.
- PDFs linked: Denshaj-Enterprise-Profile-2026.pdf, Tax-Compliance-Certificate.pdf.

## Visual / responsive
- Equity-inspired system: utility topbar, sticky header, hero overlay, stats strip, cards, dark section, corporate footer.
- Responsive breakpoints 980px / 600px; no horizontal overflow by design (grid → single column).
- Reduced-motion respected. Focus-visible styles, skip link, semantic landmarks.
- Manual browser check recommended: `npx serve .` then open localhost; test 390px, 768px, 1280px; check console for 404s.

## Remaining limitations
1. NCA 5 confirmed. 2. Renew AGPO. 3. Supply logo to replace monogram. 4. Provide production domain to replace www.denshaj.co.ke placeholder. 5. Privacy draft needs legal review. Office pin: Eldoret town.
