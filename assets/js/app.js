 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Draggable)
  // gsap code here!
 });
const text = new SplitType('.parteTexto', { types: 'words, chars' })


text.chars.forEach(char => {
    
    gsap.from(char,{
        y: gsap.utils.random(-150, 150),
        x: gsap.utils.random(-300, 300),
        rotate: gsap.utils.random(-360, 360),
        scale: gsap.utils.random(0,2),
        duration: 1,
        ease: "back.out"
    })
    char.addEventListener("mouseenter", charsHover);
    /* let charColorOriginal = window.getComputedStyle(char).color; */
    function charsHover(){

        gsap.timeline()
        .to(char, {
            y: gsap.utils.random(-50, 50),
            x: gsap.utils.random(-50, 50),
            rotate: gsap.utils.random(-90, 90),
            scale: gsap.utils.random(0.5,1.5),
            duration:0.25,
            ease: "back.out",
            color: "#F77466", 
            onStart: () => {
                char.removeEventListener("mouseenter", charsHover);
            }
        })
        .to(char, {
            y: 0,
            x: 0,
            rotate: 0,
            scale: 1,
            duration:0.25,
            ease: "back.out",
            color: "",
            onComplete: () => {
                char.addEventListener("mouseenter", charsHover);
            }
        })
        /* char.removeEventListener("mouseenter", charsHover); */
    }
    
});

