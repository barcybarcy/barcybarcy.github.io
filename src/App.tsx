import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { getContent, profile } from './data';
import { LanguageSwitch, useLanguage } from './i18n';
import type { Project } from './data';
import FlowGraphic from './components/FlowGraphic';
import { ProjectVisual } from './components/ProjectVisual';

function Arrow({ diagonal = false, className = '' }: { diagonal?: boolean; className?: string }) {
  return (
    <svg
      className={`icon ${className}`}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {diagonal ? <path d="M6 18 18 6M6 6h12v12" /> : <path d="M4 12h16m-6-6 6 6-6 6" />}
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
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <Arrow diagonal />
      <span className="sr-only"> ({t.newTab})</span>
    </a>
  );
}

function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const { t } = useLanguage();
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !project) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);
  return (
    <dialog
      className="project-dialog"
      ref={dialogRef}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const bounds = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          )
            onClose();
        }
      }}
      aria-labelledby="dialog-title"
    >
      {project && (
        <>
          <button className="dialog-close" onClick={onClose} aria-label={t.closeProject} autoFocus>
            <span aria-hidden="true">×</span>
          </button>
          <div className={`dialog-visual ${project.kind}`}>
            <ProjectVisual kind={project.kind} />
          </div>
          <div className="dialog-content">
            <span className="eyebrow">
              PROJECT {project.number} · {project.category}
            </span>
            <h2 id="dialog-title">{project.name}</h2>
            <p className="dialog-subtitle">{project.subtitle}</p>
            <div className="dialog-meta">
              <span>{project.period}</span>
              <span>{project.role}</span>
            </div>
            <h3>{t.problem}</h3>
            <p>{project.summary}</p>
            <h3>{t.contribution}</h3>
            <ul>
              {project.work.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>{t.outcome}</h3>
            <p>{project.takeaway}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            {project.link && (
              <ExternalLink className="button button-dark" href={project.link.url}>
                {project.link.label}
              </ExternalLink>
            )}
          </div>
        </>
      )}
    </dialog>
  );
}

