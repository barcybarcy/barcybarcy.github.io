import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export type Language = 'ko' | 'en';
const storageKey = 'sumin-portfolio-language';

const korean = {
  pageTitle: '조수민 · AI & Software Engineer',
  pageDescription:
    '조수민의 포트폴리오. AI 모델을 실제 서비스로 연결하고, 웹 개발과 CFD 연구로 현실의 문제를 해결합니다.',
  newTab: '새 탭',
  skip: '본문으로 바로가기',
  home: '조수민 포트폴리오 처음으로',
  menuOpen: '메뉴 열기',
  menuClose: '메뉴 닫기',
  menu: '주 메뉴',
  language: '언어 선택',
  navAbout: '소개',
  navProjects: '프로젝트',
  navExperience: '경험',
  navSkills: '역량',
  navContact: '연락하기',
  heroLine1: '현실의 문제를,',
  heroLine2: '쓰이는 기술로.',
  greeting: '안녕하세요, 개발자 ',
  name: '조수민',
  greetingEnd: '입니다',
  heroDescription1: 'AI 모델을 서비스로, 연구를 더 나은 경험으로.',
  heroDescription2: '문제를 발견하는 순간부터 직접 만들고 연결합니다.',
  explore: '프로젝트 둘러보기',
  tagline: '경계를 넘어 연결하는 개발자',
  aboutLine1: '기술에 대한 호기심,',
  aboutLine2: '문제에 대한 ',
  aboutHighlight: '진심.',
  aboutIntro: '직접 비즈니스를 운영하며 배웠습니다.',
  aboutBelief: '좋은 기술은 실제 문제를 이해하는 데서 시작한다는 것.',
  aboutBusiness:
    '4개 마켓플레이스의 고객과 상품을 만났던 경험은, 지금도 코드를 작성하기 전에 ‘누구에게 필요한가’를 먼저 묻게 합니다.',
  aboutResearch:
    '컴퓨터공학을 기반으로 AI 웹서비스를 만들고, CFD 연구실에서 유체의 흐름을 분석합니다. 서로 다른 분야에서 얻은 관점을 연결해, 복잡한 문제를 쓸 수 있는 형태로 바꾸는 일을 좋아합니다.',
  aboutKeywords: ['문제에서 출발하고', '직접 만들고', '끝까지 연결합니다'],
  workLine1: '생각을 넘어,',
  workLine2: '직접 만든 것들',
  workDescription: '아이디어가 작동하는 경험이 되기까지의 기록입니다.',
  filterLabel: '프로젝트 분야 필터',
  all: '전체',
  projectDetails: '프로젝트 상세 보기',
  projectStory: '프로젝트 이야기',
  projectCount: '개의 프로젝트',
  illustrationNote: '이미지는 프로젝트를 표현한 컨셉 일러스트입니다.',
  moreCode: '더 많은 코드 살펴보기',
  journeyLine1: '다양한 경험이',
  journeyLine2: '하나의 방향으로.',
  journeyDescription1: '비즈니스, 연구, 소프트웨어.',
  journeyDescription2: '각각의 경험에서 배운 것을',
  journeyDescription3: '다음 문제를 푸는 데 가져갑니다.',
  awardsHeading: '함께 만들어낸 성과',
  awardArticle: '수상 기사',
  skillsHeading: '아이디어를 구현하는 도구들',
  skillsDescription: '필요한 기술을 배우고, 문제에 맞는 도구를 선택합니다.',
  university: '경기대학교',
  degree: '컴퓨터공학 학사 과정',
  graduation: '2027.03 졸업 예정',
  contactLine1: '다음 이야기는,',
  contactLine2: '함께 만들어볼까요',
  contactPunctuation: '?',
  contactDescription1: '프로젝트 이야기부터 새로운 기회까지.',
  contactDescription2: '편하게 연락 주세요.',
  copyEmail: '이메일 주소 복사',
  copySuccess: '이메일 주소를 복사했어요.',
  copyError: '복사하지 못했어요. 이메일 주소를 직접 선택해 주세요.',
  backToTop: '맨 위로',
  closeProject: '프로젝트 상세 닫기',
  problem: '어떤 문제를 풀었나요?',
  contribution: '제가 맡은 일',
  outcome: '결과와 고민',
  flowAlt: 'AI, 소프트웨어, 엔지니어링을 연결하는 개념 일러스트',
  aeroAlt: '자동차 형상 주위의 유동을 표현한 공기역학 예측 프로젝트 개념도',
  safetyAlt: '산업 현장 속 작업자와 감지 영역을 표현한 영상 기반 안전 모니터링 프로젝트 개념도',
  realdoorAlt: '열린 문과 문서 속 근거 표시를 표현한 주거 문서 검토 도우미 프로젝트 개념도',
};

