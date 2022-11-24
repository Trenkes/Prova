import { useState } from 'react';
import './index.scss'

export default function Ingresso() {
    const [int, setInt] = useState();
    const [meia, setMeia] = useState();
    const [dia, setDia] = useState();
    const [nacional, setNacional] = useState(false);
    const [resul, setResul] = useState();

    function ingressocinema() {
        let a = int * 28.5 + meia * 14.25;
        let d = dia.toLowerCase()
        if (d == "quarta-feira")
            a = (int + meia) * 14.25;
        if (nacional == true)
            a = (int + meia) * 5;

        let resul = `O total a se pagar pelos ingressos é R$ ${a}`

        setResul(resul);
    }



    return (
        <div className="pag-total8">
            <center>
                <h1>Verificar Preço do Ingresso</h1>
                <div>
                    <label>Quantidade de Inteira</label>
                    <input type='number' value={int} onChange={e => setInt(Number(e.target.value))} ></input>
                </div>

                <div>
                    <label>Quantidade de Meia</label>
                    <input type='number' value={meia} onChange={e => setMeia(Number(e.target.value))}></input>
                </div>

                <div>
                    <label>Dia</label>
                    <input type='text' value={dia} onChange={e => setDia(e.target.value)}></input>
                </div>

                <div>
                    <label> Nacional  </label>
                    <input type='radio' value={nacional} onChange={e => setNacional(Boolean(e.target.value))}></input>
                    <label value={true}>Sim</label>

                </div>

                <button onClick={ingressocinema}> Calcular </button>
                <p> {resul} </p>
            </center>

        </div>
    );
}