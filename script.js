document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('openModal');
  
    openModalBtn.addEventListener('click', function() {
      modal.classList.add('show');
    });
  
    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closeModal();
      }
    });
  
    function closeModal() {
      modal.classList.remove('show');
    }
  });