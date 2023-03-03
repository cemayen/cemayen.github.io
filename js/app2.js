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

particlesJS('particles-js2',
  
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
          "src": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA3Ni4wNiA3Ni4wNiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmOGY4Zjg7fS5jbHMtMntmaWxsOnVybCgjRGVncmFkYWRvX3Npbl9ub21icmVfNC0yKTt9LmNscy0ze2ZpbGw6dXJsKCNEZWdyYWRhZG9fc2luX25vbWJyZV80KTt9PC9zdHlsZT48bGluZWFyR3JhZGllbnQgaWQ9IkRlZ3JhZGFkb19zaW5fbm9tYnJlXzQiIHgxPSIwIiB5MT0iMzguMDMiIHgyPSI3Ni4wNiIgeTI9IjM4LjAzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMTQ0ZWVjIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA2N2Y5Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IkRlZ3JhZGFkb19zaW5fbm9tYnJlXzQtMiIgeDE9IjIwLjU0IiB5MT0iMzguMDMiIHgyPSI1NS41MiIgeTI9IjM4LjAzIiB4bGluazpocmVmPSIjRGVncmFkYWRvX3Npbl9ub21icmVfNCIvPjwvZGVmcz48Zz48Y2lyY2xlIGNsYXNzPSJjbHMtMyIgY3g9IjM4LjAzIiBjeT0iMzguMDMiIHI9IjM4LjAzIi8+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSIzOC4wMyIgY3k9IjM4LjAzIiByPSIzMy42NiIvPjwvZz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yMC41NCwxOC4wNUg1NS41MmwtMy4xOCwzNS45MS0xNC4zNCw0LjA2LTE0LjI2LTQuMDYtMy4xOC0zNS45MVptMjguNDYsNy4zNUgyNy4wNnMuMzUsNC4zNiwuMzUsNC4zNmgxNi44NnMtLjQyLDQuNTMtLjQyLDQuNTNoLTExLjA2bC40LDQuMjhoMTAuM2wtLjYxLDUuODctNC44NSwxLjM0LTQuOTItMS4zNS0uMzItMy41MWgtNC4zNGwuNDgsNi40Miw5LjEsMi44Myw4Ljk1LTIuNTUsMi4wMy0yMi4yMloiLz48L3N2Zz4=",
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
        "value": 13,
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