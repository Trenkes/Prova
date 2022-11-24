import { useState } from 'react';
import './index.scss'

export default function SalarioLiquido() {
    const [base, setBase] = useState();
    const [bonus, setBonus] = useState();
    const [desconto, setDesconto] = useState();
    const [resultado, setResultado] = useState();


    function Conta() {
        let stotal = (base + (base * bonus / 100)) - desconto;
        setResultado(`O seu Salário liquido é de R$${stotal}`);
    }


    return (
        <div>
                    <center>
            <h1>Calcular Salário</h1>
            <div>
                <label>Salário Base: </label>
                <input type='number' value={base} onChange={e => setBase(Number(e.target.value))}/>
            </div>

            <div>
                <label>Bônus: </label>
                <input type='number' value={bonus} onChange={e => setBonus(Number(e.target.value))}></input>
            </div>

            <div>
                <label>Desconto: </label>
                <input type='number' value={desconto} onChange={e => setDesconto(Number(e.target.value))}></input>
            </div>

            <button onClick={Conta}>Resultado</button>
            <p>{resultado}</p>
            </center>
        </div>
    )
}