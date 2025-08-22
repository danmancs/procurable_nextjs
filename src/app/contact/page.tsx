'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/legacy/image';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { cn } from '@/lib/utils';

const Contact = () => {
  const initialState = { username: '', email: '', message: '' };
  const [{ username, email, message }, setState] = useState(initialState);
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState<null | { type: 'ok' | 'err'; text: string }>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotice(null);
    setSending(true);
    try {
      await emailjs.sendForm('service_edwqne9', 'template_tjvg6gr', e.target as HTMLFormElement, 'Wi2gdRLfbTvFBbCDx');
      clearState();
      setNotice({ type: 'ok', text: 'Thanks — your message has been sent.' });
    } catch (err) {
      setNotice({ type: 'err', text: 'Sorry, something went wrong. Please try again.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      className={cn(
        'min-h-screen flex flex-col text-white',
        'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]',
        'from-gray-800 via-black to-black'
      )}
    >
      <Navigation />

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 py-16">
          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
            <p className="mt-3 text-base md:text-lg text-neutral-300">
              We’ll get back to you promptly with a clear next step.
            </p>
          </header>

          <div className="grid gap-10 md:grid-cols-2">
            {/* Left: Contact details card */}
            <section className="rounded-2xl border border-white/10 bg-black/30 p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Contact details</h2>
              <ul className="space-y-3 text-neutral-300">
                <li>
                  <span className="block text-sm uppercase tracking-wide text-neutral-400">Email</span>
                  <a href="mailto:info@procurable.group" className="underline decoration-white/30 hover:decoration-white">
                    info@procurable.group
                  </a>
                </li>
                <li>
                  <span className="block text-sm uppercase tracking-wide text-neutral-400">Phone</span>
                  <a href="tel:+61405209719" className="underline decoration-white/30 hover:decoration-white">
                    0405 209 719
                  </a>
                </li>
                <li>
                  <span className="block text-sm uppercase tracking-wide text-neutral-400">Address</span>
                  40 Howard Street, Grange, QLD 4051, Australia
                </li>
              </ul>

              <div className="mt-10 flex justify-center">
                <Link href="/" passHref>
                  <Image src="/images/logo.png" alt="Procurable Group logo" width={120} height={120} />
                </Link>
              </div>
            </section>

            {/* Right: Form card */}
            <section className="rounded-2xl border border-white/10 bg-black/30 p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Send a message</h2>

              {notice && (
                <div
                  className={cn(
                    'mb-4 rounded-lg px-4 py-3 text-sm',
                    notice.type === 'ok' ? 'bg-emerald-900/40 border border-emerald-800 text-emerald-200'
                      : 'bg-red-900/40 border border-red-800 text-red-200'
                  )}
                  role="status"
                >
                  {notice.text}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm mb-1 text-neutral-300">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-black/50 border border-white/15 px-3 py-3 outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Jane Citizen"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-1 text-neutral-300">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-black/50 border border-white/15 px-3 py-3 outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="jane@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-1 text-neutral-300">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full rounded-lg bg-black/50 border border-white/15 px-3 py-3 outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={sending}
                    className={cn(
                      'inline-flex items-center justify-center rounded-lg px-5 py-3 font-medium',
                      'bg-white/10 hover:bg-white/15 border border-white/15',
                      sending && 'opacity-60 cursor-not-allowed'
                    )}
                  >
                    {sending ? 'Sending…' : 'Send message'}
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
