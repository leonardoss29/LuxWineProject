import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import VinhoPage from './Components/VinhoPage';
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vinho" element={<VinhoPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
