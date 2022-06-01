import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from './components/Navigation';
import Gallery from './components/Gallery';
import MintPage from './components/MintPage';
import MainSection from './components/Main-Section';
import Footer from './components/Footer';

class App extends Component {

render = () => {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Route path='/' exact>
            <MainSection />
          </Route>
          <Route path='/gallery' exact>
            <Gallery />
          </Route>
          <Route path='/mint' exact>
            <MintPage />
          </Route>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
