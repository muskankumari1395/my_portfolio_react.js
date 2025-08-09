import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";
import ProjectModal from "../components/ProjectModal";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [project1Ref.current, project2Ref.current, project3Ref.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  const handleProjectClick = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <div id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
          <div className="showcaselayout">
            <div 
              ref={project1Ref} 
              className="first-project-wrapper project-clickable"
              onClick={() => handleProjectClick(1)}
            >
              <div className="image-wrapper">
                <img src="/images/project1.png" alt="Ryde App Interface" />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <span className="click-hint">Click to view details</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M15 3H6C4.89543 3 4 3.89543 4 5V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V8L15 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 3V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="text-content">
                <h2>
                  Advanced Calculator
                </h2>
                <p className="text-white-50 md:text-xl">
                  An app built with React Native, Expo, & TailwindCSS for a fast,
                  user-friendly experience.
                </p>
              </div>
            </div>

            <div className="project-list-wrapper overflow-hidden">
              <div 
                className="project project-clickable" 
                ref={project2Ref}
                onClick={() => handleProjectClick(2)}
              >
                <div className="image-wrapper bg-[#FFEFDB]">
                  <img
                    src="/images/project2.png"
                    alt="MOdern LAnding page using Shery.js"
                  />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <span className="click-hint">Click to view details</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 3H6C4.89543 3 4 3.89543 4 5V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V8L15 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 3V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <h2>The MOdern LAnding page using Shery.js</h2>
              </div>

              <div 
                className="project project-clickable" 
                ref={project3Ref}
                onClick={() => handleProjectClick(3)}
              >
                <div className="image-wrapper bg-[#FFE7EB]">
                  <img src="/images/project3.png" alt="YC Directory App" />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <span className="click-hint">Click to view details</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 3H6C4.89543 3 4 3.89543 4 5V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V8L15 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 3V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <h2>YC Directory - A Startup Showcase App</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default AppShowcase;
