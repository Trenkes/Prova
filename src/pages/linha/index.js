import { useState } from 'react';
import './index.scss'

export default function Linha() {
    const [tamanho, setTamanho] = useState();
    const [resul, setResul] = useState();

    function criarLinha() {
        let array = [];
        for (let i = 0; i < tamanho; i++) {

            array.push("* ");

        }
        setResul(array);

    }


    return (
        <div>

            <input value={tamanho} onChange={e => setTamanho(Number(e.target.value))} />
            <button onClick={criarLinha}>criar linha</button>
            <p> {resul} </p>
        </div>
    )
}
