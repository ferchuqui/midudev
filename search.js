// Módulo para manejar la búsqueda de empleos por título
const searchInput = document.getElementById('empleos-search-input');

// Escuchar el evento 'input' para filtrar en tiempo real
searchInput.addEventListener('input', () => {
    // Usar la función centralizada de filtros si está disponible
    if (window.applyAllFilters) {
        window.applyAllFilters();
    }
});

// Mostrar el contador inicial cuando se carguen los empleos
// Usamos un pequeño delay para asegurar que los empleos se hayan cargado
setTimeout(() => {
    const resultCountSpan = document.getElementById('result-count');
    const jobs = document.querySelectorAll('.job-listing-card');
    if (jobs.length > 0 && resultCountSpan) {
        resultCountSpan.textContent = `Mostrando ${jobs.length} ofertas`;
    }
}, 100);
