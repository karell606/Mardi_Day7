document.querySelectorAll('.item').forEach(item => {
    const quantityInput = item.querySelector('input[type="text"]');

    item.querySelector('.plus-btn').addEventListener('click', 
        function() {
            quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    item.querySelector('.minus-btn').addEventListener('click', function () {
        if (quantityInput.value > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });
  
    item.querySelector('.delete-btn').addEventListener('click', 
        function () {
            item.remove();
    });

    item.querySelector('.like-btn').addEventListener('click', 
        function() {
            this.classList.toggle('is-active');
    });
});
