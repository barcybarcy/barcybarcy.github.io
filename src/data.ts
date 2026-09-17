export const profile = {
  name: '조수민',
  englishName: 'SUMIN CHO',
  email: 'joesu001@gmail.com',
  github: 'https://github.com/barcybarcy',
  linkedin: 'https://www.linkedin.com/in/sumin-jo-b1a77a1a4',
};

export type Project = {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  category: 'AI & ML' | 'Full-stack';
  kind: 'aero' | 'safety' | 'realdoor';
  period: string;
  role: string;
  status: string;
  description: string;
  tags: string[];
  summary: string;
  work: string[];
  takeaway: string;
  link?: { label: string; url: string };
};

export const projects: Project[] = [
  {
    id: 'paragon',
    number: '01',
    name: 'Paragon',
    subtitle: 'AI 차량 공력계수 예측 플랫폼',
    category: 'AI & ML',
    kind: 'aero',
    period: '2026.06 — 2026.08',
    role: '5인 팀 리더 · 웹 개발 · 클라우드 배포',
    status: '글로벌 해커톤 3위',
    description:
      '3D 차량 형상에서 공기저항계수 예측까지. AI 모델을 누구나 탐색할 수 있는 웹 경험으로 연결했습니다.',
    tags: ['React', 'Three.js', 'FastAPI', 'Google Cloud'],
    summary:
      '차량 설계 초기에는 여러 형상을 빠르게 비교해야 합니다. 정밀 CFD 해석에 앞서 설계 후보를 검토할 수 있도록, 3D 형상과 설계 파라미터에서 공기저항계수(Cd)를 예측하는 AI 웹서비스를 만들었습니다.',
    work: [
      '5인 팀을 이끌며 서비스 기획과 구현 범위를 조율했습니다.',
      'React와 Three.js로 3D 형상을 다루는 인터페이스를 구현했습니다.',
      'FastAPI REST API와 ML 추론 흐름을 연결하고 Google Cloud에 배포했습니다.',
    ],
    takeaway:
      'ML Empowerment Build Challenge 2.0에서 296개 출품작 중 전체 3위와 Best Use of Machine Learning을 수상했습니다. QI AI Entrepreneurship Hackathon에서도 별도로 3위를 수상했습니다.',
    link: { label: '수상 기사 읽기', url: 'https://www.etnews.com/20260827000345' },
  },
  {
    id: 'baro',
    number: '02',
    name: 'BARO',
    subtitle: 'CCTV 기반 산업 안전 모니터링',
    category: 'AI & ML',
    kind: 'safety',
    period: '2026.01 — 현재',
    role: '팀 리더 · MVP 기획 · 탐지 워크플로 설계',
    status: '개발 중',
    description:
      '이미 설치된 CCTV에 시각 지능을 더합니다. 작은 제조 현장에서도 시작할 수 있는 안전 시스템을 개발합니다.',
    tags: ['Python', 'YOLO', 'Computer Vision'],
    summary:
      '소규모 제조업체가 기존 CCTV를 활용해 안전 위험을 파악할 수 있도록, 객체 탐지와 위험도 산정, 알림 흐름을 결합한 저비용 산업 안전 시스템을 개발하고 있습니다.',
    work: [
      '팀 리더로서 핵심 문제와 MVP 범위를 정의하고 개발을 진행합니다.',
      'YOLO 객체 탐지를 기반으로 위험도 산정과 알림 워크플로를 설계합니다.',
      '탐지 오류, 지연 시간, 현장 도입 제약을 고려한 평가 기준을 정리합니다.',
    ],
    takeaway:
      '모델의 탐지 성능뿐 아니라 실제 현장에서 감당할 수 있는 비용과 대응 흐름을 함께 고민합니다. 현재 개발 단계로, 실사용 성과나 현장 검증 수치는 공개하지 않았습니다.',
  },
  {
    id: 'realdoor',
    number: '03',
    name: 'RealDoor LA',
    subtitle: '근거를 확인하는 주거 서류 도우미',
    category: 'Full-stack',
    kind: 'realdoor',
    period: '2026',
    role: '웹 애플리케이션 개발',
    status: '연구 프로토타입',
    description:
      '복잡한 서류를 이해하는 더 명확한 방법. 문서 속 근거를 확인하고, 필요한 정보를 정리하도록 돕습니다.',
    tags: ['Next.js', 'TypeScript', 'OpenAI', 'PDF.js'],
    summary:
      'LA 주거 신청 과정에 필요한 서류를 이해하고 준비하도록 돕는 프로토타입입니다. 합성 문서에서 정보를 추출하고, 원문 근거와 사용자 확인을 거쳐 준비 자료를 내보내는 흐름을 구현했습니다.',
    work: [
      'Next.js와 TypeScript로 문서 업로드부터 검토까지 이어지는 인터페이스를 구성했습니다.',
      'PDF.js와 Tesseract.js를 활용한 문서 처리, AI 기반 추출 흐름을 연결했습니다.',
      '추출한 정보의 원문 근거를 보여주고 사용자가 확인한 뒤 준비 자료를 내보내도록 구성했습니다.',
    ],
    takeaway:
      'AI가 제시한 결과를 사용자가 직접 확인할 수 있어야 한다고 생각합니다. 합성 데이터를 사용하는 연구 프로토타입이며, 실제 주거 자격을 심사하거나 선정 결과를 예측하지 않습니다.',
    link: { label: 'GitHub에서 코드 보기', url: 'https://github.com/barcybarcy/realdoor-la' },
  },
];

