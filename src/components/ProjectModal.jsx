import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      // Animate modal in
      gsap.set(modalRef.current, { display: 'flex' });
      gsap.fromTo(overlayRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      gsap.fromTo(contentRef.current,
        { scale: 0.8, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" }
      );
    } else if (!isOpen && modalRef.current) {
      // Animate modal out
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3
      });
      gsap.to(contentRef.current, {
        scale: 0.8,
        opacity: 0,
        y: 50,
        duration: 0.3,
        ease: "back.in(1.7)",
        onComplete: () => {
          gsap.set(modalRef.current, { display: 'none' });
          document.body.style.overflow = 'auto';
        }
      });
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!project) return null;

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  const handleWatchDemo = () => {
    window.open(project.demoLink, '_blank', 'noopener,noreferrer');
  };

  const handleViewCode = () => {
    window.open(project.githubLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      ref={modalRef}
      className="project-modal"
      style={{ display: 'none' }}
    >
      <div 
        ref={overlayRef}
        className="modal-overlay"
        onClick={handleOverlayClick}
      >
        <div ref={contentRef} className="modal-content">
          {/* Close Button */}
          <button className="modal-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Project Image */}
          <div className="modal-image-section">
            <img src={project.image} alt={project.title} />
            <div className="project-category">{project.category}</div>
          </div>

          {/* Project Details */}
          <div className="modal-details">
            <div className="project-header">
              <h2>{project.title}</h2>
              <p className="project-subtitle">{project.subtitle}</p>
            </div>

            <div className="project-info">
              <div className="info-item">
                <span className="info-label">Status:</span>
                <span className="info-value status-completed">{project.status}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Duration:</span>
                <span className="info-value">{project.duration}</span>
              </div>
            </div>

            <div className="project-description">
              <h3>About This Project</h3>
              <p>{project.description}</p>
            </div>

            <div className="project-technologies">
              <h3>Technologies Used</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-features">
              <h3>Key Features</h3>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="modal-actions">
              <button className="btn-primary" onClick={handleWatchDemo}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                </svg>
                Watch Demo
              </button>
              <button className="btn-secondary" onClick={handleViewCode}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                View Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;