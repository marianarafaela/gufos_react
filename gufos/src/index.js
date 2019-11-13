import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './assets/pages/Home/App';
// importou a página Categorias
import Categorias from './assets/pages/Categorias/Categorias';
import Eventos from './assets/pages/Eventos/Evntos';
import Login from './assets/pages/Login/Login';
import * as serviceWorker from './serviceWorker';
import NotFound from './assets/pages/NotFound/NotFound';
// importou a biblioteca react-router-dom
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';


// realizar a criação das rotas
const Rotas = (
    <Router>
        <div>
        <Switch>
            <Route exact path = "/" component = {App} />
            <Route path = "/categorias" component = {Categorias} />
            <Route path = "/eventos" component ={Eventos} />
            <Route path = "/login" component ={Login} />
            <Route component ={NotFound}/>
         </Switch>
        </div>
    </Router>
)

ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
