document.addEventListener('DOMContentLoaded', function() {
    const portfolioRow = document.querySelector('#chaqueta .row');

    // Datos de ejemplo para las chaquetas
    const chaquetas = [
        { 
            imagen: 'https://via.placeholder.com/400x300',
            titulo: 'Chaqueta 1',
            descripcion: 'Esta es una chaqueta increíble.'
        },
        { 
            imagen: 'https://via.placeholder.com/400x300',
            titulo: 'Chaqueta 2',
            descripcion: 'Otra chaqueta asombrosa.'
        },
        { 
            imagen: 'https://via.placeholder.com/400x300',
            titulo: 'Chaqueta 3',
            descripcion: 'Una chaqueta única y hermosa.'
        }
    ];

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
                </div>
            </div>
        `;
        return card;
    }

    // Crear y agregar tarjetas para cada chaqueta al portafolio
    chaquetas.forEach(chaqueta => {
        const card = crearTarjetaChaqueta(chaqueta);
        portfolioRow.appendChild(card);
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
});
