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

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 15,
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
          "src": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAyMjUgMjI1Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZiZGQwMDt9LmNscy0ye2ZpbGw6dXJsKCNEZWdyYWRhZG9fc2luX25vbWJyZV80LTIpO30uY2xzLTN7ZmlsbDp1cmwoI0RlZ3JhZGFkb19zaW5fbm9tYnJlXzItMik7fS5jbHMtNHtmaWxsOnVybCgjRGVncmFkYWRvX3Npbl9ub21icmVfMTkpO30uY2xzLTV7ZmlsbDp1cmwoI0RlZ3JhZGFkb19zaW5fbm9tYnJlXzIpO30uY2xzLTZ7ZmlsbDp1cmwoI0RlZ3JhZGFkb19zaW5fbm9tYnJlXzQpO308L3N0eWxlPjxsaW5lYXJHcmFkaWVudCBpZD0iRGVncmFkYWRvX3Npbl9ub21icmVfMTkiIHgxPSIwIiB5MT0iMTEyLjUiIHgyPSIyMjUiIHkyPSIxMTIuNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2U4NWEyNyIvPjxzdG9wIG9mZnNldD0iLjUiIHN0b3AtY29sb3I9IiMyODVmZWIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYmRkMDAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iRGVncmFkYWRvX3Npbl9ub21icmVfMiIgeDE9IjMzLjQ3IiB5MT0iMTM3LjQ3IiB4Mj0iMTA5LjUzIiB5Mj0iMTM3LjQ3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMTQ0ZWVjIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA2N2Y5Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IkRlZ3JhZGFkb19zaW5fbm9tYnJlXzItMiIgeDE9IjU0LjAxIiB5MT0iLTE1Ny40IiB4Mj0iODguOTkiIHkyPSItMTU3LjQiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMTkuOTMpIHNjYWxlKDEgLTEpIiB4bGluazpocmVmPSIjRGVncmFkYWRvX3Npbl9ub21icmVfMiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iRGVncmFkYWRvX3Npbl9ub21icmVfNCIgeDE9Ijc0LjQ3IiB5MT0iNjUuNDciIHgyPSIxNTAuNTMiIHkyPSI2NS40NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Y1M2QwMSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmNWEwMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJEZWdyYWRhZG9fc2luX25vbWJyZV80LTIiIHgxPSI5NS4wMSIgeTE9Ii04NS40IiB4Mj0iMTI5Ljk5IiB5Mj0iLTg1LjQiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMTkuOTMpIHNjYWxlKDEgLTEpIiB4bGluazpocmVmPSIjRGVncmFkYWRvX3Npbl9ub21icmVfNCIvPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0xMTIuNSwwQzUwLjM3LDAsMCw1MC4zNywwLDExMi41czUwLjM3LDExMi41LDExMi41LDExMi41LDExMi41LTUwLjM3LDExMi41LTExMi41UzE3NC42MywwLDExMi41LDBabTAsMjIwYy01OS4zNywwLTEwNy41LTQ4LjEzLTEwNy41LTEwNy41UzUzLjEzLDUsMTEyLjUsNXMxMDcuNSw0OC4xMywxMDcuNSwxMDcuNS00OC4xMywxMDcuNS0xMDcuNSwxMDcuNVoiLz48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik03MS41LDk5LjQ0Yy0yMSwwLTM4LjAzLDE3LjAzLTM4LjAzLDM4LjAzczE3LjAzLDM4LjAzLDM4LjAzLDM4LjAzLDM4LjAzLTE3LjAzLDM4LjAzLTM4LjAzLTE3LjAzLTM4LjAzLTM4LjAzLTM4LjAzWm0wLDcxLjY5Yy0xOC41OSwwLTMzLjY2LTE1LjA3LTMzLjY2LTMzLjY2czE1LjA3LTMzLjY2LDMzLjY2LTMzLjY2LDMzLjY2LDE1LjA3LDMzLjY2LDMzLjY2LTE1LjA3LDMzLjY2LTMzLjY2LDMzLjY2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTU0LjAxLDExNy40OGgzNC45OGwtMy4xOCwzNS45MS0xNC4zNCw0LjA2LTE0LjI2LTQuMDYtMy4xOC0zNS45MWgtLjAyWm0yOC40Niw3LjM1aC0yMS45NGwuMzUsNC4zNmgxNi44NmwtLjQyLDQuNTNoLTExLjA2bC40LDQuMjhoMTAuM2wtLjYxLDUuODctNC44NSwxLjM0LTQuOTItMS4zNS0uMzItMy41MWgtNC4zNGwuNDgsNi40Miw5LjEsMi44Myw4Ljk1LTIuNTUsMi4wMy0yMi4yMmgwWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE1My41LDk5LjQ0Yy0yMSwwLTM4LjAzLDE3LjAzLTM4LjAzLDM4LjAzczE3LjAzLDM4LjAzLDM4LjAzLDM4LjAzLDM4LjAzLTE3LjAzLDM4LjAzLTM4LjAzLTE3LjAzLTM4LjAzLTM4LjAzLTM4LjAzWm0wLDcxLjY5Yy0xOC41OSwwLTMzLjY2LTE1LjA3LTMzLjY2LTMzLjY2czE1LjA3LTMzLjY2LDMzLjY2LTMzLjY2LDMzLjY2LDE1LjA3LDMzLjY2LDMzLjY2LTE1LjA3LDMzLjY2LTMzLjY2LDMzLjY2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEzNi4wMSwxMTkuOTh2MzQuOThoMzQuOTh2LTM0Ljk4aC0zNC45OFptMTkuMDMsMjcuMjdjMCwzLjQtMiw0Ljk2LTQuOTEsNC45Ni0yLjYzLDAtNC4xNS0xLjM2LTQuOTMtMy4wMWwyLjY4LTEuNjJjLjUyLC45MSwuOTgsMS42OSwyLjEyLDEuNjlzMS43Ni0uNDIsMS43Ni0yLjA3di0xMS4xN2gzLjI5djExLjIyaDBabTcuNzcsNC45NmMtMy4wNSwwLTUuMDMtMS40NS01Ljk5LTMuMzZsMi42OC0xLjU1Yy43LDEuMTUsMS42MiwyLDMuMjQsMiwxLjM2LDAsMi4yMy0uNjgsMi4yMy0xLjYyLDAtMS4xMi0uODktMS41Mi0yLjQtMi4xOWwtLjgyLS4zNWMtMi4zNy0xLjAxLTMuOTQtMi4yOC0zLjk0LTQuOTYsMC0yLjQ3LDEuODgtNC4zNCw0LjgxLTQuMzQsMi4wOSwwLDMuNTksLjczLDQuNjcsMi42M2wtMi41NiwxLjY0Yy0uNTYtMS4wMS0xLjE3LTEuNDEtMi4xMi0xLjQxcy0xLjU3LC42MS0xLjU3LDEuNDFjMCwuOTgsLjYxLDEuMzgsMi4wMiwybC44MiwuMzVjMi43OSwxLjE5LDQuMzYsMi40Miw0LjM2LDUuMTcsMCwyLjk1LTIuMzMsNC41Ny01LjQ0LDQuNTdoMFoiLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik0xMTIuNSwyNy40NGMtMjEsMC0zOC4wMywxNy4wMy0zOC4wMywzOC4wM3MxNy4wMywzOC4wMywzOC4wMywzOC4wMywzOC4wMy0xNy4wMywzOC4wMy0zOC4wMy0xNy4wMy0zOC4wMy0zOC4wMy0zOC4wM1ptMCw3MS42OWMtMTguNTksMC0zMy42Ni0xNS4wNy0zMy42Ni0zMy42NnMxNS4wNy0zMy42NiwzMy42Ni0zMy42NiwzMy42NiwxNS4wNywzMy42NiwzMy42Ni0xNS4wNywzMy42Ni0zMy42NiwzMy42NloiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik05NS4wMSw0NS4yaDM0Ljk4bC0zLjE4LDM2LjQyLTE0LjM0LDQuMTItMTQuMjYtNC4xMi0zLjE5LTM2LjQyaDBabTExLjcxLDE2LjQ3bC0uMzgtNC41OWgxNi43NWwuMzgtNC40MmgtMjEuOTRsMS4xNiwxMy41MmgxNS4ybC0uNTQsNS43OS00Ljg0LDEuMzYtNC45Mi0xLjM2LS4zMS0zLjU2aC00LjM0bC41NSw3LjA0LDkuMDMsMi40NSw4Ljk2LTIuNDQsMS4yNC0xMy43OGgtMTZaIi8+PC9zdmc+",
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
        "value": 20,
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
        "opacity": 0.6,
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
          "distance": 100
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