export const experiences = [
  {
    date: '2026.05 — 현재',
    title: '사용자의 제약을 시스템의 요구사항으로',
    organization: '시와정보 · 산학협력 소프트웨어 프로젝트',
    description:
      '수강신청 과정의 불편을 분석하고, 등록 조건과 규칙을 기술 요구사항으로 정리하며 시스템 개선에 참여하고 있습니다.',
    tag: 'SOFTWARE',
  },
  {
    date: '2025.11 — 현재',
    title: '데이터로 이해하는, 사람의 호흡',
    organization: '경기대학교 기계시스템공학과 · CFD 연구실 학부연구생',
    description:
      'CT 기반 비강 형상을 3D Slicer와 SpaceClaim으로 재구성하고 Ansys Fluent로 유동을 분석합니다. ENS 환자의 수술 전후 비강 형상과 벽면 전단응력 변화를 연구합니다.',
    tag: 'RESEARCH',
  },
  {
    date: '2020.06 — 2024.12',
    title: '직접 만들고 운영하며 배운 비즈니스',
    organization: '온라인 자동차용품 스토어 · 창업 및 운영',
    description:
      '국내 4개 마켓플레이스에서 상품 소싱부터 가격, 재고, 배송, 고객 응대와 정산까지 직접 운영했습니다. 사용자와 운영자의 문제를 함께 보는 출발점이 되었습니다.',
    tag: 'BUSINESS',
  },
];

export const awards = [
  {
    date: '2026.08',
    title: 'ML Empowerment Build Challenge 2.0',
    detail: '전체 3위 · Best Use of Machine Learning',
    extra: '296개 출품작 · 1,184명 참가',
    url: 'https://www.etnews.com/20260827000345',
  },
  {
    date: '2026.07',
    title: 'QI AI Entrepreneurship Hackathon',
    detail: '3위 · Qualcomm Institute at UC San Diego',
    extra: 'Vehicle Drag Coefficient Analysis',
  },
  {
    date: '2026.03',
    title: 'RISE 창업경진대회',
    detail: '우수상 · 경기대학교 RISE 사업단',
    extra: 'CFD 기반 의료 창업 아이디어',
  },
];

export const skills = [
  {
    title: 'AI & Computer Vision',
    number: '01',
    description: '데이터를 이해하고, 모델의 결과를 실제 사용 흐름에 연결합니다.',
    items: ['Python', 'PyTorch', 'YOLO', 'OpenCV', 'Machine Learning'],
  },
  {
    title: 'Web & Cloud',
    number: '02',
    description: '인터페이스부터 API와 배포까지, 서비스의 전체 흐름을 만듭니다.',
    items: [
      'TypeScript',
      'React',
      'Three.js',
      'FastAPI',
      'Spring',
      'Docker',
      'Google Cloud',
      'Vertex AI',
    ],
  },
  {
    title: 'Research & Engineering',
    number: '03',
    description: '현상을 모델링하고, 시뮬레이션으로 가설을 검토합니다.',
    items: ['3D Slicer', 'SpaceClaim', 'Ansys Fluent', 'Tecplot', 'CFD'],
  },
];
