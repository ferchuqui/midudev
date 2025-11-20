// Módulo para manejar la búsqueda de empleos por título
const searchInput = document.getElementById('empleos-search-input');
const resultCountSpan = document.getElementById('result-count');

// Función para actualizar el filtrado de empleos
function filterJobs() {
    const searchTerm = searchInput.value.toLowerCase();
    const jobs = document.querySelectorAll('.job-listing-card');

    let visibleCount = 0;
    const totalCount = jobs.length;

    jobs.forEach(job => {
        const jobTitle = job.dataset.title || '';
        const matchesSearch = jobTitle.includes(searchTerm);

        // Mostrar u ocultar según coincidencia
        job.classList.toggle('is-hidden', !matchesSearch);

        if (matchesSearch) {
            visibleCount++;
        }
    });

    // Actualizar el contador de resultados
    if (searchTerm === '') {
        resultCountSpan.textContent = `Mostrando ${totalCount} ofertas`;
    } else {
        resultCountSpan.textContent = `Mostrando ${visibleCount} de ${totalCount} ofertas`;
    }
}

// Escuchar el evento 'input' para filtrar en tiempo real
searchInput.addEventListener('input', filterJobs);

// Mostrar el contador inicial cuando se carguen los empleos
// Usamos un pequeño delay para asegurar que los empleos se hayan cargado
setTimeout(() => {
    const jobs = document.querySelectorAll('.job-listing-card');
    if (jobs.length > 0) {
        resultCountSpan.textContent = `Mostrando ${jobs.length} ofertas`;
    }
}, 100);
