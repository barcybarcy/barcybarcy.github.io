# Content sources

정리일: 2026-09-18. 이력서와 공개 자료에 근거한 기존 사실을 유지하고, DRAWN에는 같은 날 사용자가 제공한 설명을 반영했습니다. 콘텐츠를 수정할 때 실제 역할·상태·날짜를 먼저 확인합니다.

| 내용                                                     | 근거                                                                                                         | 표현 범위                                                                                                                                                     |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 이름, 연락처, 학교, GPA, 졸업 예정일, 교육, 경력, 자격증 | 사용자의 로컬 `barcy-resume/resume.tex`                                                                      | SUMIN CHO, GPA 4.05/4.5, 2027.03 졸업 예정, Google Cloud Professional Machine Learning Engineer                                                               |
| 온라인 쇼핑몰 사업                                       | 이력서                                                                                                       | 2020.06–2024.12 창업 및 운영, 자동차용품 판매, 국내 4개 마켓플레이스, 소싱·가격·재고·배송·고객 응대·정산. 확인되지 않은 상호는 기재하지 않음                  |
| BARO                                                     | 이력서                                                                                                       | 2026.01부터 팀 리더로 기존 CCTV·YOLO·위험도·알림 흐름을 개발 중. 현장 성과 수치 없음                                                                          |
| PARAGON의 목적·역할·기간·기술                            | 이력서, [전자신문 보도](https://www.etnews.com/20260827000345)                                               | 2026.06–2026.08, 5인 팀 리더, 3D 차량 형상·설계 파라미터로 공력계수 예측, React/Three.js/FastAPI/GCP                                                          |
| ENS CFD 연구                                             | 이력서                                                                                                       | 2025.11부터 경기대학교 김형민 교수 CFD 연구실 학부연구생. CT 기반 비강 형상을 3D Slicer·SpaceClaim으로 재구성하고 Ansys Fluent로 유동 및 벽면 전단응력을 연구 |
| DRAWN                                                    | 2026-09-18 사용자 설명                                                                                       | 길이·속도·날개 수 등 설계 조건을 설정하고 비행 성능을 추론하는 드론 설계 플랫폼. 기간·역할·구현 기술·링크는 확인되지 않아 기재하지 않음                       |
| ML Empowerment Build Challenge 2.0                       | [전자신문 보도](https://www.etnews.com/20260827000345)                                                       | 전체 3위, Best Use of Machine Learning, 296개 출품작·1,184명                                                                                                  |
| QI AI Entrepreneurship Hackathon                         | 이력서, [조선대 SW 사업단 소식](https://sw.chosun.ac.kr/main/menu?bwrite_id=VU2RqmnZ5jWZ&do=view&gc=934NPWN) | 별도의 3위 수상. ML Empowerment 수상과 합치지 않음                                                                                                            |
| 공개 프로필                                              | [GitHub](https://github.com/barcybarcy)                                                                      | 본인 제작 프로젝트와 fork 구분                                                                                                                                |

## 편집 원칙

- 주요 경험은 온라인 쇼핑몰 사업 → BARO → PARAGON → ENS CFD 연구 → DRAWN 순서입니다. RealDoor LA, SIC Assembler와 Spring Boot Blog는 현재 메인 콘텐츠에서 제외했습니다.
- PARAGON과 BARO에는 확인되지 않은 GitHub 주소를 만들어 넣지 않았습니다. DRAWN에도 확인된 저장소나 서비스 링크가 없습니다.
- DRAWN의 `Drone Design`과 `Performance Inference`는 분야를 설명하는 태그이며 구현 기술을 뜻하지 않습니다. 검증되지 않은 비행 시간·거리·정확도는 기재하지 않습니다.
- 논문 게재·발표 완료를 주장하지 않습니다. 사이트에는 연구 활동만 기재했습니다.
- 전화번호, 실제 환자 자료, 비공개 저장소·운영 정보는 포함하지 않았습니다.
- `src/components/ExperienceCover.tsx`의 경험 커버는 새로 제작한 개념 일러스트입니다. 실제 제품 스크린샷, 환자 형상, 실험 결과 또는 비행 성능의 증거로 사용하지 않습니다.
- 카피의 관점·배운 점은 확인된 이력을 바탕으로 작성한 소개 문구입니다. 사용자의 정확한 표현에 맞춰 수정할 수 있습니다.

## 디자인 출처

- [Jin Portfolio](https://jin-portfolio-eta.vercel.app/)와 [Jinacker/PortFolio](https://github.com/Jinacker/PortFolio): 소개와 경험 중심의 흐름, 여백, 상세 내용 전개를 참고했습니다.
- [Spotify 공식 디자인 가이드](https://developer.spotify.com/documentation/design): 초록색·검정색의 색상 방향을 참고했습니다. 현재 화면은 흰색 배경과 `SUMIN CHO` 워드마크를 사용합니다.
- 참조 사이트의 코드·로고·이미지를 가져오지 않고 화면과 SVG 커버를 독립적으로 구현했습니다.
