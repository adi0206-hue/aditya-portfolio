import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { sounds } from '../utils/audio';
import { LayoutGrid, ExternalLink, Github, CheckSquare, Sparkles, X, ShieldAlert, Cpu, Award } from 'lucide-react';

export default function AdminTaskLog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTaskModal, setActiveTaskModal] = useState(null);
  const [wireCompleted, setWireCompleted] = useState(false);

  const categories = ['All', 'Full Stack', 'Web Apps', 'AI / Machine Learning'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  const handleOpenTask = (proj) => {
    sounds.playClick();
    setActiveTaskModal(proj);
    setWireCompleted(false);
  };

  const handleCloseModal = () => {
    sounds.playClick();
    setActiveTaskModal(null);
  };

  const handleFixWiresTask = () => {
    sounds.playTaskComplete();
    setWireCompleted(true);
  };

  return (
    <section id="tasks" style={{ padding: '60px 20px', minHeight: '85vh' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Room Header Tag */}
        <div style={{ marginBottom: '24px' }}>
          <span className="room-tag" style={{ color: 'var(--c-cyan)', borderColor: 'rgba(56, 254, 220, 0.3)' }}>
            <LayoutGrid size={14} /> ROOM 03: ADMIN TASK LOG (FEATURED PROJECTS)
          </span>
        </div>

        {/* Category Filter Pills */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '32px'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sounds.playClick();
                setSelectedCategory(cat);
              }}
              className="font-among"
              style={{
                padding: '8px 18px',
                borderRadius: '12px',
                border: selectedCategory === cat ? '3px solid var(--c-cyan)' : '2px solid #1e293b',
                background: selectedCategory === cat ? 'rgba(56, 254, 220, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                color: selectedCategory === cat ? 'var(--c-cyan)' : '#94a3b8',
                cursor: 'pointer',
                fontSize: '0.9rem',
                transition: 'all 0.2s ease'
              }}
            >
              {cat === 'All' ? 'ALL ASSIGNED TASKS' : cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '28px'
        }}>
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="skeld-card"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer'
              }}
              onClick={() => handleOpenTask(proj)}
            >
              <div>
                {/* Header info */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '14px'
                }}>
                  <span className="task-badge task-completed" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <CheckSquare size={12} /> {proj.difficulty}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }} className="font-among">
                    LOCATION: {proj.room.toUpperCase()}
                  </span>
                </div>

                <h3 className="font-among" style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '10px' }}>
                  {proj.title}
                </h3>

                <p style={{ color: '#94a3b8', fontSize: '0.92rem', marginBottom: '20px', lineHeight: '1.6' }}>
                  {proj.shortDesc}
                </p>

                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '24px' }}>
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        padding: '3px 10px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: 'var(--c-cyan)',
                        fontSize: '0.75rem',
                        fontWeight: 600
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links & Modal Trigger */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '16px',
                borderTop: '1px solid #1e293b'
              }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenTask(proj);
                  }}
                  className="btn-among btn-primary"
                  style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                >
                  <Sparkles size={14} /> INSPECT TASK
                </button>

                <div style={{ display: 'flex', gap: '12px' }}>
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{ color: '#cbd5e1', transition: 'color 0.2s' }}
                      title="View GitHub Code"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{ color: 'var(--c-cyan)', transition: 'color 0.2s' }}
                      title="Live Project Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Task Tablet Modal Overlay */}
        {activeTaskModal && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(10px)',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}>
            <div className="skeld-card" style={{
              maxWidth: '650px',
              width: '100%',
              padding: '32px',
              border: '4px solid var(--c-cyan)',
              boxShadow: '0 0 40px rgba(56, 254, 220, 0.4)',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}>
              
              {/* Modal Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div className="font-among" style={{ color: 'var(--c-cyan)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Cpu size={20} /> TASK DETAILS: {activeTaskModal.room.toUpperCase()}
                </div>
                <button
                  onClick={handleCloseModal}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ef4444',
                    cursor: 'pointer'
                  }}
                >
                  <X size={24} />
                </button>
              </div>

              <h2 className="font-among" style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '14px' }}>
                {activeTaskModal.title}
              </h2>

              <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.7', marginBottom: '24px' }}>
                {activeTaskModal.fullDesc}
              </p>

              {/* Interactive Wires Task Mini-Game */}
              <div style={{
                background: 'rgba(15, 23, 42, 0.9)',
                padding: '20px',
                borderRadius: '16px',
                border: '2px solid #1e293b',
                marginBottom: '24px'
              }}>
                <div className="font-among" style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>INTERACTIVE TASK: FIX ELECTRICAL WIRES</span>
                  <span style={{ color: wireCompleted ? '#50ef39' : '#ff2a2a' }}>
                    {wireCompleted ? '✔ TASK COMPLETED' : '⚠ WIRES DISCONNECTED'}
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
                  {/* Left Wire Terminals */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {activeTaskModal.wireColors.map((color, idx) => (
                      <div key={idx} style={{
                        width: '30px',
                        height: '14px',
                        background: color,
                        border: '2px solid #000',
                        borderRadius: '4px',
                        boxShadow: '0 2px 0 #000'
                      }} />
                    ))}
                  </div>

                  {/* Wire Lines SVG */}
                  <div style={{ flex: 1, height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="100%" height="80" style={{ overflow: 'visible' }}>
                      {activeTaskModal.wireColors.map((color, idx) => {
                        const y1 = 12 + idx * 22;
                        const y2 = wireCompleted ? y1 : (12 + ((idx + 2) % 4) * 22);
                        return (
                          <line
                            key={idx}
                            x1="0"
                            y1={y1}
                            x2="100%"
                            y2={y2}
                            stroke={color}
                            strokeWidth="4"
                            strokeDasharray={wireCompleted ? 'none' : '4'}
                            style={{ transition: 'all 0.4s ease' }}
                          />
                        );
                      })}
                    </svg>
                  </div>

                  {/* Right Wire Terminals */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {activeTaskModal.wireColors.map((color, idx) => (
                      <div key={idx} style={{
                        width: '30px',
                        height: '14px',
                        background: color,
                        border: '2px solid #000',
                        borderRadius: '4px',
                        boxShadow: '0 2px 0 #000'
                      }} />
                    ))}
                  </div>
                </div>

                {!wireCompleted ? (
                  <button
                    onClick={handleFixWiresTask}
                    className="btn-among btn-primary"
                    style={{ width: '100%', justifyContent: 'center', marginTop: '16px', fontSize: '0.85rem' }}
                  >
                    CONNECT WIRES & VALIDATE PROJECT
                  </button>
                ) : (
                  <div style={{
                    marginTop: '16px',
                    color: '#50ef39',
                    fontSize: '0.85rem',
                    textAlign: 'center',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}>
                    <Award size={16} /> Wire calibration verified! Candidate recommendation level 100%.
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                {activeTaskModal.github && (
                  <a
                    href={activeTaskModal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-among btn-secondary"
                  >
                    <Github size={18} /> GITHUB REPO
                  </a>
                )}
                {activeTaskModal.demo && (
                  <a
                    href={activeTaskModal.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-among btn-primary"
                  >
                    <ExternalLink size={18} /> LIVE PREVIEW
                  </a>
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