const english: typeof korean = {
  pageTitle: 'Sumin Cho · AI & Software Engineer',
  pageDescription:
    'Sumin Cho’s portfolio. Bringing AI models into real services and solving practical problems through software development and CFD research.',
  newTab: 'opens in a new tab',
  skip: 'Skip to content',
  home: 'Sumin Cho portfolio home',
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  menu: 'Main navigation',
  language: 'Select language',
  navAbout: 'About',
  navProjects: 'Projects',
  navExperience: 'Experience',
  navSkills: 'Skills',
  navContact: 'Contact',
  heroLine1: 'Real problems.',
  heroLine2: 'Useful technology.',
  greeting: 'Hi, I’m ',
  name: 'Sumin Cho',
  greetingEnd: '',
  heroDescription1: 'Turning AI models into services, research into experiences.',
  heroDescription2: 'From finding the problem to building what comes next.',
  explore: 'Explore my work',
  tagline: 'Connecting ideas across disciplines',
  aboutLine1: 'Curious about tech.',
  aboutLine2: 'Driven by ',
  aboutHighlight: 'real problems.',
  aboutIntro: 'Running a business taught me something:',
  aboutBelief: 'good technology starts with understanding a real need.',
  aboutBusiness:
    'Working with customers and products across four marketplaces still shapes how I build. Before writing code, I ask: who is this for?',
  aboutResearch:
    'With a foundation in computer engineering, I build AI web services and study fluid flow in a CFD lab. I enjoy connecting perspectives across disciplines and turning complex problems into something people can use.',
  aboutKeywords: ['Start with the problem', 'Build hands-on', 'Connect the whole journey'],
  workLine1: 'Beyond ideas.',
  workLine2: 'Built to work',
  workDescription: 'A selection of ideas turned into working experiences.',
  filterLabel: 'Filter projects by discipline',
  all: 'All',
  projectDetails: 'project details',
  projectStory: 'The project story',
  projectCount: ' projects',
  illustrationNote: 'Images are conceptual project illustrations.',
  moreCode: 'Explore more code',
  journeyLine1: 'Different experiences.',
  journeyLine2: 'One direction.',
  journeyDescription1: 'Business, research, and software.',
  journeyDescription2: 'Each experience brings a new perspective',
  journeyDescription3: 'to the next problem I take on.',
  awardsHeading: 'Milestones we reached together',
  awardArticle: 'award coverage',
  skillsHeading: 'Tools to bring ideas to life',
  skillsDescription: 'Learning what is needed and choosing the right tools for each problem.',
  university: 'Kyonggi University',
  degree: 'B.S. in Computer Engineering, in progress',
  graduation: 'Expected graduation: Mar 2027',
  contactLine1: 'What comes next?',
  contactLine2: 'Let’s build it together',
  contactPunctuation: '.',
  contactDescription1: 'From project ideas to new opportunities.',
  contactDescription2: 'I’d love to hear from you.',
  copyEmail: 'Copy email address',
  copySuccess: 'Email address copied.',
  copyError: 'Could not copy. Please select the email address manually.',
  backToTop: 'Back to top',
  closeProject: 'Close project details',
  problem: 'The problem',
  contribution: 'My contribution',
  outcome: 'Outcomes & reflections',
  flowAlt: 'Conceptual illustration connecting AI, software, and engineering',
  aeroAlt: 'Conceptual aerodynamic prediction diagram showing airflow around a vehicle',
  safetyAlt: 'Conceptual industrial safety diagram showing a worker and a detection region',
  realdoorAlt:
    'Conceptual housing document review diagram with an open door and highlighted evidence',
};

const messages = { ko: korean, en: english };
const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof korean;
} | null>(null);

function initialLanguage(): Language {
  try {
    return localStorage.getItem(storageKey) === 'en' ? 'en' : 'ko';
  } catch {
    return 'ko';
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const t = messages[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.pageDescription);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', t.pageTitle);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute('content', t.pageDescription);
    document
      .querySelector('meta[property="og:locale"]')
      ?.setAttribute('content', language === 'ko' ? 'ko_KR' : 'en_US');
    try {
      localStorage.setItem(storageKey, language);
    } catch {
      // Language switching remains available when browser storage is restricted.
    }
  }, [language, t]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}

export function LanguageSwitch() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div className="language-switch" role="group" aria-label={t.language}>
      <button
        type="button"
        lang="ko"
        aria-label="한국어 (KOR)"
        aria-pressed={language === 'ko'}
        onClick={() => setLanguage('ko')}
      >
        KOR
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        lang="en"
        aria-label="English (ENG)"
        aria-pressed={language === 'en'}
        onClick={() => setLanguage('en')}
      >
        ENG
      </button>
    </div>
  );
}
