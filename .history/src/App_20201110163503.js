import React from 'react';
import { Route, Router } from 'react-router-dom';
import './App.css';
import Navbars from './components/Navbars';

function App() {
  return (
          <>
          <Router>
            <Navbars/>
              <Switch>
              npm i react-table
                <Route path='/' />
              </Switch>
            
          </Router>
          </>
        );
    }
 
export default App;
