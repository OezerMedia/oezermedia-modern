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
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  const { name, email, phone, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Bitte füllen Sie alle Pflichtfelder aus.' });
  }
  try {
    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.TO_EMAIL || 'info@oezermedia.com';
    let transporter;
    if (host && user && pass) {
      transporter = nodemailer.createTransport({
        host,
        port: parseInt(process.env.SMTP_PORT || '587', 10),
        secure: process.env.SMTP_SECURE === 'true',
        auth: { user, pass },
      });
      await transporter.sendMail({
        from: `${name} <${email}>`,
        to,
        subject: 'Neue Anfrage über Kontaktformular',
        text: `Name: ${name}\nEmail: ${email}\nTelefon: ${phone || '—'}\n\nNachricht:\n${message}`,
      });
    } else {
      // Kein SMTP konfiguriert: Logge Nachricht zur Analyse.
      console.info('Kontaktformular gesendet (SMTP nicht konfiguriert):', { name, email, phone, message });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Serverfehler beim Senden der Nachricht.' });
  }
}