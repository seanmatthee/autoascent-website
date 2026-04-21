'use client'

export default function AnimatedLogo() {
  return (
    <>
      <style>{`
        @keyframes al-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes al-pulse-sm {
          0%, 100% { r: 8;  opacity: 1; }
          50%       { r: 10; opacity: 0.85; }
        }
        @keyframes al-pulse-md {
          0%, 100% { r: 11;  opacity: 1; }
          50%       { r: 13; opacity: 0.85; }
        }
        @keyframes al-pulse-lg {
          0%, 100% { r: 15;  opacity: 1; }
          50%       { r: 17; opacity: 0.85; }
        }
        @keyframes al-ring-sm {
          0%   { r: 8;  opacity: 0.6; }
          100% { r: 22; opacity: 0; }
        }
        @keyframes al-ring-md {
          0%   { r: 11; opacity: 0.6; }
          100% { r: 28; opacity: 0; }
        }
        @keyframes al-ring-lg {
          0%   { r: 15; opacity: 0.6; }
          100% { r: 36; opacity: 0; }
        }
        @keyframes al-dash {
          0%   { stroke-dashoffset: 60; opacity: 0.3; }
          50%  { stroke-dashoffset: 0;  opacity: 1;   }
          100% { stroke-dashoffset: 60; opacity: 0.3; }
        }
        @keyframes al-wordmark {
          0%, 100% { opacity: 0.85; }
          50%       { opacity: 1;   }
        }
        @keyframes al-dot-travel-1 {
          0%   { offset-distance: 0%;   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes al-dot-travel-2 {
          0%   { offset-distance: 0%;   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-al] * { animation: none !important; }
        }
      `}</style>

      <div
        data-al
        aria-label="AutoAscent animated logo"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          padding: '32px',
          background: '#fff',
          border: '2px solid #000',
          borderRadius: '16px',
          boxShadow: '6px 6px 0px #000',
          width: '100%',
          maxWidth: '300px',
          animation: 'al-float 4s ease-in-out infinite',
        }}
      >
        {/* SVG Icon Mark */}
        <svg
          width="160"
          height="160"
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Line 1 — small to mid node */}
          <line
            x1="40" y1="120"
            x2="80" y2="80"
            stroke="#63CF6F"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="60"
            style={{ animation: 'al-dash 2.4s ease-in-out infinite' }}
          />
          {/* Line 2 — mid to large node */}
          <line
            x1="80" y1="80"
            x2="120" y2="40"
            stroke="#63CF6F"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="60"
            style={{ animation: 'al-dash 2.4s ease-in-out infinite 0.4s' }}
          />

          {/* Pulse rings — small node */}
          <circle cx="40" cy="120" r="8" fill="none" stroke="#63CF6F" strokeWidth="1.5"
            style={{ animation: 'al-ring-sm 2s ease-out infinite 0s' }} />
          {/* Pulse rings — mid node */}
          <circle cx="80" cy="80" r="11" fill="none" stroke="#63CF6F" strokeWidth="1.5"
            style={{ animation: 'al-ring-md 2s ease-out infinite 0.5s' }} />
          {/* Pulse rings — large node */}
          <circle cx="120" cy="40" r="15" fill="none" stroke="#63CF6F" strokeWidth="1.5"
            style={{ animation: 'al-ring-lg 2s ease-out infinite 1s' }} />

          {/* Filled nodes */}
          <circle cx="40" cy="120" r="8"  fill="#63CF6F"
            style={{ animation: 'al-pulse-sm 2.4s ease-in-out infinite 0s' }} />
          <circle cx="80" cy="80"  r="11" fill="#63CF6F"
            style={{ animation: 'al-pulse-md 2.4s ease-in-out infinite 0.3s' }} />
          <circle cx="120" cy="40" r="15" fill="#63CF6F"
            style={{ animation: 'al-pulse-lg 2.4s ease-in-out infinite 0.6s' }} />

          {/* Inner white dots */}
          <circle cx="40"  cy="120" r="3.2" fill="#fff" />
          <circle cx="80"  cy="80"  r="4.4" fill="#fff" />
          <circle cx="120" cy="40"  r="6"   fill="#fff" />
        </svg>

        {/* Wordmark */}
        <div style={{
          fontFamily: 'var(--font-outfit)',
          fontWeight: 800,
          fontSize: '28px',
          letterSpacing: '-0.03em',
          color: '#0F0F0F',
          lineHeight: 1,
          animation: 'al-wordmark 4s ease-in-out infinite',
        }}>
          Auto<span style={{ color: '#63CF6F' }}>Ascent</span>
        </div>
      </div>
    </>
  )
}
