import { useState } from 'react';
import './index.scss'

export default function Familiar() {
    const [ganhos, setGanhos] = useState();
    const [gastos, setGastos] = useState();
    const [resul, setResul] = useState();
   
    function calculo() {
      let resul = " ";
      if(gastos > ganhos)
          resul = "Orçamento comprometido! Hora de rever seus gastos!";
          
      else if(gastos > (ganhos * 81/100) && gastos == ganhos)
              resul = "Cuidado, seu orçamento pode ficar comprometido";
  
  
      else if(gastos > (ganhos * 51/100) && gastos <= (ganhos * 80/100))        
              resul="Atenção, melhor conter os gastos!";
              
      else  if(gastos > (ganhos * 21/100) && gastos <= (ganhos * 50/100))    
              resul = "Muito bem, seus gastos não ultrapassam a metade dos ganhos!";
              
      else if (gastos >= (ganhos * 0/100) && gastos <= (ganhos * 20/100))
              resul = "Parabéns, está gerenciando bem seu orçamento!";
              
  
              
          setResul(resul);
          
      }
  
    return (
      <div>
        <center>      
          <h1>Orçamento Familiar</h1>
        <div>
          <label>Ganhos</label>
          <input type='number' value={ganhos} onChange={e => setGanhos(Number(e.target.value))} ></input>
        </div>
  
        <div>
          <label className='nome'>Gastos</label>
          <input type='number' value={gastos} onChange={e => setGastos(Number(e.target.value))}></input>
        </div>
  
      
        <button onClick={calculo}> Calcular </button>
        <p> {resul} </p>
        </center>
  
      </div>
    );
  }
