export const profile = {
  name: '조수민',
  englishName: 'SUMIN CHO',
  email: 'joesu001@gmail.com',
  github: 'https://github.com/barcybarcy',
  linkedin: 'https://www.linkedin.com/in/sumin-jo-b1a77a1a4',
};

export type Experience = {
  id: 'store' | 'baro' | 'paragon' | 'ens' | 'drawn';
  name: string;
  category: string;
  period: string;
  description: string;
  role: string;
  tags: string[];
  details: { title: string; text: string }[];
  link?: { label: string; url: string };
};

const korean: Experience[] = [
  {
    id: 'store',
    name: '온라인 쇼핑몰 사업',
    category: '창업 · 서비스 운영',
    period: '2020.06 — 2024.12',
    description: '매출 1억 8천만 원을 기록한 자동차용품·액세서리 온라인 쇼핑몰.',
    role: '창업 및 운영',
    tags: ['E-commerce', 'Operations', 'Customer Experience'],
    details: [
      {
        title: '무엇을 했나요?',
        text: '국내 4개 마켓플레이스에서 자동차용품과 액세서리를 판매했습니다.',
      },
      {
        title: '직접 맡은 일',
        text: '상품 소싱과 가격 결정, 재고·배송 관리, 고객 응대와 정산까지 사업의 전 과정을 맡았습니다.',
      },
      {
        title: '개발을 시작한 계기',
        text: '온라인 판매를 운영하며 플랫폼과 소프트웨어 개발에 관심을 갖게 됐고, 개발자가 되기로 결심했습니다.',
      },
    ],
  },
  {
    id: 'baro',
    name: 'BARO',
    category: 'AI · 산업 안전',
    period: '2026',
    description: '기존 CCTV로 제조 현장의 위험을 감지하는 안전 모니터링 시스템.',
    role: '팀 리더',
    tags: ['Python', 'YOLO', 'Computer Vision'],
    details: [
      {
        title: '무엇을 만들었나요?',
        text: '소규모 제조업체도 기존 CCTV를 활용해 안전 위험을 파악할 수 있도록 저비용 모니터링 시스템을 개발했습니다.',
      },
      {
        title: '내 역할',
        text: '팀을 이끌며 MVP 범위를 정하고, 객체 탐지에서 위험도 산정과 알림까지 이어지는 흐름을 설계했습니다.',
      },
      {
        title: '수상',
        text: '2026 캡스톤디자인 경진대회 우수상.',
      },
    ],
  },
  {
    id: 'paragon',
    name: 'PARAGON',
    category: 'AI · 웹 서비스',
    period: '2026.06 — 2026.08',
    description: '3D 차량 형상으로 공기저항계수를 예측하는 AI 웹서비스.',
    role: '5인 팀 리더 · 웹 개발',
    tags: ['React', 'Three.js', 'FastAPI', 'Google Cloud'],
    details: [
      {
        title: '무엇을 만들었나요?',
        text: '정밀 CFD 해석 전 설계 후보를 빠르게 비교할 수 있도록, 차량의 3D 형상과 설계 파라미터로 공기저항계수를 예측하는 서비스를 만들었습니다.',
      },
      {
        title: '내 역할',
        text: '5인 팀을 이끌고 React·Three.js 인터페이스를 구현했습니다. FastAPI와 ML 추론 흐름을 연결하고 Google Cloud에 배포했습니다.',
      },
      {
        title: '결과',
        text: 'ML Empowerment Build Challenge 2.0에서 296개 출품작 중 전체 3위와 Best Use of Machine Learning을 수상했습니다. QI AI Entrepreneurship Hackathon에서도 별도로 3위를 수상했습니다.',
      },
    ],
    link: { label: '수상 기사 보기', url: 'https://www.etnews.com/20260827000345' },
  },
  {
    id: 'ens',
    name: 'ENS CFD 연구',
    category: '연구 · 유동 해석',
    period: '2025.11 — 현재',
    description: '비강의 형상 변화가 호흡과 벽면 전단응력에 미치는 영향을 연구합니다.',
    role: '경기대학교 CFD 연구실 · 학부연구생',
    tags: ['3D Slicer', 'SpaceClaim', 'Ansys Fluent'],
    details: [
      {
        title: '연구 주제',
        text: '빈코증후군(ENS) 환자의 수술 전후 비강 형상과 비강 내 벽면 전단응력 분포의 관계를 연구합니다.',
      },
      {
        title: '내 역할',
        text: 'CT 기반 형상을 3D Slicer와 SpaceClaim으로 재구성하고, Ansys Fluent로 유동을 분석합니다.',
      },
      {
        title: '연구 환경',
        text: '경기대학교 기계시스템공학과 김형민 교수님의 CFD 연구실에서 학부연구생으로 참여하고 있습니다.',
      },
      {
        title: '수상',
        text: 'RISE 연합 창업경진대회 우수상 · CFD 기반 의료 창업 아이디어.',
      },
    ],
  },
  {
    id: 'drawn',
    name: 'DRAWN',
    category: '드론 · 설계 플랫폼',
    period: '',
    description: '길이·속도·날개 수를 바꿔가며 비행 성능을 추론하는 드론 설계 플랫폼.',
    role: '',
    tags: ['Drone Design', 'Performance Inference'],
    details: [
      {
        title: '설계 조건을 입력하고',
        text: '드론의 길이, 속도, 날개 수 등 설계에 필요한 조건을 직접 설정합니다.',
      },
      {
        title: '비행 성능을 살펴봅니다',
        text: '입력한 설계 조건을 바탕으로 드론이 얼마나 비행할 수 있을지 추론하는 플랫폼입니다.',
      },
      {
        title: '수상',
        text: '2026 경기 SW페스타의 AI-Powered SW상상기업 부문에서 4위를 차지해 장려상을 수상했습니다.',
      },
    ],
  },
];

