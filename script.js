window.addEventListener('load', () => {
  setTimeout(() => {
    const splash = document.getElementById('splash');
    const main = document.getElementById('main-content');

    splash.style.opacity = 0;
    splash.style.display = 'none';

    main.classList.add('show');
    document.body.style.overflow = 'auto';
  }, 2000); // Delay time in ms
});
