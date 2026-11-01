import { ArrowUpRight, Mail } from 'lucide-react';
import EducationMarks from '../../components/education-marks';
import ContactFooter from '../../components/contact-footer';
import '../about/profile.css';

export const metadata = {
  title: 'Contact | Aofan Wang',
  description: 'Connect with Aofan Wang by email or on LinkedIn.',
};

export default function ContactPage() {
  return (
    <>
      <a className="skip" href="#contact-main">Skip to content</a>
      <header className="wrap header profile-site-header">
        <div className="identity">
          <div className="identity-brand-row"><a href="/" className="brand">Aofan Wang</a><EducationMarks /></div>
          <p className="identity-line">Educator · Learning designer · Researcher · Builder</p>
        </div>
        <nav aria-label="Main navigation"><a href="/">Home</a><a href="/about">About Me</a><a href="/#work">Projects</a><a href="/contact" aria-current="page">Contact</a></nav>
      </header>
      <main id="contact-main" className="wrap contact-page">
        <h1>Contact</h1>
        <p className="contact-intro">Let’s connect.</p>
        <div className="contact-methods">
          <a href="mailto:aofanw@umich.edu"><Mail size={24} aria-hidden="true" /><span><strong>Email</strong><span>aofanw@umich.edu</span></span><ArrowUpRight size={24} aria-hidden="true" /></a>
          <a href="https://www.linkedin.com/in/aofan-wang-01a046326/" target="_blank" rel="noopener noreferrer"><ArrowUpRight size={24} aria-hidden="true" /><span><strong>LinkedIn</strong><span>Aofan Wang</span></span><ArrowUpRight size={24} aria-hidden="true" /></a>
        </div>
      </main>
      <ContactFooter />
    </>
  );
}
