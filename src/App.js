import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/menu';

import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {

   showContentMenus = (routes) => {
      var result = null;
      if (routes.length > 0) {
         result = routes.map((route, index) => {
            return (
               <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
               />
            );
         });
      }
      return <Switch>{result}</Switch>
   }

   render() {
      return (
         <Router>
            <React.Fragment>
               <Menu />
               <div className="container">
                  <div className="row">
                     {this.showContentMenus(routes)}
                  </div>
               </div>
            </React.Fragment>
         </Router>
      );
   }
}

export default App;

