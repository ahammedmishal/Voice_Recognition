import React from 'react'

import './Home.css'
import Particles from 'react-particles-js';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';
import robogif from '../images/face1.gif'
import useStyles from '../styles.js';



function Home() {
    

  

    return(
        <div className="body">

        <div>
        <img className="image" src={robogif} alt="Face" alt="logo"/>
        </div>
        <div>  
                    <Particles className="particles"
                    params={{
                        fpsLimit: 60,
                        particles: {
                            number: {
                                value: 80,
                                density: {
                                    enable: true,
                                    value_area: 800
                                }
                            },
                            color: {
                                value: ["red", "#fff"]
                            },
                            shape: {
                                type: ["circle"],
                                stroke: {
                                    width: 0,
                                    color: "#fff"
                                },
                                polygon: {
                                    nb_sides: 5
                                },
                                image: {
                                    src: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
                                    width: 100,
                                    height: 100
                                }
                            },
                            opacity: {
                                value: 1,
                                random: false,
                                anim: {
                                    enable: false,
                                    speed: 1,
                                    opacity_min: 0.1,
                                    sync: false
                                }
                            },
                            size: {
                                value: 8,
                                random: true,
                                anim: {
                                    enable: false,
                                    speed: 10,
                                    size_min: 10,
                                    sync: false
                                }
                            },
                            line_linked: {
                                enable: true,
                                distance: 150,
                                color: "#fff",
                                opacity: 0.4,
                                width: 1
                            },
                            move: {
                                enable: true,
                                speed: 5,
                                direction: "none",
                                random: false,
                                straight: false,
                                out_mode: "out",
                                bounce: false,
                                attract: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 1200
                                }
                            }
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "grab"
                                },
                                onclick: {
                                    enable: true,
                                    mode: "push"
                                },
                                resize: true
                            },
                            modes: {
                                grab: {
                                    distance: 140,
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

                <div className="container" >
                    
                    <div className="card" 
                   
                   perspective={500}
                   glareEnable={true}
                   glareMaxOpacity={0.9}
                   glarePosition={'all'}
                   scale={1.02} >
                      
                        <div className="content"> 
                            <h2>01</h2>
                            <h1 style={{color:"white"}}>Jarvis News Reader</h1>
                            <p>reads about latest news
                            </p>
                            <a  href="/news">Click Here</a >
                        </div>
                    </div>
                    <div className="card"
                        perspective={500}
                        glareEnable={true}
                        glareMaxOpacity={0.9}
                        glarePosition={'all'}
                        scale={1.02} >
                        <div className="content">
                            <h2>02</h2>
                            <h1 style={{color:"white"}}>Jarvis Movie Reader</h1>
                            <p>reads about latest Movies details
                            </p>
                            <a href="/movie">Click Here</a >
                        </div>
                    </div>
                    </div>
                    
                </div>

        
    )

}

export default Home

