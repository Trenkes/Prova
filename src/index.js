import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Acai from './pages/acai';
import Libra from './pages/libra';
import Sorvete from './pages/sorvete'
import SalarioLiquido from './pages/salarioliquido';
import Paradas from './pages/paradas';
import Temperatura from './pages/temperatura';
import Familiar from './pages/familiar';
import Ingresso from './pages/ingresso';
import Contar from './pages/contar';
import Linha from './pages/linha';
import Retanguloo from './pages/retangulo';
import JurosCompostos from './pages/juroscompostos';
import Cafe from './pages/cafe';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/acai' element={<Acai/>} />
      <Route path='/libra' element={<Libra/>} />
      <Route path='/sorvete' element={<Sorvete/>} />
      <Route path='/salarioliquido' element={<SalarioLiquido/>} />
      <Route path='/familiar' element={<Familiar/>} />
      <Route path='/paradas' element={<Paradas/>} />
      <Route path='/temperatura' element={<Temperatura/>} />
      <Route path='/familiar' element={<Familiar/>} />
      <Route path='/ingresso' element={<Ingresso/>} />
      <Route path='/contar' element={<Contar/>} />
      <Route path='/linha' element={<Linha/>} />
      <Route path='/retangulo' element={<Retanguloo/>} />
      <Route path='/juroscompostos' element={<JurosCompostos/>} />
      <Route path='/cafe' element={<Cafe/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


