import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Work from './components/pages/Work';
import Skills from './components/pages/Skills';
import Education from './components/pages/Education';
import Sports from './components/pages/Sports';
import References from './components/pages/References';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import Extra from './components/pages/Extra';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/home' exact component={Home}/>
            <Route path='/work' exact component={Work}/>
            <Route path='/skills' exact component={Skills}/>
            <Route path='/education' exact component={Education}/>
            <Route path='/sports' exact component={Sports}/>
            <Route path='/references' exact component={References}/>
            <Route path='/contact' exact component={Contact}/>
            <Route path='/extra' exact component={Extra}/>
          </Switch>
          <Footer />
        </Router>
    </>
  );
}

export default App;