import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
//component
import HomeContainer from './HomeContainer';

const My404 = () => {
  return(
    <div>
      Sorry bro, it's error
    </div>
  )
}
const App = (props) => {

  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
      </Switch>
    </main>
  );
}




export default App;
