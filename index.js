document.addEventListener("DOMContentLoaded", function() {
    const imageContainers = document.querySelectorAll('.image-container');
  
    imageContainers.forEach(container => {
      container.addEventListener('click', function() {
        const image = this.querySelector('.hidden-image');
        if (image.style.display === 'none' || image.style.display === '') {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      });
    });
  });
  