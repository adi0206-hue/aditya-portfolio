import React, { useState, useEffect } from 'react';
import SpaceBackground from './components/SpaceBackground';
import Navbar from './components/Navbar';
import HeroBridge from './components/HeroBridge';
import MedBayScanner from './components/MedBayScanner';
import AdminTaskLog from './components/AdminTaskLog';
import SecurityMonitors from './components/SecurityMonitors';
import CommsCenter from './components/CommsCenter';
import EmergencyModal from './components/EmergencyModal';
import Footer from './components/Footer';

export default function App() {
  const [activeRoom, setActiveRoom] = useState('bridge');
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['bridge', 'medbay', 'tasks', 'security', 'comms'];
      const scrollPos = window.scrollY + 250;

      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveRoom(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ minHeight: '100vh', position: 'relative', color: '#e2e8f0' }}>
      {/* Animated Deep Space Canvas Background */}
      <SpaceBackground />

      {/* Skeld Control Navbar */}
      <Navbar
        activeRoom={activeRoom}
        setActiveRoom={setActiveRoom}
        onTriggerEmergency={() => setShowEmergencyModal(true)}
      />

      {/* Main Skeld Spaceship Rooms */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        <HeroBridge
          onTriggerEmergency={() => setShowEmergencyModal(true)}
          onNavigateRoom={(room) => {
            setActiveRoom(room);
            const el = document.getElementById(room);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <MedBayScanner />

        <AdminTaskLog />

        <SecurityMonitors />

        <CommsCenter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Emergency Meeting Recruiter Modal Overlay */}
      {showEmergencyModal && (
        <EmergencyModal onClose={() => setShowEmergencyModal(false)} />
      )}
    </div>
  );
}
