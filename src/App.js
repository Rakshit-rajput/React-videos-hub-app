import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/Header'
import Home from './components/Home';
import Videos from './components/Videos';
import Upload from './components/Upload';
import SignUp from './components/SignUp';
import Login from './components/Login';



function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/videos' element={<Videos/>}></Route>
      <Route path='/upload' element={<Upload/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>

      
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
