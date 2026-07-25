let anioActual = document.querySelector(".anio_actual");
const formularioContacto = document.querySelector('.formulario_contacto');

const obtenerAnioActual = () => {
    const anio = new Date();
    anioActual.textContent = anio.getFullYear();
}

obtenerAnioActual();

if(formularioContacto){
    document.querySelector('.formulario_contacto').addEventListener('submit', (evento) => {
        evento.preventDefault();
        const datosFormulario = Object.fromEntries(new FormData(evento.target));
        const telefono = '+503xxxxxxxx';
        const mensaje = `Hola Electro Tech.%0A%0ANombres: ${datosFormulario.nombres}.%0AApellidos: ${datosFormulario.apellidos}.%0ACorreo: ${datosFormulario.correo}.%0ATeléfono: ${datosFormulario.telefono}.%0AEmpresa: ${datosFormulario.empresa}.%0ADirección: ${datosFormulario.direccion}.%0ATipo de contacto: ${datosFormulario.tipoContacto}.%0ATipo de rol: ${datosFormulario.tipoRol}.%0APreferencia de contacto: ${datosFormulario.preferenciaContacto}`;
        const urlWhatsApp = `https://wa.me/${telefono}?text=${mensaje}`;
        window.open(urlWhatsApp, '_blank');
    });
}
