import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './Pages/Cadastro/Video';



const Erro404 = () => (

  <div> 
    Erro 404!
  </div>

);


ReactDOM.render(
  <BrowserRouter>
    <Switch>

      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo}  />
      <Route component={Erro404} />
        
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

