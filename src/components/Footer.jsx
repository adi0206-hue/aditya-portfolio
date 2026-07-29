import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { sounds } from '../utils/audio';
import { Rocket, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const [ejected, setEjected] = useState(false);

  const handleEject = () => {
    sounds.playVentSlide();
    setEjected(true);
    setTimeout(() => {
      setEjected(false);
    }, 4500);
  };

  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#07090e',
      borderTop: '3px solid #1e293b',
      padding: '50px 20px 30px 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Ejected Animation Banner */}
      {ejected && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.95)',
          zIndex: 50,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px'
        }} className="font-among">
          <div style={{
            fontSize: '1.4rem',
            color: '#ffffff',
            textAlign: 'center',
            letterSpacing: '1px'
          }}>
            BUG IMPOSTOR WAS EJECTED.
          </div>
          <div style={{ fontSize: '1rem', color: '#50ef39' }}>
            0 IMPOSTORS REMAIN ON CREWMATE ADITYA'S TEAM.
          </div>
          {/* Floating silhouette */}
          <div className="float-anim" style={{ fontSize: '3rem' }}>
            🛸 👾
          </div>
        </div>
      )}

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        textAlign: 'center'
      }}>

        {/* Eject Easter Egg Button */}
        <button
          onClick={handleEject}
          className="btn-among btn-secondary"
          style={{ padding: '8px 16px', fontSize: '0.8rem' }}
        >
          <Rocket size={16} /> EJECT BUGS IN SPACE
        </button>

        <div className="font-among" style={{ fontSize: '1.3rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
          ADITYA <span style={{ color: 'var(--c-cyan)', fontSize: '0.85rem' }}>// FULL-STACK ENGINEER</span>
        </div>

        <p style={{ color: '#64748b', fontSize: '0.85rem', maxWidth: '480px', lineHeight: '1.6' }}>
          Built with React, Vite & Web Audio API. Inspired by Among Us by InnerSloth. Designed to wow recruiters and showcase software engineering craftsmanship.
        </p>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--c-cyan)',
            cursor: 'pointer',
            fontSize: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
          className="font-among"
        >
          <ArrowUp size={16} /> RETURN TO COMMAND BRIDGE
        </button>

        <div style={{ fontSize: '0.75rem', color: '#475569', borderTop: '1px solid #1e293b', width: '100%', paddingTop: '20px' }}>
          © {new Date().getFullYear()} Aditya. All rights reserved. • Skeld Station Operations.
        </div>

      </div>
    </footer>
  );
}
