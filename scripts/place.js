document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  // Set last modified date
  document.getElementById("lastModified").textContent = document.lastModified;

  // Calculate wind chill
  const temp = parseFloat(document.getElementById("temp").textContent);
  const wind = parseFloat(document.getElementById("wind").textContent);
  const chillEl = document.getElementById("chill");

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
});
