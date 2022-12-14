import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import HomePage from './components/homePage';
import Categories from './components/categories';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
