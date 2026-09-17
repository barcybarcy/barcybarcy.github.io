type ExperienceCoverProps = {
  kind: 'store' | 'baro' | 'paragon' | 'ens' | 'drawn';
};

/** Original conceptual covers; the enclosing figure provides the description. */
export function ExperienceCover({ kind }: ExperienceCoverProps) {
  const green = '#1DB954';
  const brightGreen = '#1ED760';
  const ink = '#121212';

  return (
    <svg
      viewBox="0 0 600 360"
      width="100%"
      height="100%"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      {kind === 'store' && (
        <>
          <path fill="#f5f5f2" d="M0 0h600v360H0z" />
          <path d="M32 39h536" stroke={ink} strokeWidth="1" />
          <g
            fill={ink}
            fontFamily="Arial, Helvetica, sans-serif"
            fontWeight="900"
            letterSpacing="-6"
          >
            <text x="26" y="147" fontSize="108">
              COM
            </text>
            <text x="26" y="230" fontSize="88" letterSpacing="-5">
              MERCE
            </text>
          </g>
          <path fill="#f5f5f2" d="M335 55h265v236H335z" />
          <g stroke={ink} strokeWidth="2" strokeLinejoin="round">
            <path d="m363 211 84-42 94 48-84 43Z" fill={brightGreen} />
            <path d="m363 211 94 49v69l-94-48Z" fill={green} />
            <path d="m457 260 84-43v69l-84 43Z" fill="#e7f4e9" />
            <path d="m364 130 69-35 94 48-69 35Z" fill="#e7f4e9" />
            <path d="m364 130 94 48v64l-94-47Z" fill={brightGreen} />
            <path d="m458 178 69-35v64l-69 35Z" fill={green} />
            <path d="m414 70 51-26 66 34-51 26Z" fill={brightGreen} />
            <path d="m414 70 66 34v49l-66-34Z" fill={green} />
            <path d="m480 104 51-26v49l-51 26Z" fill="#e7f4e9" />
            <path
              d="m444 55 66 34v19l-16 8V97l-66-34m-31 50 95 48v18l-17 9v-18l-95-48m16 73 94 48v20l-19 10v-20l-93-48"
              fill={ink}
              stroke="none"
            />
            <path
              d="m381 164 24 12m-24-4 16 8m-6 80 29 15m-29-7 20 10"
              fill="none"
              strokeWidth="2"
            />
          </g>
          <g fill={ink} fontFamily="monospace" fontSize="9" letterSpacing="2">
            <text x="33" y="28">
              SYSTEMS FOR EVERYDAY BUSINESS
            </text>
            <text x="33" y="316">
              BUILD.
            </text>
            <text x="33" y="331">
              OPERATE.
            </text>
          </g>
          <circle cx="325" cy="316" r="10" fill={ink} />
          <path d="m321 311 7 5-7 5Z" fill={brightGreen} />
        </>
      )}

      {kind === 'baro' && (
        <>
          <path fill={ink} d="M0 0h600v360H0z" />
          <g fill="none" stroke="#fff" strokeOpacity=".13" strokeWidth="1">
            <path d="M35 284V118h130V84h330v201M35 118l61-43h105v43m-36-34 52-37h216l62 37M214 110v174m151-174v174m-151-82h281M66 284V145h66v139M35 284h520M-20 342l192-58h310l131 58M104 360l179-76m240 76-144-76" />
            <path d="m439 227 43-22 54 27v53l-43 24-54-27Zm0 0 54 28 43-23m-43 23v54" />
          </g>
          <path d="m155 92 269 89-58 143Z" fill={brightGreen} opacity=".045" />
          <path
            d="m155 92 269 89m-269-89 211 232"
            stroke={brightGreen}
            strokeOpacity=".25"
            strokeDasharray="3 7"
          />
          <g stroke="#fff" strokeWidth="1.3" strokeLinejoin="round">
            <path d="m79 72 55 11 23-25-55-11Z" fill="#262626" />
            <path d="m79 72 2 27 54 12-1-28m0 0 23-25v28l-22 25" fill="#1d1d1d" />
            <ellipse
              cx="146"
              cy="86"
              rx="6"
              ry="10"
              transform="rotate(27 146 86)"
              fill={brightGreen}
              stroke={brightGreen}
            />
            <path d="m84 101-12 17H55V95m0-7v40" fill="none" strokeWidth="3" />
          </g>
          <g stroke={brightGreen} strokeLinejoin="round">
            <path
              d="M324 136c0-15 9-26 23-26s23 11 23 26v8h-46Z"
              fill={brightGreen}
              fillOpacity=".13"
              strokeWidth="1.5"
            />
            <path d="M320 143h54m-27-32v22" strokeWidth="2" />
            <path
              d="M330 147c0 15 7 26 17 26s18-11 18-26"
              fill={brightGreen}
              fillOpacity=".07"
              strokeWidth="1.5"
            />
            <path
              d="m333 174-22 9-14 52 16 4 11-37-4 51h57l-6-52 16 34 15-7-19-45-22-9-15 13Z"
              fill={brightGreen}
              fillOpacity=".2"
              strokeWidth="1.5"
            />
            <path
              d="m331 178 15 13 16-13m-16 13v59m-23-25h53m-50-43-3 56m45-56 5 56"
              fill="none"
              strokeWidth="1.2"
            />
            <path
              d="m298 235-3 16 7 10 9-5 2-17m74-4 7 16 10 3 7-8-9-18m-80 25-4 46-9 10v5h28l10-51 6 51h27v-6l-8-10 1-45Z"
              fill={brightGreen}
              fillOpacity=".1"
              strokeWidth="1.5"
            />
          </g>
          <rect
            x="285"
            y="93"
            width="135"
            height="232"
            fill="none"
            stroke={brightGreen}
            strokeOpacity=".28"
          />
          <path
            d="M278 119V86h32m-32 214v32h32m86-246h31v33m0 181v32h-31"
            fill="none"
            stroke={brightGreen}
            strokeWidth="3"
          />
          <path d="M286 216h133" stroke={brightGreen} strokeWidth="1.5" />
          <path d="M286 216h133v36H286Z" fill={brightGreen} fillOpacity=".055" />
          <text
            x="31"
            y="283"
            fill="#fff"
            fontFamily="Arial, Helvetica, sans-serif"
            fontWeight="900"
            fontSize="62"
            letterSpacing="-4"
          >
            BARO
          </text>
          <g fill={brightGreen} fontFamily="monospace" fontSize="9" letterSpacing="2">
            <text x="33" y="310">
              VISION / SAFETY
            </text>
            <text x="568" y="32" textAnchor="end">
              SEE. UNDERSTAND. RESPOND.
            </text>
          </g>
        </>
      )}

      {kind === 'paragon' && (
        <>
          <path fill={brightGreen} d="M0 0h600v360H0z" />
          <g stroke={ink} strokeWidth="1" strokeOpacity=".17" fill="none">
            <path d="M-40 100C91 125 142 89 241 74s183 6 244 20 84 24 155 12M-40 127C81 149 141 114 237 96s174-2 247 20 95 23 156 15M-40 156C80 179 133 140 218 120s184-11 263 18 94 26 159 18M-40 188C90 206 137 151 216 144s137 1 205 33 151 28 219 12M-40 244C49 237 96 253 145 278s145 16 227 6 178-42 268-28M-40 270C48 264 93 278 142 296s143 16 238 5 168-28 260-19M-40 300C59 293 84 309 147 318s149 5 234-2 168-13 259-5" />
          </g>
          <g stroke={ink} strokeLinecap="round" strokeLinejoin="round" transform="translate(-6 3)">
            <path
              d="m103 224 21-34 79-22 63-52 114 9 79 57 67 25 14 27-36 19-56-4-233 3-84-13Z"
              fill="#fff"
              fillOpacity=".13"
              strokeWidth="2"
            />
            <path
              d="m124 190 86 13 67-58 116 8 66 29-23 25 90 0M210 203l-12 42m12-42 226 4 68 46m-68-46-12 40M277 145l-11-29m11 29 116 8-13-28m13 28 43 54M203 168l74-23m182 37-66-29M124 190l-21 34 95 21 226 2 102-40"
              fill="none"
              strokeWidth="1.2"
            />
            <path d="m222 194 61-46 102 8 40 42Z" fill={ink} fillOpacity=".1" />
            <path
              d="m231 190 52-36 27 2-21 36Zm69 3 20-36 59 6 38 32Z"
              fill="none"
              strokeWidth=".8"
            />
            <path
              d="m140 204 65 13 220 2 64-10m-358 8 70 14 228-3 74-10m-261-23-12 44m57-88-9 87m-31-43 6 46m43-83 18 82m24-79 23 80m15-73 35 73m-233-58 79 11m-56-18 76 11m-56-18 69 10"
              fill="none"
              strokeWidth=".7"
              strokeOpacity=".65"
            />
            <path
              d="M164 244c-6-25 8-45 29-44s33 20 36 45m194 0c-4-26 9-45 28-45s35 20 38 46"
              fill={brightGreen}
              strokeWidth="1.6"
            />
            <ellipse
              cx="197"
              cy="244"
              rx="25"
              ry="32"
              transform="rotate(-14 197 244)"
              fill={green}
              strokeWidth="1.6"
            />
            <ellipse
              cx="197"
              cy="244"
              rx="16"
              ry="23"
              transform="rotate(-14 197 244)"
              fill={brightGreen}
              strokeWidth="1"
            />
            <ellipse
              cx="455"
              cy="244"
              rx="25"
              ry="32"
              transform="rotate(-14 455 244)"
              fill={green}
              strokeWidth="1.6"
            />
            <ellipse
              cx="455"
              cy="244"
              rx="16"
              ry="23"
              transform="rotate(-14 455 244)"
              fill={brightGreen}
              strokeWidth="1"
            />
            <path
              d="m187 223 20 42m-27-27 34 12m-20-28 5 45m246-44 20 42m-27-27 34 12m-20-28 5 45M107 219l23 5m353-21 30 9m-171-5 18 1"
              fill="none"
              strokeWidth="1"
            />
            <path
              d="M380 121V70h50M210 205l-35 88h-44"
              fill="none"
              strokeWidth=".8"
              strokeOpacity=".5"
            />
            <circle cx="266" cy="116" r="3" fill={ink} />
            <circle cx="380" cy="125" r="3" fill={ink} />
            <circle cx="436" cy="207" r="3" fill={ink} />
          </g>
          <g fill={ink}>
            <text
              x="31"
              y="43"
              fontFamily="Arial, Helvetica, sans-serif"
              fontSize="28"
              fontWeight="900"
              letterSpacing="-1.3"
            >
              PARAGON
            </text>
            <text
              x="567"
              y="35"
              textAnchor="end"
              fontFamily="monospace"
              fontSize="9"
              letterSpacing="2"
            >
              GEOMETRY → PREDICTION
            </text>
            <text x="33" y="334" fontFamily="monospace" fontSize="9" letterSpacing="2">
              AERODYNAMIC INTELLIGENCE
            </text>
          </g>
          <path d="M517 328h51m-7-5 7 5-7 5" fill="none" stroke={ink} />
        </>
      )}

      {kind === 'ens' && (
        <>
          <path fill={ink} d="M0 0h600v360H0z" />
          <g stroke="#fff" fill="none" strokeWidth="1" strokeOpacity=".14">
            <path d="M386-30c-58 8-100 53-105 101-3 29 2 49-11 68l-29 38c-5 7-1 14 8 17l20 5c-1 8-8 15-7 19 1 5 12 6 10 14-3 9-13 18-9 28 4 12 25 19 48 19 19 0 26 15 25 36l-1 60" />
            <path d="M410-30c-61 11-108 56-112 101-4 35 5 47-9 72l-25 33 31 10c5 16-10 28-8 42s-13 28-8 35c5 6 19 5 39 8 29 4 34 30 31 59" />
          </g>
          <path
            d="M-30 191C81 191 137 192 199 191c49-1 60-35 111-44 64-12 105 27 122 79s66 70 196 70"
            fill="none"
            stroke={brightGreen}
            strokeWidth="74"
            strokeOpacity=".025"
          />
          <g fill="none" stroke={brightGreen} strokeLinecap="round">
            <path
              d="M-30 162C93 162 133 169 192 166s74-42 125-43c69-1 97 43 119 89 34 70 83 73 194 68"
              strokeWidth="1"
              strokeOpacity=".28"
            />
            <path
              d="M-30 174C93 174 135 179 196 178s65-39 119-39c65 0 96 40 115 87 26 65 94 70 200 66"
              strokeWidth="1.4"
              strokeOpacity=".5"
            />
            <path
              d="M-30 186C85 186 146 190 199 190c48 0 65-34 115-35 58-1 90 35 110 84s84 68 206 66"
              strokeWidth="2.3"
            />
            <path
              d="M-30 198C90 198 144 199 202 200c46 1 60-26 111-26s88 32 106 78 81 67 211 65"
              strokeWidth="1.6"
              strokeOpacity=".8"
            />
            <path
              d="M-30 210C85 210 144 210 205 211c43 1 62-22 108-20s77 26 98 69 84 69 219 70"
              strokeWidth="1.1"
              strokeOpacity=".55"
            />
            <path
              d="M-30 222C85 222 147 222 208 223c45 0 62-14 105-13s76 27 91 60 95 69 226 71"
              strokeWidth="1"
              strokeOpacity=".28"
            />
          </g>
          <g fill={brightGreen}>
            <circle cx="199" cy="190" r="3.5" />
            <circle cx="314" cy="155" r="3.5" />
            <circle cx="424" cy="239" r="3.5" />
          </g>
          <g stroke={brightGreen} fill="none" strokeWidth=".8" strokeOpacity=".65">
            <path d="M314 148V96h72m-191 94-28 58h-30m291-9 35-42h48" />
            <path d="M540 53h27m-13-13v27" />
            <circle cx="554" cy="53" r="18" strokeOpacity=".25" />
          </g>
          <text
            x="31"
            y="75"
            fill="#fff"
            fontFamily="Arial, Helvetica, sans-serif"
            fontWeight="900"
            fontSize="64"
            letterSpacing="-3"
          >
            ENS
          </text>
          <g fill={brightGreen} fontFamily="monospace" fontSize="9" letterSpacing="2">
            <text x="34" y="100">
              AIRFLOW RESEARCH
            </text>
            <text x="34" y="331">
              CFD / FLOW / GEOMETRY
            </text>
            <text x="390" y="99" fontSize="8">
              CFD
            </text>
          </g>
        </>
      )}

      {kind === 'drawn' && (
        <>
          <path fill="#f7f7f4" d="M0 0h600v360H0z" />
          <path d="M0 305h600v55H0z" fill={ink} />
          <g fill="none" stroke={green} strokeWidth=".8" strokeOpacity=".2">
            <path d="M321 64h232M321 110h232M321 156h232M321 202h232M321 248h232M342 48v219m46-219v219m46-219v219m46-219v219m46-219v219" />
            <circle cx="434" cy="155" r="115" strokeDasharray="3 6" />
          </g>
          <g stroke={ink} strokeLinejoin="round" strokeWidth="1.3">
            <path d="m359 91 11-11 72 65 70 70-12 13-72-67Z" fill={brightGreen} />
            <path d="m498 80 12 12-73 67-67 68-12-12 72-71Z" fill={brightGreen} />
            <path d="m434 111 22 18-4 62-18 10-18-10-4-62Z" fill="#f7f7f4" />
            <path d="m434 120 13 13-3 52-10 7-10-7-3-52Z" fill={green} fillOpacity=".12" />
            <path d="M421 143h26m-25 27h24m-12-46v64" fill="none" strokeWidth=".7" />
          </g>
          {[
            [364, 88],
            [504, 88],
            [364, 222],
            [504, 222],
          ].map(([cx, cy], index) => (
            <g key={index} transform={`translate(${cx} ${cy})`}>
              <circle r="43" fill={brightGreen} fillOpacity=".07" stroke={green} strokeWidth="1" />
              <circle r="32" fill="none" stroke={green} strokeWidth=".8" strokeDasharray="3 4" />
              <g
                transform={`rotate(${index % 2 === 0 ? -24 : 24})`}
                stroke={ink}
                strokeWidth="1.1"
                strokeLinejoin="round"
              >
                <path
                  d="M-5-3c-8-4-27-5-31-1-3 3 14 9 29 9L5 3c8 4 27 5 31 1 3-3-14-9-29-9Z"
                  fill={brightGreen}
                />
                <path
                  d="M-5 3c-4 8-5 27-1 31 3 3 9-14 9-29L5-3c4-8 5-27 1-31-3-3-9 14-9 29Z"
                  fill="#f7f7f4"
                />
                <circle r="6" fill={ink} />
                <circle r="2" fill={brightGreen} stroke="none" />
              </g>
            </g>
          ))}
          <g fill="none" stroke={ink} strokeWidth=".8">
            <path d="M364 28h140m-140-5v10m140-10v10M543 117l20 26v12h-26" />
            <path d="M329 270h210m-210-4v8m210-8v8" strokeOpacity=".35" />
          </g>
          <g
            fill={ink}
            fontFamily="Arial, Helvetica, sans-serif"
            fontWeight="900"
            fontSize="108"
            letterSpacing="-8"
          >
            <text x="26" y="127">
              DRA
            </text>
            <text x="25" y="225">
              WN.
            </text>
          </g>
          <path d="M34 246v35h247" fill="none" stroke={ink} strokeWidth=".8" strokeOpacity=".4" />
          <path
            d="M35 277c22 0 34-5 50-12s34-1 55-8 44-18 63-15 48 17 77-10"
            fill="none"
            stroke={green}
            strokeWidth="2"
          />
          <circle cx="203" cy="242" r="3" fill={green} />
          <g fill={ink} fontFamily="monospace" fontSize="8" letterSpacing="1.3">
            <text x="434" y="18" textAnchor="middle">
              LENGTH
            </text>
            <text x="535" y="173">
              ROTORS
            </text>
            <text x="34" y="238">
              SPEED
            </text>
          </g>
          <g fill="#fff" fontFamily="monospace" fontSize="9" letterSpacing="2">
            <text x="33" y="337">
              DESIGN → FLIGHT PERFORMANCE
            </text>
            <text x="567" y="337" textAnchor="end" fill={brightGreen}>
              DRAWN
            </text>
          </g>
        </>
      )}
    </svg>
  );
}
