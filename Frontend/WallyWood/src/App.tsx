import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/home/Home';
import { Plakater } from './pages/Plakater/Plakater';
import { Details } from './pages/Details/Details';
import { About } from './pages/About/About';
import { Kontakt } from './pages/Kontakt/Kontakt';
import { Login } from './pages/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/plakater" element={<Plakater />} />
          <Route path="/plakat/:slug" element={<Details />} />
          <Route path="/om-os" element={<About />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<div>Cart Page</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
