'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import { cn } from '@/lib/utils';
import Footer from '@/components/footer/index';

const Contact = () => {
  const initialState = { username: ``, email: ``, message: `` }; // Updated initialState
  const [{ username, email, message }, setState] = useState(initialState); // Updated to use 'username'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm(`service_edwqne9`, `template_tjvg6gr`, e.target as HTMLFormElement, `Wi2gdRLfbTvFBbCDx`).then(
      (result) => {
        console.log(result.text);
        clearState();
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  return (
    <div>
      {/* Navigation at the top */}
      <Navigation />

      {/* Contact Form Section */}
      <div className={cn(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8 text-center`)}>
        <h1 className={cn(`font-bold text-5xl mb-8`)}>Contact Us</h1>
        <p className={cn(`text-xl mb-4`)}>
          We&apos;d love to hear from you. Fill in the form below and we&apos;ll get back to you soon.
        </p>

        {/* Contact Details */}
        <div className={cn(`text-lg mb-8`)}>
          <p>
            <strong>Email:</strong> info@procurable.group
          </p>
          <p>
            <strong>Phone:</strong> 0405 209 719
          </p>
          <p>
            <strong>Address:</strong> 40 Howard Street, Grange, QLD, 4051, Australia
          </p>
        </div>

        <form onSubmit={handleSubmit} className={cn(`bg-gray-700 p-8 rounded-lg shadow-lg max-w-xl mx-auto`)}>
          <div className={cn(`mb-4`)}>
            <input
              type="text"
              id="username" // Updated ID to match the state variable
              name="username" // Updated name to match the state variable
              value={username} // Updated value to match the state variable
              onChange={handleChange}
              className={cn(`w-full p-3 rounded-lg border border-gray-300`)}
              placeholder="Your Name"
              required
            />
          </div>
          <div className={cn(`mb-4`)}>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className={cn(`w-full p-3 rounded-lg border border-gray-300`)}
              placeholder="Your Email"
              required
            />
          </div>
          <div className={cn(`mb-4`)}>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleChange}
              className={cn(`w-full p-3 rounded-lg border border-gray-300`)}
              rows={4}
              placeholder="Your Message"
              required
            />
          </div>
          <button type="submit" className={cn(`bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600`)}>
            Send Message
          </button>
        </form>

        {/* Show the logo underneath */}
        <div className={cn(`mt-16`)}>
          <Link href="/" passHref>
            <Image src="/images/logo.png" alt="Logo" width={120} height={120} className={cn(`mx-auto`)} />
          </Link>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
