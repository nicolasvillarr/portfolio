import React from 'react'
import "../styles/Skills/Skills.css"
import css from "../pics/css.webp"
import express from "../pics/express.png"
import html from "../pics/html.png"
import js from "../pics/js.png"
import node from "../pics/nodejs.png"
import postgresql from "../pics/‎postgresql.png"
import react from "../pics/react.png"
import redux from "../pics/redux.png"
import sass from "../pics/sass.png"

export default function Skills() {

  const hw = "85px"
  return (
    <div className='contSkills'>
    <h1 className='titleSkills'>SKILLS</h1>
      <img src={react} height={hw} width={hw} className='icons' alt=''/>
      <img src={sass} height={hw} width={hw} className='icons' alt=''/>
      <img src={redux} height={hw} width={hw} className='icons' alt=''/>
      <img src={js} height={hw} width={hw} className='icons' alt=''/>
      <img src={css} height={hw} width={hw} className='icons' alt=''/>
      <img src={express} height={hw} width={hw} className='icons' alt=''/>
      <img src={node} height={hw} width={hw} className='icons' alt=''/>
      <img src={postgresql} height={hw} width={hw} className='icons' alt=''/>
      <img src={html} height={hw} width={hw} className='icons' alt=''/>
    </div>
  )
}
