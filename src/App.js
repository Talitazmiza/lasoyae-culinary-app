import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './Components/Landing';
import Login from './Components/Login';
import Register from './Components/Register';
import AdminHome from './Views/Admin/Components/Stocks';
import Dashboard from "./Views/Admin/Pages/Dashboard";
import OrderList from "./Views/Admin/Pages/OrderList";

import CustomerFoods from './Views/Customer/Pages/Home';
import CustomerDrinks from './Views/Customer/Pages/HomeDrinks';
import TrackOrder from './Views/Customer/Pages/TrackOrder';
import Cart from './Views/Customer/Pages/Cart';
import Profile from './Views/Customer/Pages/Profile';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />

                    {/*admin*/}
                    <Route path="/admin/home" exact component={AdminHome} />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/orderlist" exact component={OrderList} />

                    {/*customer*/}
                    <Route path="/foods" exact component={CustomerFoods} />
                    <Route path="/drinks" exact component={CustomerDrinks} />
                    <Route path="/trackorder" exact component={TrackOrder} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/profile" exact component={Profile} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
