window.addEventListener('DOMContentLoaded', () => {
  const temp = 45; // Температура °F
  const speed = 10; // Скорость ветра mph
  const chillElement = document.getElementById('chill');

  function calculateWindChill(temperature, windSpeed) {
    // Формула ветрового охлаждения в °F и mph
    return Math.round(
      35.74 +
      0.6215 * temperature -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * temperature * Math.pow(windSpeed, 0.16)
    );
  }

  if (temp <= 50 && speed > 3) {
    chillElement.textContent = calculateWindChill(temp, speed) + " °F";
  } else {
    chillElement.textContent = "N/A";
  }

  // Обновляем год и дату
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;
});
