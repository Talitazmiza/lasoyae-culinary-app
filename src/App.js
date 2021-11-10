import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './Components/Landing';
import Login from './Components/Login';
import Register from './Components/Register';
import AdminHome from './Views/Admin/Pages/Home';
import CustomerHome from './Views/Customer/Pages/Home';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/admin/home" exact component={AdminHome} />
                    <Route path="/customer/home" exact component={CustomerHome} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
