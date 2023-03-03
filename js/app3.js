/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js3',
  
  {
    "particles": {
      "number": {
        "value": 8,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDc2LjA2IDc2LjA2Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Y4ZjhmODt9LmNscy0ye2ZpbGw6I2ZiZGQwMDt9PC9zdHlsZT48L2RlZnM+PGc+PGNpcmNsZSBjbGFzcz0iY2xzLTIiIGN4PSIzOC4wMyIgY3k9IjM4LjAzIiByPSIzOC4wMyIvPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iMzguMDMiIGN5PSIzOC4wMyIgcj0iMzMuNjYiLz48L2c+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjAuNTQsMjAuNTRWNTUuNTJINTUuNTJWMjAuNTRIMjAuNTRabTE5LjAzLDI3LjI3YzAsMy40LTIsNC45Ni00LjkxLDQuOTYtMi42MywwLTQuMTUtMS4zNi00LjkzLTMuMDFsMi42OC0xLjYyYy41MiwuOTEsLjk4LDEuNjksMi4xMiwxLjY5czEuNzYtLjQyLDEuNzYtMi4wN3YtMTEuMTdoMy4yOXYxMS4yMmgwWm03Ljc3LDQuOTZjLTMuMDUsMC01LjAzLTEuNDUtNS45OS0zLjM2bDIuNjgtMS41NWMuNywxLjE1LDEuNjIsMiwzLjI0LDIsMS4zNiwwLDIuMjMtLjY4LDIuMjMtMS42MiwwLTEuMTItLjg5LTEuNTItMi40LTIuMTlsLS44Mi0uMzVjLTIuMzctMS4wMS0zLjk0LTIuMjgtMy45NC00Ljk2LDAtMi40NywxLjg4LTQuMzQsNC44MS00LjM0LDIuMDksMCwzLjU5LC43Myw0LjY3LDIuNjNsLTIuNTYsMS42NGMtLjU2LTEuMDEtMS4xNy0xLjQxLTIuMTItMS40MXMtMS41NywuNjEtMS41NywxLjQxYzAsLjk4LC42MSwxLjM4LDIuMDIsMmwuODIsLjM1YzIuNzksMS4xOSw0LjM2LDIuNDIsNC4zNiw1LjE3LDAsMi45NS0yLjMzLDQuNTctNS40NCw0LjU3aDBaIi8+PC9zdmc+",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 15,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);