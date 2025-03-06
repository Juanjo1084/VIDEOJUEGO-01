import { useState } from "react";
import "./cuestionario.css";
import Transformacion from "./transformacion";
import ContadorAnimado from './contador'

function Cuestionario({preguntas, transformations}) {
const [indice, setIndice] = useState(0)
const question = preguntas[indice];
const [fuerza, setFuerza] = useState(0)
const [showCuestionario, setShowCuestionario] = useState(true)
const manejarRespuesta = (opcionSeleccionada) => {
    const respuestaCorrecta = question.respuesta;

    if (opcionSeleccionada === respuestaCorrecta) {
      setFuerza((fuerza+1)*6);
    }
}
    
const nextQuestion = () => {
    if (indice < preguntas.length - 1) {
        setIndice(indice + 1)
    } else {
        setShowCuestionario(false)
    }
}



    return (
        <>
        {showCuestionario ? (
            <div>
            <p>Contesta las siguientes preguntas</p>
            <p>Nivel:{question.nivel}</p>
            <div className="cuestionario container">
                <main className="questions">
                    <ul>
                            <h3>{indice+1}. {question.pregunta}</h3>
                            <div className="opciones">
                                <button className="btn-1" onClick={() => {nextQuestion(); manejarRespuesta(question.opciones[0]);}}>a. {question.opciones[0]}</button>
                                <button className="btn-1" onClick={() => {nextQuestion(); manejarRespuesta(question.opciones[1]);}}>b. {question.opciones[1]}</button>
                                <button className="btn-1" onClick={() => {nextQuestion(); manejarRespuesta(question.opciones[2]);}}>c. {question.opciones[2]}</button>
                                <button className="btn-1" onClick={() => {nextQuestion(); manejarRespuesta(question.opciones[3]);}}>d. {question.opciones[3]}</button>
                            </div>
                    </ul>
                </main>
                <div className="botones">
                    {/* <button className="btn" onClick={nextQuestion}>Siguiente Pregunta</button> */}
                </div>
            </div>
            <div className="fuerza">
                <p>Tu fuerza es de: <br /> {fuerza}</p>
                <Transformacion fuerza = {fuerza} transformations = {transformations} />
            </div>
            </div>
        ):(
            <div className="batalla">
                <h2>Batalla Final</h2>
                <div className="pj">
                    <p>Tu nivel de poder es de:</p>
                    <ContadorAnimado valorFinal={fuerza} />
                </div>
                    <p>Te ves fuerte :D, así que tu rival será</p>
                <div className="rival">
                    <img src="https://dragonball-api.com/characters/Jiren.webp" alt="" />
                    <div className="rival-text">
                        <h3>Jiren</h3>
                        <p>Jiren es un poderoso luchador del Universo 11 y uno de los oponentes más formidables en el torneo.</p>
                        <p>El nivel de porder de tu rival es de:</p>
                        <ContadorAnimado valorFinal={35000000000} />
                    </div>
                </div>
                
            </div>
        )}
        </>
    )
}

export default Cuestionario