function App() {
  const { language, t } = useLanguage();
  const { projects, experiences, awards, skills } = getContent(language);
  const navigation = [
    { id: 'about', label: t.navAbout },
    { id: 'projects', label: t.navProjects },
    { id: 'experience', label: t.navExperience },
    { id: 'skills', label: t.navSkills },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [filter, setFilter] = useState('all');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? null;
  const [copyStatus, setCopyStatus] = useState<'' | 'success' | 'error'>('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-15% 0px -55% 0px', threshold: 0 },
    );
    document.querySelectorAll('main > section[id]').forEach((section) => observer.observe(section));
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
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

  const visibleProjects = projects.filter(
    (project) => filter === 'all' || project.category === filter,
  );

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <div className="reading-progress" style={{ transform: `scaleX(${progress})` }} />
      <header className="header">
        <a className="brand" href="#home" aria-label={t.home}>
          <span className="brand-mark">
            s<span>.</span>
          </span>
          <span>
            SUMIN CHO<span className="brand-slash"> / </span>
            <span className="brand-portfolio">PORTFOLIO</span>
          </span>
        </a>
        <nav
          id="main-nav"
          className={menuOpen ? 'navigation open' : 'navigation'}
          aria-label={t.menu}
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              aria-current={activeSection === item.id ? 'location' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
            {t.navContact} <Arrow diagonal />
          </a>
        </nav>
        <div className="header-actions">
          <LanguageSwitch />
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? t.menuClose : t.menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="main">
        <section id="home" className="hero section-width">
          <div className="hero-copy">
            <div className="hero-intro">
              <span className="live-dot" /> AI & SOFTWARE ENGINEER
            </div>
            <h1>
              {t.heroLine1}
              <br /> <span className="hero-highlight">{t.heroLine2}</span>
            </h1>
            <p className="hero-name">
              {t.greeting}
              <strong>{t.name}</strong>
              {t.greetingEnd}
              <span className="text-blue">.</span>
            </p>
            <p className="hero-description">
              {t.heroDescription1}
              <br /> {t.heroDescription2}
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">
                {t.explore} <Arrow />
              </a>
              <ExternalLink className="hero-github" href={profile.github}>
                GitHub
              </ExternalLink>
            </div>
          </div>
          <FlowGraphic />
          <div className="hero-bottom">
            <span>
              <span className="small-cross">✳</span> {t.tagline}
            </span>
            <a href="#about">
              SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
            </a>
            <span className="hero-location">BASED IN SOUTH KOREA</span>
          </div>
        </section>

        <div className="credential-strip">
          <div className="section-width credential-inner">
            <span>
              BUILDING WITH
              <br /> <strong>CURIOSITY & PURPOSE</strong>
            </span>
            <div>
              <span className="credential-symbol">↗</span>
              <span>
                ML Empowerment Build Challenge<strong>3rd Place · Best Use of ML</strong>
              </span>
            </div>
            <div>
              <span className="credential-symbol cloud-symbol">☁</span>
              <span>
                Google Cloud Certified<strong>Professional ML Engineer</strong>
              </span>
            </div>
            <div>
              <span className="credential-symbol">⊞</span>
              <span>
                Qualcomm Institute · UC San Diego<strong>AI Entrepreneurship Program</strong>
              </span>
            </div>
          </div>
        </div>

        <section id="about" className="section-width about-section section-space">
          <div className="section-label">
            <span>01 / ABOUT ME</span>
            <span className="label-line" />
          </div>
          <div className="about-grid">
            <div>
              <h2>
                {t.aboutLine1}
                <br /> {t.aboutLine2}
                <span className="serif-word">{t.aboutHighlight}</span>
              </h2>
              <div className="about-signature">
                Sumin Cho <span>↗</span>
              </div>
            </div>
            <div className="about-copy">
              <p>
                {t.aboutIntro}
                <br /> <strong>{t.aboutBelief}</strong>
              </p>
              <p>{t.aboutBusiness}</p>
              <p>{t.aboutResearch}</p>
              <div className="about-keywords">
                {t.aboutKeywords.map((keyword) => (
                  <span key={keyword}>{keyword}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section section-space">
          <div className="section-width">
            <div className="section-label">
              <span>02 / SELECTED WORK</span>
              <span className="label-line" />
              <span>2026</span>
            </div>
            <div className="section-heading">
              <div>
                <h2>
                  {t.workLine1} {t.workLine2}
                  <span className="text-blue">.</span>
                </h2>
                <p>{t.workDescription}</p>
              </div>
              <div className="project-filters" role="group" aria-label={t.filterLabel}>
                {['all', 'AI & ML', 'Full-stack'].map((item) => (
                  <button
                    key={item}
                    aria-pressed={filter === item}
                    className={filter === item ? 'selected' : ''}
                    onClick={() => setFilter(item)}
                  >
                    {item === 'all' ? t.all : item}
                    {item === 'all' && <span>03</span>}
                  </button>
                ))}
              </div>
            </div>
            <div className="project-grid">
              {visibleProjects.map((project) => (
                <article className={`project-card ${project.kind}`} key={project.id}>
                  <div className="project-card-content">
                    <div className="project-image">
                      <div className="project-image-label">
                        <span>{project.category}</span>
                        <span>{project.number} / 03</span>
                      </div>
                      <ProjectVisual kind={project.kind} />
                      <span className="project-image-arrow">
                        <Arrow diagonal />
                      </span>
                    </div>
                    <div className="project-info">
                      <span className="project-status">
                        <i />
                        {project.status}
                      </span>
                      <h3>
                        <button
                          className="project-open"
                          aria-label={`${project.name} ${t.projectDetails}`}
                          onClick={() => setSelectedProjectId(project.id)}
                        >
                          {project.name}
                          <Arrow diagonal />
                        </button>
                      </h3>
                      <span className="project-subtitle">{project.subtitle}</span>
                      <p>{project.description}</p>
                      <div className="tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <div className="project-bottom">
                        <span>{project.period}</span>
                        <span>
                          {t.projectStory} <span aria-hidden="true">+</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="projects-footnote">
              <span role="status" aria-live="polite">
                {visibleProjects.length}
                {language === 'en' && visibleProjects.length === 1
                  ? ' project'
                  : t.projectCount} · {t.illustrationNote}
              </span>
              <ExternalLink href={profile.github}>{t.moreCode}</ExternalLink>
            </div>
            <div className="more-work">
              <span className="eyebrow">ALSO BUILT</span>
              <ExternalLink href="https://github.com/barcybarcy/sic-assembler-c">
                SIC Assembler <span className="muted">C · 2-pass assembler</span>
              </ExternalLink>
              <ExternalLink href="https://github.com/barcybarcy/blog-springboot">
                Spring Boot Blog <span className="muted">Java · Spring · MySQL</span>
              </ExternalLink>
            </div>
          </div>
        </section>

        <section id="experience" className="section-width section-space experience-section">
          <div className="section-label">
            <span>03 / MY JOURNEY</span>
            <span className="label-line" />
          </div>
          <div className="experience-layout">
            <div className="experience-intro">
              <h2>
                {t.journeyLine1}
                <br /> {t.journeyLine2}
              </h2>
              <p>
                {t.journeyDescription1}
                <br /> {t.journeyDescription2}
                <br /> {t.journeyDescription3}
              </p>
              <span className="journey-decoration" aria-hidden="true">
                ↘
              </span>
            </div>
            <div className="timeline">
              {experiences.map((item) => (
                <article className="timeline-item" key={item.title}>
                  <div className="timeline-top">
                    <span>{item.date}</span>
                    <span className="timeline-tag">{item.tag}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <span className="timeline-org">{item.organization}</span>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="awards-heading">
            <span className="eyebrow">A FEW MILESTONES</span>
            <h3>{t.awardsHeading}</h3>
          </div>
          <div className="awards-list">
            {awards.map((award, index) => (
              <article className="award-row" key={award.title}>
                <span className="award-icon" aria-hidden="true">
                  {index === 0 ? '✳' : '✧'}
                </span>
                <div>
                  <h4>{award.title}</h4>
                  <p>{award.detail}</p>
                </div>
                <span className="award-extra">{award.extra}</span>
                <span className="award-date">{award.date}</span>
                {award.url ? (
                  <ExternalLink className="award-link" href={award.url}>
                    <span className="sr-only">
                      {award.title} {t.awardArticle}
                    </span>
                  </ExternalLink>
                ) : (
                  <span className="award-link" />
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="skills-section section-space">
          <div className="section-width">
            <div className="section-label">
              <span>04 / TOOLKIT & FOUNDATION</span>
              <span className="label-line" />
            </div>
            <div className="section-heading">
              <div>
                <h2>
                  {t.skillsHeading}
                  <span className="text-blue">.</span>
                </h2>
                <p>{t.skillsDescription}</p>
              </div>
            </div>
            <div className="skills-grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.title}>
                  <span className="skill-number">
                    {skill.number}
                    <span>↗</span>
                  </span>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                  <div className="tags">
                    {skill.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="education-grid">
              <article>
                <span className="eyebrow">EDUCATION</span>
                <h3>{t.university}</h3>
                <p>{t.degree}</p>
                <div className="education-meta">
                  <span>{t.graduation}</span>
                  <strong>
                    GPA 4.05 <span>/ 4.5</span>
                  </strong>
                </div>
              </article>
              <article>
                <span className="eyebrow">GLOBAL EXPERIENCE</span>
                <h3>Qualcomm Institute at UC San Diego</h3>
                <p>17th AI Entrepreneurship Program</p>
                <div className="education-meta">
                  <span>2026.06 — 2026.07</span>
                  <span>La Jolla, CA</span>
                </div>
              </article>
              <article className="certification">
                <span className="eyebrow">CERTIFICATION</span>
                <span className="certification-mark" aria-hidden="true">
                  ✳
                </span>
                <h3>
                  Professional
                  <br /> Machine Learning Engineer
                </h3>
                <p>Google Cloud Certified · 2026.08</p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="section-width contact-section">
          <div className="contact-top">
            <span className="eyebrow">
              <span className="live-dot" /> LET’S CONNECT
            </span>
            <span className="contact-spark" aria-hidden="true">
              ✳
            </span>
          </div>
          <h2>
            {t.contactLine1}
            <br /> {t.contactLine2}
            <span className="text-blue">{t.contactPunctuation}</span>
          </h2>
          <div className="contact-bottom">
            <p>
              {t.contactDescription1}
              <br /> {t.contactDescription2}
            </p>
            <div className="contact-email">
              <a href={`mailto:${profile.email}`}>
                {profile.email}
                <Arrow diagonal />
              </a>
              <button type="button" onClick={copyEmail} aria-label={t.copyEmail}>
                <svg
                  viewBox="0 0 24 24"
                  className="icon"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <rect x="8" y="8" width="12" height="13" rx="2" />
                  <path d="M15 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3" />
                </svg>
              </button>
            </div>
          </div>
          <div className="copy-status" role="status" aria-live="polite">
            {copyStatus === 'success' ? t.copySuccess : copyStatus === 'error' ? t.copyError : ''}
          </div>
        </section>
      </main>
      <footer className="footer section-width">
        <a className="footer-brand" href="#home">
          s<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} SUMIN CHO</span>
        <span className="footer-note">Always curious. Always building.</span>
        <div>
          <ExternalLink href={profile.github}>GitHub</ExternalLink>
          <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
          <a href="#home" aria-label={t.backToTop}>
            ↑
          </a>
        </div>
      </footer>
      <ProjectDialog project={selectedProject} onClose={() => setSelectedProjectId(null)} />
    </>
  );
}

export default App;
