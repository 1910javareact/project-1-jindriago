import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoginComponent } from './components/login-component/LoginComponent';
import { Provider } from 'react-redux';
import { store } from './Store';

const App: React.FC = () => {
  return (
    <div className="App">
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/login' component={LoginComponent}/>
          <Route path='/' component={LoginComponent}/>
        </Switch>
      </Router>
    </Provider>
    </div>

  );
}

export default App;
