document.addEventListener('DOMContentLoaded', function() {
    // Function to hide the loader and show the main content
    function hideLoader() {
        var loaderContainer = document.getElementById("loader-container");
        var mainContent = document.getElementById("main-content");
        loaderContainer.style.display = "none";
        mainContent.style.display = "block";
    }

    // Set a timeout to simulate loading time
    setTimeout(hideLoader, 3000); // Adjust the time as needed

    // Variables para el formulario
    const garmentTypeOther = document.getElementById('garmentTypeOther');
    const otherDescriptionGroup = document.getElementById('otherDescriptionGroup');

    document.getElementsByName('garmentType').forEach(radio => {
        radio.addEventListener('change', function() {
            if (garmentTypeOther.checked) {
                otherDescriptionGroup.style.display = 'block';
            } else {
                otherDescriptionGroup.style.display = 'none';
            }
        });
    });

    // Nuevo script para la sección de "¿TIENES UN GARABATO PROPIO QUE PERSONALIZAR?"
    const hasGarmentNo = document.getElementById('hasGarmentNo');
    const noGarmentDescriptionGroup = document.getElementById('noGarmentDescriptionGroup');

    hasGarmentNo.addEventListener('change', function() {
        if (hasGarmentNo.checked) {
            noGarmentDescriptionGroup.style.display = 'block';
        } else {
            noGarmentDescriptionGroup.style.display = 'none';
        }
    });

    const hasGarmentYes = document.getElementById('hasGarmentYes');
    hasGarmentYes.addEventListener('change', function() {
        if (hasGarmentYes.checked) {
            noGarmentDescriptionGroup.style.display = 'none';
        }
    });

    document.getElementById('referenceImages').addEventListener('change', function() {
        const fileName = Array.from(this.files).map(file => file.name).join(', ');
        this.nextElementSibling.innerText = fileName;
    });

    // Add the EmailJS initialization
    emailjs.init("YOUR_USER_ID"); // Replace "YOUR_USER_ID" with your EmailJS user ID

    document.getElementById('emailForm').addEventListener('submit', function(event) {
        event.preventDefault();
        sendEmail();
    });

    function sendEmail() {
        const form = document.getElementById('emailForm');
        const formData = new FormData(form);

        const emailParams = {
            subject: 'chaqueta',
            to_email: 'laupicero@gmail.com',
            hasGarment: formData.get('hasGarment'),
            noGarmentDescription: formData.get('noGarmentDescription'),
            garmentType: formData.get('garmentType'),
            otherDescription: formData.get('otherDescription'),
            description: formData.get('description')
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                displayMessage('Formulario enviado correctamente!', 'success');
            }, function(error) {
                console.log('FAILED...', error);
                displayMessage('No se pudo enviar su correo', 'error');
            });
    }

    function displayMessage(message, type) {
        const messageDiv = document.getElementById('form-messages');
        messageDiv.textContent = message;
        messageDiv.className = type === 'error' ? 'text-danger' : 'text-success';
    }

    // Variables y funciones para el portafolio
    const portfolioRow = document.querySelector('#portfolioRow');

    const garabatos = [
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

    window.addEventListener("load", function() {
        document.getElementById("loader-container").style.display = "none";
        document.body.style.overflow = "auto";
    });

    function crearTarjetaGarabato(garabato) {
        const card = document.createElement('div');
        card.classList.add('col-md-4');
        card.innerHTML = `
            <div class="card">
                <img src="${garabato.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${garabato.titulo}</h5>
                    <p class="card-text">${garabato.descripcion}</p>
                    <span class="badge badge-success">${garabato.available}</span>
                </div>
            </div>
        `;

        card.addEventListener('click', function() {
            mostrarModal(garabato);
        });

        return card;
    }

    function mostrarModal(garabato) {
        $('#exampleModal').modal('show');
        document.getElementById('modal-image').src = garabato.imagen;
        document.getElementById('modal-title').textContent = garabato.titulo;
        document.getElementById('modal-description').textContent = garabato.descripcion;
        document.getElementById('modal-available').textContent = garabato.available;
    }

    garabatos.forEach(garabato => {
        const card = crearTarjetaGarabato(garabato);
        portfolioRow.appendChild(card);
    });

    const toggleNavbarButton = document.getElementById('toggleNavbar');
    const navbarCollapse = document.getElementById('navbarNav');

    toggleNavbarButton.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
    });

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

    const emailIcon = document.querySelector('.email-icon');

    emailIcon.addEventListener('click', function() {
        $('#emailModal').modal('show');
    });

    const header = document.querySelector('header');
    header.addEventListener('mouseover', () => {
        header.style.backgroundImage = 'url("src/img/denim-nav-bck.png")';
    });
    header.addEventListener('mouseout', () => {
        header.style.backgroundImage = 'none';
    });
});
