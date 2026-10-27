export type Frage = { q: string; a: string };

export const faqStart: Frage[] = [
  { q: 'Ich weiss nicht genau, was das Problem ist.', a: 'Das müssen Sie nicht. Beschreiben Sie, was Sie beobachten. Ich kläre die Ursache und den nächsten Schritt.' },
  { q: 'Wie funktioniert die Fernwartung?', a: 'Der Computer muss starten und online sein. Die Verbindung beginnt erst nach Ihrer Freigabe, Sie sehen jeden Schritt und können jederzeit beenden.' },
  { q: 'Kann ich einmalig Hilfe anfragen?', a: 'Ja. Firmen nutzen Support nach Aufwand ohne Bindung. Privatpersonen wählen Fernwartung, vor Ort oder das 3-Stunden-Guthaben.' },
  { q: 'Was passiert, bevor Kosten entstehen?', a: 'Vorgehen und mögliche Zusatzkosten bespreche ich vorher. Ich beginne erst nach Ihrer Freigabe.' },
  { q: 'Wie schnell bekomme ich Hilfe?', a: 'Nach Dringlichkeit und Verfügbarkeit. Feste Reaktionszeiten vereinbare ich bei Bedarf mit Ihnen.' },
];

export const faqPrivat: Frage[] = [
  { q: 'Was braucht es für eine Fernwartung?', a: 'Der Computer muss starten und mit dem Internet verbunden sein. Die Verbindung beginnt erst nach Ihrer ausdrücklichen Freigabe.' },
  { q: 'Was lässt sich aus der Ferne lösen?', a: 'Zum Beispiel E-Mail, Outlook, Programme, Updates, Einstellungen, langsame PCs und viele Druckerprobleme.' },
  { q: 'Ist Fernwartung sicher?', a: 'Sie sehen jeden Schritt, können jederzeit beenden und geben sensible Angaben selbst ein.' },
  { q: 'Gibt es ein Guthaben statt eines Abos?', a: 'Ja. Das 3-Stunden-Guthaben kostet CHF 330.–, ist 12 Monate gültig und wird in 15-Minuten-Schritten eingesetzt.' },
];

export const faqFirma: Frage[] = [
  { q: 'Welche Angaben helfen bei einer Supportanfrage?', a: 'Betroffenes Gerät oder System, wer blockiert ist, seit wann und der Wortlaut der Fehlermeldung. Bitte keine Passwörter senden.' },
  { q: 'Kann ein neuer Kunde direkt Fernwartung nutzen?', a: 'Ja. Zuerst ordne ich das Anliegen kurz ein. Zum vereinbarten Zeitpunkt geben Sie den Zugriff frei und können jederzeit beenden.' },
  { q: 'Wann ist ein Termin vor Ort sinnvoll?', a: 'Wenn Hardware, Verkabelung, WLAN-Abdeckung oder die Situation im Büro direkt geprüft werden muss.' },
  { q: 'Betreuen Sie auch einzelne Arbeitsplätze?', a: 'Ja. Sie können mit einem einzelnen Gerät oder Fall starten, ohne laufende Betreuung.' },
  { q: 'Koordinieren Sie auch andere IT-Anbieter?', a: 'Ja. Ich nehme das Anliegen auf und stimme mich mit Softwareherstellern, Providern, Telefonie- oder Hardwarepartnern ab. Herstellerzugänge und Spezialleistungen bleiben beim jeweiligen Anbieter.' },
];

export const faqLeistungen: Frage[] = [
  { q: 'Ich weiss nicht, welche Leistung passt.', a: 'Kein Problem. Beschreiben Sie das gewünschte Ergebnis oder die Situation. Ich ordne den Bedarf ein.' },
  { q: 'Können mehrere Themen zusammen bearbeitet werden?', a: 'Ja. Zusammenhängende Themen priorisiere ich gemeinsam mit Ihnen und setze sie schrittweise um.' },
  { q: 'Ist eine Bestandsaufnahme möglich?', a: 'Ja. Geräte, Dienste, Zugänge und Abhängigkeiten werden eingeordnet. Daraus entsteht eine verständliche Prioritätenliste.' },
  { q: 'Arbeiten Sie auch mit Privatkunden?', a: 'Ja. Für Privatpersonen gibt es eine eigene Seite mit typischen Fällen und Preisen.' },
];

export const faqPreiseFirma: Frage[] = [
  { q: 'Wie wird nach Aufwand abgerechnet?', a: 'Der effektive Aufwand wird in 15-Minuten-Schritten erfasst. Der Stundenansatz beträgt CHF 140.–.' },
  { q: 'Was gilt als betreuter Arbeitsplatz?', a: 'Ein benannter Benutzer mit einem primären, betreuten Computer. Gemeinsam genutzte oder zusätzliche Geräte werden separat berücksichtigt.' },
  { q: 'Was ist im Arbeitsplatzmodell enthalten?', a: 'Monitoring, Patch-Management, Geräteinventar, IT-Dokumentation, Microsoft-365-Basisadministration und ein gepooltes Supportkontingent.' },
  { q: 'Was wird separat verrechnet?', a: 'Onboarding, Lizenzen, zusätzliche Supportzeit, Vor-Ort-Termine, Projekte, Hardware, Server, NAS, Netzwerkänderungen und Leistungen Dritter, jeweils vorab ausgewiesen.' },
  { q: 'Ist eine feste Reaktionszeit enthalten?', a: 'Nein. Anfragen werden nach Dringlichkeit und Verfügbarkeit bearbeitet. Verbindliche Reaktionszeiten vereinbare ich bei Bedarf individuell.' },
  { q: 'Wie startet die laufende Betreuung?', a: 'Zuerst nehme ich Ihre bestehende IT auf. Danach erhalten Sie eine klare Offerte mit Arbeitsplätzen, Leistungen und separaten Positionen.' },
];

export const faqFernwartung: Frage[] = [
  { q: 'Was braucht es für eine Fernwartung?', a: 'Das Gerät muss starten und online sein. Die Verbindung beginnt erst nach vorherigem Kontakt und Ihrer Freigabe.' },
  { q: 'Können Sie später erneut auf mein Gerät zugreifen?', a: 'Nein. Eine Verbindung startet nur nach Kontakt und Ihrer Freigabe für die jeweilige Sitzung.' },
  { q: 'Was, wenn es sich nicht aus der Ferne lösen lässt?', a: 'Dann besprechen wir, ob ein Termin vor Ort oder ein anderer Schritt sinnvoll ist.' },
  { q: 'Soll ich AnyDesk schon vor der Anfrage installieren?', a: 'Nein. Laden oder öffnen Sie Fernwartungssoftware erst zum vereinbarten Termin und nie wegen eines unerwarteten Anrufs.' },
];
