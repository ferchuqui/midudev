/* const botones = document.querySelectorAll('.button-apply-job');


botones.forEach(boton => {
    boton.addEventListener('click', function () {
    boton.textContent = '¡Aplicado!';
    boton.classList.add('is-applied');
    boton.disabled = true;
});
}) */
const jobsListingSection = document.querySelector('.jobs-listings');

jobsListingSection.addEventListener('click', function (event) {
    const element = event.target;

    if (element.classList.contains('button-apply-job')) {
        element.textContent = '¡Aplicado!';
        element.classList.add('is-applied');
        element.disabled = true;
    }
});

const filter = document.querySelector('#filter-location')
const mensaje = document.querySelector ('#filter-selected-value')

filter.addEventListener('change', function () {
    const selectedValue = filter.value;
    

    if (selectedValue) {
        mensaje.textContent = `Has seleccionado: ${selectedValue}`
    } else {
        mensaje.textContent = ''
    }
})

const searchInput = document.querySelector('#empleos-search-input')

searchInput.addEventListener('input', function () {
    console.log(searchInput.value)
})

searchInput.addEventListener('blur', function () {
    console.log('El input ha perdido el foco')
})

const searchForm = document.querySelector('#empleos-search-form')
searchForm.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('submit')
})

document.addEventListener('keydown', function (event) {
    console.log(`Tecla presionada: ${event.key}`)
    console.log('Esta pulsada la tecla shift?, event.shiftkey')
}