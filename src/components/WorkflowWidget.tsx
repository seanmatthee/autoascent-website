'use client'

import { useEffect, useState, useRef } from 'react'

type StepType = 'trigger' | 'filter' | 'action'

interface Step {
  id: string
  type: StepType
  app: string
  event: string
  icon: React.ReactNode
}

const BoltIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)
const FilterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
)
const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)
const DbIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
)
const BellIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
)
const CalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)
const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const STEPS: Step[] = [
  { id: 'trigger', type: 'trigger', app: 'AutoAscent CRM',  event: 'New Lead Captured',   icon: <BoltIcon /> },
  { id: 'filter',  type: 'filter',  app: 'Filter',          event: 'Qualify Lead Score',  icon: <FilterIcon /> },
  { id: 'email',   type: 'action',  app: 'Gmail',           event: 'Send Welcome Email',  icon: <MailIcon /> },
  { id: 'crm',     type: 'action',  app: 'Pipeline',        event: 'Create Deal Record',  icon: <DbIcon /> },
  { id: 'notify',  type: 'action',  app: 'Slack',           event: 'Notify Sales Rep',    icon: <BellIcon /> },
  { id: 'cal',     type: 'action',  app: 'Google Calendar', event: 'Schedule Follow-up',  icon: <CalIcon /> },
]

const STEP_MS  = 1100
const RESET_MS = 1800
const CONN_H   = 32
const DOT_SPEED = 700

