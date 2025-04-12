import React from 'react';
import { FaUserAlt, FaCheck, FaDesktop, FaBriefcase, FaChartLine, FaUsers, FaArrowRight, FaStar, FaRegLightbulb } from 'react-icons/fa';
import './HomePage.css'; // Make sure to create this CSS file

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Hiring Reimagined.</h1>
        <h2>No Resumes, Just Skills.</h2>
        
        <div className="button-container">
          <button className="primary-button">Get Started as a Candidate</button>
          <button className="secondary-button">Post Workboard</button>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="section how-it-works">
        <h2 className="section-title">How it Works</h2>
        
        <div className="feature-cards">
          <div className="feature-card">
            <div className="icon-circle">
              <FaUserAlt className="feature-icon" />
            </div>
            <h3>No-Bias</h3>
            <p>Unambiguous, Seat Explorers</p>
          </div>
          
          <div className="feature-card">
            <div className="icon-circle">
              <FaCheck className="feature-icon" />
            </div>
            <h3>Real Skills</h3>
            <p>Real-direct-testsr Transpsnsncy</p>
          </div>
          
          <div className="feature-card">
            <div className="icon-circle">
              <FaDesktop className="feature-icon" />
            </div>
            <h3>Transparency</h3>
            <p>Transparency</p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="section benefits">
        <h2 className="section-title">Why Choose Us</h2>
        
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

      {/* Testimonials Section */}
      <div className="section testimonials">
        <h2 className="section-title">Success Stories</h2>
        
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
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Ready to Change How You Hire?</h2>
        <p>Join thousands of companies and candidates who are focusing on skills, not resumes.</p>
        
        <button className="cta-button">
          Get Started Now <FaArrowRight className="button-icon" />
        </button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>Platform</h3>
            <ul>
              <li>How It Works</li>
              <li>For Candidates</li>
              <li>For Employers</li>
              <li>Pricing</li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Success Stories</li>
              <li>FAQ</li>
              <li>Support</li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Press</li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Connect</h3>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 Skills-Based Hiring Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;