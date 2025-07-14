// Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static values
const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);

// Wind chill formula (only if temp ≤ 50°F and wind speed > 3 mph)
function calculateWindChill(t, s) {
  return (
    35.74 +
    0.6215 * t -
    35.75 * Math.pow(s, 0.16) +
    0.4275 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

const windChill =
  temp <= 50 && speed > 3 ? `${calculateWindChill(temp, speed)} °F` : "N/A";

document.getElementById("chill").textContent = windChill;
