import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { ProjectSubmissionPage } from "./pages/SubPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/sub" element={<ProjectSubmissionPage/>}/>
        <Route path="/Projects" element={<ProjectsPage/>}/>

     
      </Routes>
    </Router>
  );
}

export default App;