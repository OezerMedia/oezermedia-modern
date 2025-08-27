// pages/api/contact.js
import nodemailer from 'nodemailer';

/**
 * API Route: /api/contact
 *
 * Empfängt POST‑Anfragen vom Kontaktformular und sendet eine E‑Mail über
 * Nodemailer. Die SMTP‑Konfiguration wird über Umgebungsvariablen
 * bereitgestellt. Für Entwicklungszwecke kann diese Route auch ohne
 * konfigurierten Mailserver genutzt werden – in diesem Fall wird keine
 * E‑Mail versendet, aber es wird dennoch ein Erfolg zurückgegeben, um
 * die User Experience zu optimieren.
 */
export default async function handler(req, res) {
  // 1) Nur POST erlauben
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // 2) Body sicher auslesen
  const { name = '', email = '', phone = '', message = '', website = '' } = req.body || {};

  // 3) Bot-Honeypot
  if (website) {
    return res.status(400).json({ error: 'Bot submission detected.' });
  }

  // 4) Sanitisieren gegen simple HTML-Injection
  const sanitize = (str = '') => String(str).replace(/[<>]/g, '');
  const safeName = sanitize(name).trim();
  const safeEmail = sanitize(email).trim();
  const safePhone = sanitize(phone).trim();
  const safeMessage = sanitize(message).trim();

  // 5) Pflichtfelder prüfen
  if (!safeName || !safeEmail || !safeMessage) {
    return res.status(400).json({ error: 'Bitte füllen Sie alle Pflichtfelder aus.' });
  }

  // 6) E-Mail-Validierung – verständlich & streng genug
  if (!safeEmail.includes('@')) {
    return res.status(400).json({ error: 'Ihre E-Mail-Adresse muss ein „@“ enthalten.' });
  }
  const [local, domain] = safeEmail.split('@');
  if (!local) {
    return res.status(400).json({ error: 'Bitte tragen Sie den Teil vor dem „@“ ein.' });
  }
  if (!domain) {
    return res.status(400).json({ error: 'Bitte tragen Sie den Domainnamen nach dem „@“ ein (z. B. „beispiel.de“).' });
  }
  if (!domain.includes('.')) {
    return res.status(400).json({ error: 'Bitte ergänzen Sie die Endung der Adresse (z. B. „.de“ oder „.com“).' });
  }
  const labels = domain.split('.');
  if (labels.some((part) => part.length === 0)) {
    return res.status(400).json({ error: 'Bitte ergänzen Sie die Endung vollständig (z. B. „beispiel.de“ statt „beispiel.“).' });
  }
  const tld = labels[labels.length - 1];
  if (!/^[A-Za-z]{2,24}$/.test(tld)) {
    return res.status(400).json({ error: 'Die Endung muss aus Buchstaben bestehen und mindestens zwei Zeichen haben (z. B. „.de“).' });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,24}$/;
  if (!emailRegex.test(safeEmail)) {
    return res.status(400).json({ error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' });
  }

  // 7) Mailversand
  try {
    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.TO_EMAIL || 'info@oezermedia.com';
    const port = parseInt(process.env.SMTP_PORT || '587', 10);
    const secure = process.env.SMTP_SECURE === 'true'; // bei 465 true, sonst i. d. R. false

    // Tipp: Absender auf eigene Domain setzen (Provider-Policy!)
    const fromAddress = process.env.FROM_EMAIL || 'no-reply@oezermedia.com';
    const fromName = process.env.FROM_NAME || 'Özer Media Website';

    if (host && user && pass) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass },
      });

      await transporter.sendMail({
        from: `${fromName} <${fromAddress}>`,
        replyTo: `${safeName} <${safeEmail}>`, // Antworten gehen an den Anfragenden
        to,
        subject: 'Neue Anfrage über Kontaktformular',
        text:
`Name: ${safeName}
E-Mail: ${safeEmail}
Telefon: ${safePhone || '—'}

Nachricht:
${safeMessage}`,
      });
    } else {
      // Kein SMTP konfiguriert: Kein Fehler für den User, aber protokollieren
      console.info('Kontaktformular gesendet (SMTP nicht konfiguriert):', {
        name: safeName, email: safeEmail, phone: safePhone, message: safeMessage,
      });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[Contact API] Mailversand fehlgeschlagen:', err);
    return res.status(500).json({ error: 'Serverfehler beim Senden der Nachricht.' });
  }
}