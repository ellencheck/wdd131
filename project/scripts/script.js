/* Показываем кнопку меню только на мобильных */
@media screen and (max-width: 768px) {
  #menuBtn {
    display: block;
    font-size: 2rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 1001;
  }

  #navMenu {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #004466;
    width: 200px;
    padding: 1rem 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    flex-direction: column;
    z-index: 1000;
  }

  #navMenu.open {
    display: flex;
  }

  #navMenu ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  #navMenu li {
    margin: 0;
  }

  #navMenu a {
    color: white;
    padding: 0.75rem 1.5rem;
    display: block;
    text-decoration: none;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
}

/* На компьютерах кнопка скрыта, меню всегда видно */
@media screen and (min-width: 769px) {
  #menuBtn {
    display: none;
  }

  #navMenu {
    display: flex !important;
    position: static;
    background: none;
    box-shadow: none;
  }

  #navMenu ul {
    display: flex;
    gap: 1.5em;
  }

  #navMenu a {
    color: white;
    text-decoration: none;
    font-size: 1.1em;
    font-weight: 500;
  }

  #navMenu a:hover {
    color: #ffab91;
  }
}
