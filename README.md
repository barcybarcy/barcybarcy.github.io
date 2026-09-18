# SUMIN CHO — Portfolio

조수민의 AI·소프트웨어 개발 포트폴리오입니다. 이력서, 공개 자료와 사용자 설명을 바탕으로 사업 운영부터 AI 개발·CFD 연구까지의 경험을 소개합니다.

## 실행

Node.js 22.12 이상(또는 24 LTS)과 npm을 사용합니다.

```sh
npm ci
npm run dev
```

기본 미리보기 주소는 `http://127.0.0.1:5173`입니다.

```sh
npm run typecheck
npm run format:check
npm run build
npm run preview
```

## 구성

- React + TypeScript + Vite, 별도 서버·데이터베이스·환경변수 없이 실행합니다.
- 흰색 배경에 Spotify Green 계열의 초록색과 검정색을 사용하고, `SUMIN CHO` 워드마크를 배치했습니다.
- 한국어·영어 원페이지: 소개와 수상 → 역량·자격·면허 → 대표 경험 5개 → 연락처.
- 소개에는 사용자가 제공한 사진과 자동차용품·액세서리 쇼핑몰 운영에서 개발자로 이어진 이야기를 담았습니다.
- 최근 성과에는 PARAGON의 두 해커톤 수상, BARO의 2026 캡스톤디자인 경진대회 우수상, ENS CFD 기반 의료 창업 아이디어의 RISE 연합 창업경진대회 우수상 등 4개를 표시합니다.
- 역량은 기초·비즈니스, 프로그래밍, AI·백엔드, 클라우드, 연구·설계, 크리에이티브의 6개 분류로 구성합니다. Google Cloud Professional Machine Learning Engineer 자격과 운전면허도 이 섹션에 표시합니다.
- 기술·도구와 자격 라벨 옆에 로고 또는 아이콘을 표시합니다. `react-icons`의 정적 import와 로컬 SVG를 사용합니다.
- 경험은 온라인 쇼핑몰 사업 → BARO → PARAGON → ENS CFD 연구 → DRAWN 순서로 구성합니다.
- 경험 제목을 누르면 같은 화면에서 상세 내용이 펼쳐지는 아코디언입니다. 한 번에 하나의 항목이 열립니다.
- 사업 2장, BARO 5장, PARAGON 1장, ENS CFD 연구 2장으로 총 10장의 사용자 제공 이미지를 갤러리로 보여줍니다. BARO와 ENS의 수상 사진은 각각 마지막에 배치합니다. 썸네일과 이전·다음 버튼으로 탐색하고, 확대 화면에서는 좌우 방향키로 이동하거나 Esc로 닫을 수 있습니다.
- 상단 KOR / ENG 버튼으로 본문·경험 상세·접근성 문구를 전환합니다. 기본 언어는 한국어이며 선택은 브라우저에 저장됩니다. 저장소 접근이 제한되어도 전환은 동작합니다.
- 반응형 레이아웃, 섹션 내비게이션, 이메일 복사와 실패 안내, 이메일·GitHub·LinkedIn 링크.
- 연락처는 `Contact` 제목 아래 이메일·GitHub·LinkedIn 아이콘 버튼을 중심으로 구성합니다.
- DRAWN은 직접 제작한 SVG 개념 커버를 사용합니다. 다른 네 경험은 사용자 제공 이미지의 원본을 복사해 사용하고, 화면 배치는 CSS로 조정합니다.
- reduced-motion 지원, 키보드 포커스와 본문 바로가기를 제공합니다.
- DM Sans와 Noto Sans KR 가변 폰트를 Fontsource 패키지에서 자체 호스팅합니다. 각 패키지의 OFL 라이선스를 따릅니다.

## 수정 위치

| 파일                                   | 내용                                                                  |
| -------------------------------------- | --------------------------------------------------------------------- |
| `src/data.ts`                          | 프로필, 경험 5개의 한·영 소개·상세·링크, 기술·도구 6개 분류           |
| `src/App.tsx`                          | 페이지 구성, 아코디언, 역량·경험·연락처                               |
| `src/i18n.tsx`                         | 한·영 소개·UI·수상·자격 문구, 언어 선택과 저장, 메타데이터            |
| `src/styles.css`                       | 색상, 반응형 레이아웃, 접근성·인쇄 스타일                             |
| `src/components/SkillIcon.tsx`         | 기술·도구·자격 라벨의 로고와 아이콘                                   |
| `src/components/ExperienceGallery.tsx` | 경험 이미지 갤러리, 썸네일·이전·다음·확대 화면                        |
| `src/projectImages.ts`                 | 경험별 이미지 순서, 한·영 캡션·대체텍스트, CSS 표시 방식              |
| `src/components/ExperienceCover.tsx`   | DRAWN의 SVG 개념 커버                                                 |
| `public/images/sumin-cho.jpeg`         | 사용자 제공 사진의 원본 복사본. 화면 크기·배치는 CSS로 조정           |
| `public/images/projects/`              | 수상 사진 2장을 포함한 사용자 제공 프로젝트 이미지 10장의 원본 복사본 |
| `public/og-image.svg`                  | 소셜 공유 이미지 편집 원본                                            |
| `docs/content-sources.md`              | 내용의 출처와 표현 범위                                               |
| `docs/qa.md`                           | 검증 내용과 범위                                                      |

## 배포

`npm run build`로 생성되는 `dist/`를 정적 호스팅에 올릴 수 있습니다. Vercel에는 이 저장소를 연결하고 Framework Preset을 **Vite**, Build Command를 `npm run build`, Output Directory를 `dist`로 설정합니다. 같은 설정을 `vercel.json`에도 포함했습니다.

도메인을 정한 뒤 공유 이미지 URL과 canonical URL을 실제 배포 주소로 설정할 수 있습니다. 현재 소셜 메타데이터에는 제목과 설명이 포함되어 있습니다.

## 디자인 참고

[Jin Portfolio](https://jin-portfolio-eta.vercel.app/)와 [Jinacker/PortFolio](https://github.com/Jinacker/PortFolio)의 여백, 소개와 경험 중심의 구성, 상세 내용 전개를 참고했습니다. 색상 방향은 [Spotify 공식 디자인 가이드](https://developer.spotify.com/documentation/design)의 초록색과 검정색에서 가져왔습니다. 화면 코드, `SUMIN CHO` 워드마크, 개념 그래픽과 소개 문구는 이 포트폴리오에 맞게 새로 작성했습니다.
