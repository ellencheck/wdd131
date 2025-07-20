document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const lastModEl = document.getElementById("lastModified");
  if (lastModEl) lastModEl.textContent = document.lastModified;

  const tempEl = document.getElementById("temp");
  const windEl = document.getElementById("wind");
  const chillEl = document.getElementById("chill");

  if (tempEl && windEl && chillEl) {
    const temp = parseFloat(tempEl.textContent);
    const wind = parseFloat(windEl.textContent);

    function calculateWindChill(temp, wind) {
      return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(wind, 0.16) +
        0.3965 * temp * Math.pow(wind, 0.16)
      ).toFixed(1);
    }

    if (temp <= 10 && wind > 1.34) {
      chillEl.textContent = calculateWindChill(temp, wind) + " °C";
    } else {
      chillEl.textContent = "N/A";
    }
  }
});
