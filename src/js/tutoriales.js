const tutoriales = [
    {
        id: 1,
        titulo: '15 COSAS que DEBES HACER a tu NUEVO PORTÁTIL!',
        descripcion: 'Aprende las configuraciones y recomendaciones más importantes para optimizar y proteger tu portátil desde el primer día.',
        poster: '../../assets/images/15 COSAS que DEBES HACER a tu NUEVO PORTÁTIL!.avif',
        source: '../../assets/videos/15 COSAS que DEBES HACER a tu NUEVO PORTÁTIL!.mp4'
    },
    {
        id: 2,
        titulo: 'Cómo elegir una BUENA COMPUTADORA (antes de comprar)',
        descripcion: 'Descubre los aspectos clave que debes revisar antes de comprar una computadora según tus necesidades y presupuesto.',
        poster: '../../assets/images/Cómo elegir una BUENA COMPUTADORA (antes de comprar).avif',
        source: '../../assets/videos/Cómo elegir una BUENA COMPUTADORA (antes de comprar).mp4'
    },
    {
        id: 3,
        titulo: 'Cómo Funciona una Tienda Online Logística para e-Commerce',
        descripcion: 'Conoce cómo funciona la logística en una tienda online y los procesos detrás de los envíos y entregas.',
        poster: '../../assets/images/Cómo Funciona una Tienda Online Logística para e-Commerce.avif',
        source: '../../assets/videos/Cómo Funciona una Tienda Online Logística para e-Commerce.mp4'
    },
    {
         id: 4,
        titulo: 'Envíos para tu tienda online Guía completa y fácil de seguir - Paso a Paso',
        descripcion: 'Guía sencilla para aprender a gestionar envíos en tu tienda online de manera eficiente y organizada.',
        poster: '../../assets/images/Envíos para tu tienda online Guía completa y fácil de seguir - Paso a Paso.avif',
        source: '../../assets/videos/Envíos para tu tienda online_ Guía completa y fácil de seguir - Paso a Paso.mp4'
    },
    {
        id: 5,
        titulo: 'IPhone 17 vs iPhone 17 Pro vs Estas son las DIFERENCIAS Cuál elegir',
        descripcion: 'Comparativa entre los modelos iPhone 17 y iPhone 17 Pro para ayudarte a decidir cuál se adapta mejor a ti.',
        poster: '../../assets/images/iPhone 17 vs iPhone 17 Pro vs Estas son las DIFERENCIAS Cuál elegir.avif',
        source: '../../assets/videos/IPhone 17 vs iPhone 17 Pro vs Estas son las DIFERENCIAS Cuál elegir.mp4'
    },
    {
        id: 6,
        titulo: 'Que Apple Watch comprar en 2025 No te equivoques',
        descripcion: 'Revisión de los mejores modelos Apple Watch disponibles en 2025 y consejos para elegir el correcto.',
        poster: '../../assets/images/Que Apple Watch comprar en 2025 No te equivoques.avif',
        source: '../../assets/videos/Que Apple Watch comprar en 2025 No te equivoques.mp4'
    },
    {
        id: 7,
        titulo: 'Qué Portátil Comprar en 2025 5 Tips para Elegir la Mejor',
        descripcion: 'Conoce cinco recomendaciones esenciales para elegir un portátil ideal según el uso que necesites.',
        poster: '../../assets/images/Qué Portátil Comprar en 2025 5 Tips para Elegir la Mejor.avif',
        source: '../../assets/videos/Qué Portátil Comprar en 2025 5 Tips para Elegir la Mejor.mp4'
    }
];

const contenedorImagenes = document.querySelector('.contenedor-imagenes');
const videoGaleria = document.querySelector('.video-galeria');
const tituloVideo = document.querySelector('.titulo-video');
const descripcionVideo = document.querySelector('.descripcion-video');
const verSiguiente = document.querySelector('.ver-siguiente');
const verAnterior = document.querySelector('.ver-anterior');

const crearCard = (tutorial) => {
    const contenedorImagen = document.createElement('div');
    contenedorImagen.classList = ['contenedor-imagen'];
    const imagen = document.createElement('img');
    imagen.src = tutorial.poster;
    imagen.alt = tutorial.titulo;
    imagen.id = tutorial.id;
    contenedorImagen.appendChild(imagen);
    contenedorImagenes.appendChild(contenedorImagen);
}

for (let index = 0; index < tutoriales.length; index++) {
    crearCard(tutoriales[index]);
}

const contenedorImagen = document.querySelector('.contenedor-imagen');

contenedorImagenes.addEventListener('click', function(evento){
    if(evento.target && evento.target.src){
        seleccionarVideoTutorial(evento.target.id)
    }
})

const construirVideo = (tutorial) => {
    const videoDeGaleria = videoGaleria.querySelector('video');
    if(videoDeGaleria){
        videoDeGaleria.remove();
    }
    const video = document.createElement('video');
    const source = document.createElement('source');
    const texto = document.createElement('p');

    source.src = tutorial.source;
    source.type = 'video/mp4';
    texto.textContent = 'Este formato no es soportado';
    
    video.poster = tutorial.poster;
    video.controls = true;

    tituloVideo.textContent = tutorial.titulo;
    descripcionVideo.textContent = tutorial.descripcion;

    video.appendChild(source);
    video.appendChild(texto);
    videoGaleria.appendChild(video);
}

const seleccionarVideoTutorial = (id) => {
    const datosVideo = tutoriales.find(tutorial => tutorial.id === parseInt(id));
    construirVideo(datosVideo);
}

construirVideo(tutoriales[0]);

verSiguiente.addEventListener('click', () => {
    contenedorImagenes.scrollBy({
        left: 370,
        behavior: 'smooth'
    })
});

verAnterior.addEventListener('click', () => {
    contenedorImagenes.scrollBy({
        left: -370,
        behavior: 'smooth'
    })
})