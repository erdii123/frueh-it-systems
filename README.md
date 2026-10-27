# Früh Systems – Website

Neubau von frueh-systems.ch (heute Webflow) mit Astro, statisch. Gestaltung und Umsetzung: Bilegflow.

## Befehle
- `npm install`
- `npm run dev` – lokale Entwicklung
- `npm run build` – Vorschau-Build (noindex, robots.txt sperrt Crawler)
- `npm run build:live` – Live-Build (indexierbar, Sitemap in robots.txt)

## Seiten
/, /privat/, /it-support/, /leistungen/, /preise-unternehmen/, /fernwartung/, /ueber-mich/, /kontakt/, /impressum/, /datenschutz/ (Entwurf, Freigabe durch Nick vor Livegang), /danke/, /404, /stil-kit/ (noindex). Alte Webflow-Adressen per 301 in `netlify.toml`.

## Tracking
Cookie-Banner auf allen Seiten. Google Analytics 4 (G-JDM51MK6SJ) mit Consent Mode lädt **nur im Live-Build** (`npm run build:live`) und nur nach Zustimmung. In der Vorschau ist der Banner bedienbar, sendet aber nichts. Ereignisse: phone_click, email_click, whatsapp_click, generate_lead.

## Inhalte
- `src/data/site.json` – Firma, Kontakt, Google-Bewertungen
- `src/data/preise.json` – alle Preise
- `src/components/Fallfinder.astro` – Fälle und empfohlene Wege
- Stil: `DESIGN.md`, Stil-Kit unter `/stil-kit/` (noindex)

## Netlify
- Repo in Netlify verbinden, Build `npm run build`, Ordner `dist` (steht in `netlify.toml`).
- Formular «anfrage» läuft über Netlify Forms (Honeypot `bot-feld`, Weiterleitung `/danke/`). In Netlify unter Forms die Formularerkennung aktivieren und eine E-Mail-Benachrichtigung an info@frueh-systems.ch einrichten.

## Vor dem Livegang
- X-Robots-Tag-Block in `netlify.toml` entfernen, Build auf `npm run build:live`.
- Datenschutzerklärung (/datenschutz/) von Nick freigeben lassen, Stand-Datum setzen.
- 301-Weiterleitungen sind eingerichtet; nach Umzug stichprobenweise prüfen.
- Domain verbinden, kanonische Domain festlegen.
