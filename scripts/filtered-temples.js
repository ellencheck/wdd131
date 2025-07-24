// JavaScript for filtered-temples
const temples = [
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "images/rome-italy-temple-lds-1935293-wallpaper.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl: "images/paris-france-temple-lds-1792010-wallpaper.jpg"
  },
  {
    templeName: "Frankfurt Germany Temple",
    location: "Frankfurt, Germany",
    dedicated: "1987, August, 28",
    area: 34606,
    imageUrl: "images/frankfurt-germany-temple-lds-774803-wallpaper.jpg"
  },
  {
    templeName: "Bern Switzerland Temple",
    location: "Zollikofen, Switzerland",
    dedicated: "1955, September, 11",
    area: 44985,
    imageUrl: "images/bern-switzerland-temple-lds-758562-wallpaper.jpg"
  }
];

const displayTemples = (templesArray) => {
  const cards = document.querySelector("#temples");
  cards.innerHTML = "";

  templesArray.forEach((temple) => {
    const card = document.createElement("section");
    const name = document.createElement("h3");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedication = document.createElement("p");
    dedication.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Size: ${temple.area} sq ft`;

    const image = document.createElement("img");
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `Exterior image of ${temple.templeName}`);

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(image);

    cards.appendChild(card);
  });
};

// Sort temples by name initially
const sortByName = temples.sort((a, b) =>
  a.templeName > b.templeName ? 1 : -1
);
displayTemples(sortByName);

// Filtering
function filterTemples(temples) {
  displayTemples(
    temples.filter((temple) => {
      const dedicatedYear = parseInt(temple.dedicated.split(",")[0]);
      const area = temple.area;
      switch (document.querySelector("#filtered").value) {
        case "old":
          return dedicatedYear < 1900;
        case "new":
          return dedicatedYear > 2000;
        case "large":
          return area > 90000;
        case "small":
          return area < 10000;
        default:
          return true;
      }
    })
  );
}

document.querySelector("#filtered").addEventListener("change", () => {
  filterTemples(temples);
});

// Hamburger
const hamButton = document.querySelector(".menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// Footer
const yearSpan = document.querySelector("#year");
yearSpan.textContent = new Date().getFullYear();

const lastModifiedSpan = document.querySelector("#lastModified");
lastModifiedSpan.textContent = document.lastModified;
