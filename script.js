document.addEventListener('DOMContentLoaded', function() {
    const portfolioRow = document.querySelector('#portfolioRow');

    // Datos de ejemplo para las chaquetas
    const chaquetas = [
        { 
            imagen: 'src/chaquetas-mock/chirigatos.png',
            titulo: 'Chirigatos',
            descripcion: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            available: 'Vendida'
        },
        { 
            imagen: 'src/chaquetas-mock/western.png',
            titulo: 'Buffalo Bill',
            descripcion: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
            available: 'En Venta'
        },
        { 
            imagen: 'src/chaquetas-mock/doggy.png',
            titulo: 'Mascota',
            descripcion: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
            available: 'Vendida'
        },
        { 
            imagen: 'src/chaquetas-mock/honguis-monguis.png',
            titulo: 'Honguis Monguis',
            descripcion: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis',
            available: 'Vendida'
        },
        { 
            imagen: 'src/chaquetas-mock/sol-luna.png',
            titulo: 'Sol Luna',
            descripcion: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
            available: 'Vendida'
        },
        { 
            imagen: 'src/chaquetas-mock/animal-print.png',
            titulo: 'Animal Print',
            descripcion: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis',
            available: 'Vendida'
        }
    ];

    // Espera a que el contenido de la página esté completamente cargado
    window.addEventListener("load", function() {
        // Oculta la pantalla de carga
        document.getElementById("loader-container").style.display = "none";
        
        // Muestra el contenido principal de la página
        document.body.style.overflow = "auto"; // Habilita el desplazamiento
    });

    // Función para crear una tarjeta de chaqueta
    function crearTarjetaChaqueta(chaqueta) {
        const card = document.createElement('div');
        card.classList.add('col-md-4');
        card.innerHTML = `
            <div class="card">
                <img src="${chaqueta.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${chaqueta.titulo}</h5>
                    <p class="card-text">${chaqueta.descripcion}</p>
                    <span class="badge badge-success">${chaqueta.available}</span>
                </div>
            </div>
        `;

        // Añadir evento clic para mostrar la ventana modal
        card.addEventListener('click', function() {
            mostrarModal(chaqueta);
        });

        return card;
    }

    // Mostrar ventana modal con detalles de la chaqueta
    function mostrarModal(chaqueta) {
        $('#exampleModal').modal('show'); // Mostrar ventana modal

        // Actualizar contenido de la ventana modal
        document.getElementById('modal-image').src = chaqueta.imagen;
        document.getElementById('modal-title').textContent = chaqueta.titulo;
        document.getElementById('modal-description').textContent = chaqueta.descripcion;
        document.getElementById('modal-available').textContent = chaqueta.available;
    }

    // Crear y agregar tarjetas para cada chaqueta al portafolio
    chaquetas.forEach(chaqueta => {
        const card = crearTarjetaChaqueta(chaqueta);
        portfolioRow.appendChild(card);
    });

    // Espera a que el contenido de la página esté completamente cargado
    window.addEventListener("load", function() {
        // Oculta la pantalla de carga
        document.getElementById("loader-container").style.display = "none";
        
        // Muestra el contenido principal de la página
        document.body.style.overflow = "auto"; // Habilita el desplazamiento
    });

    // Función para toggle del menú en dispositivos móviles
    const toggleNavbarButton = document.getElementById('toggleNavbar');
    const navbarCollapse = document.getElementById('navbarNav');

    toggleNavbarButton.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
    });

    // Función para desplazamiento suave al hacer clic en los enlaces del menú
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex','-1');
                        $target.focus();
                    };
                });
            }
        }
    });

    // Obtener el icono de email
    const emailIcon = document.querySelector('.email-icon'); // Asegúrate de agregar la clase 'email-icon' al icono de email

    emailIcon.addEventListener('click', function() {
        $('#emailModal').modal('show'); // Mostrar ventana modal de correo electrónico
    });


    document.addEventListener('DOMContentLoaded', () => {
        const header = document.querySelector('header');
        header.addEventListener('mouseover', () => {
            header.style.backgroundImage = 'url("src/img/denim-nav-bck.png")';
        });
        header.addEventListener('mouseout', () => {
            header.style.backgroundImage = 'none';
        });
    });
});
