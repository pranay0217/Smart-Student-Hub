import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/home';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
