import { useState } from 'react';


export default function JurosCompostos(){
    const[periodo, setPeriodo] = useState();
    const[taxa, setTaxa] = useState();
    const[capital, setCapital] = useState();
    const[resul, setResul] = useState();
    function calcular(){
        let montante = capital * (1 + taxa) ** periodo;
        let juros = montante - capital;
        let parcela = montante / (periodo * 12);

        

        setResul(`o montante será de R$ ${montante.toFixed(2)}, os juros serão de R$ ${juros.toFixed(2)} e cada parcela será R$ ${parcela.toFixed(2)}  `);        
    }
    return(
        <div>
            <input value={periodo} onChange={e => setPeriodo(Number(e.target.value))}/>
            <input value={capital} onChange={e => setCapital(Number(e.target.value))}/>
            <input value={taxa} onChange={e => setTaxa(Number(e.target.value))}/>

            <button onClick={calcular}>clica</button>
            <p>{resul}</p>
        </div>
    )
}