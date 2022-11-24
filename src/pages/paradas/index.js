import { useState } from "react";
import './index.scss'

export default function Paradas(){
    const[capac, setCapac] = useState();
    const[consumo, setConsumo] = useState();
    const[dist, setDist] = useState();
    const[resul, setResul] = useState();

    function conta(){
        let b = (dist / (capac * consumo));
        let a = Math.ceil(b);
        setResul(`Serão necessarias ${a} Paradas`);
    }


    return(
        <div className="pag-total5">
            <center>
            <h1> Calcular Paradas</h1>

            <div className="box">
                <label>Capacidade do Tanque:</label>
                <input type='number' value={capac} onChange={e => setCapac(Number(e.target.value))}></input>
            </div>
            <div className="box">
                <label>Quantidade de Consumo *km por litro*</label>
                <input type='number' value={consumo} onChange={e => setConsumo(Number(e.target.value))}></input>
            </div>
            <div className="box">
                <label>Distância da Viagem:</label>
                <input type='number' value={dist} onChange={e => setDist(Number(e.target.value))}></input>
            </div>
            <button onClick={conta}> Realizar Conta</button>

            <p>{resul}</p>
            </center>
        </div>
    )
}