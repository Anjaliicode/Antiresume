import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUserAlt, 
  FaCheck, 
  FaDesktop, 
  FaBriefcase, 
  FaChartLine, 
  FaUsers, 
  FaArrowRight, 
  FaStar, 
  FaRegLightbulb,
  FaShieldAlt,
  FaRocket,
  FaCertificate,
  FaUniversity,
  FaTools,
  FaLaptopCode,
  FaChartBar,
  FaGraduationCap,
  FaBuilding,
  FaGlobe,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook
} from 'react-icons/fa';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>Hiring Reimagined.</h1>
          <h2>No Resumes, Just Skills.</h2>
          <p className="hero-description">
            Discover a more effective way to hire talent and find opportunities based on verified skills and real-world competencies.
          </p>
          
          <div className="button-container">
            <Link to="/candidate-dashboard" className="primary-button">
              Get Started as a Candidate
            </Link>
            
            <Link to="/post-workboard" className="secondary-button">
              Post Workboard
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Candidates</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2.5K+</span>
              <span className="stat-label">Companies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">85%</span>
              <span className="stat-label">Placement Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="section how-it-works">
        <h2 className="section-title">How it Works</h2>
        <p className="section-subtitle">Our simple three-step process changes how companies find talent</p>
        
        <div className="process-timeline">
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <div className="icon-circle">
                <FaUserAlt className="feature-icon" />
              </div>
              <h3>Create Profile</h3>
              <p>Showcase your actual skills, not just your work history</p>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <div className="icon-circle">
                <FaCheck className="feature-icon" />
              </div>
              <h3>Verify Skills</h3>
              <p>Complete skill assessments to verify your abilities</p>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <div className="icon-circle">
                <FaDesktop className="feature-icon" />
              </div>
              <h3>Match & Connect</h3>
              <p>Get connected with companies looking for your specific skills</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="section benefits">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">Experience the advantages of our skills-first approach</p>
        
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon-container">
              <FaRegLightbulb className="benefit-icon" />
            </div>
            <div className="benefit-content">
              <h3>Skills-First Approach</h3>
              <p>Focus on what truly matters - your actual abilities and competencies rather than just your career history.</p>
            </div>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon-container">
              <FaChartLine className="benefit-icon" />
            </div>
            <div className="benefit-content">
              <h3>Better Matches</h3>
              <p>Our skills-based algorithm creates more accurate matches between candidates and positions.</p>
            </div>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon-container">
              <FaUsers className="benefit-icon" />
            </div>
            <div className="benefit-content">
              <h3>Diverse Talent</h3>
              <p>Removing resume bias helps build more diverse teams and unlocks hidden talent pools.</p>
            </div>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon-container">
              <FaBriefcase className="benefit-icon" />
            </div>
            <div className="benefit-content">
              <h3>Time Efficiency</h3>
              <p>Skip lengthy resume reviews and focus directly on qualified candidates with validated skills.</p>
            </div>
          </div>
        </div>
      </div>

      {/* NEW SECTION 1: Platform Features */}
      <div className="section platform-features">
        <h2 className="section-title">Powerful Platform Features</h2>
        <p className="section-subtitle">Everything you need to transform your hiring process</p>
        
        <div className="features-container">
          <div className="feature-box">
            <FaShieldAlt className="feature-box-icon" />
            <h3>Bias-Free Matching</h3>
            <p>Our AI algorithm focuses solely on skills and competencies, eliminating unconscious bias from the hiring process.</p>
          </div>
          
          <div className="feature-box">
            <FaRocket className="feature-box-icon" />
            <h3>Accelerated Hiring</h3>
            <p>Reduce time-to-hire by up to 60% by directly connecting with qualified candidates.</p>
          </div>
          
          <div className="feature-box">
            <FaLaptopCode className="feature-box-icon" />
            <h3>Skill Challenges</h3>
            <p>Interactive, real-world challenges that accurately measure candidate abilities.</p>
          </div>
          
          <div className="feature-box">
            <FaCertificate className="feature-box-icon" />
            <h3>Verified Profiles</h3>
            <p>Every skill on a candidate's profile is verified through assessments or endorsements.</p>
          </div>
          
          <div className="feature-box">
            <FaUniversity className="feature-box-icon" />
            <h3>Learning Pathways</h3>
            <p>Candidates can improve their skills through curated learning resources.</p>
          </div>
          
          <div className="feature-box">
            <FaTools className="feature-box-icon" />
            <h3>Custom Workboards</h3>
            <p>Create customized skill requirements for your open positions.</p>
          </div>
        </div>
      </div>

      {/* NEW SECTION 2: For Who */}
      <div className="section for-who">
        <h2 className="section-title">Who Benefits</h2>
        <p className="section-subtitle">Our platform serves both candidates and employers</p>
        
        <div className="audience-cards">
          <div className="audience-card">
            <div className="audience-icon">
              <FaGraduationCap />
            </div>
            <h3>For Candidates</h3>
            <ul className="audience-list">
              <li><FaCheck className="list-icon" /> Showcase your actual skills, not just resume points</li>
              <li><FaCheck className="list-icon" /> Get matched with positions that truly match your abilities</li>
              <li><FaCheck className="list-icon" /> Learn new skills through our guided challenges</li>
              <li><FaCheck className="list-icon" /> Build a verified profile that employers trust</li>
              <li><FaCheck className="list-icon" /> Receive fair consideration based on merit</li>
            </ul>
            <Link to="/candidate-dashboard" className="audience-button">
              Start Your Journey
            </Link>
          </div>
          
          <div className="audience-card">
            <div className="audience-icon">
              <FaBuilding />
            </div>
            <h3>For Employers</h3>
            <ul className="audience-list">
              <li><FaCheck className="list-icon" /> Find candidates with verified, relevant skills</li>
              <li><FaCheck className="list-icon" /> Reduce hiring time and costs significantly</li>
              <li><FaCheck className="list-icon" /> Eliminate resume bias from your hiring process</li>
              <li><FaCheck className="list-icon" /> Build more diverse and capable teams</li>
              <li><FaCheck className="list-icon" /> Access analytics on skill trends and hiring metrics</li>
            </ul>
            <Link to="/post-workboard" className="audience-button employer">
              Post Your First Workboard
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="section testimonials">
        <h2 className="section-title">Success Stories</h2>
        <p className="section-subtitle">See what our users are saying about their experience</p>
        
        <div className="testimonial-container">
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar">
                <span>JD</span>
              </div>
              <div className="testimonial-person">
                <h4>Jane Doe</h4>
                <p>Software Developer</p>
              </div>
            </div>
            <div className="testimonial-content">
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p>"This platform allowed me to showcase my actual coding skills instead of just listing them on a resume. I found a perfect job match within 2 weeks!"</p>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar">
                <span>TC</span>
              </div>
              <div className="testimonial-person">
                <h4>Tech Company</h4>
                <p>Hiring Manager</p>
              </div>
            </div>
            <div className="testimonial-content">
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p>"Our hiring process is now 60% faster and we're finding better qualified candidates than ever before. The skills validation is a game-changer."</p>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar">
                <span>RJ</span>
              </div>
              <div className="testimonial-person">
                <h4>Robert Johnson</h4>
                <p>Data Analyst</p>
              </div>
            </div>
            <div className="testimonial-content">
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p>"As someone switching careers, traditional job boards weren't working for me. This platform let me prove my data skills and land my dream role!"</p>
            </div>
          </div>
        </div>
      </div>

      {/* NEW SECTION 3: Stats & Numbers */}
      <div className="section stats-section">
        <div className="stats-overlay">
          <h2 className="section-title">Our Impact</h2>
          <p className="section-subtitle">Transforming the hiring landscape with real results</p>
          
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-number">85%</div>
              <div className="stat-description">Reduction in Time-to-Hire</div>
            </div>
            
            <div className="stat-box">
              <div className="stat-number">93%</div>
              <div className="stat-description">Candidate Satisfaction</div>
            </div>
            
            <div className="stat-box">
              <div className="stat-number">10K+</div>
              <div className="stat-description">Successful Placements</div>
            </div>
            
            <div className="stat-box">
              <div className="stat-number">40%</div>
              <div className="stat-description">Increase in Workforce Diversity</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Ready to Change How You Hire?</h2>
        <p>Join thousands of companies and candidates who are focusing on skills, not resumes.</p>
        
        <div className="cta-buttons">
          <Link to="/sign-up" className="cta-button primary">
            Get Started Now <FaArrowRight className="button-icon" />
          </Link>
          
          <Link to="/demo" className="cta-button secondary">
            Request a Demo
          </Link>
        </div>
        
        <div className="trusted-by">
          <p>Trusted by innovative companies worldwide</p>
          <div className="company-logos">
            <div className="company-logo">Company 1</div>
            <div className="company-logo">Company 2</div>
            <div className="company-logo">Company 3</div>
            <div className="company-logo">Company 4</div>
            <div className="company-logo">Company 5</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>Platform</h3>
            <ul>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/for-candidates">For Candidates</Link></li>
              <li><Link to="/for-employers">For Employers</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/features">Features</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/success-stories">Success Stories</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/support">Support</Link></li>
              <li><Link to="/webinars">Webinars</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/press">Press</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Connect</h3>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 Skills-Based Hiring Platform. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;