// Set the current year
const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Set last modified date
const lastMod = document.getElementById("lastModified");
lastMod.textContent = `Last Modified: ${document.lastModified}`;
