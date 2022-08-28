import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Second from './pages/Second'
import Third from './pages/Third'



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/bet' component={Second} exact/>
        <Route path='/s' component={Third} exact/>
      </Switch>
    </Router>
  );
}

export default App
  




