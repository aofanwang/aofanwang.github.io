import EducationMarks from './education-marks';
import Link from 'next/link';
import '../app/about/profile.css';

export default function PortfolioProjectHeader() {
  return <header className="wrap header profile-site-header">
    <div className="identity">
      <div className="identity-brand-row"><Link href="/" className="brand">Aofan Wang</Link><EducationMarks /></div>
      <p className="identity-line">Educator · Learning designer · Researcher · Builder</p>
    </div>
    <nav aria-label="Main navigation"><Link href="/">Home</Link><Link href="/about">About Me</Link><Link href="/projects">Projects</Link><Link href="/contact">Contact</Link></nav>
  </header>;
}
