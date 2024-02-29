
import { useState } from 'react'
import './App.css'
import Card from './Componets/Card'

function App() {


 const [Usuario , setUsuario] = useState({
  nombre : "" ,
  animal : "" ,
 })

 const [show ,setShow] = useState(false)
const [err , setErr] = useState(false)


 const handlesubmit = (event) => {
 event.preventDefault()
 if (Usuario.nombre.length >= 3 && Usuario.animal.length >= 6) {
  setShow(true)
  setErr(false)
  
 }
 else{
  setErr(true)
 }
  

 }

   
  

  return (
    <>
    
    <div>

      <form onSubmit={handlesubmit}>
        <h1>Elegi Tu Animal Favorito</h1>
      <label>
           Ingresa tu nombre
     <input type="text" onChange={(event) =>setUsuario({...Usuario,nombre: event.target.value})} />
</label>

<label >
  <hr />
  ingresa tu animal favorito
</label>
<input type="text" onChange={(event) =>setUsuario({...Usuario,animal: event.target.value})} />
<hr />
<button>Enviar</button>
</form>
{show && <h4>hola! {Usuario.nombre} , Sabemos que tu animal favorito es {Usuario.animal} </h4>}
{err && <p> Por favor chequea que la información sea correcta </p> }

      <Card />
    </div>
  
    </>
  )
}

export default App
