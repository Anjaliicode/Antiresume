

import React, { useState, useEffect } from 'react';
// import './CodingChallenge.css';
import "../styles/Candidate_Dashboard.css"

const Candidate_Dashboard = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Software Development' },
    { id: 2, name: 'Testing' },
    { id: 3, name: 'Civil Engineering' },
    { id: 4, name: 'Data Analysis' },
    { id: 5, name: 'UI/UX Design' }
  ]);

  const [challenges, setChallenges] = useState([
    { 
      id: 1, 
      courseId: 1, 
      title: 'React Coding Challenge', 
      description: 'Build a usable React component that renders a map with markers.',
      instructions: 'Build a usable React component that renders a map with markers.',
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
      description: 'Create test cases for a login form with validation.',
      instructions: 'Create comprehensive test cases covering all edge cases.',
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
      description: 'Calculate load distribution for a simple beam structure.',
      instructions: 'Calculate and analyze the load distribution patterns.',
      starterCode: `function calculateBeamLoad(length, load, points) {
  // Your code here
}`
    },
    { 
      id: 4, 
      courseId: 4, 
      title: 'Data Analysis Challenge', 
      description: 'Clean and analyze the provided dataset to extract insights.',
      instructions: 'Process the data and generate key statistical findings.',
      starterCode: `function analyzeData(dataset) {
  // Your analysis code here
}`
    },
    { 
      id: 5, 
      courseId: 5, 
      title: 'UI/UX Design Challenge', 
      description: 'Create wireframes for a mobile application homepage.',
      instructions: 'Design a user-friendly interface following best practices.',
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
      {!selectedChallenge ? (
        <>
          <div className="challenge-header">
            <h1>Coding Challenges</h1>
            <p>Select a category to start the challenge</p>
          </div>
          <div className="course-cards">
            {courses.map((course) => (
              <div 
                key={course.id}
                className="course-card"
                onClick={() => handleCourseClick(course.id)}
              >
                <h3>{course.name}</h3>
                <p>Click to view challenges</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="challenge-view">
          <div className="challenge-header">
            <div className="header-left">
              <div className="logo-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                </svg>
                {selectedChallenge.title}
              </div>
            </div>
            <div className="timer">{timer}</div>
          </div>
          
          <div className="challenge-content">
            <div className="code-editor">
              <h3>Editor</h3>
              <textarea
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                className="code-textarea"
              />
            </div>
            
            <div className="instructions-panel">
              <h3>Instructions</h3>
              <p>{selectedChallenge.instructions}</p>
            </div>
          </div>
          
          <div className="challenge-actions">
            <button className="back-button" onClick={() => setSelectedChallenge(null)}>
              Back to Courses
            </button>
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
      
      {selectedChallenge && (
        <div className="recommendation-section">
          <h2>Match Recommendations</h2>
          <div className="recommendation-cards">
            <div className="recommendation-card">
              <h3>JavaScript Algorithms</h3>
              <p>+5 Session complete</p>
            </div>
            <div className="recommendation-card">
              <h3>UI/UX Design Practice</h3>
              <p>Solve UI challenges</p>
              <button className="start-button">Start</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Candidate_Dashboard;