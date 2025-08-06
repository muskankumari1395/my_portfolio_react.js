import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const skillsRef = useRef(null);

  useGSAP(() => {
    // Main content animation - slide in from left
    gsap.fromTo(
      contentRef.current,
      { 
        xPercent: -100, 
        opacity: 0,
        transformOrigin: "left left"
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        }
      }
    );

    // Image animation - slide in from right
    gsap.fromTo(
      imageRef.current,
      { 
        xPercent: 100, 
        opacity: 0,
        transformOrigin: "right right"
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.inOut",
        delay: 0.2,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        }
      }
    );

    // Skills animation - stagger from bottom
    gsap.fromTo(
      skillsRef.current?.children,
      { 
        y: 50, 
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 85%",
        }
      }
    );



    // Floating animation for profile image
    gsap.to(imageRef.current?.querySelector('.profile-image'), {
      y: -10,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Rotating animation for tech icons
    gsap.to(".tech-icon", {
      rotation: 360,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

  }, []);

  const skills = [
    { icon: "🎨", title: "Design-First Approach", desc: "UI/UX sensibility in every line of code" },
    { icon: "⚡", title: "Full-Stack Expertise", desc: "From database to deployment" },
    { icon: "🚀", title: "Modern Technologies", desc: "React, Node.js, Python, Three.js" },
    { icon: "📱", title: "Responsive Design", desc: "Pixel-perfect across all devices" },
    { icon: "🔧", title: "Problem Solver", desc: "Creative solutions to complex challenges" },
    { icon: "💡", title: "Innovation Focus", desc: "Always exploring cutting-edge solutions" }
  ];

  return (
    <section id="about" ref={sectionRef} className="about-section section-padding">
      <div className="w-full">
        <TitleHeader 
          title="About Me" 
          subtitle="Discover my journey from design to development"
        />
        
        <div className="about-layout">
          {/* Left Content */}
          <div ref={contentRef} className="about-content">
            <div className="about-story">
              <h3 className="story-title">
                Hi there! I'm <span className="highlight-text">Muskan Kumari</span>
              </h3>
              
              <div className="story-text">
                <p>
                  A passionate full-stack developer with a unique journey that began in the world of 
                  visual design and evolved into comprehensive web development. My adventure started 
                  in <strong>2020</strong> as a Graphics Designer, where I discovered my love for 
                  creating visually compelling experiences.
                </p>
                
                <p>
                  This foundation in design thinking has been invaluable in my transition to development, 
                  allowing me to bridge the gap between beautiful design and functional code. Over the years, 
                  I've evolved from crafting static designs to building dynamic, interactive web applications.
                </p>
                
                <p>
                  What sets me apart is my holistic approach to development - I don't just write code, 
                  I craft experiences. Every project is an opportunity to blend creativity with functionality, 
                  ensuring that users don't just use the application, they enjoy it.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="skills-section">
              <h4 className="skills-title">What I Bring to the Table</h4>
              <div ref={skillsRef} className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <div className="skill-icon">{skill.icon}</div>
                    <h5 className="skill-name">{skill.title}</h5>
                    <p className="skill-desc">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div ref={imageRef} className="about-visual">
            <div className="profile-container">
              <div className="profile-image">
                <img src="/images/profile.jpg" alt="Muskan Kumari - Full Stack Developer" />
              </div>
              
              {/* Floating Tech Icons */}
              <div className="floating-tech">
                <div className="tech-icon tech-react">
                  <img src="/images/logos/react.png" alt="React" />
                </div>
                <div className="tech-icon tech-node">
                  <img src="/images/logos/node.png" alt="Node.js" />
                </div>
                <div className="tech-icon tech-python">
                  <img src="/images/logos/python.svg" alt="Python" />
                </div>
                <div className="tech-icon tech-three">
                  <img src="/images/logos/three.png" alt="Three.js" />
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;