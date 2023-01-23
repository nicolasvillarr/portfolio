
  import React from 'react';
  import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
  import { Carousel } from 'react-responsive-carousel';
  import '../styles/Proyects/Proyects.css';
  import pi from "../pics/pi.png"
  import pf from "../pics/pf.png"
  
export default function Proyects() { 
return (
<div  className='margen'>

<div className='contProyect'>
  <h1 className='titleCarousel'>PROYECTOS</h1>  
  <Carousel className='carousel' width={"86%"} showStatus={false} showThumbs={false} infiniteLoop={true} >
    <>
      <img src={pi} width={"500"} height={"500px"} alt=""/>
      <h1 onClick={() => window.open("https://github.com/nicolasvillarr/Proyecto-individual-Country", '_blank' )} className="viewProyects">VER PROYECTO</h1>
    </>
    <>
      <img src={pf} width={"500"} height={"500px"} alt=""/>
      <h1 onClick={() => window.open("https://github.com/SerCM/not-waste_PF-HENRY", '_blank' )} className="viewProyects">VER PROYECTO</h1>
    </>
  </Carousel>
</div>
</div>
)
  }
  
