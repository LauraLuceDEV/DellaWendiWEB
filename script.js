document.addEventListener('DOMContentLoaded', function() {
    const portfolioSection = document.getElementById('portfolio');
    const portfolioRow = portfolioSection.querySelector('.row');

    // Datos de ejemplo para las obras de arte
    const obrasDeArte = [
        { 
            imagen: 'https://via.placeholder.com/400x300',
            titulo: 'Obra de Arte 1',
            descripcion: 'Esta es una obra de arte increíble.'
        },
        { 
            imagen: 'https://via.placeholder.com/400x300',
            titulo: 'Obra de Arte 2',
            descripcion: 'Otra obra de arte asombrosa.'
        },
        { 
            imagen: 'https://via.placeholder.com/400x300',
            titulo: 'Obra de Arte 3',
            descripcion: 'Una obra de arte única y hermosa.'
        }
    ];

    // Función para crear una tarjeta de obra de arte
    function crearTarjetaObra(obra) {
        const card = document.createElement('div');
        card.classList.add('col-md-4');
        card.innerHTML = `
            <div class="card">
                <img src="${obra.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${obra.titulo}</h5>
                    <p class="card-text">${obra.descripcion}</p>
                </div>
            </div>
        `;
        return card;
    }

    // Crear y agregar tarjetas para cada obra de arte al portafolio
    obrasDeArte.forEach(obra => {
        const card = crearTarjetaObra(obra);
        portfolioRow.appendChild(card);
    });

    // Función para cerrar el menú automáticamente después de hacer clic en un enlace en dispositivos móviles
    const navLinks = document.querySelectorAll('.navbar-nav>li>a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            navbarCollapse.classList.remove('show');
        });
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
