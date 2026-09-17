# SUMIN CHO — Portfolio

조수민의 AI·소프트웨어 개발 포트폴리오입니다. 이력서와 공개 GitHub 프로젝트를 바탕으로 소개, 프로젝트, 경력, 수상, 기술, 교육, 연락처를 구성했습니다.

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
- 한국어·영어 원페이지: 소개, 대표 프로젝트, 경험, 수상, 역량, 교육, 연락처.
- 상단 KOR / ENG 버튼으로 전체 내용·상세 창·접근성 문구를 전환합니다. 기본 언어는 한국어이며 선택은 브라우저에 저장됩니다. 저장소 접근이 제한되어도 전환은 동작합니다.
- 프로젝트 분야 필터 및 접근성 있는 네이티브 상세 대화상자. Esc 닫기, 포커스 복귀, 배경 스크롤 잠금.
- 반응형 메뉴, 섹션 내비게이션, 이메일 복사와 실패 안내, 이메일·GitHub·LinkedIn 링크.
- 직접 제작한 SVG 개념 일러스트, reduced-motion 지원, 키보드 포커스와 본문 바로가기.
- DM Sans와 Noto Sans KR 가변 폰트를 Fontsource 패키지에서 자체 호스팅합니다. 각 패키지의 OFL 라이선스를 따릅니다.

## 수정 위치

| 파일                               | 내용                                                    |
| ---------------------------------- | ------------------------------------------------------- |
| `src/data.ts`                      | 프로필, 프로젝트 소개·상세·링크, 경력, 수상, 기술       |
| `src/App.tsx`                      | 페이지 구성, 교육·자격, 인터랙션                        |
| `src/i18n.tsx`                     | 한·영 UI 문구, 언어 선택과 저장, 페이지 언어·메타데이터 |
| `src/styles.css`                   | 디자인 토큰, 반응형 레이아웃, 접근성·인쇄 스타일        |
| `src/components/ProjectVisual.tsx` | 프로젝트별 SVG 개념 일러스트                            |
| `src/components/FlowGraphic.tsx`   | 첫 화면의 분야 연결 그래픽                              |
| `public/og-image.svg`              | 소셜 공유 이미지 편집 원본                              |
| `docs/content-sources.md`          | 내용의 출처와 표현 범위                                 |
| `docs/qa.md`                       | 검증 내용과 범위                                        |

## 배포

`npm run build`로 생성되는 `dist/`를 정적 호스팅에 올릴 수 있습니다. Vercel에는 이 저장소를 연결하고 Framework Preset을 **Vite**, Build Command를 `npm run build`, Output Directory를 `dist`로 설정합니다. 같은 설정을 `vercel.json`에도 포함했습니다.

도메인을 정한 뒤 공유 이미지 URL과 canonical URL을 실제 배포 주소로 설정할 수 있습니다. 현재 소셜 메타데이터에는 제목과 설명이 포함되어 있습니다. 공개 배포와 원격 브랜치 push는 별도 작업입니다.

## 디자인 참고

[Jin Portfolio](https://jin-portfolio-eta.vercel.app/)의 여백, 한국어 소개, 경험 중심 흐름과 상세 보기에서 영감을 받았습니다. 코드·로고·이미지·문구는 가져오지 않고 새로 구현했습니다.
