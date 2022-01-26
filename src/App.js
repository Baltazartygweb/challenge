import React, { useEffect, useState }  from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Search from './components/Search';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




function App() {

 

  return (
    <div className="container fluid">
      <Header/>
      <Nav/>
      <Search/>
      <Gallery/>
      <Footer/>
        
    </div>
  );
}

export default App;
