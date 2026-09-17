import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { awards, experiences, profile, projects, skills } from './data';
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
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <Arrow diagonal />
      <span className="sr-only"> (새 탭)</span>
    </a>
  );
}

const navigation = [
  { id: 'about', label: '소개' },
  { id: 'projects', label: '프로젝트' },
  { id: 'experience', label: '경험' },
  { id: 'skills', label: '역량' },
];

function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
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
          <button
            className="dialog-close"
            onClick={onClose}
            aria-label="프로젝트 상세 닫기"
            autoFocus
          >
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
            <h3>어떤 문제를 풀었나요?</h3>
            <p>{project.summary}</p>
            <h3>제가 맡은 일</h3>
            <ul>
              {project.work.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>결과와 고민</h3>
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [filter, setFilter] = useState('전체');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copyStatus, setCopyStatus] = useState('');
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
      setCopyStatus('이메일 주소를 복사했어요.');
    } catch {
      setCopyStatus('복사하지 못했어요. 이메일 주소를 직접 선택해 주세요.');
    }
  }

  const visibleProjects = projects.filter(
    (project) => filter === '전체' || project.category === filter,
  );

  return (
    <>
      <a className="skip-link" href="#main">
        본문으로 바로가기
      </a>
      <div className="reading-progress" style={{ transform: `scaleX(${progress})` }} />
      <header className="header">
        <a className="brand" href="#home" aria-label="조수민 포트폴리오 처음으로">
          <span className="brand-mark">
            s<span>.</span>
          </span>
          <span>
            SUMIN CHO<span className="brand-slash"> / </span>
            <span className="brand-portfolio">PORTFOLIO</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          <span />
          <span />
        </button>
        <nav
          id="main-nav"
          className={menuOpen ? 'navigation open' : 'navigation'}
          aria-label="주 메뉴"
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
            연락하기 <Arrow diagonal />
          </a>
        </nav>
      </header>

      <main id="main">
        <section id="home" className="hero section-width">
          <div className="hero-copy">
            <div className="hero-intro">
              <span className="live-dot" /> AI & SOFTWARE ENGINEER
            </div>
            <h1>
              현실의 문제를,
              <br />
              <span className="hero-highlight">쓰이는 기술로.</span>
            </h1>
            <p className="hero-name">
              안녕하세요, 개발자 <strong>조수민</strong>입니다<span className="text-blue">.</span>
            </p>
            <p className="hero-description">
              AI 모델을 서비스로, 연구를 더 나은 경험으로.
              <br />
              문제를 발견하는 순간부터 직접 만들고 연결합니다.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">
                프로젝트 둘러보기 <Arrow />
              </a>
              <ExternalLink className="hero-github" href={profile.github}>
                GitHub
              </ExternalLink>
            </div>
          </div>
          <FlowGraphic />
          <div className="hero-bottom">
            <span>
              <span className="small-cross">✳</span> 경계를 넘어 연결하는 개발자
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
              <br />
              <strong>CURIOSITY & PURPOSE</strong>
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
                기술에 대한 호기심,
                <br />
                문제에 대한 <span className="serif-word">진심.</span>
              </h2>
              <div className="about-signature">
                Sumin Cho <span>↗</span>
              </div>
            </div>
            <div className="about-copy">
              <p>
                직접 비즈니스를 운영하며 배웠습니다.
                <br />
                <strong>좋은 기술은 실제 문제를 이해하는 데서 시작한다는 것.</strong>
              </p>
              <p>
                4개 마켓플레이스의 고객과 상품을 만났던 경험은, 지금도 코드를 작성하기 전에
                ‘누구에게 필요한가’를 먼저 묻게 합니다.
              </p>
              <p>
                컴퓨터공학을 기반으로 AI 웹서비스를 만들고, CFD 연구실에서 유체의 흐름을 분석합니다.
                서로 다른 분야에서 얻은 관점을 연결해, 복잡한 문제를 쓸 수 있는 형태로 바꾸는 일을
                좋아합니다.
              </p>
              <div className="about-keywords">
                <span>문제에서 출발하고</span>
                <span>직접 만들고</span>
                <span>끝까지 연결합니다</span>
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
                  생각을 넘어,
                  <br className="mobile-break" /> 직접 만든 것들<span className="text-blue">.</span>
                </h2>
                <p>아이디어가 작동하는 경험이 되기까지의 기록입니다.</p>
              </div>
              <div className="project-filters" role="group" aria-label="프로젝트 분야 필터">
                {['전체', 'AI & ML', 'Full-stack'].map((item) => (
                  <button
                    key={item}
                    aria-pressed={filter === item}
                    className={filter === item ? 'selected' : ''}
                    onClick={() => setFilter(item)}
                  >
                    {item}
                    {item === '전체' && <span>03</span>}
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
                          aria-label={`${project.name} 프로젝트 상세 보기`}
                          onClick={() => setSelectedProject(project)}
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
                          프로젝트 이야기 <span aria-hidden="true">+</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="projects-footnote">
              <span role="status" aria-live="polite">
                {visibleProjects.length}개의 프로젝트 · 이미지는 프로젝트를 표현한 컨셉
                일러스트입니다.
              </span>
              <ExternalLink href={profile.github}>더 많은 코드 살펴보기</ExternalLink>
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
                다양한 경험이
                <br />
                하나의 방향으로.
              </h2>
              <p>
                비즈니스, 연구, 소프트웨어.
                <br />
                각각의 경험에서 배운 것을
                <br />
                다음 문제를 푸는 데 가져갑니다.
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
            <h3>함께 만들어낸 성과</h3>
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
                    <span className="sr-only">{award.title} 수상 기사</span>
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
                  아이디어를 구현하는 도구들<span className="text-blue">.</span>
                </h2>
                <p>필요한 기술을 배우고, 문제에 맞는 도구를 선택합니다.</p>
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
                <h3>경기대학교</h3>
                <p>컴퓨터공학 학사 과정</p>
                <div className="education-meta">
                  <span>2027.03 졸업 예정</span>
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
                  <br />
                  Machine Learning Engineer
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
            다음 이야기는,
            <br />
            함께 만들어볼까요<span className="text-blue">?</span>
          </h2>
          <div className="contact-bottom">
            <p>
              프로젝트 이야기부터 새로운 기회까지.
              <br />
              편하게 연락 주세요.
            </p>
            <div className="contact-email">
              <a href={`mailto:${profile.email}`}>
                {profile.email}
                <Arrow diagonal />
              </a>
              <button type="button" onClick={copyEmail} aria-label="이메일 주소 복사">
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
            {copyStatus}
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
          <a href="#home" aria-label="맨 위로">
            ↑
          </a>
        </div>
      </footer>
      <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}

export default App;
