import { useState } from 'react';
import './index.scss'

export default function Acai() {
  
        const [qtdPeq, setQtdpeq] = useState();
        const [qtdMed, setQtdmed] = useState();
        const [qtdGran, setQtdgran] = useState();
        const [desc, setDesc] = useState();
        const [resul, setResul] = useState();
      
        function calcular() {
          let a = qtdPeq * 13.5 + qtdMed * 15 + qtdGran * 17.5;
          let resul = ` O Total foi de R$ ${a - (a * (desc / 100))} `;
      
          if(qtdPeq < 0 || qtdMed < 0 || qtdGran < 0){
            resul = "Quantidade inválida"
          }
          
         
      
          setResul(resul);
        }

        return (
            <div>
              <center>      
                <h1>Calcular preço açaí</h1>
              <div>
                <label>Quantidade de açaí pequeno</label>
                <input type='number' value={qtdPeq} onChange={e => setQtdpeq(Number(e.target.value))} ></input>
              </div>
        
              <div>
                <label>Quantidade de açaí médio</label>
                <input type='number' value={qtdMed} onChange={e => setQtdmed(Number(e.target.value))}></input>
              </div>
        
              <div>
                <label>Quantidade de açaí grande</label>
                <input type='number' value={qtdGran} onChange={e => setQtdgran(Number(e.target.value))}></input>
              </div>
        
              <div>
                <label> Qual o desconto?</label>
                <input type='number' value={desc} onChange={e => setDesc(Number(e.target.value))}></input>
              </div>
        
        
              <button onClick={calcular}> Calcular </button>
        
              <p> {resul} </p>
        
              </center>
        
            </div>
          );
        }
