import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { sounds } from '../utils/audio';
import { Cpu, Layout, Server, Wrench, CheckCircle, Zap, ShieldCheck } from 'lucide-react';

export default function MedBayScanner() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  const handleStartScan = () => {
    sounds.playMedbayScan();
    setIsScanning(true);
    setScanComplete(false);
    setScanProgress(0);

    let current = 0;
    const interval = setInterval(() => {
      current += 5;
      setScanProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setIsScanning(false);
        setScanComplete(true);
        sounds.playTaskComplete();
      }
    }, 120);
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return Layout;
      case 'Server': return Server;
      default: return Wrench;
    }
  };

  return (
    <section id="medbay" style={{ padding: '60px 20px', minHeight: '80vh' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Room Tag Header */}
        <div style={{ marginBottom: '24px' }}>
          <span className="room-tag" style={{ color: 'var(--c-lime)', borderColor: 'rgba(80, 239, 57, 0.3)' }}>
            <Cpu size={14} /> ROOM 02: MEDBAY BIO-SCANNER
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          alignItems: 'start'
        }}>

          {/* Left Column: Interactive Scanner Pad */}
          <div className="skeld-card" style={{ padding: '32px', textAlign: 'center', borderColor: 'rgba(80, 239, 57, 0.4)' }}>
            <h3 className="font-among" style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '8px' }}>
              MEDBAY DIAGNOSTIC SCAN
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '24px' }}>
              Step onto the scanner pad to run an in-depth technical skills diagnostic on Crewmate Aditya.
            </p>

            {/* Scanner Visual Container */}
            <div style={{
              position: 'relative',
              height: '240px',
              background: 'radial-gradient(circle, rgba(80,239,57,0.15) 0%, rgba(13,18,28,0.9) 70%)',
              border: '3px solid #1e293b',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              marginBottom: '24px'
            }}>
              
              {/* Laser Scanning Bar */}
              {isScanning && <div className="scanner-laser" />}

              {/* Pad Platform */}
              <div style={{
                width: '160px',
                height: '40px',
                borderRadius: '50%',
                background: isScanning ? '#50ef39' : '#1e293b',
                boxShadow: isScanning ? '0 0 30px #50ef39' : 'none',
                border: '3px solid #000',
                transition: 'all 0.3s ease',
                position: 'absolute',
                bottom: '30px'
              }} />

              {/* Standing Crewmate Avatar */}
              <div style={{
                position: 'relative',
                zIndex: 2,
                transform: 'scale(0.85)',
                filter: isScanning ? 'drop-shadow(0 0 15px #50ef39)' : 'none'
              }}>
                <svg viewBox="0 0 100 120" style={{ width: '90px', height: '110px' }}>
                  {/* Backpack */}
                  <path d="M15,40 L15,90 C15,95 20,95 25,95 L25,35 C20,35 15,35 15,40 Z" fill="#50ef39" stroke="#000" strokeWidth="4" />
                  {/* Body */}
                  <path d="M25,25 C25,10 75,10 75,25 L75,95 C75,105 60,110 50,110 C40,110 25,105 25,95 Z" fill="#50ef39" stroke="#000" strokeWidth="5" />
                  {/* Visor */}
                  <ellipse cx="65" cy="40" rx="20" ry="14" fill="#71d4ec" stroke="#000" strokeWidth="4" />
                </svg>
              </div>

              {/* Status Message Overlay */}
              <div style={{
                position: 'absolute',
                top: '15px',
                fontFamily: 'var(--font-among)',
                fontSize: '0.85rem',
                color: scanComplete ? '#50ef39' : (isScanning ? '#38fedc' : '#94a3b8')
              }}>
                {isScanning && `SCANNING BIOMETRICS... ${scanProgress}%`}
                {scanComplete && `✔ DIAGNOSTIC 100% COMPLETE: CLEAN CODE DETECTED`}
                {!isScanning && !scanComplete && `SCANNER READY`}
              </div>
            </div>

            {/* Start Scan Button */}
            <button
              onClick={handleStartScan}
              disabled={isScanning}
              className="btn-among"
              style={{
                width: '100%',
                justifyContent: 'center',
                background: isScanning ? '#334155' : 'linear-gradient(180deg, #50ef39 0%, #2aa01d 100%)',
                color: '#082104',
                cursor: isScanning ? 'not-allowed' : 'pointer'
              }}
            >
              <Zap size={20} />
              {isScanning ? `SCANNING (${scanProgress}%)...` : 'START BIO-SCAN'}
            </button>

            {scanComplete && (
              <div style={{
                marginTop: '16px',
                padding: '12px',
                borderRadius: '12px',
                background: 'rgba(80,239,57,0.15)',
                border: '1px solid #50ef39',
                color: '#50ef39',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }} className="font-among">
                <ShieldCheck size={18} />
                VERIFIED: CREWMATE ADITYA IS 100% SUITED FOR SENIOR ROLES
              </div>
            )}
          </div>

          {/* Right Column: Skills Breakdown Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {skillsData.map((cat, idx) => {
              const IconComponent = getIcon(cat.icon);
              return (
                <div
                  key={idx}
                  className="skeld-card"
                  style={{
                    padding: '24px',
                    borderColor: 'rgba(255,255,255,0.1)'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '16px'
                  }}>
                    <div style={{
                      padding: '8px',
                      borderRadius: '10px',
                      background: cat.color + '25',
                      border: '2px solid ' + cat.color,
                      color: cat.color
                    }}>
                      <IconComponent size={20} />
                    </div>
                    <h4 className="font-among" style={{ fontSize: '1.2rem', color: '#ffffff' }}>
                      {cat.category.toUpperCase()}
                    </h4>
                  </div>

                  {/* Skills List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {cat.skills.map((s, sIdx) => (
                      <div key={sIdx}>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '6px'
                        }}>
                          <span style={{ fontWeight: 600, color: '#e2e8f0', fontSize: '0.95rem' }}>
                            {s.name}
                          </span>
                          <span className="font-among" style={{ color: cat.color, fontSize: '0.85rem' }}>
                            {s.level}% MASTERED
                          </span>
                        </div>

                        {/* Progress Meter Bar */}
                        <div style={{
                          height: '10px',
                          background: '#0f172a',
                          borderRadius: '6px',
                          border: '1.5px solid #1e293b',
                          overflow: 'hidden',
                          marginBottom: '4px'
                        }}>
                          <div style={{
                            height: '100%',
                            width: (scanComplete ? s.level : Math.min(s.level, scanProgress)) + '%',
                            background: `linear-gradient(90deg, ${cat.color} 0%, #ffffff 100%)`,
                            borderRadius: '6px',
                            transition: 'width 0.4s ease'
                          }} />
                        </div>

                        <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                          {s.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
