// Массив храмов с исходными данными + добавим 3 новых для задания
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Добавим 3 новых
   {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 50000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-temple-exterior-1300000-wallpaper.jpg"
  },
  {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 12000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-temple-exterior-1234567-wallpaper.jpg"
  },
  {
  templeName: "Rome Italy",
  location: "Rome, Italy",
  dedicated: "2019, March, 17",
  area: 13500,
  imageUrl: "images/rome-temple.jpg"
}

];

// Получаем DOM элементы
const templesContainer = document.getElementById("templesContainer");
const navMenu = document.getElementById("navMenu");
const menuBtn = document.getElementById("menuBtn");

// Функция создания карточки храма
function createTempleCard(temple) {
  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = "lazy"; // lazy loading

  // Подмена картинки на заглушку, если не загрузилась
  img.onerror = () => {
    img.src = "https://via.placeholder.com/400x250?text=Image+not+available";
  };

  const caption = document.createElement("figcaption");
  caption.innerHTML = `
    <strong>${temple.templeName}</strong><br>
    Location: ${temple.location}<br>
    Dedicated: ${temple.dedicated}<br>
    Area: ${temple.area.toLocaleString()} sq ft
  `;

  figure.appendChild(img);
  figure.appendChild(caption);

  return figure;
}

// Функция отрисовки списка храмов
function displayTemples(templesArray) {
  templesContainer.innerHTML = "";
  templesArray.forEach(temple => {
    templesContainer.appendChild(createTempleCard(temple));
  });
}

// Фильтрация по пунктам меню
function filterTemples(criteria) {
  let filtered = [];

  switch(criteria) {
    case "old":
      filtered = temples.filter(t => {
        const year = new Date(t.dedicated).getFullYear();
        return year < 1900;
      });
      break;
    case "new":
      filtered = temples.filter(t => {
        const year = new Date(t.dedicated).getFullYear();
        return year > 2000;
      });
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }

  displayTemples(filtered);
}

// Инициализация меню гамбургера
menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuBtn.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
});

// Обработка кликов по навигации
navMenu.addEventListener("click", e => {
  if (e.target.tagName === "A") {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    filterTemples(filter);
    navMenu.classList.remove("open");
    menuBtn.textContent = "☰";
  }
});

// Установка динамического года и даты модификации
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Первоначальный показ всех храмов
displayTemples(temples);
