import { useState } from 'react';
import './index.scss'

export default function Contar() {
    const [inicio,setInicio] = useState();
    const [fim, setFim] = useState();
    const [resul, setResul] = useState();

    function sequencia(){
    let array= [];
        for(let i = inicio; i <= fim; i++){
            array= [...array, i]
            setResul(array);
        }
    }

    return(
        <div>
            <input value={inicio} onChange={e => setInicio(Number(e.target.value))}/>
            <input value={fim} onChange={e => setFim(Number(e.target.value))}/>
            <button onClick={sequencia}> contar</button>

            <p>{resul}</p>
        </div>
    )
}