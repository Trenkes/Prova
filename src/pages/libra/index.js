import { useState } from 'react';
import './index.scss'

export default function Libra() {
    const [mes, setMes] = useState('');
    const [dia, setDia] = useState();
    const [resul, setResul]  = useState();
    
    function libra(){
        let m = mes.toLowerCase();
        let msg="";
        if(dia < 0 || dia > 30){
            msg = "Dia inexistente!";
        }
        else if(dia >= 23 && m == "setembro" || dia <= 22 && m == "outubro"){
            msg= "É libra? Sim";
        }
        else{
            msg ='É libra? Não';
        }
        setResul(msg);
    }

    return (
    <div> 
        <center>
        <h1>VERIFIQUE SE SEU SIGNO É LIBRA</h1>
        <div>
            <label>Mês</label>
            <input type='text' value={mes} onChange={e => setMes(e.target.value)}></input>

            <label>Dia</label>
            <input type='number' value={dia} onChange={e => setDia(Number(e.target.value))}></input>
        </div>

        <button onClick={libra}>Verificar</button>

        <p> {resul} </p>
        </center>

    </div>
  )
}