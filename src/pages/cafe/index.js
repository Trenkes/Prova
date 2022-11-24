import { useState, useEffect } from 'react';
import './index.scss'

function CalcularCafe(estudante,recipiente,mililitros){
    if(estudante,recipiente,mililitros === 0 ) throw new Error("Digíte os números")
    let L = (estudante * mililitros ) / 1000;
    let teste = L/recipiente;
    let final = Math.ceil(teste) * recipiente
 
    return final
}

export default function Cafe() {
    const[estudante, setEstudante] = useState(0)
    const [recipiente, setRecipiente] = useState(0)
    const[milimetros,setMilimetros] = useState(0)
    const[resposta, setResposta] = useState(0)


    function cafee(){
        try {
            let final = CalcularCafe(estudante,recipiente,milimetros)
            setResposta(final)
        }

        catch (err) {
            setResposta(err.message)
        }
    }

    useEffect(() =>{
        cafee()
    },[estudante,recipiente,milimetros])

    return(
        <main className='sim'>
            <h1> Café </h1>

            <div>
            Insira a Quantidade de Estudantes <input type='number' min={0} value={estudante} onChange={e => setEstudante(e.target.value)} />
            </div>
            <div>
            Insira a Quantidade de Litros do recipiente <input type='number' min={0} value={recipiente} onChange={e => setRecipiente(e.target.value)} />
            </div><div>
            Insira a Quantidade de milimetros  <input type='number' min={0} value={milimetros} onChange={e => setMilimetros(e.target.value)} />
            </div>

            <div>
              {resposta}
            </div>
        </main>
    )
}
