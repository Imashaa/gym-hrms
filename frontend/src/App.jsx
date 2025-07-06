import { Routes, Route, Link, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EmployeePage from "./pages/EmployeePage";
import DepartmentPage from "./pages/DepartmentPage";
import RolePage from "./pages/RolePage";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Header Navigation */}
      <header className="header">
        <nav className="nav">
          <Link to="/" className="logo">
            Gym HRMS
          </Link>
          <div className="nav-links">
            <Link to="/employees">Employees</Link>
            <Link to="/departments">Departments</Link>
            <Link to="/roles">Roles</Link>
          </div>
        </nav>
      </header>

      {/* Page Routes */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/employees" element={<EmployeePage />} />
          <Route path="/departments" element={<DepartmentPage />} />
          <Route path="/roles" element={<RolePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Gym HRMS | Built with ❤️ by Imasha
          Abewickrama
        </p>
      </footer>
    </div>
  );
}

export default App;
