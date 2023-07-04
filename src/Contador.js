import {useState} from 'react';

const Contador = () => {
    const [Contador, setContador] = useState(0)

    const sumarUno = () =>{
        setContador(Contador + 1);
    }

    const restarUno = () =>{
        setContador(Contador - 1);
    }

  return (
    <div>
      <h3>Contador: {Contador}</h3>
      <button onClick={sumarUno}>Sumar</button>
      <button onClick={restarUno}>Restar</button>
    </div>
  )
}

export default Contador
