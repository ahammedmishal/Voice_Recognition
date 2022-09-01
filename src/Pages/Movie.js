import React, {useState, useEffect} from 'react';

import alanBtn from '@alan-ai/alan-sdk-web';
import Moviescard from '../componentz/MoviesCards';
import Particles from 'react-particles-js';

const alanKey = '3a100825aeeee71f6f35825e0befbed72e956eca572e1d8b807a3e2338fdd0dc/stage';
function Movie () {
	const [movies,setMovies] = useState ([]);
	const[activeMovies,setActiveMovies] = useState(0);

	useEffect(() => {
		alanBtn({
			key:alanKey,
			onCommand: ({command, list}) => {
				if(command === 'showMovie'){
					setMovies(list );
					setActiveMovies(-1);
				}else if(command === 'highlight'){
					setActiveMovies((prevActiveMovies) => prevActiveMovies + 1);
				}
			}
		})
	}, [])

	return (
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
				value: ["#red", "#2196f3"]
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
				color: "#444",
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
		<div className="main">
			<Moviescard list={movies} activeMovies={activeMovies}/>
		</div>
		</div>
	)
}

export default Movie
