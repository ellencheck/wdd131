function startExploring() {
  if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
    const toursSection = document.getElementById('tours-section');
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    window.location.href = 'tours.html#tours-section';
  }
}

function bookNow() {
  const formSection = document.getElementById('booking-form-section');
  if (formSection) {
    formSection.style.display = 'block';
    formSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Обработка DOM при загрузке
document.addEventListener('DOMContentLoaded', () => {
  const cancelBtn = document.getElementById('cancel-booking');
  const bookingForm = document.getElementById('booking-form');

  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      const formSection = document.getElementById('booking-form-section');
      if (formSection) formSection.style.display = 'none';
    });
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const tour = bookingForm.elements['tour'].value;
      const people = bookingForm.elements['people'].value;

      alert(Thank you for booking the "${tour}" tour for ${people} people! We will contact you soon.);
      bookingForm.reset();

      const formSection = document.getElementById('booking-form-section');
      if (formSection) formSection.style.display = 'none';
    });
  }

  // Обработка кнопок "Book Now"
  const allBookNowButtons = Array.from(document.querySelectorAll("button, a"))
    .filter(el => el.textContent.trim() === "Book Now");

  allBookNowButtons.forEach(btn => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "tours.html#booking-form-section";
    });
  });

  // Если переход по якорю снаружи — автоматически показать форму
  if (window.location.hash === "#booking-form-section") {
    const formSection = document.getElementById('booking-form-section');
    if (formSection) {
      formSection.style.display = 'block';
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Обработка обеих кнопок сэндвича — в хедере и футере
  const headerToggle = document.querySelector('.menu-toggle');
  const footerToggle = document.querySelector('.footer-menu-toggle');
  const header = document.querySelector('header.site-header');
  const footer = document.querySelector('footer');

  if (headerToggle && header) {
    headerToggle.addEventListener('click', () => {
      header.classList.toggle('menu-open');
    });
  }

  if (footerToggle && footer) {
    footerToggle.addEventListener('click', () => {
      footer.classList.toggle('menu-open');
    });
  }
});
// Hamburger menu toggle
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
