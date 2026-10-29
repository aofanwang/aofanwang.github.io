import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'FeelZoo | Aofan Wang',
  description: 'A collaborative social-emotional learning app concept for elementary-school children, with the original team presentation.',
};

const deck = 'https://docs.google.com/presentation/d/15T5P7MP2VCK-EMD6V02DvGpxQdUkNWo3GkdgQGvXNZM';
const prototype = 'https://www.figma.com/proto/7pJ1sPiNjwSlDewFeX65yu/FeelZoo?node-id=39-378&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=39%3A378';

const screens = [
  { title: 'A familiar welcome', image: '/feelzoo-welcome.png', alt: 'FeelZoo welcome screen with panda, bear and sheep characters and a prototype login button', description: 'Animal companions introduce the world of FeelZoo before children enter the experience.' },
  { title: 'Activities and the zoo', image: '/feelzoo-activities.png', alt: 'FeelZoo screen showing weekly activity progress, Your Zoo and Animal Island', description: 'The concept connects assigned activities with a personal zoo and places to explore.' },
  { title: 'A moment to check in', image: '/feelzoo-mood-buddies.png', alt: 'Mood Buddies check-in screen asking how the child feels, with a grid of expressive faces', description: 'Mood Buddies begins with “How are you feeling today?” and a visual choice of expressions.' },
];

export default function FeelZooPage() {
  return (
    <>
      <a className="skip" href="#project-main">Skip to content</a>
      <header className="wrap header">
        <div className="identity">
          <a className="brand" href="/">Aofan Wang</a>
          <p className="identity-line">Educator · Learning designer · Researcher · Builder</p>
        </div>
        <nav aria-label="Main navigation"><a href="/about">About Me</a><a href="/#work">Work</a><a href="/#research">Research</a><a href="/#contact">Contact</a></nav>
      </header>
      <main id="project-main" className="wrap curriculum-page feelzoo-page">
        <a className="project-back" href="/#work"><ArrowLeft size={18} aria-hidden="true" />Back to selected work</a>
        <header className="curriculum-heading">
          <span className="eyebrow">SOCIAL-EMOTIONAL LEARNING / TEAM PROJECT</span>
          <div className="feelzoo-title"><h1>FeelZoo</h1><img src="/feelzoo-panda.png" alt="" width={2000} height={2000} /></div>
          <p className="feelzoo-lead">A playful space to explore feelings.</p>
          <p>We developed FeelZoo as a gamified learning app concept for elementary-school children, connecting emotional check-ins with scenario-based activities and pet-based rewards.</p>
          <div className="case-study-tags"><span>Elementary-school learners</span><span>Collaborative team concept</span><span>Learning outcomes not yet evaluated</span></div>
          <a className="project-link" href={prototype} target="_blank" rel="noreferrer">Explore the interactive prototype<ArrowUpRight size={18} aria-hidden="true" /></a>
        </header>
        <section className="feelzoo-screens" aria-labelledby="feelzoo-screens-title">
          <h2 id="feelzoo-screens-title">Inside FeelZoo</h2>
          <div className="feelzoo-screen-grid">{screens.map(screen => (
            <figure key={screen.title}><div className="feelzoo-screen-image"><img src={screen.image} alt={screen.alt} width={900} height={1200} /></div><figcaption><h3>{screen.title}</h3><p>{screen.description}</p></figcaption></figure>
          ))}</div>
          <p className="feelzoo-caption">Original interface images from our team presentation. The linked Figma prototype may reflect a different iteration; its Log-In button opens a sample dashboard without credentials.</p>
        </section>
        <section className="curriculum-process feelzoo-decisions" aria-label="Design directions in the proposal">
          <div className="feelzoo-character-note"><img src="/feelzoo-otter.png" alt="" width={2000} height={2000} loading="lazy" /><div><h2>Begin with a feeling</h2><p>Our proposed daily check-in gives children a starting point for reflecting on their emotions. Teachers and parents are part of the intended support system, rather than treating the app as a replacement for human support.</p></div></div>
          <div className="feelzoo-character-note"><img src="/feelzoo-dog.png" alt="" width={2000} height={2000} loading="lazy" /><div><h2>Give emotions a context</h2><p>Emotion-matching and scenario-based reflection connect recognition with situations children can consider. The design intent is to move beyond labeling an expression toward thinking about feelings and possible responses.</p></div></div>
          <div className="feelzoo-character-note"><img src="/feelzoo-rabbit.png" alt="" width={2000} height={2000} loading="lazy" /><div><h2>Make room for continued participation</h2><p>Pet customization, rewards, and feedback form part of the proposed experience. Whether these mechanics support meaningful reflection, rather than simply reward-seeking, remains a question for future testing.</p></div></div>
        </section>
        <section className="feelzoo-presentation" aria-labelledby="feelzoo-deck-title">
          <div className="feelzoo-deck-heading"><h2 id="feelzoo-deck-title">The full team presentation</h2><a className="project-back" href={`${deck}/edit`} target="_blank" rel="noreferrer">Open presentation<ArrowUpRight size={17} aria-hidden="true" /></a></div>
          <div className="feelzoo-deck-frame"><iframe src={`${deck}/embed?start=false&loop=false&delayms=3000`} title="FeelZoo team pitch deck, 18 slides" width="960" height="569" loading="lazy" allowFullScreen /></div>
          <p className="feelzoo-caption">Original team presentation · 18 slides · Product concepts and intended benefits, not measured outcomes. Character artwork on this page is reused from the presentation.</p>
        </section>
        <a className="project-back curriculum-return" href="/#work"><ArrowLeft size={18} aria-hidden="true" />Back to selected work</a>
      </main>
      <footer className="wrap"><span>© 2026 Aofan Wang</span><a href="/#contact">Contact</a></footer>
    </>
  );
}
