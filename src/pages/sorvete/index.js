import { useState } from 'react';
import './index.scss'

export default function Sorvete() {
    const [gramas, setGramas] = useState();
    const [resul, setResul]= useState();

    function calculo(){
        let a = `O Total do Preço é ${gramas * (0.035)}`;
        if(gramas >= 1000)
            a = `O Total do Preço é ${gramas * (0.03)}`;
        
        if(gramas < 0 )
            a = 'Quantidade inválida';
        

        setResul(a);
    }

    return(
        <div>
            <center>            
            <h1>Preço da grama</h1>

            <label>Gramas</label>
                <input type='number' value={gramas} onChange={e => setGramas(Number(e.target.value))}></input>
            <button onClick={calculo}>Calcular</button> 
            <p>{resul}</p>
            </center>

        </div>
    )

}