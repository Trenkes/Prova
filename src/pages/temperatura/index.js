import { useState } from 'react';
import './index.scss'

export default function Temperatura() {
    const [temperatura, setTemperatura] = useState();
    const [resul, setResul] = useState();

    async function verificar() {
        let msg = "";
        if (temperatura >= 41)
            msg = "Sua temperatura indica Hipertemia";

        else if (temperatura >= 39.6)
            msg = "Sua temperatura indica Febre Alta";

        else if (temperatura >= 37.6)
            msg = "Sua temperatura indica Febre";
            
        else if (temperatura < 36)
            msg = "Sua temperatura indica Hiportemia";
            
        else if (temperatura >= 36 || temperatura < 37.6)
                msg = "Sua temperatura é Normal";


        setResul(msg);
    }

    return (
        <div>
            <center>
            <h1>Verificar Temperatura</h1>

            <label>Temperatura</label>
            <input type='number' value={temperatura} onChange={e => setTemperatura(Number(e.target.value))}></input>
            <button onClick={verificar}>Verificar</button>
            <p>{resul}</p>
            </center>
        </div>
    )
}