// Logica para el carrusel de swiper
document.addEventListener('DOMContentLoaded', function () {
    const carruseles = document.querySelectorAll('.swiper');
    carruseles.forEach((carrusel) => {
        const contenedorCarrusel = carrusel.querySelector('.swiper-wrapper');
        const itemsCarrusel = contenedorCarrusel ? contenedorCarrusel.querySelectorAll('.swiper-slide ') : [];
        let slidesPerViewValue = 1;
        let xxl = 1;
        let xl = 1;
        let lg = 1;
        let md = 1;
        let sm = 1;
        let xs = 1;
        let xxs = 1;
        let spaceBetweenValue = 0;
        let spaceBetweenValueXxl = 0;
        let spaceBetweenValueXl = 0;
        let spaceBetweenValueLg = 0;
        let spaceBetweenValueMd = 0;
        let spaceBetweenValueSm = 0;
        let spaceBetweenValueXs = 0;
        let spaceBetweenValueXxs = 0;
        let loopValue = true;
        let delayValue = 4000;
        let disableOnInteractionValue = false;
        let swiperPagination = ".swiper-paginations";
        let nextElValue = carrusel.querySelector('.swiper-next');
        let prevElValue = carrusel.querySelector('.swiper-prev');

        let effect = "auto";

        if (itemsCarrusel.length > 1) {
            loopValue = true;
        } else {
            loopValue = false;
        }
        if(carrusel.classList.contains("carruselTarjetas")){
            effect = "coverflow"
            slidesPerViewValue = 3;
            xxl = 3;
            xl = 3;
            lg = 3;
            md = 3;
            sm = 3;
            xs = 3;
            xxs = 3;
            swiperPagination = ".dotTarjetas"
        }
        if(carrusel.classList.contains("carruselModalDesarrollo")){
            delayValue = 90000;
            nextElValue = ".nextWeb";
            prevElValue = ".prevWeb";
        } 
        if(carrusel.classList.contains("carruselModalDiseño")){
            delayValue = 90000;
            nextElValue = ".nextDiseño";
            prevElValue = ".prevDiseño";
        } 
        if (carrusel.classList.contains('marcas')) {
            slidesPerViewValue = 3;
            xxl = 8;
            xl = 7;
            lg = 6;
            md = 5;
            sm = 5;
            xs = 5;
            xxs = 4;
            loopValue = true;
            delayValue = 3000;

            spaceBetweenValue = 10;
            spaceBetweenValueXxl = 50;
            spaceBetweenValueXl = 50;
            spaceBetweenValueLg = 20;
            spaceBetweenValueMd = 40;
            spaceBetweenValueSm = 20;
            spaceBetweenValueXs = 30;
            spaceBetweenValueXxs = 20;
        }

        if (carrusel.classList.contains('marcasMVS')) {
            slidesPerViewValue = 3;
            xxl = 8;
            xl = 7;
            lg = 6;
            md = 5;
            sm = 5;
            xs = 5;
            xxs = 4;
            loopValue = true;
            delayValue = 3000;

            spaceBetweenValue = 10;
            spaceBetweenValueXxl = 50;
            spaceBetweenValueXl = 50;
            spaceBetweenValueLg = 20;
            spaceBetweenValueMd = 40;
            spaceBetweenValueSm = 20;
            spaceBetweenValueXs = 30;
            spaceBetweenValueXxs = 20;
        }
        if (carrusel.classList.contains('marcasAutofin')) {
            slidesPerViewValue = 3;
            xxl = 8;
            xl = 7;
            lg = 6;
            md = 5;
            sm = 5;
            xs = 5;
            xxs = 4;
            loopValue = true;
            delayValue = 3000;

            spaceBetweenValue = 10;
            spaceBetweenValueXxl = 50;
            spaceBetweenValueXl = 50;
            spaceBetweenValueLg = 20;
            spaceBetweenValueMd = 40;
            spaceBetweenValueSm = 20;
            spaceBetweenValueXs = 30;
            spaceBetweenValueXxs = 20;
        }
        if(carrusel.classList.contains('carruselTestimonios')) {
            slidesPerViewValue = 1;
            xxl = 3;
            xl = 3;
            lg = 2;
            md = 2;
            sm = 2;
            xs = 1;
            xxs = 1;
            loopValue = true;
            delayValue = 5000;

            spaceBetweenValue = 10;
            spaceBetweenValueXxl = 50;
            spaceBetweenValueXl = 50;
            spaceBetweenValueLg = 20;
            spaceBetweenValueMd = 40;
            spaceBetweenValueSm = 20;
            spaceBetweenValueXs = 30;
            spaceBetweenValueXxs = 20;
            swiperPagination = ".dotTestimonios"
        }
        if(carrusel.classList.contains("carruselEducacion")){
            slidesPerViewValue = 2;
            xxl = 5;
            xl = 5;
            lg = 5;
            md = 4;
            sm = 4;
            xs = 3;
            xxs = 3;
            loopValue = true;
            delayValue = 6000;

            spaceBetweenValue = 10;
            spaceBetweenValueXxl = 50;
            spaceBetweenValueXl = 50;
            spaceBetweenValueLg = 20;
            spaceBetweenValueMd = 40;
            spaceBetweenValueSm = 20;
            spaceBetweenValueXs = 30;
            spaceBetweenValueXxs = 20;
        }
        if (itemsCarrusel.length > 0) {
            var swiper = new Swiper(carrusel, {
                effect: effect,
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                },
                grabCursor: true,
                slidesPerView: slidesPerViewValue,
                spaceBetween: spaceBetweenValue,
                loop: loopValue,
                autoplay: {
                    delay: delayValue,
                    disableOnInteraction: disableOnInteractionValue,
                },
                pagination: {
                    el: swiperPagination,
                    clickable: true,
                },
                navigation: {
                    nextEl: nextElValue,
                    prevEl: prevElValue,
                },
                breakpoints: {
                    1536: {
                        slidesPerView: xxl,
                        spaceBetween: spaceBetweenValueXxl,
                    },
                    1280: {
                        slidesPerView: xl,
                        spaceBetween: spaceBetweenValueXl,
                    },
                    1024: {
                        slidesPerView: lg,
                        spaceBetween: spaceBetweenValueLg,
                    },
                    768: {
                        slidesPerView: md,
                        spaceBetween: spaceBetweenValueMd,
                    },
                    640: {
                        slidesPerView: sm,
                        spaceBetween: spaceBetweenValueSm,
                    },
                    520: {
                        slidesPerView: xs,
                        spaceBetween: spaceBetweenValueXs,
                    },
                    390: {
                        slidesPerView: xxs,
                        spaceBetween: spaceBetweenValueXxs,
                    },
                },
            });
        }
    });
});

function abrirCerrarAcordeon(elemento){
    let acordeon = elemento.closest('.acordeon').querySelector('.contenidoAcordeon');
    let textoAcordeon = elemento.closest('.acordeon').querySelector('.verMasMenosTextoAcordeon');

    if(acordeon.classList.contains("contenidoAcordeonAbierto")){
        acordeon.classList.remove("contenidoAcordeonAbierto");
        textoAcordeon.innerHTML = "&lt;/Ver más&gt;"
        
    }else{
        acordeon.classList.add("contenidoAcordeonAbierto");
        textoAcordeon.innerHTML = "&lt;/Ver menos&gt;"
    }
}

