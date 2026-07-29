import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { AlertTriangle, X, CheckCircle, Mail, FileText, Calendar, Sparkles, Award } from 'lucide-react';

export default function EmergencyModal({ onClose }) {
  const [hasVoted, setHasVoted] = useState(false);

  const handleVoteToHire = () => {
    sounds.playTaskComplete();
    setHasVoted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(11, 14, 20, 0.95)',
      backdropFilter: 'blur(16px)',
      zIndex: 300,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="skeld-card" style={{
        maxWidth: '720px',
        width: '100%',
        padding: '36px',
        border: '4px solid var(--c-emergency)',
        boxShadow: '0 0 50px rgba(255, 42, 42, 0.5)',
        textAlign: 'center',
        position: 'relative'
      }}>

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer'
          }}
        >
          <X size={24} />
        </button>

        {/* Emergency Meeting Header */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '8px 20px',
          borderRadius: '30px',
          background: 'rgba(255, 42, 42, 0.2)',
          border: '2px solid var(--c-emergency)',
          color: '#ff5c5c',
          marginBottom: '20px'
        }} className="font-among">
          <AlertTriangle size={22} className="float-anim" /> EMERGENCY MEETING IN PROGRESS
        </div>

        <h2 className="font-among" style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
          color: '#ffffff',
          marginBottom: '10px',
          letterSpacing: '1px'
        }}>
          WHO IS THE DEVELOPER?
        </h2>

        <p style={{ color: '#94a3b8', fontSize: '1rem', marginBottom: '28px', maxWidth: '540px', margin: '0 auto 28px auto' }}>
          All crewmates have gathered at the Skeld table. The evidence proves that <strong style={{ color: 'var(--c-cyan)' }}>Aditya</strong> is the most qualified Full-Stack candidate for your engineering team!
        </p>

        {/* Voting Card */}
        <div style={{
          background: 'rgba(15, 23, 42, 0.8)',
          border: '3px solid #1e293b',
          borderRadius: '20px',
          padding: '24px',
          marginBottom: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          textAlign: 'left'
        }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Crewmate Icon */}
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '16px',
              background: '#c51111',
              border: '3px solid #000',
              position: 'relative',
              boxShadow: '0 4px 0 #000'
            }}>
              <div style={{
                position: 'absolute',
                right: '4px',
                top: '12px',
                width: '32px',
                height: '20px',
                background: '#71d4ec',
                border: '2px solid #000',
                borderRadius: '10px'
              }} />
            </div>

            <div>
              <h3 className="font-among" style={{ fontSize: '1.3rem', color: '#ffffff' }}>
                ADITYA (CODE CREWMATE)
              </h3>
              <div style={{ fontSize: '0.85rem', color: 'var(--c-lime)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle size={14} /> STATUS: 100% CLEAN CODE • READY FOR HIRE
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span className="task-badge task-completed">REACT</span>
            <span className="task-badge task-completed">NODE.JS</span>
            <span className="task-badge task-completed">PYTHON</span>
          </div>

        </div>

        {hasVoted ? (
          <div style={{
            padding: '20px',
            borderRadius: '16px',
            background: 'rgba(80, 239, 57, 0.2)',
            border: '2px solid #50ef39',
            color: '#50ef39',
            marginBottom: '20px'
          }} className="font-among">
            <Award size={28} style={{ margin: '0 auto 8px auto' }} />
            <div style={{ fontSize: '1.2rem', marginBottom: '4px' }}>
              VOTE CONFIRMED! YOU VOTED TO HIRE ADITYA!
            </div>
            <div style={{ fontSize: '0.85rem', textTransform: 'none', color: '#e2e8f0' }}>
              0 Impostors remain. You have secured a top-tier software engineer!
            </div>
          </div>
        ) : null}

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {!hasVoted && (
            <button
              onClick={handleVoteToHire}
              className="btn-among btn-emergency"
              style={{ fontSize: '0.95rem' }}
            >
              <Sparkles size={18} /> VOTE TO HIRE ADITYA
            </button>
          )}

          <a
            href={`mailto:${personalInfo.email}?subject=Interview%20Invitation%20for%20Aditya`}
            className="btn-among btn-primary"
            style={{ fontSize: '0.95rem', textDecoration: 'none' }}
          >
            <Calendar size={18} /> SCHEDULE INTERVIEW
          </a>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-among btn-secondary"
            style={{ fontSize: '0.95rem', textDecoration: 'none' }}
          >
            <FileText size={18} /> RESUME PDF
          </a>
        </div>

      </div>
    </div>
  );
}
