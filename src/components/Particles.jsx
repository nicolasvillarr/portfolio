import React ,{ useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesFondo = ()=>{
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return(
        <div>
<Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            // url="file:///C:/Users/Nico/Downloads/particlesjs-config.json"
            options={{
                
                background: {
                    color: {
                        value: "#ffe100",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "grab",
                        },
                        onHover: {
                            enable: false,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 14,
                        },
                        repulse: {
                            distance: 700,
                            duration: 0.1,
                        },
                    },
                },
                particles: {
    number: {
      value: 58,
      density: {
        enable: true,
        value_area: 500
      }
    },
    color: {
      value:"#001be6"
    },
    shape: {
      type: "star",
      stroke: {
        width: 0,
        color:"#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        // src: img/github.svg,
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.2,
      random: false,
      anim: {
        enable: false,
        speed: 4,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#001be6",
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      speed: 3.5,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "grab"
      },
      onclick: {
        enable: false,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
            }}
        />
        </div>
    )
}

export default ParticlesFondo