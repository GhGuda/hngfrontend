document.addEventListener("DOMContentLoaded", function() {
    function updateDateTime() {
        const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
        const currentDayElement = document.querySelector('[data-testid="currentDay"]');
        
        const now = new Date();
        const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
        const timeString = now.toLocaleString('en-US', options);
        const day = now.toLocaleString('en-US', { weekday: 'long' });

        currentTimeElement.textContent = timeString;
        currentDayElement.textContent = day;
    }

    updateDateTime();
    setInterval(updateDateTime, 100);
});



// Toggler
let drop = document.querySelector("nav")
function Drop(){
    drop.classList.toggle("nav_height")
}