const english: Experience[] = [
  {
    ...korean[0],
    name: 'Online retail business',
    category: 'Entrepreneurship · Operations',
    description:
      'An online automotive products and accessories store with KRW 180 million in revenue.',
    role: 'Founder & operator',
    details: [
      {
        title: 'The business',
        text: 'I sold automotive products and accessories across four Korean marketplaces.',
      },
      {
        title: 'My role',
        text: 'I managed the full operation: sourcing, pricing, inventory, fulfillment, customer support, and settlements.',
      },
      {
        title: 'Why I became a developer',
        text: 'Running the store sparked my interest in platforms and software development, leading me to pursue a career as a developer.',
      },
    ],
  },
  {
    ...korean[1],
    category: 'AI · Industrial safety',
    period: '2026',
    description: 'A safety monitoring system that detects workplace risks through existing CCTV.',
    role: 'Team lead',
    details: [
      {
        title: 'The product',
        text: 'We developed an affordable monitoring system that helps small manufacturers identify safety risks using their existing cameras.',
      },
      {
        title: 'My role',
        text: 'I led the team, defined the MVP scope, and designed the workflow from object detection to risk scoring and alerts.',
      },
      {
        title: 'Recognition',
        text: 'Excellence Award, 2026 Capstone Design Competition.',
      },
    ],
  },
  {
    ...korean[2],
    category: 'AI · Web development',
    description: 'An AI web service that predicts vehicle drag from 3D geometry.',
    role: 'Team lead of 5 · Web development',
    details: [
      {
        title: 'The product',
        text: 'We built a service that predicts the drag coefficient from vehicle geometry and design parameters to help compare candidates before detailed CFD analysis.',
      },
      {
        title: 'My role',
        text: 'I led the five-person team and built the React and Three.js interface, connected FastAPI to ML inference, and deployed the service on Google Cloud.',
      },
      {
        title: 'The outcome',
        text: 'The project placed 3rd overall out of 296 submissions and won Best Use of Machine Learning at ML Empowerment Build Challenge 2.0. It also placed 3rd in the separate QI AI Entrepreneurship Hackathon.',
      },
    ],
    link: { label: 'Read award coverage', url: korean[2].link!.url },
  },
  {
    ...korean[3],
    name: 'ENS CFD Research',
    category: 'Research · Fluid simulation',
    period: '2025.11 — Present',
    description: 'Studying how nasal geometry changes affect airflow and wall shear stress.',
    role: 'Undergraduate researcher · Kyonggi University CFD Lab',
    details: [
      {
        title: 'Research topic',
        text: 'I study the relationship between pre- and postoperative nasal geometry and intranasal wall shear stress in a patient with empty nose syndrome (ENS).',
      },
      {
        title: 'My role',
        text: 'I reconstruct CT-based geometry using 3D Slicer and SpaceClaim and analyze airflow with Ansys Fluent.',
      },
      {
        title: 'The lab',
        text: 'I work as an undergraduate research assistant in Prof. Hyung Min Kim’s CFD lab, Department of Mechanical Systems Engineering at Kyonggi University.',
      },
      {
        title: 'Recognition',
        text: 'Excellence Award, RISE Joint Startup Competition · CFD-based medical startup concept.',
      },
    ],
  },
  {
    ...korean[4],
    category: 'Drones · Design platform',
    description:
      'A drone design platform that infers flight performance from dimensions, speed, and rotor count.',
    details: [
      {
        title: 'Set design parameters',
        text: 'Configure the drone’s dimensions, speed, rotor count, and other design conditions.',
      },
      {
        title: 'Explore flight performance',
        text: 'The platform uses those design conditions to infer the drone’s flight performance.',
      },
      {
        title: 'Recognition',
        text: 'DRAWN placed 4th and received the Encouragement Award in the AI-Powered SW Imagination Enterprise category at the 2026 Kyonggi SW Festa.',
      },
    ],
  },
];

export function getExperiences(language: 'ko' | 'en') {
  return language === 'ko' ? korean : english;
}

const koreanSkills: string[] = [
  'CS 지식',
  '이커머스 사업 경험',
  'C',
  'Java',
  'Python',
  'FastAPI',
  'YOLO',
  'AWS',
  'Google Cloud',
  'CFD · Ansys Fluent',
  '3D Slicer',
  'Ableton Live',
  'Adobe Premiere Pro',
];

const englishSkills: string[] = [
  'Computer science fundamentals',
  'E-commerce business experience',
  ...koreanSkills.slice(2),
];

export function getSkills(language: 'ko' | 'en'): string[] {
  return language === 'ko' ? koreanSkills : englishSkills;
}
