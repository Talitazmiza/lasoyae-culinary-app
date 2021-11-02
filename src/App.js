import React from 'react';
import './App.css';
import Landing from './Components/Landing';
import Login from './Components/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/login" exact component={Login} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
