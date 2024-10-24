    //light mode
    // Select the light div and the button
    const lightDiv = document.querySelector('.light');
    const toggleButton = document.getElementById('toggleLight');

    // Function to toggle the light effect
    function toggleLight() {
        lightDiv.classList.toggle('hidden'); // Toggle the hidden class
    }

    // Event listener for mouse movement to update the CSS variables
    document.documentElement.addEventListener('mousemove', e => {
        document.documentElement.style.setProperty('--x', e.clientX + "px");
        document.documentElement.style.setProperty('--y', e.clientY + "px");
    });

    // Event listener for button click
    toggleButton.addEventListener('click', toggleLight);

    // Event listener for key press (L)
    document.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === 'l') {
            toggleLight();
        }
    });

    // Initialize with the light effect hidden
    lightDiv.classList.add('hidden'); // Ensure the light is hidden by default


    var swiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        mousewheel: {
          invert: false,
        },
        // autoHeight: true,
        pagination: {
          el: '.blog-slider__pagination',
          clickable: true,
        }
      });
    
      const flipBook = (elBook) => {
        elBook.style.setProperty("--c", 0); // Set current page
        elBook.querySelectorAll(".page").forEach((page, idx) => {
          page.style.setProperty("--i", idx);
          page.addEventListener("click", (evt) => {
            if (evt.target.closest("a")) return;
            const curr = evt.target.closest(".back") ? idx : idx + 1;
            elBook.style.setProperty("--c", curr);
          });
        });
      };
      
      document.querySelectorAll(".book").forEach(flipBook);

        