//Segur el cursor
 gsap.set(".follower", {xPercent: -50, yPercent: -50});
let xTo = gsap.quickTo(".follower", "x", {duration: 0.6, ease: "power3"}),
    yTo = gsap.quickTo(".follower", "y", {duration: 0.6, ease: "power3"});
    window.addEventListener("mousemove", e => {
    xTo(e.clientX);
    yTo(e.clientY);
}); 

// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos los elementos
    /* const ojo = document.querySelectorAll('.ojo');
    const pupila = document.querySelectorAll('.pupila');
    const brillo = document.querySelectorAll('.brillo');

    
    const MAX_MOVE_X_OJO = 10; 
    const MAX_MOVE_Y_OJO = 10; 

    const MAX_MOVE_X_PUPILA = 5; 
    const MAX_MOVE_Y_PUPILA = 5; 

    const MAX_MOVE_X_BRILLO = 3; 
    const MAX_MOVE_Y_BRILLO = 3; 
    
    
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

   
    window.addEventListener('resize', () => {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
    });

    
    document.addEventListener('mousemove', (e) => {
       
        const mouseX = e.clientX;
        const mouseY = e.clientY;

       
        const moveX_ojo = gsap.utils.mapRange(0, windowWidth, -MAX_MOVE_X_OJO, MAX_MOVE_X_OJO, mouseX);
        const moveY_ojo = gsap.utils.mapRange(0, windowHeight, -MAX_MOVE_Y_OJO, MAX_MOVE_Y_OJO, mouseY);

        
        const moveX_pupila = gsap.utils.mapRange(0, windowWidth, -MAX_MOVE_X_PUPILA, MAX_MOVE_X_PUPILA, mouseX);
        const moveY_pupila = gsap.utils.mapRange(0, windowHeight, -MAX_MOVE_Y_PUPILA, MAX_MOVE_Y_PUPILA, mouseY);

       
        const moveX_brillo = gsap.utils.mapRange(0, windowWidth, -MAX_MOVE_X_BRILLO, MAX_MOVE_X_BRILLO, mouseX);
        const moveY_brillo = gsap.utils.mapRange(0, windowHeight, -MAX_MOVE_Y_BRILLO, MAX_MOVE_Y_BRILLO, mouseY);

       
        gsap.to(ojo, {
            x: moveX_ojo,
            y: moveY_ojo,
            duration: 0.8, 
            ease: "power2.out"
        });

        
        gsap.to(pupila, {
            x: moveX_pupila,
            y: moveY_pupila,
            duration: 0.4,
            ease: "linear" 
        });
        
        
        gsap.to(brillo, {
            x: moveX_brillo,
            y: moveY_brillo,
            duration: 0.4,
            ease: "linear"
        });
    }); */
});

