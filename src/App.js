import Header from "./components/organismes/Header";
import Home from "./pages/Home";
import Class from "./pages/Class";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Instructor from "./pages/Instructor";
import ClassDetail from "./pages/ClassDetail";
import InstructorDetail from "./pages/InstructorDetail";

function App() {
  return (
    <Router>
      <Header />
      <main className="bg-slate-50 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="classes" element={<Class />} />
          <Route path="classes/:id" element={<ClassDetail />} />
          <Route path="instructors" element={<Instructor />} />
          <Route path="instructors/:id" element={<InstructorDetail />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
