'use client';

import { useState } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer/index';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleDownload = () => {
    window.location.href = '/downloads/SOW_template.docx';
  };

  return (
    <div>
      <Navigation />
      <header className={cn("py-16")}>
        <div className={cn("max-w-7xl mx-auto px-14 sm:px-6 lg:px-8 text-center")}>
          <h1 className={cn("font-nunitosans font-bold text-4xl md:text-5xl lg:text-6xl leading-snug")}>
            Download the SOW Template for Free
          </h1>
          <p className={cn("font-nunitosans mt-10 text-xl lg:text-2xl")}>
            Please enter your email address below.
          </p>
          <div className={cn("mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4")}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className={cn("w-full max-w-md mx-auto")}>
                <label htmlFor="email" className={cn("block text-left mb-2")}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={cn("px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500")}
                  style={{ width: '300px' }}
                />
                <Button type="submit" className={cn("px-2 mt-4 ml-4 mr-4")}>
                  Submit
                </Button>

              </form>
            ) : (
              <div>
                <p className={cn("font-nunitosans mt-10 text-xl lg:text-2xl")}>
                  Thank you. Click below to download the template.
                </p>
                <Button onClick={handleDownload} className={cn("px-2 mt-4 ml-4 mr-4")}>
                  Download File
                </Button>
              </div>
            )}
          </div>
          <footer className={cn("font-mono pb-40 pt-10 uppercase text-center font-medium text-sm text-gray-600")}>
            <p>Thanks for stopping by</p>
          </footer>
        </div>
      </header>
      <Footer />
    </div>
  );
}
