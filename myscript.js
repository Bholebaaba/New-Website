      // Toggle Menu Functionality
      document.addEventListener('DOMContentLoaded', () => {
      const menuIcon = document.getElementById('menuIcon');
      const toggleMenu = document.getElementById('toggleMenu');
      const overlay = document.getElementById('overlay');
      const submenuArrows = document.querySelectorAll('.arrow');
      
      // Function to open the menu
      function openMenu() {
      toggleMenu.classList.add('open');
      overlay.style.display = 'block';
      menuIcon.classList.add('open');
      document.body.classList.add('menu-open');
      }
      
      // Function to close the menu
      function closeMenu() {
      toggleMenu.classList.remove('open');
      overlay.style.display = 'none';
      menuIcon.classList.remove('open');
      document.body.classList.remove('menu-open');
      
      // Reset Submenus
      document.querySelectorAll('.submenu').forEach(submenu => {
      submenu.style.display = 'none';
      });
      }
      
      // Event listeners
      menuIcon.addEventListener('click', () => {
      if (menuIcon.classList.contains('open')) {
      closeMenu();
      } else {
      openMenu();
      }
      });
      overlay.addEventListener('click', closeMenu);
      
      // Submenu toggle
      submenuArrows.forEach(arrow => {
      arrow.addEventListener('click', (e) => {
      const submenu = e.target.nextElementSibling;
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      });
      });
      });
      
      
      
      document.addEventListener("DOMContentLoaded", function() {
      const welcomeMessage = document.getElementById('welcome-message');
      const thankYouButton = document.getElementById('thank-you-button');
      const goBackButton = document.getElementById('go-back-button');
      
      thankYouButton.addEventListener('click', function() {
      welcomeMessage.style.display = 'none';
      });
      
      goBackButton.addEventListener('click', function() {
      window.history.back();
      });
      });