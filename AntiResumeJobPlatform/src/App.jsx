import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CandidateDashboard from "../src/candidate_pages/Candidate_Dashboard";
import Homepage from "../src/common/Homepage";
import PostWorkboard from './employer_pages/PostWorkboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
        <Route path="/post-workboard" element={<PostWorkboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;