import type { ExperienceImage } from './components/ExperienceGallery';
import type { Experience } from './data';
import type { Language } from './i18n';

type ProjectPhoto = {
  file: string;
  ko: string;
  en: string;
  fit: 'contain' | 'cover';
};

const photos: Partial<Record<Experience['id'], ProjectPhoto[]>> = {
  store: [
    {
      file: 'store-shipments.jpg',
      ko: '온라인 쇼핑몰 상품 출고 현장',
      en: 'Preparing online store orders for shipment',
      fit: 'cover',
    },
    {
      file: 'store-packing.png',
      ko: '상품 포장과 배송 준비',
      en: 'Packing products for delivery',
      fit: 'contain',
    },
  ],
  baro: [
    {
      file: 'baro-planning.jpg',
      ko: 'BARO 아이디어와 시스템 구상',
      en: 'BARO concept and system planning',
      fit: 'contain',
    },
    {
      file: 'baro-demo.jpg',
      ko: '컨베이어와 모니터링 프로토타입 시연',
      en: 'Conveyor and monitoring prototype demonstration',
      fit: 'cover',
    },
    {
      file: 'baro-field-visit.jpeg',
      ko: 'BARO 팀의 제조 현장 방문',
      en: 'BARO team visiting a manufacturing site',
      fit: 'cover',
    },
    {
      file: 'baro-dashboard.png',
      ko: '위험 감지와 정비 모드 화면',
      en: 'Risk detection and maintenance mode interface',
      fit: 'contain',
    },
    {
      file: 'baro-capstone-award.jpg',
      ko: 'BARO · 2026 캡스톤디자인 경진대회 우수상 수상',
      en: 'BARO · Excellence Award, 2026 Capstone Design Competition',
      fit: 'contain',
    },
  ],
  paragon: [
    {
      file: 'paragon-interface.png',
      ko: 'PARAGON 3D 차량 설계와 공력 예측 화면',
      en: 'PARAGON 3D vehicle design and aerodynamic prediction interface',
      fit: 'contain',
    },
  ],
  ens: [
    {
      file: 'ens-airflow.png',
      ko: 'Ansys Fluent 비강 유동 해석',
      en: 'Nasal airflow simulation in Ansys Fluent',
      fit: 'contain',
    },
    {
      file: 'ens-rise-award.jpg',
      ko: 'ENS CFD 연구 · RISE 연합 창업경진대회 우수상 수상',
      en: 'ENS CFD Research · Excellence Award, RISE Joint Startup Competition',
      fit: 'contain',
    },
  ],
};

export function getProjectImages(id: Experience['id'], language: Language): ExperienceImage[] {
  return (photos[id] ?? []).map((photo) => ({
    src: `/images/projects/${photo.file}`,
    alt: photo[language],
    caption: photo[language],
    fit: photo.fit,
  }));
}
