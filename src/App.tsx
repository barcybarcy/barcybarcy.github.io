import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { LuMail } from 'react-icons/lu';
import { getExperiences, profile } from './data';
import type { Experience } from './data';
import { LanguageSwitch, useLanguage } from './i18n';
import { ExperienceCover } from './components/ExperienceCover';
import { ExperienceGallery } from './components/ExperienceGallery';
import { SkillsSection } from './components/SkillsSection';
import { getProjectImages } from './projectImages';

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {down ? <path d="M12 4v16m-6-6 6 6 6-6" /> : <path d="M6 18 18 6M6 6h12v12" />}
    </svg>
  );
}
function NavIcon({ kind }: { kind: string }) {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {kind === 'about' ? (
        <>
          <circle cx="12" cy="7" r="3.5" />
          <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
        </>
      ) : kind === 'projects' ? (
        <>
          <rect x="3" y="6" width="18" height="15" rx="2" />
          <path d="M8 6V3h8v3M3 12h18m-9 0v3" />
        </>
      ) : kind === 'skills' ? (
        <path d="m7 6-6 6 6 6m10-12 6 6-6 6m-3-14-4 16" />
      ) : (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 6 9 7 9-7" />
        </>
      )}
    </svg>
  );
}
function ExternalLink({
  href,
  children,
  className = '',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const { t } = useLanguage();
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
      <Arrow />
      <span className="sr-only"> ({t.newTab})</span>
    </a>
  );
}
function ExperienceItem({
  experience,
  index,
  open,
  onToggle,
}: {
  experience: Experience;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const { language, t } = useLanguage();
  const images = getProjectImages(experience.id, language);
  const hasDetails = experience.details.length > 0;
  return (
    <article className={`experience-item ${open ? 'is-open' : ''}`} id={`story-${experience.id}`}>
      <div className="experience-index" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="experience-main">
        <div className={`experience-preview ${hasDetails ? 'is-interactive' : ''}`}>
          <div className="experience-topline">
            <span className="category-label">{experience.category}</span>
            <span className="experience-date">{experience.period}</span>
          </div>
          <h3>
            {hasDetails ? (
              <button
                type="button"
                className="experience-trigger"
                aria-expanded={open}
                aria-controls={`detail-${experience.id}`}
                onClick={onToggle}
              >
                {experience.name}
                <span className="expand-icon" aria-hidden="true">
                  {open ? '−' : '+'}
                </span>
              </button>
            ) : (
              experience.name
            )}
          </h3>
          <p className="experience-description">{experience.description || t.pending}</p>
          <div className="experience-overview">
            {images.length > 0 ? (
              <ExperienceGallery name={experience.name} images={images} />
            ) : (
              <figure
                className={`experience-cover cover-${experience.id}`}
                role="img"
                aria-label={`${experience.name} · ${t.coverNote}`}
              >
                <ExperienceCover kind={experience.id} />
              </figure>
            )}
            <div className="experience-facts">
              {experience.role && (
                <div>
                  <span className="fact-label">{t.role}</span>
                  <p>{experience.role}</p>
                </div>
              )}
              {experience.tags.length > 0 && (
                <div>
                  <span className="fact-label">{t.tools}</span>
                  <div className="tags">
                    {experience.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              )}
              {hasDetails && (
                <span className="explore-story">
                  {open ? t.closeDetails : t.openDetails}
                  <span aria-hidden="true">{open ? '−' : '↗'}</span>
                </span>
              )}
            </div>
          </div>
        </div>
        {hasDetails && (
          <div className="experience-detail" id={`detail-${experience.id}`} hidden={!open}>
            <div className="detail-grid">
              {experience.details.map((detail) => (
                <div key={detail.title}>
                  <h4>{detail.title}</h4>
                  <p>{detail.text}</p>
                </div>
              ))}
            </div>
            {experience.link && (
              <ExternalLink href={experience.link.url} className="story-link">
                {experience.link.label}
              </ExternalLink>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function App() {
  const { language, t } = useLanguage();
  const experiences = getExperiences(language);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('about');
  const [copyStatus, setCopyStatus] = useState<'' | 'success' | 'error'>('');
  const navigation = [
    { id: 'about', label: t.intro },
    { id: 'skills', label: t.skills },
    { id: 'projects', label: t.experience },
    { id: 'contact', label: t.contact },
  ];
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section[id]'));
    let frame = 0;
    const updateSection = () => {
      frame = 0;
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        setActiveSection('contact');
        return;
      }
      const readingLine = Math.max(180, window.innerHeight * 0.25);
      let current = 'about';
      for (const section of sections) {
        if (section.getBoundingClientRect().top > readingLine) break;
        current =
          section.id === 'home' ? 'about' : section.id === 'awards' ? 'projects' : section.id;
      }
      setActiveSection(current);
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateSection);
    };
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    const resizeObserver = new ResizeObserver(scheduleUpdate);
    sections.forEach((section) => resizeObserver.observe(section));
    updateSection();
    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
    };
  }, []);
  useEffect(() => {
    if (!copyStatus) return;
    const timer = window.setTimeout(() => setCopyStatus(''), 3500);
    return () => window.clearTimeout(timer);
  }, [copyStatus]);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus('success');
    } catch {
      setCopyStatus('error');
    }
  }
  return (
    <>
      <a href="#main" className="skip-link">
        {t.skip}
      </a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label={t.home}>
          SUMIN CHO<span aria-hidden="true">.</span>
        </a>
        <div className="header-right">
          <ExternalLink href={profile.github} className="header-github">
            GitHub
          </ExternalLink>
          <LanguageSwitch />
        </div>
      </header>
      <main id="main">
        <section className="hero" id="home">
          <span className="hero-eyebrow">
            <span aria-hidden="true" />
            SOFTWARE · AI · RESEARCH
          </span>
          <h1>
            {t.heroHello}
            <br />
            {t.heroPrefix}
            <span className="name-highlight">{t.heroName}</span>
            {t.heroSuffix}
          </h1>
          <p>{t.heroDescription}</p>
          <a href="#about" className="hero-explore" aria-label={t.intro}>
            <Arrow down />
          </a>
        </section>
        <nav
          className="section-nav"
          aria-label={language === 'ko' ? '섹션 내비게이션' : 'Section navigation'}
        >
          {navigation.map((item) => (
            <a
              href={`#${item.id}`}
              key={item.id}
              className={activeSection === item.id ? 'active' : ''}
              aria-current={activeSection === item.id ? 'location' : undefined}
            >
              <NavIcon kind={item.id} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <section className="about-section content-width" id="about">
          <div className="about-profile">
            <figure className="about-photo">
              <img
                src="/images/sumin-cho.jpeg"
                alt={t.aboutPhotoAlt}
                width="1896"
                height="1659"
                decoding="async"
              />
            </figure>
            <div className="about-story">
              <span className="eyebrow">ABOUT ME</span>
              <h2>{t.aboutTitle}</h2>
              <p>{t.aboutParagraph1}</p>
              <p>{t.aboutParagraph2}</p>
              <p>{t.aboutParagraph3}</p>
            </div>
          </div>
        </section>
        <SkillsSection />
        <section className="experiences-section content-width" id="projects">
          <div className="section-intro">
            <span className="eyebrow">SELECTED EXPERIENCES</span>
            <h2>{t.experienceTitle}</h2>
            <p>{t.experienceDescription}</p>
          </div>
          <div className="list-heading">
            <span>{t.experienceCount}</span>
            <span>2020 — 2026</span>
          </div>
          <div className="experience-list">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={experience.id}
                experience={experience}
                index={index}
                open={expanded === experience.id}
                onToggle={() => setExpanded(expanded === experience.id ? null : experience.id)}
              />
            ))}
          </div>
        </section>
        <section
          className="awards-section content-width"
          id="awards"
          aria-labelledby="awards-title"
        >
          <h2 id="awards-title">{t.recognition}</h2>
          <div className="milestones" aria-label={t.recognition}>
            <a
              className="milestone"
              href="https://www.etnews.com/20260827000345"
              target="_blank"
              rel="noreferrer"
            >
              <span className="milestone-date">2026.08</span>
              <h3>{t.award1}</h3>
              <p>{t.award1Detail}</p>
              <Arrow />
              <span className="sr-only"> ({t.newTab})</span>
            </a>
            <div className="milestone">
              <span className="milestone-date">2026.07</span>
              <h3>{t.award2}</h3>
              <p>{t.award2Detail}</p>
            </div>
            <div className="milestone">
              <span className="milestone-date">2026.06</span>
              <h3>{t.capstoneAward}</h3>
              <p>{t.capstoneAwardDetail}</p>
            </div>
            <div className="milestone">
              <span className="milestone-date">2026.03</span>
              <h3>{t.award3}</h3>
              <p>{t.award3Detail}</p>
            </div>
          </div>
        </section>
        <section className="contact-section content-width" id="contact">
          <h2>{t.contactTitle}</h2>
          <div className="contact-actions">
            <a className="email-link" href={`mailto:${profile.email}`}>
              <LuMail className="contact-brand-icon" aria-hidden="true" focusable="false" />
              {profile.email}
              <Arrow />
            </a>
            <button className="copy-button" onClick={copyEmail} aria-label={t.copyEmail}>
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <rect x="8" y="8" width="12" height="13" rx="2" />
                <path d="M15 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3" />
              </svg>
            </button>
          </div>
          <div className="copy-status" role="status">
            {copyStatus === 'success' ? t.copySuccess : copyStatus === 'error' ? t.copyError : ''}
          </div>
          <div className="social-links">
            <ExternalLink href={profile.github}>
              <FaGithub className="contact-brand-icon" aria-hidden="true" focusable="false" />
              GitHub
            </ExternalLink>
            <ExternalLink href={profile.linkedin}>
              <FaLinkedinIn className="contact-brand-icon" aria-hidden="true" focusable="false" />
              LinkedIn
            </ExternalLink>
          </div>
        </section>
      </main>
      <footer className="site-footer content-width">
        <a href="#home" className="wordmark">
          SUMIN CHO<span>.</span>
        </a>
        <span>© {new Date().getFullYear()}</span>
        <a href="#home" aria-label={t.backToTop}>
          ↑
        </a>
      </footer>
    </>
  );
}
export default App;
