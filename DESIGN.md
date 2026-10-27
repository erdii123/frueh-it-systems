# Früh Systems – Design

## Aufgabe der Seite
Besucher in wenigen Sekunden auf den richtigen Weg bringen: privat oder Firma, Fernwartung oder vor Ort, was es kostet. Danach direkt zu Nick (Anruf, WhatsApp, Formular).

## Stand Runde 01 (27.10.2026)
Mischung mit Nicks Demo-Seite (demonick.vercel.app): dunkler Hero mit Glasbild, schwebender Header, Zielgruppen-Karten Lila/Mint, Leistungs-Tabs mit Mini-Diagramm, Preis-Umschalter mit Rechner, Ablauf auf Mint, dunkler Kontaktblock. (Grosse Wortmarke im Footer in Runde 03 entfernt.) Fakten und Preise gelten nach frueh-systems.ch. Keine Versal-Etiketten, kein WebGL.

## Stand Runde 02 (27.10.2026)
Einheitliche Masse: Knöpfe 48 px (`--h-btn`), Wahlfelder 44 px (`--h-chip`), Innenabstand Karten `--pad-card`, Navy-Blöcke so breit wie Header und Karten (`.panel`). Fallfinder-Fälle als 2-Spalten-Raster gleich grosser Kacheln. Mobiles Menü als Vollbild in Navy.

## Stand Runde 04 (27.10.2026)
Unterseiten aus gemeinsamen Bausteinen (`src/components/`): PageHead (dunkler Seitenkopf mit Glasbild und Brotkrumen), Kacheln, Leistungen, PreiseFirma, PreisePrivat, Ablauf, Ueber, Vertrauen, Faq, Kontakt, Consent. Gemeinsame Stile in `src/styles/blocks.css`.

## Prägendes Element
Der **Fallfinder** im Hero: Für wen? → Was funktioniert nicht? → passender Weg mit Preis und vorausgefülltem Anfrageknopf. Der Grün-Violett-Verlauf aus dem Logo zeigt als Linie den Fortschritt. Alles andere bleibt ruhig.

## Farben
| Token | Wert | Einsatz |
|---|---|---|
| `--paper` | #f4f6f5 | Seitengrund |
| `--surface` | #ffffff | Karten, Formular, Fusszeile |
| `--ink` | #15181d | Text, Hauptknopf, KMU-Fläche |
| `--ink-2` | #39404a | Fliesstext |
| `--muted` | #5a636e | Hinweise |
| `--line` | #dce1e4 | Linien, Rahmen |
| `--green` | #18b564 | Logo-Verlauf, Häkchen |
| `--green-ink` | #0d7a42 | grüner Text |
| `--violet` | #6235ed | Logo-Verlauf, Auswahl, Fokus |
| `--navy` | #0a1024 | Hero, Leistungen, Kontakt (passt zum Glasbild) |
| `--navy-2` / `--navy-3` | #151b36 / #222a4a | Karten und Felder auf Navy |
| `--lila` / `--lila-2` | #e9e3ff / #cfc2ff | Karte Unternehmen / Knopf auf Navy |
| `--mint` / `--mint-2` | #e2f2ea / #d3eadf | Karte Privat / Ablauf |

Verlauf `--grad`: #18b564 → #4785b3 → #6235ed (gemessen aus dem Logo-PNG). Nur als Akzent: Fallfinder-Fortschritt, Leitsatz bei «Über mich».

## Schrift
Instrument Sans Variable (lokal via @fontsource, `font-display: swap`). Eine Familie, Hierarchie über Grösse und Gewicht. Skala 1.25: 0.875 / 1.0625 / 1.25 / 1.5625 / clamp bis 2.4 / clamp bis 3.6 rem.

## Abstände und Formen
Abstände `--s-1` bis `--s-9` (0.25 bis 7 rem). Radien: 6 px Felder, 12 px Boxen, 20 px Karten, 28 px Navy-Flächen, Knöpfe rund.

## Grundsätze
- Preise sind sichtbar. Wenig Text: Häkchen statt Sätze, Tabs und Umschalter statt langer Listen.
- Ich-Form, Sie-Anrede, Schweizer Schreibweise (ss).
- Nummern nur bei echten Abläufen. Keine Versal-Etiketten.
- Bewegung: ruhige Endlos-Animation nur im Hero-Hintergrund (Glasbild, Lichtschimmer, nur transform/opacity), Schalter «Bewegung», pausiert ausserhalb des Sichtbereichs, aus bei reduzierter Bewegung. Sonst nur als Antwort auf eine Auswahl.
- Mobile: feste Schnellkontaktleiste unten (Anrufen, WhatsApp, Anfrage).
