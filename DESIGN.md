# Früh Systems – Design

## Aufgabe der Seite
Besucher in wenigen Sekunden auf den richtigen Weg bringen: privat oder Firma, Fernwartung oder vor Ort, was es kostet. Danach direkt zu Nick (Anruf, WhatsApp, Formular).

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

Verlauf `--grad`: #18b564 → #4785b3 → #6235ed (gemessen aus dem Logo-PNG). Nur als Akzent: Fallfinder-Fortschritt, Fusszeilenlinie, Kante der Preisboxen, Grundsätze bei «Über mich».

## Schrift
Instrument Sans Variable (lokal via @fontsource, `font-display: swap`). Eine Familie, Hierarchie über Grösse und Gewicht. Skala 1.25: 0.875 / 1.0625 / 1.25 / 1.5625 / clamp bis 2.4 / clamp bis 3.6 rem.

## Abstände und Formen
Abstände `--s-1` bis `--s-9` (0.25 bis 7 rem). Radien: 6 px Felder, 12 px Boxen, 20 px grosse Flächen, Knöpfe rund.

## Grundsätze
- Preise sind sichtbar.
- Ich-Form, Sie-Anrede, Schweizer Schreibweise (ss).
- Nummern nur bei echten Abläufen. Keine Versal-Etiketten.
- Bewegung nur als Antwort auf eine Auswahl, bei reduzierter Bewegung aus.
- Mobile: feste Schnellkontaktleiste unten (Anrufen, WhatsApp, Anfrage).
