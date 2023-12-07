const logout = () => {
    sessionStorage.removeItem('token');
    window.location.href = 'index.html'; // Reemplaza '/ruta_completa/' con la ruta real de tu aplicación
};

document.addEventListener('DOMContentLoaded', () => {
    const cerrarSesionButton = document.getElementById('cerrarSesionButton');
    if (cerrarSesionButton) {
        cerrarSesionButton.addEventListener('click', logout);
    }
});
