<script>
  // Функция для плавного скролла к разделу туров (если нужно)
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

  // Показать форму бронирования и прокрутить к ней
  function bookNow() {
    const formSection = document.getElementById('booking-form-section');
    if (formSection.style.display === 'none' || formSection.style.display === '') {
      formSection.style.display = 'block';
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Обработка кнопки отмены в форме бронирования
    const cancelBtn = document.getElementById('cancel-booking');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        document.getElementById('booking-form-section').style.display = 'none';
      });
    }

    // Обработка отправки формы бронирования
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
      bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const tour = bookingForm.elements['tour'].value;
        const people = bookingForm.elements['people'].value;

        alert(`Thank you for booking the "${tour}" tour for ${people} people! We will contact you soon.`);
        bookingForm.reset();
        document.getElementById('booking-form-section').style.display = 'none';
      });
    }

    // Привязка обработчика к кнопкам "Book Now" — 
    // чтобы показывать форму бронирования без перехода по ссылке
    const allBookNowButtons = Array.from(document.querySelectorAll("button, a"))
      .filter(el => el.textContent.trim() === "Book Now");

    allBookNowButtons.forEach(btn => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        bookNow();
      });
    });

    // Меню: переключатель класса "menu-open" по клику на .menu-toggle
    const toggleButton = document.querySelector(".menu-toggle");
    const header = document.querySelector("header");

    if (toggleButton && header) {
      toggleButton.addEventListener("click", () => {
        header.classList.toggle("menu-open");
      });
    }
  });
</script>
