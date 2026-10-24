'use strict';

(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#main-nav');

  if (menuButton && navigation) {
    menuButton.hidden = false;
    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
    };
    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!expanded));
      navigation.classList.toggle('is-open', !expanded);
    });
    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menuButton.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
    window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
  }

  const modules = [...document.querySelectorAll('.module')];
  const toggleButton = document.querySelector('#toggle-modules');

  if (toggleButton && modules.length) {
    toggleButton.hidden = false;
    const updateLabel = () => {
      const allOpen = modules.every((module) => module.open);
      toggleButton.textContent = allOpen ? 'Recolher todos −' : 'Expandir todos +';
    };
    toggleButton.addEventListener('click', () => {
      const shouldOpen = !modules.every((module) => module.open);
      modules.forEach((module) => { module.open = shouldOpen; });
      updateLabel();
    });
    modules.forEach((module) => module.addEventListener('toggle', updateLabel));
    updateLabel();
  }
})();
