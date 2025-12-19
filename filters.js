// Módulo para manejar todos los filtros de empleos
const filterLocation = document.querySelector('#filter-location');
const filterTechnology = document.querySelector('#filter-technology');
const filterExperienceLevel = document.querySelector('#filter-experience-level');
const mensaje = document.querySelector('#filter-selected-value');
const resultCountSpan = document.getElementById('result-count');

// Función centralizada para aplicar todos los filtros
function applyAllFilters() {
    const jobs = document.querySelectorAll('.job-listing-card');
    const locationValue = filterLocation.value;
    const technologyValue = filterTechnology.value;
    const experienceValue = filterExperienceLevel.value;

    let visibleCount = 0;
    const totalCount = jobs.length;

    jobs.forEach(job => {
        const modalidad = job.dataset.modalidad;
        const nivel = job.dataset.nivel;
        const technology = job.dataset.technology;
        const title = job.dataset.title || '';

        // Obtener el valor del input de búsqueda si existe
        const searchInput = document.getElementById('empleos-search-input');
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

        // Verificar cada filtro
        const matchesLocation = !locationValue || locationValue === modalidad;
        const matchesTechnology = !technologyValue || (technology && technology.includes(technologyValue));
        const matchesExperience = !experienceValue || experienceValue === nivel;
        const matchesSearch = !searchTerm || title.includes(searchTerm);

        // Mostrar solo si coincide con TODOS los filtros activos
        const shouldShow = matchesLocation && matchesTechnology && matchesExperience && matchesSearch;
        job.classList.toggle('is-hidden', !shouldShow);

        if (shouldShow) {
            visibleCount++;
        }
    });

    // Actualizar el contador de resultados
    updateResultCount(visibleCount, totalCount);

    // Actualizar mensaje de filtros seleccionados
    updateFilterMessage(locationValue, technologyValue, experienceValue);
}

// Función para actualizar el contador de resultados
function updateResultCount(visible, total) {
    if (resultCountSpan) {
        const searchInput = document.getElementById('empleos-search-input');
        const hasActiveFilters = filterLocation.value || filterTechnology.value ||
            filterExperienceLevel.value || (searchInput && searchInput.value);

        if (hasActiveFilters) {
            resultCountSpan.textContent = `Mostrando ${visible} de ${total} ofertas`;
        } else {
            resultCountSpan.textContent = `Mostrando ${total} ofertas`;
        }
    }
}

// Función para actualizar el mensaje de filtros seleccionados
function updateFilterMessage(location, technology, experience) {
    const filters = [];

    if (location) filters.push(`Ubicación: ${location}`);
    if (technology) filters.push(`Tecnología: ${technology}`);
    if (experience) filters.push(`Nivel: ${experience}`);

    if (filters.length > 0) {
        mensaje.textContent = `Filtros activos: ${filters.join(' | ')}`;
    } else {
        mensaje.textContent = '';
    }
}

// Agregar event listeners a todos los filtros
filterLocation.addEventListener('change', applyAllFilters);
filterTechnology.addEventListener('change', applyAllFilters);
filterExperienceLevel.addEventListener('change', applyAllFilters);

// Exportar la función para que search.js pueda usarla
window.applyAllFilters = applyAllFilters;