import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', website: '' });
  const [status, setStatus] = useState({ type: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

// Eigene Validierung (mit klaren Hinweisen inkl. "."-Fällen)
const validate = () => {
  const name = (form.name || '').trim();
  const email = (form.email || '').trim();
  const message = (form.message || '').trim();

  if (!name) {
    return { ok: false, fieldId: 'name', msg: 'Bitte geben Sie Ihren Namen ein.' };
  }

  // 1) Muss ein "@" enthalten
  if (!email.includes('@')) {
    // fängt auch Fälle wie nur "." oder "abc." ab
    return { ok: false, fieldId: 'email', msg: 'Bitte geben Sie eine E-Mail-Adresse mit „@“ ein (z. B. name@beispiel.de).' };
  }

  const [local, domain] = email.split('@');

  // 2) Teil vor dem @ vorhanden
  if (!local) {
    return { ok: false, fieldId: 'email', msg: 'Bitte tragen Sie den Teil vor dem „@“ ein (z. B. „name“).' };
  }

  // 3) Domainteil vorhanden
  if (!domain) {
    return { ok: false, fieldId: 'email', msg: 'Bitte tragen Sie den Domainnamen nach dem „@“ ein (z. B. „beispiel.de“).' };
  }

  // 4) Domain muss einen Punkt enthalten: "beispiel.de"
  if (!domain.includes('.')) {
    return { ok: false, fieldId: 'email', msg: 'Bitte ergänzen Sie die Endung der Adresse (z. B. „.de“ oder „.com“).' };
  }

  // 5) Keine leeren Labels rund um den Punkt (fängt "abc@domain." und ".de" u. Ä. ab)
  const labels = domain.split('.');
  if (labels.some((part) => part.length === 0)) {
    return { ok: false, fieldId: 'email', msg: 'Bitte ergänzen Sie die Endung vollständig (z. B. „beispiel.de“ statt „beispiel.“).' };
  }

  // 6) TLD prüfen: nur Buchstaben, mind. 2 Zeichen (fängt "abc@domain.c" oder "abc@domain.1" ab)
  const tld = labels[labels.length - 1];
  if (!/^[A-Za-z]{2,24}$/.test(tld)) {
    return { ok: false, fieldId: 'email', msg: 'Die Endung muss aus Buchstaben bestehen und mindestens zwei Zeichen haben (z. B. „.de“).' };
  }

  // 7) Finale Regex, falls doch exotische Fälle durchrutschen
  const emailRegex = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,24}$/;
  if (!emailRegex.test(email)) {
    return { ok: false, fieldId: 'email', msg: 'Bitte geben Sie eine gültige E-Mail-Adresse ein (z. B. name@beispiel.de).' };
  }

  if (!message) {
    return { ok: false, fieldId: 'message', msg: 'Bitte schreiben Sie eine kurze Nachricht.' };
  }

  // Honeypot (Bots)
  if (form.website) {
    return { ok: false, fieldId: null, msg: 'Ihre Nachricht konnte nicht überprüft werden. Bitte senden Sie uns eine E-Mail an info@oezermedia.com.' };
  }

  return { ok: true };
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: '' });

    // Eigene Validierung zuerst
    const v = validate();
    if (!v.ok) {
      setStatus({ type: 'error', message: v.msg });
      if (v.fieldId) {
        const el = document.getElementById(v.fieldId);
        if (el) el.focus();
      }
      return;
    }

    try {
      const isLocal =
        typeof window !== 'undefined' &&
        (window.location.hostname === 'localhost' ||
          window.location.hostname === '127.0.0.1');

      // Lokal: Next API-Route, Live (Manitu): contact.php
      const API_URL = isLocal ? '/api/contact' : '/contact.php';

      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: (form.phone || '').trim(),
          message: form.message.trim(),
          website: form.website || '', // Honeypot
        }),
      });

      let data = null;
      try {
        data = await res.json();
      } catch {
        data = null;
      }

      if (res.ok) {
        setStatus({
          type: 'success',
          message: 'Vielen Dank! Ihre Nachricht wurde erfolgreich versendet.',
        });
        setForm({ name: '', email: '', phone: '', message: '', website: '' });
      } else {
        setStatus({
          type: 'error',
          message:
            (data && data.error) ||
            'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder senden Sie eine E-Mail an info@oezermedia.com.',
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: 'error',
        message:
          'Es ist ein Netzwerkfehler aufgetreten. Bitte prüfen Sie Ihre Internetverbindung oder senden Sie eine E-Mail an info@oezermedia.com.',
      });
    }
  };

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1>Kontakt</h1>
      <p style={{ maxWidth: '700px' }}>
        Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Nutzen Sie
        einfach das folgende Formular. Wir melden uns so schnell wie möglich
        bei Ihnen.
      </p>

      {/* Kontaktinformationen */}
      <div className="contact-details" style={{ marginTop: '1rem', marginBottom: '2rem', display: 'grid', gap: '0.75rem' }}>
        {/* Telefon */}
        <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <title>Telefon</title>
            <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          <a href="tel:+4972539680725">+49 7253 9680725</a>
        </div>

        {/* E-Mail */}
        <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <title>E-Mail</title>
            <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <a href="mailto:info@oezermedia.com">info@oezermedia.com</a>
        </div>

        {/* Adresse */}
        <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <title>Adresse</title>
            <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <span>Steinacker II 22, 76684 Östringen</span>
        </div>
      </div>

      {/* noValidate: Browser-Popups aus, wir prüfen selbst */}
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Name*</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--color-muted)' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">E-Mail*</label>
          <input
            id="email"
            name="email"
            autoComplete="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--color-muted)' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="phone">Telefon</label>
          <input
            id="phone"
            name="phone"
            autoComplete="tel"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            inputMode="tel"
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--color-muted)' }}
          />
        </div>

        {/* Honeypot */}
        <div style={{ display: 'none' }}>
          <label htmlFor="website">Lassen Sie dieses Feld leer</label>
          <input
            type="text"
            id="website"
            name="website"
            autoComplete="off"
            value={form.website || ''}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="message">Nachricht*</label>
          <textarea
            id="message"
            name="message"
            autoComplete="off"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--color-muted)' }}
          />
        </div>

        <button
          type="submit"
          disabled={status.type === 'loading'}
          style={{ padding: '0.75rem 1.5rem', border: 'none', borderRadius: '4px', background: 'var(--color-primary)', color: '#fff', cursor: 'pointer' }}
        >
          {status.type === 'loading' ? 'Senden…' : 'Absenden'}
        </button>
      </form>

      {status.type === 'success' && (
        <p style={{ color: 'green', marginTop: '1rem' }}>{status.message}</p>
      )}
      {status.type === 'error' && (
        <p style={{ color: 'red', marginTop: '1rem' }}>{status.message}</p>
      )}
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Kontakt',
      description:
        'Nehmen Sie Kontakt mit Özer Media auf – senden Sie uns eine Nachricht über das Formular, rufen Sie an oder schreiben Sie eine E-Mail.',
    },
  };
}
