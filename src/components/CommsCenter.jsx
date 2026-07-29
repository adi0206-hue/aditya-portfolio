import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { sounds } from '../utils/audio';
import { Radio, Send, Github, Linkedin, Twitter, Mail, FileText, CheckCircle2 } from 'lucide-react';

export default function CommsCenter() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    sounds.playTaskComplete();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="comms" style={{ padding: '60px 20px', minHeight: '80vh' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Room Header Tag */}
        <div style={{ marginBottom: '24px' }}>
          <span className="room-tag" style={{ color: 'var(--c-yellow)', borderColor: 'rgba(245, 245, 87, 0.3)' }}>
            <Radio size={14} /> ROOM 05: COMMS STATION (CONTACT & TRANSMISSION)
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px',
          alignItems: 'start'
        }}>

          {/* Left Column: Direct Radio Tablets & Social Links */}
          <div>
            <h2 className="font-among" style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '14px' }}>
              RECRUITER COMMS LINE
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', marginBottom: '32px', lineHeight: '1.6' }}>
              Interested in hiring Aditya or collaborating on a high-impact mission? Send a direct transmission or connect across social channels!
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="skeld-card"
                style={{
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  textDecoration: 'none',
                  color: '#ffffff'
                }}
              >
                <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(255,255,255,0.08)' }}>
                  <Github size={22} color="var(--c-cyan)" />
                </div>
                <div>
                  <div className="font-among" style={{ fontSize: '1rem' }}>GITHUB</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>View Code Repos</div>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="skeld-card"
                style={{
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  textDecoration: 'none',
                  color: '#ffffff'
                }}
              >
                <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(56,254,220,0.1)' }}>
                  <Linkedin size={22} color="var(--c-cyan)" />
                </div>
                <div>
                  <div className="font-among" style={{ fontSize: '1rem' }}>LINKEDIN</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Professional Profile</div>
                </div>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="skeld-card"
                style={{
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  textDecoration: 'none',
                  color: '#ffffff'
                }}
              >
                <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(237,84,186,0.1)' }}>
                  <Mail size={22} color="var(--c-pink)" />
                </div>
                <div>
                  <div className="font-among" style={{ fontSize: '1rem' }}>DIRECT EMAIL</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{personalInfo.email}</div>
                </div>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="skeld-card"
                style={{
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  textDecoration: 'none',
                  color: '#ffffff',
                  borderColor: 'var(--c-lime)'
                }}
              >
                <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(80,239,57,0.15)' }}>
                  <FileText size={22} color="var(--c-lime)" />
                </div>
                <div>
                  <div className="font-among" style={{ fontSize: '1rem', color: 'var(--c-lime)' }}>RESUME PDF</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Download PDF CV</div>
                </div>
              </a>

            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="skeld-card" style={{ padding: '32px', borderColor: 'rgba(245, 245, 87, 0.4)' }}>
            <h3 className="font-among" style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Radio size={20} color="var(--c-yellow)" /> SEND EMERGENCY TRANSMISSION
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '24px' }}>
              Fill out the message protocol below to reach Aditya directly.
            </p>

            {isSent ? (
              <div style={{
                padding: '24px',
                borderRadius: '16px',
                background: 'rgba(80,239,57,0.15)',
                border: '2px solid #50ef39',
                color: '#50ef39',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={36} style={{ margin: '0 auto 12px auto' }} />
                <h4 className="font-among" style={{ fontSize: '1.2rem', marginBottom: '6px' }}>
                  TRANSMISSION RECEIVED!
                </h4>
                <p style={{ fontSize: '0.85rem' }}>
                  Your message has been beamed straight to Crewmate Aditya's terminal. Expect a response shortly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label className="font-among" style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>
                    YOUR NAME / COMPANY
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hiring Manager at Tech Corp"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '2px solid #1e293b',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label className="font-among" style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="recruiter@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '2px solid #1e293b',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label className="font-among" style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>
                    SUBJECT / OPPORTUNITY
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senior Full-Stack Engineer Role"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '2px solid #1e293b',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label className="font-among" style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>
                    TRANSMISSION MESSAGE
                  </label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Tell Aditya about your project, team, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '2px solid #1e293b',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-among btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
                >
                  <Send size={18} /> TRANSMIT SIGNAL
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
