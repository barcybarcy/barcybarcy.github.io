import { useLanguage } from '../i18n';
import { useId } from 'react';

type ProjectVisualProps = {
  kind: 'aero' | 'safety' | 'realdoor';
};

/** Original, conceptual diagrams for the portfolio's project covers. */
export function ProjectVisual({ kind }: ProjectVisualProps) {
  const { t } = useLanguage();
  const instanceId = useId();

  if (kind === 'aero') {
    return (
      <svg
        viewBox="0 0 640 380"
        width="100%"
        height="100%"
        role="img"
        aria-label={t.aeroAlt}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`${instanceId}-aero-grid`}
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path d="M32 0H0V32" fill="none" stroke="#4852df" strokeOpacity=".06" />
          </pattern>
          <linearGradient id={`${instanceId}-aero-body`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#4852df" stopOpacity=".16" />
            <stop offset="1" stopColor="#4852df" stopOpacity=".025" />
          </linearGradient>
        </defs>
        <path fill="#eef0fa" d="M0 0h640v380H0z" />
        <path fill={`url(#${instanceId}-aero-grid)`} d="M0 0h640v380H0z" />
        <g fill="none" stroke="#4852df" strokeWidth="1" opacity=".24">
          <path d="M-30 114C90 133 123 116 222 96S423 89 492 105s111 24 176 5" />
          <path d="M-30 139C83 155 123 135 216 115S410 104 490 124s127 21 178 11" />
          <path d="M-30 166C90 184 120 160 207 136S409 120 487 145s127 24 181 15" />
          <path d="M-30 199C65 210 113 187 159 171s83-38 145-35 84 20 137 36 147 21 227 12" />
          <path d="M-30 253C43 250 79 257 121 284s142 33 234 21 187-36 313-42" />
          <path d="M-30 277C57 273 70 288 120 302s154 22 241 11 196-30 307-24" />
          <path d="M-30 301C36 297 76 309 124 319s161 11 245 4 192-17 299-8" />
        </g>
        <ellipse cx="325" cy="284" rx="214" ry="18" fill="#4852df" opacity=".045" />
        <g stroke="#4852df" strokeLinejoin="round" strokeLinecap="round">
          <path
            d="m116 233 19-33 76-24 59-53 115 8 83 61 64 22 15 27-37 18-56-4-231 4-80-12Z"
            fill={`url(#${instanceId}-aero-body)`}
            strokeWidth="1.8"
          />
          <path
            d="m135 200 83 10 63-57 116 8 71 31-24 23 88-1M218 210l-14 42m14-42 226 5 66 44m-66-44-12 38M281 153l-11-30m11 30 116 8-12-30m12 30 47 54M211 176l70-23m187 39-71-31M135 200l-19 33 88 19 228 1 100-39"
            fill="none"
            strokeWidth="1.2"
          />
          <path d="m229 200 58-47 101 7 43 45Z" fill="#4852df" opacity=".09" />
          <path
            d="m233 197 55-38 24 2-23 39Zm66 4 24-39 60 5 39 37Z"
            fill="none"
            strokeWidth=".75"
          />
          <path
            d="m167 190 78 9m-56-16 75 9m-56-14 75 9m-42-37 15 4m4-20 13 7M143 215l67 9 225 3 68-6m-367 7 72 11 233-1 75-9m-268-31-14 48m58-90-12 88m-34-44 8 47m45-85 18 86m23-83 27 84m15-79 35 79"
            fill="none"
            strokeWidth=".65"
            opacity=".48"
          />
          <path
            d="M171 250c-5-24 8-44 28-43s33 20 35 44m196 0c-4-26 8-44 28-44s36 19 37 45"
            fill="#eef0fa"
            strokeWidth="1.4"
          />
          <ellipse
            cx="203"
            cy="250"
            rx="25"
            ry="31"
            transform="rotate(-14 203 250)"
            fill="#e0e3f5"
            strokeWidth="1.5"
          />
          <ellipse
            cx="203"
            cy="250"
            rx="16"
            ry="22"
            transform="rotate(-14 203 250)"
            fill="#eef0fa"
            strokeWidth="1"
          />
          <ellipse
            cx="462"
            cy="250"
            rx="25"
            ry="31"
            transform="rotate(-14 462 250)"
            fill="#e0e3f5"
            strokeWidth="1.5"
          />
          <ellipse
            cx="462"
            cy="250"
            rx="16"
            ry="22"
            transform="rotate(-14 462 250)"
            fill="#eef0fa"
            strokeWidth="1"
          />
          <path
            d="m193 230 20 40m-26-25 33 10m-19-27 4 44m247-42 20 40m-26-25 33 10m-19-27 4 44M118 230l25 5m347-27 29 9M350 214l19 1"
            fill="none"
            strokeWidth="1"
          />
        </g>
        <g fill="#4852df">
          <circle cx="270" cy="123" r="3" />
          <circle cx="385" cy="131" r="3" />
          <circle cx="468" cy="192" r="3" />
          <circle cx="218" cy="210" r="3" />
          <circle cx="444" cy="215" r="3" />
        </g>
        <g stroke="#4852df" strokeWidth=".8" opacity=".55" fill="none">
          <path d="M385 126V76h69M216 215 181 294h-44" />
          <path d="M48 304v-30m0 30h30m-30 0 15-16" />
          <circle cx="48" cy="304" r="2" fill="#4852df" />
        </g>
        <g fill="#4852df" fontFamily="monospace" fontSize="9" letterSpacing="1.7">
          <text x="32" y="36">
            AERODYNAMIC FIELD
          </text>
          <text x="609" y="36" textAnchor="end" opacity=".6">
            FIG. 01
          </text>
          <text x="32" y="350">
            GEOMETRY → PREDICTION
          </text>
          <text x="391" y="70" fontSize="7" opacity=".75">
            SURFACE MESH
          </text>
        </g>
        <path d="M541 343h65m-8-5 8 5-8 5" fill="none" stroke="#4852df" strokeWidth="1" />
      </svg>
    );
  }

  if (kind === 'safety') {
    return (
      <svg
        viewBox="0 0 640 380"
        width="100%"
        height="100%"
        role="img"
        aria-label={t.safetyAlt}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`${instanceId}-safety-grid`}
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path d="M32 0H0V32" fill="none" stroke="#a8d2b5" strokeOpacity=".055" />
          </pattern>
          <linearGradient id={`${instanceId}-safety-scan`} x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#a8d2b5" stopOpacity=".16" />
            <stop offset="1" stopColor="#a8d2b5" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path fill="#172b2c" d="M0 0h640v380H0z" />
        <path fill={`url(#${instanceId}-safety-grid)`} d="M0 0h640v380H0z" />
        <g fill="none" stroke="#a8d2b5" strokeWidth="1" opacity=".19">
          <path d="M74 282V123h109v-38h299v197M74 123l59-44h106v44m-56-38 55-39h186l58 39M105 282V149h49v133M423 111v171m-216-172v172m0-105h216m-216 68h216M239 111h151m-151 12h151m-151 12h151M74 282h439M56 307l146-44h289l99 44M101 326l142-44m287 44-104-44M35 307h567" />
          <path d="m456 236 52-23 49 24v55l-48 23-53-25Zm0 0 53 25 48-24m-48 24v54m-30-89 51 24m-34-31 48 24" />
          <path d="M223 211h57v71h-57zm0 18h57m-44-18v71m30-71v71" />
        </g>
        <g stroke="#a8d2b5" strokeLinejoin="round">
          <path d="m115 91 57 13 23-27-57-15Z" fill="#254142" strokeWidth="1.2" />
          <path d="m115 91 2 30 55 13v-30m0 0v30l24-26-1-31" fill="#20383a" strokeWidth="1.2" />
          <ellipse
            cx="183"
            cy="105"
            rx="7"
            ry="11"
            transform="rotate(24 183 105)"
            fill="#a8d2b5"
            fillOpacity=".3"
            strokeWidth="1"
          />
          <path d="m121 123-13 18H90v-17m0-7v36" fill="none" strokeWidth="3" />
          <path
            d="m195 109 229 66-16 134Z"
            fill="#a8d2b5"
            fillOpacity=".035"
            strokeOpacity=".2"
            strokeDasharray="4 6"
          />
        </g>
        <rect
          x="306"
          y="104"
          width="112"
          height="202"
          fill="#a8d2b5"
          fillOpacity=".025"
          stroke="#a8d2b5"
          strokeOpacity=".35"
          strokeWidth=".7"
        />
        <g fill="#a8d2b5" stroke="#a8d2b5" strokeLinejoin="round">
          <path
            d="M346 141c0-12 7-20 17-20 11 0 18 8 18 20v7h-35Z"
            fillOpacity=".18"
            strokeWidth="1.2"
          />
          <path d="M343 147h41m-21-26v20" fill="none" strokeWidth="2" />
          <path d="M350 149c0 13 5 23 13 23s15-10 15-23" fillOpacity=".09" strokeWidth="1.3" />
          <path
            d="m351 173-18 7-10 43 12 4 10-32-3 44h43l-5-45 11 27 12-4-13-38-15-6-12 11Z"
            fillOpacity=".16"
            strokeWidth="1.4"
          />
          <path
            d="m351 176 11 10 13-10m-13 10v50m-19-23h40m-36-31-2 43m33-43 3 43"
            fill="none"
            strokeWidth="1"
          />
          <path
            d="m323 223-1 15 7 7 6-5v-13m56-6 5 12 7 4 6-6-6-14M344 240l-3 43-7 8v5h22l8-47 4 47h22v-5l-7-7 2-44Z"
            fillOpacity=".12"
            strokeWidth="1.3"
          />
        </g>
        <rect x="307" y="178" width="110" height="67" fill={`url(#${instanceId}-safety-scan)`} />
        <path
          d="M301 123v-24h24m-24 187v25h24m74-212h24v24m0 163v25h-24"
          fill="none"
          stroke="#a8d2b5"
          strokeWidth="2.3"
        />
        <path d="M307 178h110" fill="none" stroke="#d2efb5" strokeWidth="1.2" />
        <g fill="none" stroke="#a8d2b5" strokeWidth="1">
          <path d="M428 127h43l16-23h63" opacity=".6" />
          <circle cx="428" cy="127" r="2.5" fill="#a8d2b5" />
          <rect x="487" y="80" width="64" height="24" rx="3" opacity=".35" />
        </g>
        <g fill="#a8d2b5" fontFamily="monospace" fontSize="9" letterSpacing="1.7">
          <text x="32" y="36">
            INDUSTRIAL VISION
          </text>
          <text x="609" y="36" textAnchor="end" opacity=".6">
            FIG. 02
          </text>
          <text x="32" y="350">
            DETECT / ASSESS / ALERT
          </text>
          <text x="519" y="95" textAnchor="middle" fontSize="7" letterSpacing="1">
            PERSON
          </text>
        </g>
        <g transform="translate(551 343)" stroke="#a8d2b5" fill="none" strokeWidth="1">
          <circle r="5" />
          <path d="M6 0h14" />
          <circle cx="26" r="5" />
          <path d="M32 0h14" />
          <circle cx="52" r="5" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 640 380"
      width="100%"
      height="100%"
      role="img"
      aria-label={t.realdoorAlt}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={`${instanceId}-realdoor-grid`}
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <path d="M32 0H0V32" fill="none" stroke="#d57648" strokeOpacity=".065" />
        </pattern>
        <linearGradient id={`${instanceId}-realdoor-door`} x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#d57648" stopOpacity=".06" />
          <stop offset="1" stopColor="#d57648" stopOpacity=".24" />
        </linearGradient>
      </defs>
      <path fill="#f4e9dd" d="M0 0h640v380H0z" />
      <path fill={`url(#${instanceId}-realdoor-grid)`} d="M0 0h640v380H0z" />
      <ellipse cx="326" cy="288" rx="193" ry="27" fill="#d57648" opacity=".045" />
      <g stroke="#d57648" strokeWidth="1.2" strokeLinejoin="round">
        <path d="m127 232 203-111 204 113-203 113Z" fill="#e7d6c6" />
        <path d="m127 222 203-111 204 113-203 112Z" fill="#f9f2e9" />
        <path d="M127 222v10l204 115v-11m203-112v10" fill="none" />
        <path
          d="m145 221 185-100 185 103-184 102Z"
          fill="none"
          strokeDasharray="3 4"
          strokeOpacity=".25"
        />
        <path d="m150 209 180-99V72l-180 99Z" fill="#f2ddcc" />
        <path d="m330 110 179 99v-38L330 72Z" fill="#eacdb7" />
        <path d="m150 171 180-99 179 99-9 5-170-94-171 94Z" fill="#fff7ed" />
        <path d="m159 176 171-94v27l-171 94Z" fill="#f5e6d6" strokeOpacity=".7" />
        <path d="m330 109 170 94v-27L330 82Z" fill="#f0d6c0" strokeOpacity=".7" />
        <path d="m241 160 90 50v35l-90-50Z" fill="#edcfb7" />
        <path d="m241 160 8-4 90 50-8 4Z" fill="#fff7ed" />
        <path d="m331 210 59-33v35l-59 33Z" fill="#f5e1cf" />
        <path d="m331 210 8-4 59-33-8 4Z" fill="#fff7ed" />
        <path d="m331 210 59-33 8-4v35l-8 4" fill="none" />
        <path d="m170 219 74-41 53 30-74 41Z" fill="#f1e1d1" strokeOpacity=".55" />
        <path
          d="m175 216 35-19 18 10-35 19Zm38-21 30-16 18 10-30 16Z"
          fill="#e4c8af"
          strokeOpacity=".55"
        />
        <path
          d="m175 216 18 10v12l-18-10Zm18 10 35-19v12l-35 19Zm38-21 30-16v12l-30 16Z"
          fill="#f5e5d5"
          strokeOpacity=".55"
        />
        <path d="m406 173 41 23 28-15-41-23Z" fill="#f8eee2" strokeOpacity=".7" />
        <path
          d="m406 173 41 23v20l-41-23Zm41 23 28-15v20l-28 15Z"
          fill="#e9cfb8"
          strokeOpacity=".7"
        />
        <ellipse cx="439" cy="178" rx="13" ry="7" fill="#f4e9dd" strokeOpacity=".7" />
        <path d="m390 244 40-22 40 22-40 22Z" fill="#e6c6ac" strokeOpacity=".7" />
        <path d="M390 244v13m80-13v13m-40 9v13" fill="none" strokeOpacity=".7" />
        <path
          d="m377 260 15 8 14-8m39-41 14 8 14-8m-71 8 14-8m43 62 14-8"
          fill="none"
          strokeWidth="3"
          strokeOpacity=".45"
        />
      </g>
      <g stroke="#d57648" strokeLinejoin="round">
        <path d="m276 305 53 29V203l-53-30Z" fill="#d57648" fillOpacity=".12" strokeWidth="1.6" />
        <path d="m284 301 37 21V209l-37-21Z" fill="#f4e9dd" strokeWidth="1" />
        <path
          d="m284 301-37-9V178l37 10Z"
          fill={`url(#${instanceId}-realdoor-door)`}
          strokeWidth="1.5"
        />
        <path d="m252 285 26 7V195l-26-7Z" fill="none" strokeOpacity=".4" strokeWidth=".8" />
        <path d="M257 247v8m-2-4 7 2" strokeWidth="2" />
        <path d="M247 292c14 15 36 20 53 17" fill="none" strokeWidth=".8" strokeDasharray="3 4" />
      </g>
      <g fill="none" stroke="#d57648" strokeWidth="1" opacity=".6">
        <path d="m93 207 129 71m-134-65 10-12m119 83 10-12M371 319l173-95m-176 90 7 11m165-107 8 11" />
        <path d="M442 103V79h-34" />
        <circle cx="442" cy="106" r="3" />
      </g>
      <g transform="translate(445 124) rotate(9)" stroke="#d57648" strokeLinejoin="round">
        <rect x="11" y="-10" width="111" height="143" rx="3" fill="#edd5c1" strokeWidth="1" />
        <path
          d="M3 0h81l27 27v113a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3Z"
          fill="#fcf7ef"
          strokeWidth="1.3"
        />
        <path d="M84 0v27h27" fill="#f3e3d2" strokeWidth="1.1" />
        <path d="M16 21h42m-42 8h31" fill="none" strokeWidth="2" strokeOpacity=".6" />
        <path
          d="M16 46h79m-79 8h67m-67 35h79m-79 8h60m-60 13h79m-79 8h69"
          fill="none"
          strokeWidth="1"
          strokeOpacity=".3"
        />
        <rect
          x="11"
          y="63"
          width="89"
          height="17"
          rx="2"
          fill="#d57648"
          fillOpacity=".15"
          stroke="none"
        />
        <path d="M16 71h70" fill="none" strokeWidth="2" />
        <path d="M6 63H2v17h4m99-17h4v17h-4" fill="none" strokeWidth="1.3" />
        <circle cx="96" cy="131" r="4" fill="#d57648" fillOpacity=".12" strokeWidth=".8" />
        <path d="m99 134 4 4" fill="none" strokeWidth="1" />
      </g>
      <g fill="#b75f38" fontFamily="monospace" fontSize="9" letterSpacing="1.7">
        <text x="32" y="36">
          READ BETWEEN THE LINES
        </text>
        <text x="609" y="36" textAnchor="end" opacity=".6">
          FIG. 03
        </text>
        <text x="32" y="350">
          DOCUMENT → EVIDENCE → REVIEW
        </text>
        <text x="403" y="82" textAnchor="end" fontSize="7" opacity=".75">
          FIND THE EVIDENCE
        </text>
      </g>
      <path d="M546 344h60m-8-5 8 5-8 5" fill="none" stroke="#d57648" strokeWidth="1" />
    </svg>
  );
}
