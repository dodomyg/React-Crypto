import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Component/Home';
import Coins from './Component/Coins';
import Exchanges from './Component/Exchanges';
import CoinsInfo from './Component/CoinsInfo';
import Footer from './Component/Footer';
import Login from './Component/Login';
import SignUp from './Component/SignUp';

function DefaultLayout(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/register" element={<SignUp />} /> {/* Register page as default */}
      <Route
        path="/"
        element={<DefaultLayout><Home /></DefaultLayout>}
      />
      <Route
        path="/coins"
        element={<DefaultLayout><Coins /></DefaultLayout>}
      />
      <Route
        path="/exchange"
        element={<DefaultLayout><Exchanges /></DefaultLayout>}
      />
      <Route
        path="/coins/:id"
        element={<DefaultLayout><CoinsInfo /></DefaultLayout>}
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
