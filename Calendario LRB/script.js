// Masonic Lodge Events for 2026
const masonicEvents = {
    2025: {
        '12-20': { title: 'Tenida Blanca', type: 'special', description: 'Instalación de oficiales', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
        '12-21': { title: 'Solsticio de Invierno', type: 'special', description: 'Celebración del solsticio' },
        '12-25': { title: 'Navidad', type: 'holiday', description: 'Día festivo' },
        '12-30': { title: 'Donación de sangre', type: 'special', description: 'Jornada de donación de sangre en colaboración con la Cruz Roja', address: 'Cetral Government Center: 7201 Outer Loop Louisville, KY 40228' },
        '12-31': { title: 'Fin de Año', type: 'holiday', description: 'Celebración de fin de año' },
    },
    2026: {
        '1-1': { title: 'Año Nuevo', type: 'holiday', description: 'Día festivo' },
        '1-3': { title: 'Sesión Ordinaria', type: 'regular', description: '18:00 Cena fraternal, 19:00 Reunión', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
        '1-17': { title: 'Sesión Ordinaria', type: 'regular', description: '18:00 Cena fraternal, 19:00 Reunión', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
        '1-28' : { title: 'Natalicio de José Martí', type: 'special', description: 'Presentación de ofrenda floral al busto de José Martí', address: 'Shiveely Park: 3920 Dixie Hwy Louisville, KY 40216' },
        '1-31': { title: 'Sesión Ordinaria', type: 'regular', description: '18:00 Cena fraternal, 19:00 Logia de Instrucción', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
        '2-7': { title: 'Sesión Ordinaria', type: 'regular', description: '18:00 Cena fraternal, 19:00 Reunión', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
        '2-21': { title: 'Sesión Ordinaria', type: 'regular', description: '18:00 Cena fraternal, 19:00 Reunión', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
        '3-7': { title: 'Sesión Ordinaria', type: 'regular', description: '18:00 Cena fraternal, 19:00 Reunión', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
        '3-20': { title: 'Equinoccio de Primavera', type: 'special', description: 'Equinoccio de Primavera' },
        '3-21': { title: 'Banquete Masónico', type: 'regular', description: '18:00 Banquete Masónico en celebración del Equinoccio de Primavera' },
        '3-4' : { title: 'Reunión de Distrito', type: 'special', description: 'Reunión anual conjunta de los distritos 13 y 14', address: 'Templo del Rito Escocés: 200 E Gray St, Louisville, KY 40202' },
        '4-4': { title: 'Sesión Ordinaria', type: 'regular', description: '18:00 Cena fraternal, 19:00 Reunión', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
        '4-18': { title: 'Sesión Ordinaria', type: 'regular', description: '18:00 Cena fraternal, 19:00 Reunión', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
        '5-2': { title: 'Sesión Ordinaria', type: 'regular', description: '18:00 Cena fraternal, 19:00 Reunión', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
        '5-16': { title: 'Sesión Ordinaria', type: 'regular', description: '18:00 Cena fraternal, 19:00 Noche de Guayaberas. Celebración por el aniversario de la fundación de la República de Cuba', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
        '5-30': { title: 'Tenida Blanca', type: 'special', description: '18:00 Celebración del 1er aniversario de la fundación de la Logia "La Rosa Blanca"', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
        '6-6': { title: 'Sesión Ordinaria', type: 'regular', description: '18:00 Cena fraternal, 19:00 Reunión', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
        '6-20': { title: 'Banquete Masónico', type: 'regular', description: '18:00 Banquete Masónico en celebración del solsticio de verano', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
        '6-21': { title: 'Solsticio de Verano', type: 'special', description: 'solsticio de Verano' },
        '6-24': { title: 'Día de San Juan Bautista', type: 'special', description: 'Natalicio de San Juan Bautista. Fundación de la Gran Logia de Inglaterra' },
        '7-4': { title: 'Día de la Independencia', type: 'holiday', description: 'Día festivo nacional de EE.UU. No hay reunión' },
        '7-18': { title: 'Sesión Ordinaria', type: 'regular', description: '18:00 Cena fraternal, 19:00 Reunión', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
        '8-1': { title: 'Sesión Ordinaria', type: 'regular', description: '18:00 Cena fraternal, 19:00 Reunión', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
        '8-15': { title: 'Sesión Ordinaria', type: 'regular', description: '18:00 Cena fraternal, 19:00 Reunión', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
        '8-29': { title: 'Sesión Ordinaria', type: 'regular', description: '18:00 Cena fraternal, 19:00 Logia de Instrucción', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
        '9-5': { title: 'Sesión Ordinaria', type: 'regular', description: '18:00 Cena fraternal, 19:00 Reunión', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
        '9-19': { title: 'Banquete Masónico', type: 'regular', description: '18:00 Cena fraternal, 19:00 Celebración del Equinoccio de Otoño', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
        '9-20': { title: 'Equinoccio de Otoño', type: 'special', description: 'Celebración otoñal' },
        '10-3': { title: 'Sesión Ordinaria', type: 'regular', description: '18:00 Cena fraternal, 19:00 Reunión', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
        '10-17': { title: 'Sesión Ordinaria', type: 'regular', description: '18:00 Cena fraternal, 19:00 Reunión', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
        '10-31': { title: 'Sesión Ordinaria', type: 'regular', description: '18:00 Cena fraternal, 19:00 Logia de Instrucción', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
        '11-7': { title: 'Sesión Ordinaria', type: 'regular', description: '18:00 Cena fraternal, 19:00 Reunión', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
       '11-21': { title: 'Sesión Ordinaria', type: 'regular', description: '18:00 Cena especial por el Día de Acción de Gracias, 19:00 Reunión', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
       '11-26': { title: 'Día de Acción de Gracias', type: 'holiday', description: 'Día festivo nacional de EE.UU.' },
        '12-5': { title: 'Sesión Ordinaria', type: 'regular', description: '18:00 Cena fraternal, 19:00 Reunión y elecciones', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
       '12-19': { title: 'Tenida Blanca', type: 'special', description: 'Instalación de oficiales. Celebración del Solsticio de Invierno', address: 'Templo: 7300 Fegenbush Ln Louisville, KY 40228' },
        '12-21': { title: 'Solsticio de Invierno', type: 'special', description: 'Celebración del solsticio' },
        '12-25': { title: 'Navidad', type: 'holiday', description: 'Día festivo' },
        
    }
};

// Current year variable    

let currentYear = 2026;

// Initialize calendar on page load
document.addEventListener('DOMContentLoaded', () => {
    generateCalendar(currentYear);
    updateUpcomingEvents();
    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('prevYear').addEventListener('click', () => {
        currentYear--;
        generateCalendar(currentYear);
        updateUpcomingEvents();
    });

    document.getElementById('nextYear').addEventListener('click', () => {
        currentYear++;
        generateCalendar(currentYear);
        updateUpcomingEvents();
    });
}

function generateCalendar(year) {
    document.getElementById('yearDisplay').textContent = year;
    const container = document.getElementById('calendarContainer');
    container.innerHTML = '';

    const today = new Date();

    for (let month = 0; month < 12; month++) {
        const monthCard = createMonthCard(year, month, today);
        container.appendChild(monthCard);
    }
}

function createMonthCard(year, month, today) {
    const monthCard = document.createElement('div');
    monthCard.className = 'month-card';

    const monthNames = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    // Month Header
    const monthHeader = document.createElement('div');
    monthHeader.className = 'month-header';
    monthHeader.textContent = monthNames[month];
    monthCard.appendChild(monthHeader);

    // Month Grid
    const monthGrid = document.createElement('div');
    monthGrid.className = 'month-grid';

    // Day headers
    const dayHeaders = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    dayHeaders.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'day-header';
        dayHeader.textContent = day;
        monthGrid.appendChild(dayHeader);
    });

    // Get first day of month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);

    // Previous month's days (include dataset for clicks)
    for (let i = firstDay.getDay() - 1; i >= 0; i--) {
        const dayNum = prevLastDay.getDate() - i;
        const displayMonthIndex = month - 1 < 0 ? 11 : month - 1;
        const displayYear = month - 1 < 0 ? year - 1 : year;
        const dayCell = document.createElement('div');
        dayCell.className = 'day-cell other-month';
        dayCell.textContent = dayNum;
        dayCell.dataset.year = displayYear;
        dayCell.dataset.month = displayMonthIndex + 1;
        dayCell.dataset.day = dayNum;
        // mark event if exists
        const prevKey = `${dayCell.dataset.month}-${dayCell.dataset.day}`;
        if (masonicEvents[displayYear] && masonicEvents[displayYear][prevKey]) {
            const event = masonicEvents[displayYear][prevKey];
            dayCell.classList.add('event', event.type);
            dayCell.title = event.title + (event.address ? ' — ' + event.address : '');
        }
        attachDayClick(dayCell);
        monthGrid.appendChild(dayCell);
    }

    // Current month's days
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'day-cell';

        const date = new Date(year, month, day);

        // Check if it's today
        if (date.toDateString() === today.toDateString()) {
            dayCell.classList.add('today');
        }

        // Check if it's weekend
        if (date.getDay() === 0 || date.getDay() === 6) {
            dayCell.classList.add('weekend');
        }

        // dataset for click handling
        dayCell.dataset.year = year;
        dayCell.dataset.month = month + 1;
        dayCell.dataset.day = day;

        // Check for events
        const eventKey = `${dayCell.dataset.month}-${dayCell.dataset.day}`;
        if (masonicEvents[year] && masonicEvents[year][eventKey]) {
            const event = masonicEvents[year][eventKey];
            dayCell.classList.add('event', event.type);
            dayCell.title = event.title + (event.address ? ' — ' + event.address : '');
        }

        dayCell.textContent = day;
        attachDayClick(dayCell);
        monthGrid.appendChild(dayCell);
    }

    // Next month's days
    const totalCells = monthGrid.children.length - 7; // Subtract day headers
    const remainingCells = 42 - totalCells;
    for (let day = 1; day <= remainingCells; day++) {
        const displayMonthIndex = month + 1 > 11 ? 0 : month + 1;
        const displayYear = month + 1 > 11 ? year + 1 : year;
        const dayCell = document.createElement('div');
        dayCell.className = 'day-cell other-month';
        dayCell.textContent = day;
        dayCell.dataset.year = displayYear;
        dayCell.dataset.month = displayMonthIndex + 1;
        dayCell.dataset.day = day;

        // mark event if exists
        const nextKey = `${dayCell.dataset.month}-${dayCell.dataset.day}`;
        if (masonicEvents[displayYear] && masonicEvents[displayYear][nextKey]) {
            const event = masonicEvents[displayYear][nextKey];
            dayCell.classList.add('event', event.type);
            dayCell.title = event.title + (event.address ? ' — ' + event.address : '');
        }
        attachDayClick(dayCell);
        monthGrid.appendChild(dayCell);
    }

    monthCard.appendChild(monthGrid);
    return monthCard;
}

function updateUpcomingEvents() {
    const container = document.getElementById('upcomingEvents');
    container.innerHTML = '';

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Collect all events for the current and next years
    const upcomingEventsList = [];

    [currentYear, currentYear + 1].forEach(year => {
        if (masonicEvents[year]) {
            Object.entries(masonicEvents[year]).forEach(([dateStr, event]) => {
                const [month, day] = dateStr.split('-').map(Number);
                const eventDate = new Date(year, month - 1, day);

                if (eventDate >= today) {
                    upcomingEventsList.push({
                        date: eventDate,
                        dateStr: formatDate(eventDate),
                        ...event
                    });
                }
            });
        }
    });

    // Sort by date
    upcomingEventsList.sort((a, b) => a.date - b.date);

    // Display only next 8 events
    if (upcomingEventsList.length === 0) {
        container.innerHTML = '<div class="no-events">No hay eventos próximos</div>';
        return;
    }

    upcomingEventsList.slice(0, 12).forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';

        const dateElement = document.createElement('div');
        dateElement.className = 'event-date';
        dateElement.textContent = event.dateStr;

        const titleElement = document.createElement('div');
        titleElement.className = 'event-title';
        titleElement.textContent = event.title;

        const descElement = document.createElement('div');
        descElement.style.fontSize = '0.9em';
        descElement.style.color = '#666';
        descElement.textContent = event.description;

        const typeElement = document.createElement('div');
        typeElement.className = `event-type-badge ${event.type}`;
        typeElement.textContent = getTypeLabel(event.type);

        const addressElement = document.createElement('div');
        addressElement.style.fontSize = '0.8em';
        addressElement.style.color = '#444';
        addressElement.textContent = event.address;
        if (event.address) {
            eventCard.appendChild(addressElement);
        }
        eventCard.appendChild(dateElement);
        eventCard.appendChild(titleElement);
        eventCard.appendChild(descElement);
        eventCard.appendChild(typeElement);

        container.appendChild(eventCard);
    });
}

// Attach click handling helper for day cells
function attachDayClick(dayCell) {
    dayCell.addEventListener('click', () => {
        const y = Number(dayCell.dataset.year);
        const m = Number(dayCell.dataset.month);
        const d = Number(dayCell.dataset.day);
        openDateModal(y, m, d);
    });
}

// Modal open/close and rendering
function openDateModal(year, month, day) {
    const modal = document.getElementById('dateModal');
    const body = document.getElementById('modalBody');
    const date = new Date(year, month - 1, day);
    const formatted = formatDate(date);

    let html = `<h4>${formatted}</h4>`;

    const key = `${month}-${day}`;
    const event = masonicEvents[year] && masonicEvents[year][key];

    if (!event) {
        html += `<p>No hay evento programado para esta fecha.</p>`;
    } else {
        html += `<div class="event-title">${event.title}</div>`;
        if (event.description) html += `<div style="margin-top:6px;color:#555">${event.description}</div>`;
        if (event.address) html += `<div class="modal-address">📍 ${event.address}</div>`;
        html += `<div class="modal-type event-type-badge ${event.type} modal-type">${getTypeLabel(event.type)}</div>`;
    }

    body.innerHTML = html;
    modal.setAttribute('aria-hidden', 'false');

    // close handlers
    document.getElementById('modalClose').focus();
}

function closeDateModal() {
    const modal = document.getElementById('dateModal');
    modal.setAttribute('aria-hidden', 'true');
}

// Wire modal close actions
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('dateModal');
    const closeBtn = document.getElementById('modalClose');
    if (closeBtn) closeBtn.addEventListener('click', closeDateModal);
    // click outside modal content closes it
    if (modal) modal.addEventListener('click', (e) => {
        if (e.target === modal) closeDateModal();
    });
    // ESC to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDateModal();
    });
});

function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
}

function getTypeLabel(type) {
    const labels = {
        'regular': 'Sesión Ordinaria',
        'special': 'Evento Especial',
        'holiday': 'Festivo',
        'initiation': 'Iniciación/Grado'
    };
    return labels[type] || type;
}
