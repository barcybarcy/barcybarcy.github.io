export default function FlowGraphic() {
  return (
    <div
      className="flow-graphic"
      aria-label="AI, 소프트웨어, 엔지니어링을 연결하는 개념 일러스트"
      role="img"
    >
      <div className="flow-grid" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <svg className="flow-lines" viewBox="0 0 500 470" fill="none" aria-hidden="true">
        <path d="M108 122C108 206 250 153 250 231S381 269 381 348" />
        <path d="M384 117C384 207 250 168 250 231S115 264 115 352" />
        <path d="M250 71V397" className="flow-line-soft" />
        <circle cx="250" cy="231" r="120" className="flow-line-soft" />
        <circle className="flow-dot" r="4">
          <animateMotion
            dur="9s"
            repeatCount="indefinite"
            path="M108 122C108 206 250 153 250 231S381 269 381 348"
          />
        </circle>
      </svg>
      <div className="flow-node node-ai">
        <span className="node-icon">✳</span>
        <span>
          AI & ML<small>intelligence</small>
        </span>
        <i />
      </div>
      <div className="flow-node node-web">
        <span className="code-icon">&lt;/&gt;</span>
        <span>
          Software<small>experience</small>
        </span>
      </div>
      <div className="flow-center">
        <svg viewBox="0 0 90 90" aria-hidden="true">
          <path d="M63 23H36a15 15 0 0 0 0 30h17a10 10 0 0 1 0 20H25" />
          <circle cx="71" cy="73" r="5" />
        </svg>
      </div>
      <div className="flow-node node-engineering">
        <span className="node-icon engineering-icon">⌘</span>
        <span>
          Engineering<small>understanding</small>
        </span>
      </div>
      <div className="flow-caption">
        <span className="live-dot" /> CONNECTING THE DOTS
      </div>
      <span className="graphic-coordinate coordinate-top">[ IDEAS IN ]</span>
      <span className="graphic-coordinate coordinate-bottom">[ IMPACT OUT ]</span>
      <div className="tiny-cross cross-one">+</div>
      <div className="tiny-cross cross-two">+</div>
    </div>
  );
}