document.querySelectorAll("p,h5,h6,span,b","&nbsp;").forEach(link => {

  link.addEventListener("mouseenter", () => {
    gsap.to(".follower", {
        width: 35,
        height: 35,
        duration: 0.2,
        background: "#F7746630",
        ease: "power2.out",
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(".follower", {
        width: 15,
        height: 15,
        duration: 0.2,
        background: "#F77466",
        ease: "power2.out",
    });
  });

});
document.querySelectorAll(".cursorAnimado, .swiperLogos").forEach(link => {

  link.addEventListener("mouseenter", () => {
    gsap.to(".follower", {
        width: 50,
        height: 50,
        duration: 0.2,
        background: "#F7746690",
        ease: "power2.out",
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(".follower", {
        width: 15,
        height: 15,
        duration: 0.2,
        background: "#F77466",
        ease: "power2.out",
    });
  });

});

let pulseTween; 

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("mouseenter", () => {
        if (pulseTween) pulseTween.kill();
            pulseTween = gsap.to(".follower", {
            width: 35,
            height: 35,
            duration: 0.4,
            background: "#F77466",
            ease: "power2.out",
            yoyo: true,
            repeat: -1,
            opacity:.3,
        });
    });

    link.addEventListener("mouseleave", () => {
        if (pulseTween) pulseTween.kill();
            gsap.to(".follower", {
            width: 15,
            height: 15,
            duration: 0.2,
            background: "#F77466",
            ease: "power2.out",
            opacity: 1,
        });
    });

});

function abrirModalWeb(){
    let modalWeb = document.getElementById('modalWeb');
    let contenidoModalWeb = document.getElementById('contenidoModalWeb');

    document.body.style.overflow = 'hidden';
    modalWeb.classList.remove('hidden');
    setTimeout(function () {
        contenidoModalWeb.classList.add('translateY');
    },100)

    modalWeb.addEventListener('mousedown', function(event){
        if(!contenidoModalWeb.contains(event.target)){
            cerrarModalWeb();
        }
    })
    
}
function cerrarModalWeb(){
    let modalWeb = document.getElementById('modalWeb');
    let contenidoModalWeb = document.getElementById('contenidoModalWeb');

    document.body.style.overflow = '';

    contenidoModalWeb.classList.remove('translateY');
    setTimeout(function () {
        modalWeb.classList.add('hidden');
    }, 300)
}
function abrirModalDiseño(){
    let modalDiseño = document.getElementById('modalDiseño');
    let contenidoModalDiseño = document.getElementById('contenidoModalDiseño');

    document.body.style.overflow = 'hidden';
    modalDiseño.classList.remove('hidden');
    setTimeout(function () {
        contenidoModalDiseño.classList.add('translateY');
    },100)

    modalDiseño.addEventListener('mousedown', function(event){
        if(!contenidoModalDiseño.contains(event.target)){
            cerrarModalDiseño();
        }
    })
    
}
function cerrarModalDiseño(){
    let modalDiseño = document.getElementById('modalDiseño');
    let contenidoModalDiseño = document.getElementById('contenidoModalDiseño');

    document.body.style.overflow = '';

    contenidoModalDiseño.classList.remove('translateY');
    setTimeout(function () {
        modalDiseño.classList.add('hidden');
    }, 300)
}

var closeLottieAnimacion = document.querySelectorAll('.closeLottie');

closeLottieAnimacion.forEach(function(container) {
    
    lottie.loadAnimation({ 
        container: container, 
        path: 'assets/lotties/closeLottie.json', // ruta
        renderer: 'svg', 
        loop: true, 
        autoplay: true, 
    });
});


/* var animation = bodymovin.loadAnimation({
    container: document.getElementById('closeLottie'), // ID
    path: 'assets/lotties/closeLottie.json', // ruta
    renderer: 'svg', // Required
    loop: true, 
    autoplay: true, 
}) */


var fuegoContainers = document.querySelectorAll('.fuegoLottie');

fuegoContainers.forEach(function(container) {
    
    lottie.loadAnimation({ 
        container: container, 
        path: 'assets/lotties/fuego.json', // ruta
        renderer: 'svg', 
        loop: true, 
        autoplay: true, 
    });
});
var sfeLoader = bodymovin.loadAnimation({
    container: document.getElementById('sfeLoader'), // ID
    path: 'assets/lotties/animaciones/preloader.json', // ruta
    renderer: 'svg', // Required
    loop: true, 
    autoplay: true, 
})
var BError = bodymovin.loadAnimation({
    container: document.getElementById('BError'), // ID
    path: 'assets/lotties/animaciones/BError.json', // ruta
    renderer: 'svg', // Required
    loop: true, 
    autoplay: true, 
})
var BLoader = bodymovin.loadAnimation({
    container: document.getElementById('BLoader'), // ID
    path: 'assets/lotties/animaciones/BLoader.json', // ruta
    renderer: 'svg', // Required
    loop: true, 
    autoplay: true, 
})
var novoLoader = bodymovin.loadAnimation({
    container: document.getElementById('novoLoader'), // ID
    path: 'assets/lotties/animaciones/novoLoader.json', // ruta
    renderer: 'svg', // Required
    loop: true, 
    autoplay: true, 
})
var novoSplash = bodymovin.loadAnimation({
    container: document.getElementById('novoSplash'), // ID
    path: 'assets/lotties/animaciones/novoSplash.json', // ruta
    renderer: 'svg', // Required
    loop: true, 
    autoplay: true, 
})
var robot = bodymovin.loadAnimation({
    container: document.getElementById('robot'), // ID
    path: 'assets/lotties/animaciones/robot.json', // ruta
    renderer: 'svg', // Required
    loop: true, 
    autoplay: true, 
})

