import { socialImgs } from "../constants";
import { useEffect, useRef } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    // Create floating particles animation
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 3 + 's';
      particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
      
      if (footerRef.current) {
        footerRef.current.appendChild(particle);
        
        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }, 5000);
      }
    };

    const interval = setInterval(createParticle, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer ref={footerRef} className="stunning-footer">
      {/* Animated Background */}
      <div className="footer-bg-animation">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Main Content */}
      <div className="footer-content">
        {/* Header Section */}
        <div className="footer-header">
          <h2 className="footer-title">
            Let's Create Something
            <span className="gradient-text"> Amazing Together</span>
          </h2>
          <p className="footer-subtitle">
            Ready to bring your ideas to life? Let's connect and make it happen!
          </p>
        </div>

        {/* Social Media Section */}
        <div className="social-section">
          <h3 className="social-title">Connect With Me</h3>
          <div className="social-horizontal">
            {socialImgs.map((socialImg, index) => (
              <a 
                key={index} 
                href={socialImg.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-card-horizontal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="social-icon-wrapper">
                  <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
                  <div className="social-glow"></div>
                </div>
                <span className="social-name">{socialImg.name}</span>
                <div className="social-hover-effect"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>© {new Date().getFullYear()} Khushi. Crafted with ❤️ and lots of ☕</p>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
    </footer>
  );
};

export default Footer;
