import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './pages/Main'
import Top from './components/Top'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <Router>
            <div>
                <header>
                <Top />     
                </header>
                <Main />  
            </div>
        </Router>
    )
}

