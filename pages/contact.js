import { useState } from 'react';

/**
 * Contact page.
 *
 * Enthält ein Kontaktformular, über das Besucher eine Nachricht
 * hinterlassen können. Das Formular wird clientseitig validiert und sendet
 * die Daten per Fetch an die API‑Route `/api/contact`. Anschließend
 * erhalten Besucher eine Bestätigungsmeldung. Die Felder und Meldungen
 * werden auf Deutsch ausgegeben, um das Zielpublikum anzusprechen.
 */
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
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
      {/* Kontaktinformationen mit Icons für unmittelbare Kontaktaufnahme */}
      <div
        className="contact-details"
        style={{ marginTop: '1rem', marginBottom: '2rem' }}
      >
        <div className="contact-item">
          {/* Telefon-Icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          <a href="tel:+4972539680725">+49 7253 9680725</a>
        </div>
        <div className="contact-item">
          {/* E‑Mail-Icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <a href="mailto:info@oezermedia.com">info@oezermedia.com</a>
        </div>
        <div className="contact-item">
          {/* Standort-Icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <span>Steinacker II 22, 76684 Östringen</span>
        </div>
      </div>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', marginTop: '1.5rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Name*</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--color-muted)' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">E‑Mail*</label>
          <input
            id="email"
            name="email"
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
            type="tel"
            value={form.phone}
            onChange={handleChange}
            pattern="[0-9 +()-]*"
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--color-muted)' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="message">Nachricht*</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--color-muted)' }}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          style={{ padding: '0.75rem 1.5rem', border: 'none', borderRadius: '4px', background: 'var(--color-primary)', color: '#fff', cursor: 'pointer' }}
        >
          {status === 'loading' ? 'Senden…' : 'Absenden'}
        </button>
      </form>
      {status === 'success' && (
        <p style={{ color: 'green', marginTop: '1rem' }}>Vielen Dank! Ihre Nachricht wurde erfolgreich versendet.</p>
      )}
      {status === 'error' && (
        <p style={{ color: 'red', marginTop: '1rem' }}>
          Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder
          senden Sie eine E‑Mail an info@oezermedia.com.
        </p>
      )}
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Kontakt',
      description:
        'Nehmen Sie Kontakt mit Özer Media auf – senden Sie uns eine Nachricht über das Formular, rufen Sie an oder schreiben Sie eine E‑Mail.',
    },
  };
}