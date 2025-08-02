function startExploring() {
  if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
    // На главной странице — плавный скролл
    const toursSection = document.getElementById('tours-section');
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // На других страницах — переход на tours.html с якорём
    window.location.href = 'tours.html#tours-section';
  }
}
function bookNow() {
  // Показать форму бронирования
  document.getElementById('booking-form-section').style.display = 'block';
  // Прокрутка к форме
  document.getElementById('booking-form-section').scrollIntoView({ behavior: 'smooth' });
}

// Обработка отмены формы
document.addEventListener('DOMContentLoaded', () => {
  const cancelBtn = document.getElementById('cancel-booking');
  cancelBtn.addEventListener('click', () => {
    document.getElementById('booking-form-section').style.display = 'none';
  });

  // Обработка отправки формы
  const bookingForm = document.getElementById('booking-form');
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault(); // чтобы не отправлять форму на сервер

    const tour = bookingForm.elements['tour'].value;
    const people = bookingForm.elements['people'].value;

    alert(`Thank you for booking the "${tour}" tour for ${people} people! We will contact you soon.`);
    bookingForm.reset();
    document.getElementById('booking-form-section').style.display = 'none';
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const allBookNowButtons = Array.from(document.querySelectorAll("button, a"))
    .filter(el => el.textContent.trim() === "Book Now");

  allBookNowButtons.forEach(btn => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      // Переход на страницу с формой и прокрутка до неё
      window.location.href = "tours.html#bookingForm";
    });
  });
});
