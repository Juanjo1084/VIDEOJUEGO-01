import './App.css'
import { useState } from 'react'
import Cuestionario from './componets/cuestionario'
import { preguntas } from './assets/questions.json'
import { transformations } from './assets/transformations.json'

function App() {
const [showIntro, setShowIntro] = useState(true)

  return (
    <>
    <div className="container">
            {showIntro ? (
                <>
                <div>
                    <h2>Introducción</h2>
                    <p>En un mundo donde la sabiduría es poder, solo los 
                    más astutos y valientes pueden alcanzar la grandeza. 🌟
                    <br />
                    Eres un joven guerrero en busca de la fuerza definitiva, 
                    pero en este reino no basta con el músculo… ¡Tu intelecto 
                    es tu mejor arma! ⚔️💡
                    <br />
                    Cada pregunta matemática que respondas correctamente 
                    fortalecerá tu cuerpo y mente. Las preguntas más 
                    fáciles aumentarán tu fuerza, mientras que las más 
                    difíciles también reforzarán tu defensa. 🏋️‍♂️🛡️
                    <br />
                    Tu objetivo es simple: entrenar, superar los desafíos 
                    y enfrentar al Señor del Caos, un temible enemigo que 
                    desafía tanto la lógica como la destreza. ¿Tienes lo 
                    necesario para vencerlo?
                    <br />
                    Prepárate, responde con inteligencia y 
                    demuestra que el verdadero poder está en el conocimiento.
                    <br />
                    ¡El destino del reino está en tus manos!</p>
                    <h4>Ten en cuenta que no podrás volver a las anteriores preguntas
                        así que piensa bien antes de responder. ¡Buena suerte!
                    </h4>
                </div>
                <div className='botones'>
                    <button className="btn" onClick={() => setShowIntro(false)}>Empieza el juego</button>
                </div>
                </>
            ) : (
                <>
                <div className="start">
                    <Cuestionario preguntas = {preguntas} transformations = {transformations} />
                </div>
                </>
            )}
        </div>
    </>
  )
}

export default App
