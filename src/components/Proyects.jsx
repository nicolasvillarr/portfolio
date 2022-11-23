
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
  <Carousel className='carousel' width={"60%"} showStatus={false} showThumbs={false} showArrows={true} infiniteLoop={true} onClickItem={true} onClickThumb={true}>
    <div>
    <h2>proyecto individual</h2>
    <button>qsd</button>
      <img src={pi} width={"100%"} height={"100%"} alt=""/>
    </div>
    <div>
    <h2>proyecto final</h2>
      <img src={pf} width={"100%"} height={"100%"} alt=""/>
    </div>
  </Carousel>
</div>
</div>
)
  }
  