import React from 'react'
import "../styles/About/About.css"
import cv from "../cv/Pablo_Nicolas Villar_CV.pdf"
export default function About() {

  return (
    <div className='contAbout'>
      <div>
      <h1 className='titleAbout'> SOBRE MÍ</h1>
        <p className='parrafo'>Hola! Me llamo Pablo Nicolas Villar, nací el 22 de noviembre de 2002 en  <strong>Argentina</strong>. Desde muy pequeño me gusto la tecnología y los viedojuegos, me considero una persona perseverante. Me gusta trabajar en equipo y aprender cosas nuevas, soy desarrollador web Full Stack graduado en el curso de Soy Henry.
        Si te interesa mi perfil te dejo mi CV para que puedas ver más detalles sobre mí
        <div>‎</div>
<a className='linkCV' href={cv}>
        <button className="btnCV">Vista previa</button>
</a>
        <div>‎</div>
<a className='linkCV' href={cv} download>
        <button className="btnCV">Descargar</button>
</a>
        </p>
        <div>
        </div>
      </div>
    </div>
  )
}
