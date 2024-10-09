import React from 'react'
import "../styles/About/About.css"
import cv from "../cv/PNVCV.pdf"
export default function About() {

return (
        <div className='contAbout'>
        <div>
                <h1 className='titleAbout'> SOBRE MÍ</h1>
                <p className='parrafo'>Hola!👋
                        <div></div>Me llamo Nicolas Villar, nací el 22 de noviembre de 2002 en  <strong>Argentina</strong>. Soy estudiante de la carrera de Analista Programador en la Universidad Abierta Interamericana (UAI).
                        Tengo experiencia trabajando para Accusys Technology como Analista Programador. Me considero
                        una persona perseverante y disfruto aprender constantemente nuevas tecnologías para añadirlas
                        en nuevos proyectos.
                        Si te interesa mi perfil te dejo mi CV para que puedas ver más detalles sobre mí
                        <div>‎</div>
                        <a className='linkCV' onClick={() => window.open(cv, '_blank' )}>
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
)}
