document.addEventListener('DOMContentLoaded', () => {

    // Variables

    const baseDeDatos = [

      {

        id: 1,

        nombre: 'Ternera guisada con setas',

        precio: 20000,

        imagen:'https://hips.hearstapps.com/hmg-prod/images/ternera-guisada-con-setas-1538049270.jpg?crop=1xw:0.9988901220865705xh;center,top&resize=980:*'

      },

      {

        id: 2,

        nombre: 'Costillas de cerdo con vino tinto',

        precio: 18000,

        imagen: 'https://hips.hearstapps.com/hmg-prod/images/costillas-con-vino-tinto-1583163561.jpg?crop=1xw:1xh;center,top&resize=980:*'

      },

      {

        id: 3,

        nombre: 'Pasta con salmón a la mostaza',

        precio: 25500,

        imagen: 'https://hips.hearstapps.com/hmg-prod/images/salmon-mostaza-pasta-1557862034.jpg?crop=0.9472222222222222xw:1xh;center,top&resize=980:*'

      },

      {

        id: 4,

        nombre: 'Huevos fritos con tostadas y PALTA',

        precio: 10000,

        imagen: 'https://hips.hearstapps.com/hmg-prod/images/sunny-side-up-eggs-healthy-breakfast-recipes-1605266519.jpg?crop=0.9986979166666666xw:1xh;center,top&resize=980:*'

      },

      {

       id: 5,

       nombre: 'Huevos revueltos con nachos y pico de gallo',

       precio: 9000,

       imagen: 'https://hips.hearstapps.com/hmg-prod/images/migas-1613595786.jpeg?crop=0.441xw:0.662xh;0.269xw,0.243xh&resize=980:*'
      },

      {

       id: 6, 

       nombre: 'Panecillos con huevos',

       precio: 12000,

       imagen: 'https://hips.hearstapps.com/hmg-prod/images/panecillos-con-huevos-1597663433.jpg?crop=0.819xw:1.00xh;0.181xw,0&resize=980:*'
      },

      {

       id: 7,

       nombre:'Tarta de queso sin corteza',

       precio: 3500,

       imagen: 'https://hips.hearstapps.com/hmg-prod/images/low-carb-air-fryer-cheesecake-1562037800.png?crop=0.699xw:1.00xh;0.0166xw,0&resize=980:*'
      },

      {

       id: 8, 

       nombre: 'Cinnamon Rolls',

       precio: 3000,

       imagen: 'https://hips.hearstapps.com/hmg-prod/images/air-fryer-desserts-air-fryer-cinnamon-rolls-1628529542.jpg?crop=1xw:1xh;center,top&resize=980:*'
      },

      {

       id: 9,

       nombre: 'Tarta de chocolate',

       precio: 3200,

       imagen: 'https://hips.hearstapps.com/hmg-prod/images/chocolate-cake-1562037101.jpg?crop=1xw:1xh;center,top&resize=980:*'
      }


      



    ];



    let carrito = [];

    const divisa = '€';

    const DOMitems = document.querySelector('#items');

    const DOMcarrito = document.querySelector('#carrito');

    const DOMtotal = document.querySelector('#total');

    const DOMbotonVaciar = document.querySelector('#boton-vaciar');



    // Funciones



    /**

    * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito

    */

    function renderizarProductos() {

      baseDeDatos.forEach((info) => {

        // Estructura

        const miNodo = document.createElement('div');

        miNodo.classList.add('card', 'col-sm-4');

        // Body

        const miNodoCardBody = document.createElement('div');

        miNodoCardBody.classList.add('card-body');

        // Titulo

        const miNodoTitle = document.createElement('h5');

        miNodoTitle.classList.add('card-title');

        miNodoTitle.textContent = info.nombre;

        // Imagen

        const miNodoImagen = document.createElement('img');

        miNodoImagen.classList.add('img-fluid');

        miNodoImagen.setAttribute('src', info.imagen);

        // Precio

        const miNodoPrecio = document.createElement('p');

        miNodoPrecio.classList.add('card-text');

        miNodoPrecio.textContent = `${info.precio}${divisa}`;

        // Boton

        const miNodoBoton = document.createElement('button');

        miNodoBoton.classList.add('btn', 'btn-primary');

        miNodoBoton.textContent = '+';

        miNodoBoton.setAttribute('marcador', info.id);

        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);

        // Insertamos

        miNodoCardBody.appendChild(miNodoImagen);

        miNodoCardBody.appendChild(miNodoTitle);

        miNodoCardBody.appendChild(miNodoPrecio);

        miNodoCardBody.appendChild(miNodoBoton);

        miNodo.appendChild(miNodoCardBody);

        DOMitems.appendChild(miNodo);

      });

    }



    /**

    * Evento para añadir un producto al carrito de la compra

    */

    function anyadirProductoAlCarrito(evento) {

      // Anyadimos el Nodo a nuestro carrito

      carrito.push(evento.target.getAttribute('marcador'))

      // Actualizamos el carrito

      renderizarCarrito();



    }



    /**

    * Dibuja todos los productos guardados en el carrito

    */

    function renderizarCarrito() {

      // Vaciamos todo el html

      DOMcarrito.textContent = '';

      // Quitamos los duplicados

      const carritoSinDuplicados = [...new Set(carrito)];

      // Generamos los Nodos a partir de carrito

      carritoSinDuplicados.forEach((item) => {

        // Obtenemos el item que necesitamos de la variable base de datos

        const miItem = baseDeDatos.filter((itemBaseDatos) => {

          // ¿Coincide las id? Solo puede existir un caso

          return itemBaseDatos.id === parseInt(item);

        });

        // Cuenta el número de veces que se repite el producto

        const numeroUnidadesItem = carrito.reduce((total, itemId) => {

          // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo

          return itemId === item ? total += 1 : total;

        }, 0);

        // Creamos el nodo del item del carrito

        const miNodo = document.createElement('li');

        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');

        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;

        // Boton de borrar

        const miBoton = document.createElement('button');

        miBoton.classList.add('btn', 'btn-danger', 'mx-5');

        miBoton.textContent = 'X';

        miBoton.style.marginLeft = '1rem';

        miBoton.dataset.item = item;

        miBoton.addEventListener('click', borrarItemCarrito);
        

        // Mezclamos nodos

        miNodo.appendChild(miBoton);

        DOMcarrito.appendChild(miNodo);

      });

      // Renderizamos el precio total en el HTML

      DOMtotal.textContent = calcularTotal();

    }



    /**

    * Evento para borrar un elemento del carrito

    */

    function borrarItemCarrito(evento) {

      // Obtenemos el producto ID que hay en el boton pulsado

      const id = evento.target.dataset.item;

      // Borramos todos los productos

      carrito = carrito.filter((carritoId) => {

        return carritoId !== id;

      });

      // volvemos a renderizar

      renderizarCarrito();

    }



    /**

     * Calcula el precio total teniendo en cuenta los productos repetidos

     */

    function calcularTotal() {

      // Recorremos el array del carrito

      return carrito.reduce((total, item) => {

        // De cada elemento obtenemos su precio

        const miItem = baseDeDatos.filter((itemBaseDatos) => {

          return itemBaseDatos.id === parseInt(item);

        });

        // Los sumamos al total

        return total + miItem[0].precio;

      }, 0).toFixed(2);

    }



    /**

    * Varia el carrito y vuelve a dibujarlo

    */

    function vaciarCarrito() {

      // Limpiamos los productos guardados

      carrito = [];

      // Renderizamos los cambios

      renderizarCarrito();

    }



    // Eventos

    DOMbotonVaciar.addEventListener('click', vaciarCarrito);



    // Inicio

    renderizarProductos();

    renderizarCarrito();

   });
