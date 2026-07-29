import React, { useState } from 'react';
import { personalInfo, crewmateColors, crewmateHats, crewmatePets } from '../data/portfolioData';
import { sounds } from '../utils/audio';
import { AlertTriangle, Play, Sparkles, Terminal, Code2, Cpu, CheckCircle2 } from 'lucide-react';

export default function HeroBridge({ onTriggerEmergency, onNavigateRoom }) {
  const [selectedColor, setSelectedColor] = useState(crewmateColors[0]);
  const [selectedHat, setSelectedHat] = useState(crewmateHats[1]); // Headphones
  const [selectedPet, setSelectedPet] = useState(crewmatePets[1]); // Mini crewmate

  const handleColorChange = (c) => {
    sounds.playClick();
    setSelectedColor(c);
  };

  const handleHatChange = (h) => {
    sounds.playClick();
    setSelectedHat(h);
  };

  const handlePetChange = (p) => {
    sounds.playClick();
    setSelectedPet(p);
  };

  return (
    <section id="bridge" style={{ padding: '60px 20px', minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
        
        {/* Room Header Tag */}
        <div style={{ marginBottom: '24px' }}>
          <span className="room-tag">
            <Terminal size={14} /> ROOM 01: COMMAND BRIDGE
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>

          {/* Left Column: Hero Text & Information */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '20px',
              background: 'rgba(255, 42, 42, 0.15)',
              border: '2px solid rgba(255, 42, 42, 0.4)',
              color: '#ff5c5c',
              fontSize: '0.85rem',
              fontWeight: 700,
              marginBottom: '20px'
            }} className="font-among">
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff2a2a', animation: 'pulseEmergency 1.5s infinite' }}></span>
              {personalInfo.tagline}
            </div>

            <h1 className="font-among" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              lineHeight: 1.1,
              color: '#ffffff',
              marginBottom: '16px',
              textShadow: '0 4px 20px rgba(0,0,0,0.8)'
            }}>
              HI, I'M <span style={{ color: selectedColor.hex, transition: 'color 0.3s ease' }}>{personalInfo.name}</span>.
            </h1>

            <h2 style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              color: 'var(--c-cyan)',
              fontWeight: 600,
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <Code2 size={24} /> {personalInfo.role}
            </h2>

            <p style={{
              color: '#94a3b8',
              fontSize: '1.05rem',
              maxWidth: '560px',
              marginBottom: '32px',
              lineHeight: 1.7
            }}>
              {personalInfo.bio}
            </p>

            {/* Quick Action Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <button
                onClick={() => {
                  sounds.playEmergencySiren();
                  onTriggerEmergency();
                }}
                className="btn-among btn-emergency"
              >
                <AlertTriangle size={20} />
                CALL EMERGENCY MEETING
              </button>

              <button
                onClick={() => onNavigateRoom('tasks')}
                className="btn-among btn-primary"
              >
                <Play size={18} />
                INSPECT TASKS (PROJECTS)
              </button>

              <button
                onClick={() => onNavigateRoom('medbay')}
                className="btn-among btn-secondary"
              >
                <Cpu size={18} />
                MEDBAY SCAN
              </button>
            </div>

            {/* Quick Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '16px',
              background: 'rgba(15, 23, 42, 0.6)',
              padding: '20px',
              borderRadius: '16px',
              border: '2px solid #1e293b'
            }}>
              <div>
                <div className="font-among" style={{ fontSize: '1.6rem', color: 'var(--c-cyan)' }}>
                  {personalInfo.stats.projectsCompleted}+
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Tasks (Projects)</div>
              </div>
              <div>
                <div className="font-among" style={{ fontSize: '1.6rem', color: 'var(--c-lime)' }}>
                  {personalInfo.stats.codeCommits}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>GitHub Commits</div>
              </div>
              <div>
                <div className="font-among" style={{ fontSize: '1.6rem', color: 'var(--c-pink)' }}>
                  {personalInfo.stats.impostorsCaught}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Bug Ejection Rate</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Crewmate Customizer */}
          <div className="skeld-card" style={{ padding: '32px', textAlign: 'center' }}>
            <div className="font-among" style={{
              fontSize: '1.1rem',
              color: '#ffffff',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              <Sparkles size={18} color="var(--c-cyan)" /> CREWMATE AVATAR CUSTOMIZER
            </div>

            {/* Crewmate Vector Visualizer */}
            <div style={{
              position: 'relative',
              width: '220px',
              height: '240px',
              margin: '0 auto 24px auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }} className="float-anim">
              
              {/* Backpack */}
              <div style={{
                position: 'absolute',
                left: '25px',
                top: '65px',
                width: '45px',
                height: '110px',
                background: selectedColor.hex,
                border: '5px solid #000',
                borderRadius: '20px 0 0 20px',
                boxShadow: 'inset -5px -5px 0 ' + selectedColor.darkHex
              }} />

              {/* Body */}
              <div style={{
                position: 'absolute',
                left: '60px',
                top: '40px',
                width: '120px',
                height: '165px',
                background: selectedColor.hex,
                border: '6px solid #000',
                borderRadius: '60px 60px 30px 30px',
                boxShadow: 'inset -12px -12px 0 ' + selectedColor.darkHex,
                zIndex: 2
              }}>
                {/* Visor */}
                <div style={{
                  position: 'absolute',
                  right: '10px',
                  top: '25px',
                  width: '75px',
                  height: '45px',
                  background: selectedColor.visorHex || 'var(--c-visor)',
                  border: '5px solid #000',
                  borderRadius: '30px',
                  boxShadow: 'inset 0 6px 0 rgba(255,255,255,0.7), inset -4px -4px 0 rgba(0,0,0,0.3)',
                  overflow: 'hidden'
                }}>
                  {/* Visor Sheen */}
                  <div style={{
                    position: 'absolute',
                    top: '4px',
                    left: '12px',
                    width: '30px',
                    height: '12px',
                    background: 'rgba(255,255,255,0.8)',
                    borderRadius: '10px',
                    transform: 'rotate(-10deg)'
                  }} />
                </div>
              </div>

              {/* Legs */}
              <div style={{
                position: 'absolute',
                left: '70px',
                bottom: '15px',
                width: '35px',
                height: '35px',
                background: selectedColor.hex,
                border: '5px solid #000',
                borderRadius: '0 0 16px 16px',
                boxShadow: 'inset -4px -4px 0 ' + selectedColor.darkHex,
                zIndex: 1
              }} />

              <div style={{
                position: 'absolute',
                right: '55px',
                bottom: '15px',
                width: '35px',
                height: '35px',
                background: selectedColor.hex,
                border: '5px solid #000',
                borderRadius: '0 0 16px 16px',
                boxShadow: 'inset -4px -4px 0 ' + selectedColor.darkHex,
                zIndex: 1
              }} />

              {/* Selected Hat Overlay */}
              {selectedHat.id !== 'none' && (
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  left: '50%',
                  transform: 'translateX(-5%)',
                  fontSize: '2.5rem',
                  zIndex: 10,
                  filter: 'drop-shadow(0 4px 0 #000)'
                }}>
                  {selectedHat.icon}
                </div>
              )}

              {/* Selected Pet Overlay */}
              {selectedPet.id !== 'none' && (
                <div style={{
                  position: 'absolute',
                  right: '-10px',
                  bottom: '15px',
                  fontSize: '2rem',
                  zIndex: 12,
                  filter: 'drop-shadow(0 3px 0 #000)'
                }}>
                  {selectedPet.icon}
                </div>
              )}
            </div>

            {/* Selector Options */}

            {/* Color Palette Buttons */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '8px' }} className="font-among">
                SUIT COLOR: {selectedColor.name.toUpperCase()}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
                {crewmateColors.map(c => (
                  <button
                    key={c.id}
                    onClick={() => handleColorChange(c)}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: c.hex,
                      border: selectedColor.id === c.id ? '3px solid #ffffff' : '2px solid #000',
                      boxShadow: selectedColor.id === c.id ? '0 0 10px ' + c.hex : 'none',
                      cursor: 'pointer',
                      transition: 'transform 0.15s ease'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Hat Selection Pills */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '8px' }} className="font-among">
                HAT: {selectedHat.name.toUpperCase()}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', flexWrap: 'wrap' }}>
                {crewmateHats.map(h => (
                  <button
                    key={h.id}
                    onClick={() => handleHatChange(h)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      background: selectedHat.id === h.id ? 'var(--c-cyan)' : 'rgba(255,255,255,0.05)',
                      color: selectedHat.id === h.id ? '#0b121e' : '#cbd5e1',
                      border: '1.5px solid #000',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}
                  >
                    {h.icon || '🚫'} {h.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Pet Selection Pills */}
            <div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '8px' }} className="font-among">
                COMPANION PET: {selectedPet.name.toUpperCase()}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', flexWrap: 'wrap' }}>
                {crewmatePets.map(p => (
                  <button
                    key={p.id}
                    onClick={() => handlePetChange(p)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      background: selectedPet.id === p.id ? 'var(--c-pink)' : 'rgba(255,255,255,0.05)',
                      color: selectedPet.id === p.id ? '#0b121e' : '#cbd5e1',
                      border: '1.5px solid #000',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}
                  >
                    {p.icon || '🚫'} {p.name}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
