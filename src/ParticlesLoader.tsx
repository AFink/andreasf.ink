import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.


const particleJsConfig = {
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": true,
                height: 800,
                width: 800
            }
        },
        "color": {
            "value": ["#1b9aaa", "#fca311", "#e3170a", "#72b01d"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
            },
            "polygon": {
                "nb_sides": 5
            },
        },
        "opacity": {
            value: { min: 0, max: 1 },
            animation: {
                enable: true,
                speed: 1,
                startValue: "max" as const,
                sync: false
            }
        },
        "size": {
            "value": {
                "min": 0,
                "max": 3
            },
            animation: {
                enable: true,
                speed: 1,
                sync: false,
                destroy: "none" as const,
            }
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none" as const,
            "random": true,
            "straight": false,
            "out_mode": "out" as const,
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas" as const,
        "events": {
            "onhover": {
                "enable": false,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": {
                "enable": true
            }
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
};

const ParticlesLoader = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        (init && (
            <Particles
                className="absolute top-0 w-full h-full z-[-1]"
                options={particleJsConfig}
            />
        )))
};

export default ParticlesLoader;
