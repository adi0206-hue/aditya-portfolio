import React, { useState } from 'react';
import { Volume2, VolumeX, AlertTriangle, Radio, Shield, LayoutGrid, Cpu, Compass, ArrowDownUp } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function Navbar({ activeRoom, setActiveRoom, onTriggerEmergency }) {
  const [isMuted, setIsMuted] = useState(false);

  const rooms = [
    { id: 'bridge', label: 'Command Bridge', icon: Compass },
    { id: 'medbay', label: 'MedBay Bio-Scan', icon: Cpu },
    { id: 'tasks', label: 'Admin Task Log', icon: LayoutGrid },
    { id: 'security', label: 'Security CCTV', icon: Shield },
    { id: 'comms', label: 'Comms Station', icon: Radio },
  ];

  const handleNavClick = (id) => {
    sounds.playClick();
    setActiveRoom(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleMute = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
  };

  const handleVentShortcut = () => {
    sounds.playVentSlide();
    const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
    window.scrollTo({
      top: isAtBottom ? 0 : document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      padding: '12px 24px',
      background: 'rgba(11, 14, 20, 0.9)',
      backdropFilter: 'blur(16px)',
      borderBottom: '3px solid #1e293b',
      boxShadow: '0 8px 32px rgba(0,0,0,0.6)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        {/* Left Branding */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #c51111 0%, #7a0808 100%)',
            border: '2px solid #000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'content',
            boxShadow: '0 4px 0 #000'
          }}>
            <svg viewBox="0 0 100 100" style={{ width: '28px', height: '28px', margin: 'auto' }}>
              <path d="M30,20 C30,10 70,10 70,20 L70,75 C70,85 60,90 50,90 C40,90 30,85 30,75 Z" fill="#c51111" stroke="#000" strokeWidth="6" />
              <ellipse cx="65" cy="35" rx="18" ry="12" fill="#71d4ec" stroke="#000" strokeWidth="5" />
            </svg>
          </div>

          <div>
            <div className="font-among" style={{ fontSize: '1.25rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
              ADITYA <span style={{ color: 'var(--c-cyan)', fontSize: '0.85rem' }}>// CREWMATE DEV</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#50ef39', boxShadow: '0 0 8px #50ef39' }}></span>
              SKELD HQ TERMINAL • ALL SYSTEMS NOMINAL
            </div>
          </div>
        </div>

        {/* Center Room Tabs */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', overflowX: 'auto', padding: '4px' }}>
          {rooms.map((room) => {
            const Icon = room.icon;
            const isActive = activeRoom === room.id;
            return (
              <button
                key={room.id}
                onClick={() => handleNavClick(room.id)}
                className="font-among"
                style={{
                  padding: '8px 14px',
                  borderRadius: '10px',
                  border: isActive ? '2px solid var(--c-cyan)' : '2px solid transparent',
                  background: isActive ? 'rgba(56, 254, 220, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  color: isActive ? 'var(--c-cyan)' : '#94a3b8',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={16} />
                {room.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Audio Mute Toggle */}
          <button
            onClick={handleToggleMute}
            title={isMuted ? "Unmute Audio" : "Mute Sound FX"}
            style={{
              padding: '10px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '2px solid #334155',
              color: isMuted ? '#ef4444' : 'var(--c-cyan)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          {/* Vent Quick Teleport */}
          <button
            onClick={handleVentShortcut}
            title="Vent Teleport (Jump Top / Bottom)"
            style={{
              padding: '10px 14px',
              borderRadius: '12px',
              background: 'rgba(107, 47, 187, 0.2)',
              border: '2px solid #6b2fbb',
              color: '#ed54ba',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.85rem',
              fontWeight: 600
            }}
            className="font-among"
          >
            <ArrowDownUp size={16} />
            VENT
          </button>

          {/* Emergency Meeting CTA */}
          <button
            onClick={() => {
              sounds.playEmergencySiren();
              onTriggerEmergency();
            }}
            className="btn-among btn-emergency"
            style={{ padding: '8px 16px', fontSize: '0.85rem' }}
          >
            <AlertTriangle size={16} />
            EMERGENCY MEETING
          </button>
        </div>
      </div>
    </header>
  );
}
