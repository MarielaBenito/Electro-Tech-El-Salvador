const cupon = document.querySelector('#cupon');
const alertaCuponValido = document.querySelector('.alert-success');
const alertaCuponNoValido = document.querySelector('.alert-danger');
const alertaMontoNoValido = document.querySelector('.monto-no-valido');
const parrafo = document.createElement('p');

const imagenProducto = document.querySelector('#imagen-producto');
const labelProducto = document.querySelector('.nombre-producto');
const subtotal = document.querySelector('.subtotal');
const ivaProducto = document.querySelector('.iva');
const envio = document.querySelector('.envio');
const descuentoCupon = document.querySelector('.descuento-cupon');
const total = document.querySelector('.total');

const parametros = new URLSearchParams(window.location.search);
const nombreProducto = parametros.get('producto');
const extesionImagen = parametros.get('extension_imagen');
const precioProducto = Number(parametros.get('precio'));

const formularioEnviarPedido = document.querySelector('.enviar_pedido');

const IVA = 13;
const DESCUENTO_COMPRA = 550;
const PRECIO_ENVIO = 5;
const CUPONES_DESCUENTOS = [
    {
        descuento: 10,
        nombre: 'PRICOMPRA123'
    },
    {
        descuento: 15,
        nombre: 'TECH2026'
    },
    {
        descuento: 20,
        nombre: 'PROMOTECH06'
    }
];

const URL_IMAGENES = 'https://res.cloudinary.com/dipyzmf94/image/upload/v1780275592';

let precioEnvio = 0;
let valorTotal = 0;
let montoDescuentoCupon = 0;

const formatoMoneda = (precio) => {
    const formato = new Intl.NumberFormat('es-US', { style: 'currency', currency: 'USD' });
    return formato.format(Number(precio) ? precio : 0);
}

subtotal.textContent = formatoMoneda(precioProducto);
descuentoCupon.textContent = formatoMoneda(0);
labelProducto.textContent = nombreProducto;
imagenProducto.src = `../../assets/images/${nombreProducto}.${extesionImagen}`;

const calcularPrecioTotal = (valorDescuentoCupon) => {
    let precioProductoCalculado = precioProducto;
    let precioIvaProducto = precioProducto * (IVA / 100);

    if(valorDescuentoCupon){
        montoDescuentoCupon = (precioProducto + precioIvaProducto) * (valorDescuentoCupon / 100);
        precioProductoCalculado = precioProductoCalculado - montoDescuentoCupon;
    }

    if(precioProductoCalculado > DESCUENTO_COMPRA){
        precioEnvio = 0;
        envio.textContent = formatoMoneda(precioEnvio);
    }else{
        precioEnvio = Number(precioProductoCalculado) ? PRECIO_ENVIO : 0;
        envio.textContent = formatoMoneda(precioEnvio);
    }

    valorTotal = precioProductoCalculado + precioIvaProducto + precioEnvio;
    descuentoCupon.textContent = formatoMoneda(montoDescuentoCupon);
    ivaProducto.textContent = formatoMoneda(precioIvaProducto);
    total.textContent = formatoMoneda(valorTotal);
}

calcularPrecioTotal(0);

const validarCupon = (evento) => {
    const valor = evento.target.value;
    if(valor.trim()){
        const valorCupon = evento.target.value;
        procesarDescuentoCupon(valorCupon.trim());
    }
}

const mostrarAlertaDescuento = (cupon) => {
    if(cupon){
        parrafo.textContent = `Cupón valido con el ${cupon.descuento}% de descuento`

        alertaCuponNoValido.style.display = 'none';
        alertaCuponValido.appendChild(parrafo);

        alertaCuponValido.style.display = 'block';
    }else{
        alertaCuponValido.style.display = 'none';
        alertaCuponNoValido.style.display = 'block';
    }
}

const buscarCuponDescuesto = (nombreCupon) => {
    return CUPONES_DESCUENTOS.find(cupon => cupon.nombre.toUpperCase() === nombreCupon.toUpperCase());
}

const procesarDescuentoCupon = (nombreCupon) => {
    let cupon = buscarCuponDescuesto(nombreCupon);
    mostrarAlertaDescuento(cupon);
    calcularPrecioTotal(cupon?.descuento);
}

const procesarNombreImagenProducto = (imagen) => {
    if(imagen.trim()){
        return imagen.trim().replaceAll(' ', '_').replaceAll(/[()]/g, '');
    }
    return imagen;
} 

const procesarEnvioPedido = (evento) => {
    evento.preventDefault();
    const formulario = Object.fromEntries(new FormData(evento.target));
    const telefono = '+503xxxxxxxx';
    
    if(Number(precioProducto) > 0 && Number(montoDescuentoCupon) > 0 && Number(valorTotal) > 0){
        const datosPedido = {
            imagen: `${URL_IMAGENES}/${procesarNombreImagenProducto(nombreProducto)}.${extesionImagen}`,
            producto: nombreProducto,
            subtotal: formatoMoneda(precioProducto),
            precioEnvio: formatoMoneda(precioEnvio),
            cupon: buscarCuponDescuesto(formulario.cupon).nombre,
            descuentoCupon: formatoMoneda(montoDescuentoCupon),
            porcentajeDescuento: `${buscarCuponDescuesto(formulario.cupon).descuento}%`,
            total: formatoMoneda(valorTotal),
            direccion: formulario.direccion
        };
        const mensaje = `Detalles del pedido.%0A%0AProducto: ${datosPedido.producto}.%0ASubtotal: ${datosPedido.subtotal}.%0APrecio de envio: ${datosPedido.precioEnvio}.%0ACupón: ${datosPedido.cupon}.%0ADescuento cupon: ${datosPedido.descuentoCupon}.%0APorcentaje descuento: ${datosPedido.porcentajeDescuento}.%0ATotal: ${datosPedido.total}.%0ADirección: ${datosPedido.direccion}.%0AImagen del producto: ${datosPedido.imagen}`;
        const urlWhatsApp = `https://wa.me/${telefono}?text=${mensaje}`;
        window.open(urlWhatsApp, '_blank');
    }else{
        alertaCuponValido.style.display = 'none';
        alertaCuponNoValido.style.display = 'none';
        alertaMontoNoValido.style.display = 'block';
    }
    

}

cupon.addEventListener('input', (evento) => validarCupon(evento));

if(formularioEnviarPedido){
    formularioEnviarPedido.addEventListener('submit', (evento) => procesarEnvioPedido(evento));
}
