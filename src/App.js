import './App.css';
import { Routes, Route, Router } from 'react-router'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Login/Login'
import Checkout from './Pages/Checkout/Checkout'


import { BrowserRouter } from 'react-router-dom'
import Cart from './Pages/Cart/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
        {/* <Route path='/checkout' exact element={<Checkout />} /> */}
        <Route path='/cart' exact element={<Cart />} />
          <Route path='/' exact element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
