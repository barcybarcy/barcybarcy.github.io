import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export type Language = 'ko' | 'en';
const storageKey = 'sumin-portfolio-language';
const korean = {
  pageTitle: '조수민 · Portfolio',
  pageDescription:
    '조수민의 포트폴리오. 온라인 쇼핑몰 사업부터 BARO, PARAGON, ENS CFD 연구, DRAWN까지.',
  newTab: '새 탭',
  skip: '본문으로 바로가기',
  home: '조수민 포트폴리오 처음으로',
  language: '언어 선택',
  intro: '소개',
  experience: '경험',
  skills: '역량',
  contact: '연락',
  heroHello: '안녕하세요,',
  heroPrefix: '개발자 ',
  heroName: '조수민',
  heroSuffix: '입니다.',
  heroDescription: '직접 사업을 운영했고, 지금은 AI와 소프트웨어로 문제를 해결합니다.',
  aboutTitle: '이커머스에서 개발로.',
  aboutParagraph1:
    '자동차용품과 액세서리를 판매하는 온라인 쇼핑몰을 운영하며 매출 1억 8천만 원을 달성했습니다.',
  aboutParagraph2:
    '이커머스를 운영하면서 플랫폼이 작동하는 방식과 소프트웨어 개발에 관심이 생겼습니다. 직접 서비스를 만드는 사람이 되고 싶어 개발자의 길을 선택했습니다.',
  aboutParagraph3: '현재는 AI와 웹서비스를 개발하며, CFD 연구실에서 유동 해석을 연구하고 있습니다.',
  aboutPhotoAlt: '조수민의 사진',
  recognition: '수상 경력',
  award1: 'ML Empowerment Build Challenge 2.0',
  award1Detail: '전체 3위 · Best Use of Machine Learning',
  award2: 'QI AI Entrepreneurship Hackathon',
  award2Detail: '3위 · UC San Diego Qualcomm Institute',
  capstoneAward: '캡스톤디자인 경진대회',
  capstoneAwardDetail: '우수상 · BARO',
  award3: 'RISE 연합 창업경진대회',
  award3Detail: '우수상 · ENS CFD 기반 의료 창업 아이디어',
  experienceTitle: '대표 경험',
  experienceDescription: '운영하고, 만들고, 연구해 온 이야기.',
  experienceCount: '5개의 이야기',
  openDetails: '자세히 보기',
  closeDetails: '접기',
  role: '역할',
  tools: '기술 / 분야',
  coverNote: '프로젝트를 표현한 컨셉 이미지',
  pending: '소개 준비 중',
  skillsTitle: '기술과 도구',
  credentialsTitle: '자격·면허',
  cloudCredential: 'Google Cloud · Professional Machine Learning Engineer',
  drivingLicense: '운전면허',
  contactTitle: 'Contact',
  copyEmail: '이메일 주소 복사',
  copySuccess: '이메일을 복사했어요.',
  copyError: '주소를 직접 선택해 주세요.',
  backToTop: '맨 위로',
};
const english: typeof korean = {
  pageTitle: 'Sumin Cho · Portfolio',
  pageDescription:
    'Sumin Cho’s portfolio. From running an online store to BARO, PARAGON, ENS CFD research, and DRAWN.',
  newTab: 'opens in a new tab',
  skip: 'Skip to content',
  home: 'Sumin Cho portfolio home',
  language: 'Select language',
  intro: 'About',
  experience: 'Experience',
  skills: 'Skills',
  contact: 'Contact',
  heroHello: 'Hello,',
  heroPrefix: 'I’m ',
  heroName: 'Sumin Cho',
  heroSuffix: '.',
  heroDescription: 'From running a business to solving problems with AI and software.',
  aboutTitle: 'From e-commerce to development.',
  aboutParagraph1:
    'I ran an online store selling automotive products and accessories, generating KRW 180 million in revenue.',
  aboutParagraph2:
    'Running an e-commerce business sparked my interest in how platforms work and how software is built. That experience led me to become a developer.',
  aboutParagraph3: 'Today, I build AI and web services and conduct CFD research.',
  aboutPhotoAlt: 'Photo of Sumin Cho',
  recognition: 'Awards',
  award1: 'ML Empowerment Build Challenge 2.0',
  award1Detail: '3rd overall · Best Use of Machine Learning',
  award2: 'QI AI Entrepreneurship Hackathon',
  award2Detail: '3rd place · UC San Diego Qualcomm Institute',
  capstoneAward: 'Capstone Design Competition',
  capstoneAwardDetail: 'Excellence Award · BARO',
  award3: 'RISE Joint Startup Competition',
  award3Detail: 'Excellence Award · ENS CFD-based medical startup concept',
  experienceTitle: 'Selected experiences',
  experienceDescription: 'Things I’ve run, built, and explored.',
  experienceCount: '5 stories',
  openDetails: 'Explore this story',
  closeDetails: 'Close story',
  role: 'Role',
  tools: 'Tools / Focus',
  coverNote: 'Conceptual project illustration',
  pending: 'Story coming soon',
  skillsTitle: 'Skills & tools',
  credentialsTitle: 'Certifications & licenses',
  cloudCredential: 'Google Cloud · Professional Machine Learning Engineer',
  drivingLicense: 'Driver’s license',
  contactTitle: 'Contact',
  copyEmail: 'Copy email address',
  copySuccess: 'Email copied.',
  copyError: 'Please select the address manually.',
  backToTop: 'Back to top',
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
      /* Switching works without storage. */
    }
  }, [language, t]);
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('useLanguage must be used inside LanguageProvider');
  return value;
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
