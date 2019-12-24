import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoginComponent } from './components/login-component/LoginComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/login' component={LoginComponent}/>
          <Route path='/' component={LoginComponent}/>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
