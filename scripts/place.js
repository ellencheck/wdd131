document.getElementById("lastModified").textContent = document.lastModified;

const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

function calculateWindChill(temp, wind) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(wind, 0.16) +
    0.3965 * temp * Math.pow(wind, 0.16)
  ).toFixed(1);
}

if (temp <= 10 && wind > 4.8) {
  document.getElementById("chill").textContent = calculateWindChill(temp, wind);
} else {
  document.getElementById("chill").textContent = "N/A";
}

