// script.js
document.getElementById('start-button').addEventListener('click', () => {
    const startMenu = document.getElementById('start-menu');
    startMenu.classList.toggle('hidden');
});

document.getElementById('notepad-icon').addEventListener('click', () => {
    openWindow('notepad-window');
});

document.getElementById('browser-icon').addEventListener('click', () => {
    openWindow('browser-window');
});

document.getElementById('calculator-icon').addEventListener('click', () => {
    openWindow('calculator-window');
});

document.getElementById('settings-icon').addEventListener('click', () => {
    openWindow('settings-window');
});

document.getElementById('open-notepad').addEventListener('click', () => {
    openWindow('notepad-window');
    toggleStartMenu();
});

document.getElementById('open-browser').addEventListener('click', () => {
    openWindow('browser-window');
    toggleStartMenu();
});

document.getElementById('open-calculator').addEventListener('click', () => {
    openWindow('calculator-window');
    toggleStartMenu();
});

document.getElementById('open-settings').addEventListener('click', () => {
    openWindow('settings-window');
    toggleStartMenu();
});

document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', (event) => {
        closeButton.parentElement.parentElement.classList.add('hidden');
    });
});

function openWindow(windowId) {
    document.getElementById(windowId).classList.remove('hidden');
}

function toggleStartMenu() {
    document.getElementById('start-menu').classList.toggle('hidden');
}

// Dragging functionality
document.querySelectorAll('.window').forEach(window => {
    const header = window.querySelector('.window-header');
    let isDragging = false;
    let offsetX, offsetY;

    header.addEventListener('mousedown', (event) => {
        isDragging = true;
        offsetX = event.clientX - window.offsetLeft;
        offsetY = event.clientY - window.offsetTop;
    });

    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            window.style.left = `${event.clientX - offsetX}px`;
            window.style.top = `${event.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
});

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

// Initial clock update and then update every minute
updateClock();
setInterval(updateClock, 60000);

document.getElementById('shutdown-button').addEventListener('click', () => {
    document.getElementById('main-screen').classList.add('hidden');
    document.getElementById('shutdown-screen').classList.remove('hidden');
});

document.getElementById('turn-on-button').addEventListener('click', () => {
    document.getElementById('shutdown-screen').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');
});
