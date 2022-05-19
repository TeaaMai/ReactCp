import logo from './logo.svg';
import './App.css';
import React  from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import getDatos from './Postales';

function App() {

  return (
    <BrowserRouter>
     <Switch>
      <Route path="/" component={getDatos} exact />
     </Switch>
    </BrowserRouter>
  );

}

export default App;
