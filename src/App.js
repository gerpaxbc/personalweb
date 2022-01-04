import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './pages/Main'
import Top from './components/Top'
import Contacto from './components/Contacto';
import About from './components/About';


export default function App() {
    return (
        <Router>
            <div>
                <header>
                <Top />     
                </header>
                <Switch>
                    <Route exact path='/'> 
                        <Main/>
                    </Route>
                    <Route exact path='/about'> 
                        <About/>
                    </Route>
                    <Route exact path='/contact'>
                        <Contacto />
                    </Route>
                </Switch> 
            </div>
        </Router>
    )
}

