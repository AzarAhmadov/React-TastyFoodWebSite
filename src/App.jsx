import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './components/home/Home';
import Footer from './components/common/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
