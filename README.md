# Früh Systems – Website

Neubau von frueh-systems.ch (heute Webflow) mit Astro, statisch. Gestaltung und Umsetzung: Bilegflow.

## Befehle
- `npm install`
- `npm run dev` – lokale Entwicklung
- `npm run build` – Vorschau-Build (noindex, robots.txt sperrt Crawler)
- `npm run build:live` – Live-Build (indexierbar, Sitemap in robots.txt)

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
- Eigene Datenschutzerklärung (heute Link auf die bestehende Seite).
- 301-Weiterleitungen der alten Webflow-Adressen.
- Domain verbinden, kanonische Domain festlegen.
