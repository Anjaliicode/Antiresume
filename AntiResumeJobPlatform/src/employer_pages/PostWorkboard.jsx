import React, { useState } from 'react';
import { FaBriefcase, FaPlus, FaTrash, FaUpload, FaCheck, FaBuilding } from 'react-icons/fa';
// import './PostWorkboard.css';
import '../styles/PostWorkboard.css'

const PostWorkboard = () => {
  const [workSamples, setWorkSamples] = useState([
    { id: 1, title: '', description: '', skills: [] }
  ]);
  const [newSkill, setNewSkill] = useState('');
  const [companyInfo, setCompanyInfo] = useState({
    name: '',
    industry: '',
    size: '',
    location: '',
    about: ''
  });

  // Add a new empty work sample
  const addWorkSample = () => {
    const newId = workSamples.length > 0 ? Math.max(...workSamples.map(s => s.id)) + 1 : 1;
    setWorkSamples([...workSamples, { id: newId, title: '', description: '', skills: [] }]);
  };

  // Remove a work sample
  const removeWorkSample = (id) => {
    setWorkSamples(workSamples.filter(sample => sample.id !== id));
  };

  // Update work sample fields
  const updateWorkSample = (id, field, value) => {
    setWorkSamples(workSamples.map(sample => 
      sample.id === id ? { ...sample, [field]: value } : sample
    ));
  };

  // Add a skill to a work sample
  const addSkill = (sampleId) => {
    if (newSkill.trim()) {
      setWorkSamples(workSamples.map(sample => 
        sample.id === sampleId 
          ? { ...sample, skills: [...sample.skills, newSkill.trim()] } 
          : sample
      ));
      setNewSkill('');
    }
  };

  // Remove a skill from a work sample
  const removeSkill = (sampleId, skillIndex) => {
    setWorkSamples(workSamples.map(sample => 
      sample.id === sampleId 
        ? { ...sample, skills: sample.skills.filter((_, i) => i !== skillIndex) } 
        : sample
    ));
  };

  // Update company info
  const updateCompanyInfo = (field, value) => {
    setCompanyInfo({ ...companyInfo, [field]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Company Info:', companyInfo);
    console.log('Work Samples:', workSamples);
    alert('Workboard posted successfully!');
  };

  return (
    <div className="post-workboard">
      <div className="workboard-header">
        <h1>Post a Workboard</h1>
        <p>Share real work samples instead of generic job descriptions</p>
      </div>

      <div className="workboard-content">
        <form onSubmit={handleSubmit}>
          {/* Company Information Section */}
          <div className="section company-info-section">
            <h2><FaBuilding /> Company Information</h2>
            <p>Help candidates learn about your organization</p>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="companyName">Company Name *</label>
                <input 
                  type="text" 
                  id="companyName" 
                  required
                  value={companyInfo.name}
                  onChange={(e) => updateCompanyInfo('name', e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="industry">Industry *</label>
                <select 
                  id="industry" 
                  required
                  value={companyInfo.industry}
                  onChange={(e) => updateCompanyInfo('industry', e.target.value)}
                >
                  <option value="">Select industry</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="education">Education</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="companySize">Company Size</label>
                <select 
                  id="companySize"
                  value={companyInfo.size}
                  onChange={(e) => updateCompanyInfo('size', e.target.value)}
                >
                  <option value="">Select size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501-1000">501-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="location">Location *</label>
                <input 
                  type="text" 
                  id="location" 
                  placeholder="City, Country or Remote"
                  required
                  value={companyInfo.location}
                  onChange={(e) => updateCompanyInfo('location', e.target.value)}
                />
              </div>
            </div>
            
            <div className="form-group full-width">
              <label htmlFor="companyAbout">About Your Company *</label>
              <textarea 
                id="companyAbout" 
                rows="4"
                placeholder="Share your company's mission, culture, and what makes it a great place to work"
                required
                value={companyInfo.about}
                onChange={(e) => updateCompanyInfo('about', e.target.value)}
              ></textarea>
            </div>
          </div>
          
          {/* Work Samples Section */}
          <div className="section work-samples-section">
            <h2><FaBriefcase /> Work Samples</h2>
            <p>Post real examples of work that candidates would perform in this role</p>
            
            {workSamples.map(sample => (
              <div key={sample.id} className="work-sample">
                <div className="work-sample-header">
                  <h3>Work Sample {sample.id}</h3>
                  {workSamples.length > 1 && (
                    <button 
                      type="button"
                      className="remove-button"
                      onClick={() => removeWorkSample(sample.id)}
                    >
                      <FaTrash /> Remove
                    </button>
                  )}
                </div>
                
                <div className="form-group">
                  <label htmlFor={`sampleTitle-${sample.id}`}>Title *</label>
                  <input 
                    type="text" 
                    id={`sampleTitle-${sample.id}`}
                    placeholder="e.g., Design a User Interface, Solve a Coding Problem"
                    required
                    value={sample.title}
                    onChange={(e) => updateWorkSample(sample.id, 'title', e.target.value)}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor={`sampleDescription-${sample.id}`}>Description *</label>
                  <textarea 
                    id={`sampleDescription-${sample.id}`}
                    rows="5"
                    placeholder="Describe the work sample in detail, including expectations, constraints, and deliverables"
                    required
                    value={sample.description}
                    onChange={(e) => updateWorkSample(sample.id, 'description', e.target.value)}
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label>Required Skills</label>
                  <div className="skills-input-container">
                    <input 
                      type="text" 
                      placeholder="e.g., JavaScript, Design Thinking, Project Management"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill(sample.id))}
                    />
                    <button 
                      type="button"
                      className="add-skill-button"
                      onClick={() => addSkill(sample.id)}
                    >
                      <FaPlus /> Add
                    </button>
                  </div>
                  
                  <div className="skills-list">
                    {sample.skills.map((skill, index) => (
                      <div key={index} className="skill-tag">
                        {skill}
                        <button 
                          type="button"
                          className="remove-skill-button"
                          onClick={() => removeSkill(sample.id, index)}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Attachments (Optional)</label>
                  <div className="file-upload">
                    <FaUpload />
                    <span>Drop files here or click to upload</span>
                    <input type="file" />
                  </div>
                  <p className="file-instructions">You can upload documents, images, or any resources related to this work sample</p>
                </div>
              </div>
            ))}
            
            <button 
              type="button"
              className="add-sample-button"
              onClick={addWorkSample}
            >
              <FaPlus /> Add Another Work Sample
            </button>
          </div>
          
          {/* Submit Section */}
          <div className="submit-section">
            <p>By posting this workboard, you agree to our Terms of Service and Privacy Policy</p>
            <button type="submit" className="post-button">
              <FaCheck /> Post Workboard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostWorkboard;