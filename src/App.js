import React, { useEffect, useState }  from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Search from './components/Search';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import foto from './foto.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




function App() {

 

  return (
    <div className="container fluid">
      <Nav/>
      <Header/>
      <Search/>
      <Gallery/>
      <Footer/>
        
    </div>
  );
}

export default App;
