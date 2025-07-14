// Footer Year & Last Modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Weather Calculations
const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);

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