export default function WorkflowWidget() {
  const [active,    setActive]    = useState<number>(0)
  const [completed, setCompleted] = useState<Set<number>>(new Set())
  const [dotPos,    setDotPos]    = useState<number[]>(Array(STEPS.length - 1).fill(0))
  const rafRef  = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    startRef.current = performance.now()
    const tick = (now: number) => {
      const t = ((now - startRef.current) / DOT_SPEED) % 1
      setDotPos(Array(STEPS.length - 1).fill(0).map((_, i) => ((t + i * 0.18) % 1)))
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  useEffect(() => {
    let stepIndex = 0
    let timeout: ReturnType<typeof setTimeout>
    const runStep = () => {
      setActive(stepIndex)
      setCompleted(prev => {
        const next = new Set(prev)
        if (stepIndex > 0) next.add(stepIndex - 1)
        return next
      })
      if (stepIndex < STEPS.length - 1) {
        stepIndex++
        timeout = setTimeout(runStep, STEP_MS)
      } else {
        timeout = setTimeout(() => {
          stepIndex = 0
          setActive(0)
          setCompleted(new Set())
          timeout = setTimeout(runStep, 200)
        }, RESET_MS)
      }
    }
    timeout = setTimeout(runStep, 400)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <style>{`
        @keyframes aa-pulse { 0% { transform:scale(1); opacity:0.55; } 100% { transform:scale(2); opacity:0; } }
        @keyframes aa-check { 0% { transform:scale(0) rotate(-10deg); opacity:0; } 60% { transform:scale(1.15) rotate(2deg); opacity:1; } 100% { transform:scale(1) rotate(0deg); opacity:1; } }
        @keyframes aa-spin  { to { transform:rotate(360deg); } }
        @keyframes aa-live  { 0%,100% { opacity:1; } 50% { opacity:0.35; } }
        @media (prefers-reduced-motion:reduce) { [data-aa] { animation:none !important; transition:none !important; } }
      `}</style>
      <aside
        data-aa
        aria-label="AutoAscent workflow automation preview"
        style={{
          width:'100%', maxWidth:300,
          background:'#FFFFFF',
          border:'1px solid #E5E7EB',
          borderRadius:16,
          padding:'16px 16px 20px',
          boxShadow:'0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)',
          fontFamily:'"Plus Jakarta Sans","Inter",system-ui,sans-serif',
          userSelect:'none',
        }}
      >
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:16, paddingBottom:12, borderBottom:'1px solid #F3F4F6' }}>
          <span style={{ fontSize:11, fontWeight:700, color:'#111827', letterSpacing:'-0.01em' }}>Automation</span>
          <span style={{ display:'inline-flex', alignItems:'center', gap:5, background:'#F0FDF4', border:'1px solid #BBF7D0', borderRadius:100, padding:'2px 8px' }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'#22C55E', flexShrink:0, animation:'aa-live 1.4s ease-in-out infinite' }} />
            <span style={{ fontSize:10, fontWeight:700, color:'#16A34A', letterSpacing:'0.06em' }}>LIVE</span>
          </span>
        </div>

        {STEPS.map((step, i) => {
          const isActive    = active === i
          const isCompleted = completed.has(i)
          return (
            <div key={step.id}>
              <div style={{ display:'flex', alignItems:'center', gap:10, padding:'8px 10px', borderRadius:10, background: isActive ? '#F0FDF4' : isCompleted ? '#FAFFFE' : 'transparent', border:`1px solid ${isActive ? '#86EFAC' : isCompleted ? '#D1FAE5' : 'transparent'}`, transition:'background 0.3s, border-color 0.3s' }}>
                <div style={{ position:'relative', flexShrink:0 }}>
                  {isActive && <div style={{ position:'absolute', inset:-3, borderRadius:'50%', border:'1.5px solid #22C55E', animation:'aa-pulse 1.2s ease-out infinite' }} />}
                  <div style={{ width:30, height:30, borderRadius:'50%', background: isActive ? '#22C55E' : isCompleted ? '#DCFCE7' : '#F3F4F6', display:'flex', alignItems:'center', justifyContent:'center', color: isActive ? '#fff' : isCompleted ? '#16A34A' : '#9CA3AF', transition:'background 0.3s, color 0.3s', flexShrink:0 }}>
                    {step.icon}
                  </div>
                </div>
                <div style={{ flex:1, minWidth:0, overflow:'hidden' }}>
                  <p style={{ fontSize:9, fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase', color: isActive ? '#16A34A' : '#9CA3AF', margin:0, marginBottom:1, transition:'color 0.3s' }}>{step.app}</p>
                  <p style={{ fontSize:12, fontWeight:600, color: isActive ? '#0A0A0A' : isCompleted ? '#374151' : '#6B7280', margin:0, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', transition:'color 0.3s', letterSpacing:'-0.01em' }}>{step.event}</p>
                </div>
                <div style={{ flexShrink:0, width:18, display:'flex', alignItems:'center', justifyContent:'center' }}>
                  {isCompleted ? (
                    <div style={{ width:18, height:18, borderRadius:'50%', background:'#22C55E', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', animation:'aa-check 0.3s cubic-bezier(0.34,1.56,0.64,1) both' }}><CheckIcon /></div>
                  ) : isActive ? (
                    <div style={{ width:14, height:14, borderRadius:'50%', border:'2px solid #BBF7D0', borderTopColor:'#22C55E', animation:'aa-spin 0.7s linear infinite' }} />
                  ) : (
                    <div style={{ width:7, height:7, borderRadius:'50%', background:'#E5E7EB' }} />
                  )}
                </div>
              </div>
              {i < STEPS.length - 1 && (
                <div style={{ position:'relative', height:CONN_H, width:2, marginLeft:24 }}>
                  <div style={{ position:'absolute', top:0, bottom:0, left:0, width:2, background: (isCompleted || active > i) ? 'repeating-linear-gradient(to bottom,#22C55E 0px,#22C55E 4px,transparent 4px,transparent 9px)' : 'repeating-linear-gradient(to bottom,#E5E7EB 0px,#E5E7EB 4px,transparent 4px,transparent 9px)', transition:'background 0.4s', borderRadius:1 }} />
                  <div style={{ position:'absolute', left:'50%', top:`${dotPos[i]*100}%`, transform:'translate(-50%,-50%)', width:7, height:7, borderRadius:'50%', background:'#22C55E', boxShadow:'0 0 0 2.5px #DCFCE7', opacity:(isCompleted || active > i) ? 1 : 0.25, transition:'opacity 0.4s', zIndex:1 }} />
                </div>
              )}
            </div>
          )
        })}
      </aside>
    </>
  )
}
