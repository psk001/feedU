import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import Home  from './components/Home';
import Advertisement from './components/Advertisement';
import Explore from './components/Explore';
import Contact from './components/Contact';

function App() {
  return (
    <main className="App">
      <Header/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/advertisement" component={Advertisement} exact />
        <Route path="/explore" component={Explore} exact />
        <Route path="/contact" component={Contact} exact />
        <Route component={Error} />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
