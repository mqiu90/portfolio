import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Mail, Code2, Briefcase, Award, ChevronRight } from 'lucide-react';
import './App.css';

interface Project {
  title: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
  highlights: string[];
  color: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: string;
}

interface AwardType {
  title: string;
  detail: string;
  year: string;
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [terminalText, setTerminalText] = useState('');

  useEffect(() => {
    setIsVisible(true);
    const text = '> mabel_qiu.portfolio';
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setTerminalText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const projects: Project[] = [
    {
      title: 'Tyger Fit Lab',
      role: 'Full Stack Intern',
      period: 'March 2025 - August 2025',
      description: 'A social fitness platform with dynamic feed, customizable profiles, and real-time interactions serving 500+ users.',
      tech: ['React Native', 'TypeScript', 'Expo', 'SQLite'],
      highlights: [
        'Built production Android app from Figma mockups',
        'Implemented offline-first architecture with SQLite',
        'Scaled to 500+ active users',
        'Real-time social features and data synchronization'
      ],
      color: '#FF6B35'
    },
    {
      title: 'MonkeyType Clone',
      role: 'Personal Project',
      period: '2024',
      description: 'A typing speed test application built with functional programming principles in OCaml.',
      tech: ['OCaml', 'Functional Programming'],
      highlights: [
        'Implemented with pure functional paradigms',
        'Real-time WPM and accuracy calculations',
        'Custom word generation algorithms',
        'Terminal-based UI with elegant design'
      ],
      color: '#4ECDC4'
    },
    {
      title: 'College Attendance Predictor',
      role: 'ML Researcher @ Georgia Tech',
      period: 'March 2023 - August 2023',
      description: 'Machine learning system analyzing college attendance patterns using demographic and academic factors.',
      tech: ['Python', 'PyTorch', 'Pandas', 'Seaborn'],
      highlights: [
        'Compared 4 ML models (Decision Trees, KNN, Logistic Regression, Neural Networks)',
        'Comprehensive data preprocessing and EDA',
        'Statistical visualizations with correlation analysis',
        'Identified key drivers of enrollment decisions'
      ],
      color: '#9B59B6'
    }
  ];

  const experiences: Experience[] = [
    {
      title: 'SWE Intern',
      company: 'M&T Bank',
      period: 'Summer 2026 (Incoming)',
      description: 'Software Engineering Internship',
      icon: '💼'
    },
    {
      title: 'IT Project Management Intern',
      company: 'Siemens Healthineers',
      period: 'June 2025 - August 2025',
      description: 'Migrated 50+ Smartsheets to Monday.com for 6 IT teams, onboarded 30+ users, and improved workflow automation.',
      icon: '🏥'
    },
    {
      title: 'Coding Instructor',
      company: 'CodeNinjas',
      period: 'November 2022 - July 2024',
      description: 'Mentored students in Scratch, JavaScript, C#, and 3D printing/TinkerCad.',
      icon: '👨‍🏫'
    }
  ];

  const awards: AwardType[] = [
    {
      title: 'NCWIT Aspirations in Computing',
      detail: 'Rising Star - Greater Philadelphia Affiliate',
      year: '2023'
    },
    {
      title: 'ACSL First in State',
      detail: 'American Computer Science League - Pennsylvania',
      year: '2022, 2023'
    }
  ];

  const skills = {
    'Languages': ['Java', 'Python', 'OCaml', 'JavaScript', 'TypeScript'],
    'Frontend': ['React', 'React Native', 'Expo'],
    'Backend': ['Node.js', 'Express', 'SQLite'],
    'ML/Data': ['PyTorch', 'NumPy', 'Pandas', 'Seaborn'],
    'Tools': ['Git', 'Shell', 'Google Colab', 'Figma']
  };

  return (
    <div className="container">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <div className="logo">
            <Terminal size={24} />
            <span className="logo-text">MQ</span>
          </div>
          <div className="nav-links">
            {['home', 'projects', 'experience', 'contact'].map(section => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setActiveSection(section)}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-grid">
          <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
              </div>
              <div className="terminal-body">
                <span className="terminal-prompt">$</span> {terminalText}
                <span className="cursor">_</span>
              </div>
            </div>
            
            <h1 className="hero-title">Mabel Qiu</h1>
            <p className="hero-subtitle">Computer Science @ Cornell University</p>
            <p className="hero-description">
              Building full-stack applications, exploring machine learning, 
              and creating elegant solutions to complex problems.
            </p>
            
            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View Projects <ChevronRight size={20} />
              </a>
              <a href="#contact" className="secondary-button">
                Get in Touch
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/mabelqiu" className="social-link" target="_blank" rel="noopener noreferrer">
                <Github size={22} />
              </a>
              <a href="https://linkedin.com/in/mabel-qiu" className="social-link" target="_blank" rel="noopener noreferrer">
                <Linkedin size={22} />
              </a>
              <a href="mailto:mq86@cornell.edu" className="social-link">
                <Mail size={22} />
              </a>
            </div>
          </div>

          <div className={`hero-visual ${isVisible ? 'visible' : ''}`}>
            <div className="floating-card">
              <Code2 size={48} color="#FF6B35" />
              <div className="card-text">Full Stack Developer</div>
            </div>
            <div className="floating-card card-2">
              <Briefcase size={48} color="#4ECDC4" />
              <div className="card-text">Incoming SWE Intern</div>
            </div>
            <div className="floating-card card-3">
              <Award size={48} color="#9B59B6" />
              <div className="card-text">NCWIT Rising Star</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-content">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-accent" style={{ background: project.color }}></div>
                <div className="project-header">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-role">{project.role}</p>
                    <p className="project-period">{project.period}</p>
                  </div>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag" style={{ borderColor: project.color }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="highlights">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="highlight">
                      <ChevronRight size={16} color={project.color} />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="section-content">
          <h2 className="section-title">Experience</h2>
          
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-icon">{exp.icon}</div>
                <div className="experience-content">
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                  <p className="experience-period">{exp.period}</p>
                  <p className="experience-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="awards-section">
            <h3 className="subsection-title">Awards & Recognition</h3>
            <div className="awards-grid">
              {awards.map((award, index) => (
                <div key={index} className="award-card">
                  <Award size={24} color="#FFD700" />
                  <div>
                    <h4 className="award-title">{award.title}</h4>
                    <p className="award-detail">{award.detail}</p>
                    <p className="award-year">{award.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h3 className="subsection-title">Technical Skills</h3>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skill-category">
                  <h4 className="skill-category-title">{category}</h4>
                  <div className="skill-tags">
                    {items.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-content">
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-subtitle">
            I'm always open to discussing new opportunities, collaborations, or just chatting about tech!
          </p>
          
          <div className="contact-grid">
            <a href="mailto:mq86@cornell.edu" className="contact-card">
              <Mail size={32} />
              <span>mq86@cornell.edu</span>
            </a>
            <a href="https://linkedin.com/in/mabel-qiu" className="contact-card" target="_blank" rel="noopener noreferrer">
              <Linkedin size={32} />
              <span>linkedin.com/in/mabel-qiu</span>
            </a>
            <a href="https://github.com/mabelqiu" className="contact-card" target="_blank" rel="noopener noreferrer">
              <Github size={32} />
              <span>github.com/mabelqiu</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Mabel Qiu. Built with React & TypeScript.</p>
        <p className="footer-subtext">Cornell University • Computer Science • Class of 2027</p>
      </footer>
    </div>
  );
}