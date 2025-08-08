document.addEventListener("DOMContentLoaded", function () {

  document.body.addEventListener("click", function (e) {
    const btn = e.target.closest("button, a");
    if (!btn) return;

    if (btn.textContent.toLowerCase().includes("book now")) {
      e.preventDefault();

      if (window.location.pathname.endsWith("tours.html")) {
        const formSection = document.getElementById('booking-form-section');
        if (formSection) {
          formSection.style.display = 'block';
          formSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.href = "tours.html#booking-form-section";
      }
    }
  });

  // Показ формы, если переход с якорем
  if (window.location.hash === "#booking-form-section") {
    const formSection = document.getElementById('booking-form-section');
    if (formSection) {
      formSection.style.display = 'block';
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Обработка отмены
  const cancelBtn = document.getElementById('cancel-booking');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      const formSection = document.getElementById('booking-form-section');
      if (formSection) formSection.style.display = 'none';
    });
  }

  // Отправка формы
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const tour = bookingForm.elements['tour'].value;
      const people = bookingForm.elements['people'].value;

      alert(`Thank you for booking the "${tour}" tour for ${people} people! We will contact you soon.`);
      bookingForm.reset();

      const formSection = document.getElementById('booking-form-section');
      if (formSection) formSection.style.display = 'none';
    });
  }
});
