import React, { useState } from 'react';
import { experienceData, educationData } from '../data/portfolioData';
import { sounds } from '../utils/audio';
import { Shield, Video, Award, GraduationCap, Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function SecurityMonitors() {
  const [activeCam, setActiveCam] = useState('CAM 01');

  const handleCamSwitch = (cam) => {
    sounds.playClick();
    setActiveCam(cam);
  };

  const selectedExp = experienceData.find(e => e.camera === activeCam) || experienceData[0];

  return (
    <section id="security" style={{ padding: '60px 20px', minHeight: '80vh' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Room Tag Header */}
        <div style={{ marginBottom: '24px' }}>
          <span className="room-tag" style={{ color: 'var(--c-pink)', borderColor: 'rgba(237, 84, 186, 0.3)' }}>
            <Shield size={14} /> ROOM 04: SECURITY CCTV MONITORS (EXPERIENCE & EDUCATION)
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          alignItems: 'start'
        }}>

          {/* Left Column: CCTV Camera Selection Desk */}
          <div>
            <h2 className="font-among" style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '12px' }}>
              SURVEILLANCE LOGS
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem', marginBottom: '28px', lineHeight: '1.6' }}>
              Switch camera feeds to inspect Aditya's work history, educational achievements, and open-source contributions across Skeld sectors.
            </p>

            {/* Camera Switcher Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {experienceData.map((exp) => (
                <button
                  key={exp.camera}
                  onClick={() => handleCamSwitch(exp.camera)}
                  className="font-among"
                  style={{
                    padding: '16px 20px',
                    borderRadius: '16px',
                    border: activeCam === exp.camera ? '3px solid var(--c-pink)' : '2px solid #1e293b',
                    background: activeCam === exp.camera ? 'rgba(237, 84, 186, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                    color: activeCam === exp.camera ? 'var(--c-pink)' : '#cbd5e1',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    boxShadow: activeCam === exp.camera ? '0 0 20px rgba(237, 84, 186, 0.2)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Video size={20} color={activeCam === exp.camera ? 'var(--c-pink)' : '#64748b'} />
                    <div>
                      <div style={{ fontSize: '1.05rem', color: '#ffffff' }}>{exp.camera}: {exp.company}</div>
                      <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'none' }}>{exp.role}</div>
                    </div>
                  </div>
                  <span style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: activeCam === exp.camera ? '#50ef39' : '#475569',
                    boxShadow: activeCam === exp.camera ? '0 0 10px #50ef39' : 'none'
                  }} />
                </button>
              ))}

              {/* Education Feed Button */}
              <button
                onClick={() => handleCamSwitch('CAM 04')}
                className="font-among"
                style={{
                  padding: '16px 20px',
                  borderRadius: '16px',
                  border: activeCam === 'CAM 04' ? '3px solid var(--c-pink)' : '2px solid #1e293b',
                  background: activeCam === 'CAM 04' ? 'rgba(237, 84, 186, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                  color: activeCam === 'CAM 04' ? 'var(--c-pink)' : '#cbd5e1',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textAlign: 'left',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <GraduationCap size={20} color={activeCam === 'CAM 04' ? 'var(--c-pink)' : '#64748b'} />
                  <div>
                    <div style={{ fontSize: '1.05rem', color: '#ffffff' }}>CAM 04: ACADEMIC SECTOR</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'none' }}>Education & Degree</div>
                  </div>
                </div>
                <span style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: activeCam === 'CAM 04' ? '#50ef39' : '#475569'
                }} />
              </button>
            </div>
          </div>

          {/* Right Column: CCTV Monitor Screen */}
          <div className="skeld-card" style={{
            padding: '24px',
            border: '4px solid #0f172a',
            background: '#04070c',
            boxShadow: '0 0 30px rgba(0,0,0,0.9), inset 0 0 50px rgba(0,0,0,0.8)'
          }}>
            {/* Monitor Top Bar */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: '14px',
              borderBottom: '2px solid #1e293b',
              marginBottom: '20px'
            }}>
              <div className="font-among" style={{ color: '#ef4444', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', animation: 'pulseEmergency 1s infinite' }} />
                REC • LIVE CCTV FEED [{activeCam}]
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }} className="font-among">
                FPS: 60 • SKELD SECURITY SYSTEM
              </div>
            </div>

            {/* Screen Content Feed */}
            {activeCam !== 'CAM 04' ? (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <Briefcase size={20} color="var(--c-cyan)" />
                  <h3 className="font-among" style={{ fontSize: '1.4rem', color: '#ffffff' }}>
                    {selectedExp.role}
                  </h3>
                </div>

                <div style={{ display: 'flex', gap: '16px', color: 'var(--c-pink)', fontSize: '0.9rem', marginBottom: '20px', fontWeight: 600 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={14} /> {selectedExp.company} ({selectedExp.location})
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={14} /> {selectedExp.period}
                  </span>
                </div>

                <div style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '16px' }}>
                  <div className="font-among" style={{ color: '#94a3b8', marginBottom: '10px' }}>
                    KEY ACHIEVEMENTS & CONTRIBUTIONS:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {selectedExp.achievements.map((ach, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', lineHeight: '1.6' }}>
                        <CheckCircle2 size={16} color="var(--c-lime)" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              /* Education Feed */
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <GraduationCap size={22} color="var(--c-cyan)" />
                  <h3 className="font-among" style={{ fontSize: '1.4rem', color: '#ffffff' }}>
                    {educationData[0].degree}
                  </h3>
                </div>

                <div style={{ display: 'flex', gap: '16px', color: 'var(--c-pink)', fontSize: '0.9rem', marginBottom: '20px', fontWeight: 600 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={14} /> {educationData[0].institution}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={14} /> {educationData[0].period}
                  </span>
                </div>

                <p style={{ color: '#cbd5e1', lineHeight: '1.7', fontSize: '0.95rem' }}>
                  {educationData[0].details}
                </p>
              </div>
            )}

            {/* Bottom Monitor Scanline Grid Overlay */}
            <div className="scanlines font-among" style={{
              height: '80px',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.05)',
              marginTop: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#334155',
              fontSize: '0.75rem'
            }}>
              SURVEILLANCE METRICS VALIDATION STAMP • ZERO ANOMALIES FOUND
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
