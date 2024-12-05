import  { useState, useRef } from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import "./dev_card.css"
import Opire from '../icons/opire';

const DevCard = () => {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e:any) => {
    if (cardRef.current) {
      const rect = (cardRef.current as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setHoverPosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setHoverPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className="dev-card-horizontal"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="card-overlay"
        style={{
          background: `radial-gradient(
            circle 150px at ${hoverPosition.x}px ${hoverPosition.y}px, 
            rgba(0,255,204,0.1), 
            transparent 50%
          )`
        }}
      />
      <div className="avatar-section">
        <div className="avatar-wrapper">
          <img
            src="/at.png"
            alt="User Avatar"
            className="avatar"
          />
        </div>
      </div>

      <div className="info-section">
        <div className="name-container">
          <h2>John Doe</h2>
          <span className="role-badge">Pro</span>
        </div>
        <h4>Full-Stack Developer</h4>

        <div className="stats">
          <div className="stat-item">
            <span className="stat-label">Issues Resolved</span>
            <span className="stat-value">120</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Bounties Earned</span>
            <span className="stat-value">$5,400</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Challenges Won</span>
            <span className="stat-value">8</span>
          </div>
        </div>

        <div className="social-actions">
          <div className="social-icons">
            <a href="#" className="icon github-icon">
              <FaGithub size={24} />
            </a>
            <a href="#" className="icon twitter-icon">
              <FaTwitter size={24} />
            </a>
          </div>

        </div>
      </div>

      <div className="powered-by-section">
        <span>Powered by Opire</span>
        <div className="opire-logo" style={{
          display: "inline-block",
          verticalAlign: "middle"

        }}>
          <Opire />
        </div>

      </div>
    </div>
  );
};

export default DevCard;