import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import ResultBoard from './containers/Result/Result';
import Admissions from './containers/Admission/Admission';

class App extends Component {

  render() {

    let routes = (
      <Switch>
        <Route path="/Admissions" component={Admissions} />
        <Route path="/" exact component={ResultBoard} />
      </Switch>
    );

    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Results</Link>
            </li>
            <li>
              <Link to="/Admissions">Admissions</Link>
            </li>
          </ul>
        </nav>
        <main>
          <div className="App">
            {routes}
          </div>
        </main>
      </>
    );
  }
}

export default App;
