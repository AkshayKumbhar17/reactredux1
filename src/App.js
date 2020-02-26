import React from 'react';
import Navbar from './component/Navbar';
import Contact from './component/Contact';
import Home from './component/Home';
import About from './component/About';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Post from './component/Post';

function App() {
  return (
    <div className="App">
   
    <Router>
     
        <Navbar/>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/home/:post_id" component={Post}  />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
