import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './Candidate_dashboard.css';
import "../styles/Candidate_Dashboard.css"
// Import icons from react-icons
import { FaReact, FaCode, FaLaptopCode, FaRegClock, FaHome } from 'react-icons/fa';
import { BiTestTube } from 'react-icons/bi';
import { BsBuilding } from 'react-icons/bs';
import { MdDataUsage, MdDesignServices, MdOutlineRecommend } from 'react-icons/md';
import { IoMdArrowBack } from 'react-icons/io';
import { VscDebugConsole } from 'react-icons/vsc';
import { RiSendPlaneFill } from 'react-icons/ri';

const Candidate_Dashboard = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Software Development', icon: <FaCode />, color: '#4361ee', gradient: 'linear-gradient(135deg, #4361ee, #3a0ca3)' },
    { id: 2, name: 'Testing', icon: <BiTestTube />, color: '#f72585', gradient: 'linear-gradient(135deg, #f72585, #7209b7)' },
    { id: 3, name: 'Civil Engineering', icon: <BsBuilding />, color: '#4cc9f0', gradient: 'linear-gradient(135deg, #4cc9f0, #4361ee)' },
    { id: 4, name: 'Data Analysis', icon: <MdDataUsage />, color: '#fb8500', gradient: 'linear-gradient(135deg, #fb8500, #ffb703)' },
    { id: 5, name: 'UI/UX Design', icon: <MdDesignServices />, color: '#06d6a0', gradient: 'linear-gradient(135deg, #06d6a0, #118ab2)' }
  ]);

  const [challenges, setChallenges] = useState([
    { 
      id: 1, 
      courseId: 1, 
      title: 'React Coding Challenge', 
      icon: <FaReact />,
      difficulty: 'Intermediate',
      timeEstimate: '20-30 min',
      description: 'Build a usable React component that renders a map with markers.',
      instructions: 'In this challenge, you need to create a React component that renders an interactive map interface with custom markers. The component should allow users to add, remove, and interact with markers on the map. Pay attention to performance optimizations and ensure the component is reusable.',
      starterCode: `return function( component ) {
  (props, {
    /*
      return your(component);
    */
  })
}`
    },
    { 
      id: 2, 
      courseId: 2, 
      title: 'Test Automation Challenge', 
      icon: <BiTestTube />,
      difficulty: 'Advanced',
      timeEstimate: '25-40 min',
      description: 'Create test cases for a login form with validation.',
      instructions: 'Create comprehensive test cases covering all edge cases for a login form including input validation, error handling, and successful login flows.',
      starterCode: `describe('Login Form', () => {
  it('should validate email format', () => {
    // Your test code here
  })
})`
    },
    { 
      id: 3, 
      courseId: 3, 
      title: 'Civil Structure Analysis', 
      icon: <BsBuilding />,
      difficulty: 'Expert',
      timeEstimate: '30-45 min',
      description: 'Calculate load distribution for a simple beam structure.',
      instructions: 'Calculate and analyze the load distribution patterns for a multi-story building with varying weight distributions.',
      starterCode: `function calculateBeamLoad(length, load, points) {
  // Your code here
}`
    },
    { 
      id: 4, 
      courseId: 4, 
      title: 'Data Analysis Challenge', 
      icon: <MdDataUsage />,
      difficulty: 'Intermediate',
      timeEstimate: '20-35 min',
      description: 'Clean and analyze the provided dataset to extract insights.',
      instructions: 'Process the data and generate key statistical findings from the provided dataset on consumer behavior.',
      starterCode: `function analyzeData(dataset) {
  // Your analysis code here
}`
    },
    { 
      id: 5, 
      courseId: 5, 
      title: 'UI/UX Design Challenge', 
      icon: <MdDesignServices />,
      difficulty: 'Beginner',
      timeEstimate: '15-25 min',
      description: 'Create wireframes for a mobile application homepage.',
      instructions: 'Design a user-friendly interface following best practices for a fitness tracking mobile application.',
      starterCode: `// Design your wireframe using the tools provided
// Submit your final design files`
    }
  ]);

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [userCode, setUserCode] = useState('');
  const [timer, setTimer] = useState('00:00:00');
  const [timerRunning, setTimerRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = null;
    
    if (timerRunning) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        
        const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
        
        setTimer(`${hours}:${minutes}:${secs}`);
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [timerRunning, seconds]);

  const handleCourseClick = (courseId) => {
    setSelectedCourse(courseId);
    const challenge = challenges.find(c => c.courseId === courseId);
    setSelectedChallenge(challenge);
    setUserCode(challenge.starterCode);
    
    // Start timer when challenge is selected
    setTimerRunning(true);
    setSeconds(0);
    setTimer('00:00:00');
  };

  const handleSubmit = () => {
    alert('Challenge submitted successfully!');
    setTimerRunning(false);
  };

  return (
    <div className="coding-challenge-container">
      {/* Home button to navigate back to homepage */}
      <div className="home-button-container" style={{ padding: '15px', textAlign: 'left' }}>
        <Link to="/" className="home-button" style={{
          padding: '8px 16px',
          backgroundColor: '#4361ee',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: 'bold',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease'
        }}>
          <FaHome /> Back to Home
        </Link>
      </div>

      {!selectedChallenge ? (
        <>
          <div className="challenge-header">
            <div className="header-content">
              <h1>Skill Challenges</h1>
              <p>Test your abilities with our interactive coding challenges</p>
            </div>
            <div className="header-actions">
              <button className="action-button">
                <FaLaptopCode /> My Challenges
              </button>
            </div>
          </div>
          
          <div className="course-cards">
            {courses.map((course) => (
              <div 
                key={course.id}
                className="course-card"
                onClick={() => handleCourseClick(course.id)}
                style={{ background: course.gradient }}
              >
                <div className="card-icon">{course.icon}</div>
                <div className="card-content">
                  <h3>{course.name}</h3>
                  <p>Explore challenges</p>
                  <div className="card-badges">
                    <span className="card-badge">{Math.floor(Math.random() * 5) + 1} challenges</span>
                    <span className="card-badge">{Math.floor(Math.random() * 1000) + 100} attempts</span>
                  </div>
                </div>
                <div className="card-arrow">→</div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="challenge-view">
          <div className="challenge-header-bar">
            <div className="header-left">
              <div className="challenge-logo">
                {selectedChallenge.icon}
              </div>
              <div className="challenge-title">
                <h2>{selectedChallenge.title}</h2>
                <div className="challenge-metadata">
                  <span className="metadata-item"><VscDebugConsole /> {selectedChallenge.difficulty}</span>
                  <span className="metadata-item"><FaRegClock /> {selectedChallenge.timeEstimate}</span>
                </div>
              </div>
            </div>
            <div className="header-right">
              <div className="timer">
                <FaRegClock />
                <span>{timer}</span>
              </div>
            </div>
          </div>
          
          <div className="challenge-content">
            <div className="code-editor-container">
              <div className="editor-header">
                <h3>Editor</h3>
                <div className="editor-actions">
                  <button className="editor-action">Reset</button>
                  <button className="editor-action">Format</button>
                </div>
              </div>
              <div className="editor-tabs">
                <div className="editor-tab active">solution.js</div>
                <div className="editor-tab">test.js</div>
              </div>
              <textarea
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                className="code-textarea"
                placeholder="Write your code here..."
              />
              <div className="editor-footer">
                <button className="run-button">Run Code</button>
              </div>
            </div>
            
            <div className="instructions-panel">
              <div className="instructions-header">
                <h3>Instructions</h3>
              </div>
              <div className="instructions-content">
                <p className="instructions-description">{selectedChallenge.description}</p>
                <h4>Your Task:</h4>
                <p>{selectedChallenge.instructions}</p>
                
                <h4>Tips:</h4>
                <ul className="instructions-tips">
                  <li>Break down the problem into smaller steps</li>
                  <li>Test your solution with different inputs</li>
                  <li>Consider edge cases in your implementation</li>
                </ul>
                
                <div className="submission-section">
                  <h4>Ready to Submit?</h4>
                  <p>Make sure your code meets all requirements before submitting.</p>
                  <div className="actions-container">
                    <button className="back-button" onClick={() => setSelectedChallenge(null)}>
                      <IoMdArrowBack /> Back to Courses
                    </button>
                    <button className="submit-button" onClick={handleSubmit}>
                      Submit Solution <RiSendPlaneFill />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="recommendation-section">
            <h2><MdOutlineRecommend /> Similar Challenges</h2>
            <div className="recommendation-cards">
              <div className="recommendation-card">
                <div className="rec-card-icon">
                  <FaCode />
                </div>
                <div className="rec-card-content">
                  <h3>JavaScript Algorithms</h3>
                  <p>Master algorithmic problem solving</p>
                  <div className="rec-card-progress">
                    <div className="progress-bar" style={{width: '65%'}}></div>
                    <span>65% completion rate</span>
                  </div>
                </div>
                <button className="start-button">Start</button>
              </div>
              
              <div className="recommendation-card">
                <div className="rec-card-icon">
                  <MdDesignServices />
                </div>
                <div className="rec-card-content">
                  <h3>UI/UX Design Practice</h3>
                  <p>Create engaging user interfaces</p>
                  <div className="rec-card-progress">
                    <div className="progress-bar" style={{width: '78%'}}></div>
                    <span>78% completion rate</span>
                  </div>
                </div>
                <button className="start-button">Start</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Candidate_Dashboard;