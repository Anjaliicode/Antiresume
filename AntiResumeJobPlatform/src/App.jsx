import './App.css';  
import CandidateDashboard from "../src/candidate_pages/Candidate_Dashboard";  
import Homepage from "../src/common/Homepage"
import PostWorkboard from './employer_pages/PostWorkboard';

function App() {  
  return (  
    <>  
    <PostWorkboard/>
    <Homepage/>
      <CandidateDashboard />  
    </>  
  );  
}  

export default App;  
