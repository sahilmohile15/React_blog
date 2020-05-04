import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Hollywood from './pages/hollywood';
import Bollywood from './pages/bollywood';
import Footer from './components/footer';
import Post from './components/posts';
import Login from './components/Authentication/login';
import SignUp from './components/Authentication/register';
import firebase from './components/Authentication/firebase';


function App() {
/*
  const[firebaseInitiazed, setFirebaseInitiaziled] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then (value => {
      setFirebaseInitiaziled(value)
    })
  })
*/
  return /*firebaseInitiazed !== false ? */(
    <Router>
      <NavBar />
      <Route path = "/" exact component={Home}></Route>
      <Route path = "/login" exact component ={Login}></Route>
      <Route path = "/post/:postId" exact component={Post}></Route>
      <Route path = "/signup" exact component ={SignUp}></Route>
      <Route path = "/hollywood" exact component={Hollywood}></Route>
      <Route path = "/bollywood" exact component={Bollywood}></Route>
      <Footer />
    </Router>
    
  ) /*: <div> <h2>Please Login</h2> </div>*/
  
}

export default App;
