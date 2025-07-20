document.addEventListener("DOMContentLoaded", () => {
  const temp = parseFloat(document.getElementById("temp").textContent);
  const wind = parseFloat(document.getElementById("wind").textContent);
  const chillEl = document.getElementById("chill");

  let chill = "N/A";
  if (temp <= 10 && wind > 1.34) {
    chill = (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1) + " °C";
  }

  chillEl.textContent = chill;

  document.getElementById("lastModified").textContent = document.lastModified;
});
