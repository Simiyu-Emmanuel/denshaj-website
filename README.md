# Denshaj Enterprise Limited — Website

Premium, fully responsive static website. No build step. Inspired by Equity Group corporate quality (utility topbar, sticky header + dropdowns, hero banner, stats strip, cards, full footer) with original Denshaj construction identity.

## Run locally
- Option A: double-click `index.html`
- Option B (recommended, correct MIME + routing): `npx serve .` or `python3 -m http.server 8000` inside this folder, then open http://localhost:8000

## Deploy
Upload contents to any static host (cPanel, Netlify, Vercel, S3). Replace `https://www.denshaj.co.ke/` in sitemap.xml + canonical tags with the real production domain when known. Do not hardcode a fictitious domain elsewhere (only placeholders in SEO tags).

## Forms
Frontend validation only. On submit, the form builds a `mailto:denshaj@gmail.com` draft — honest, no fake success.
To activate automatic delivery, connect Formspree/Getform/Netlify Forms or a backend endpoint:
1. Create endpoint, 2. add `fetch()` POST in `js/main.js` in the `data-enquiry` handler, 3. show real success only on HTTP 200.

## Traceability (PDF → website)
| PDF § | Content | Website destination |
|---|---|---|
| Cover/01 Intro & Mission | Name, 100% Kenyan, 2024, mission, promise 48h, contacts | index hero, about.html, contact.html |
| 02 Who We Are | Background NCA, disciplines, staff 5 + 100-200, local ownership | about.html, index overview |
| 03 Services | Building, civil, materials + lists | services.html#building/#civil/#materials, index cards |
| 04 Competitive edge | One-stop, green 18,750 trees, 30% women/youth, wash-water | sustainability.html, index |
| 05 Massive projects | Pipeline 36 units, LR6129, 60.9m, toilets, tanks, drawings; excavation; structural/formwork/steel; MEP; residential & renders | projects.html, project-pipeline.html, services.html |
| 06 Fleet | 18 tippers 24t, 6 mixers 6m³, batching 60m³/hr, 3 excavators 25t, 2 rollers, grader, cranes on demand, GPS | fleet.html |
| 07 Supply capacity | 1200t ballast, 900t sand, 800t murram, 480m³ ready-mix, 2000 cement, 150t steel; same-day/24hr | supply.html |
| 08 Quality & Safety | sieve/flakiness, cubes/50m³, tensile/20t, NATA lab, zero-collapse, 100% PPE, NEMA | quality-safety.html |
| 09 Compliance | NCA cert 95544/B/0925 to 31Jul2028; licence SN-643550 to 31Jul2026; AGPO PVT-EYU38LZQ; KRA PIN P052349465S; KEBS/KRA/NEMA/KABCEC/OSHA; company details | compliance.html + assets/docs/ |
| 10 Management & Team | Dennis +254702735769, Johnson +254707135624, Korir JKUAT, Allan BORAQS/JKUAT, Priscilla UoN, workforce | team.html |
| 11 Sustainability | 10% profit trees, dust cannons, recycled water, 30% spend, 60% foremen | sustainability.html |
| 12 Contact | phones, denshaj@gmail.com, Off Uganda Rd Oloo St, Box 456-30100 Eldoret | contact.html, footer |
| TCC file | KRAELD1581213826 16Oct2026–15Oct2027 | compliance.html + assets/docs/Tax-Compliance-Certificate.pdf |

Images: all 10 unique supplied JPEGs used with correct alt text; 3 duplicates excluded. No stock images.

## Known issues / needs client confirmation
1. NCA category: cover says NCA 5, compliance table says NCA 7 — table used; confirm correct.
2. AGPO cert (30Aug2024–30Aug2026) expired at build date 16Oct2026 — renewal needed.
3. Older KRA cert in profile superseded by 16Oct2026 TCC file — current file used.
4. No logo file supplied — text monogram used; replace when logo available.
5. No social URLs, no production domain, no backend endpoint — placeholders documented, nothing faked.
