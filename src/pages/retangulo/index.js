import { useState } from 'react';
import './index.scss'

function retangulo(base, altura){
    const ret = [];

    for ( let i = 1; i <= altura; i++){
        const col = [];
        for ( let j = 1; j <= base; j++){
            col.push('*');
        }
        ret.push(col);
    }
    console.log(ret);
    return ret;
}


export default function Retanguloo() {
    const [base, setBase] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resp, setResp] = useState([]);

    function criarRetangulo() {
        const r = retangulo(base, altura);
        setResp(r);
    }

    return (

        <div>
            <input value={base} onChange={e => setBase(Number(e.target.value))} />
            <input value={altura} onChange={e => setAltura(Number(e.target.value))} />
            <button onClick={criarRetangulo}>Criar Retangulo</button>
            <div>
                {resp.map(item =>
                    <div>
                        {item.map(c => <span> {c} </span>)}
                    </div>
                )}
            </div>
        </div>

    )
}

