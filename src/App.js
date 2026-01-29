import './App.css';
import './style/reset.css'; //초기화
import './style/common.css'; //공통서식 변수
import './style/layout.css'; //레이아웃 서식
// 헤더, 푸터
import Header from './layer/Header'; 
import Footer from './layer/Footer';
// 컴포넌트
import Main from './components/Main';
import Info from './components/Info';
import Intro from './components/Intro';
import Event from './components/Event';
import Customer from './components/Customer';
import Login from './components/Login';
import Join from './components/Join';
import Cart from './components/Cart';
import Order from './components/Order';
// 설치
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/intro' element={<Intro />}/>
      <Route path='/info' element={<Info />}/>
      <Route path='/event' element={<Event />}/>
      <Route path='/Customer' element={<Customer />}/>
      <Route path='/Login' element={<Login />}/>
      <Route path='/Join' element={<Join />}/>
      <Route path='/Cart' element={<Cart />}/>
      <Route path='/Order' element={<Order />}/>
    </Routes>
      <Footer />
      

    </BrowserRouter>
      
    </>
  );
}

export default App;
