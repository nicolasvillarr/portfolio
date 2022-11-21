
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
  <h1 className='titleCarousel'>MIS PROYECTOS</h1>  
  <Carousel className='carousel' width={"50%"} showStatus={false} showThumbs={false} showArrows={true} infiniteLoop={true} onClickItem={true} onClickThumb={true}>
    <div>
    <h3>proyecto individual</h3>
      <img src={pi} width={"500px"} height={"500px"} alt=""/>
    </div>
    <div>
    <h3>proyecto final</h3>
      <img src={pf} width={"500px"} height={"500px"} alt=""/>
    </div>
  </Carousel>
</div>
</div>
)
  }
  