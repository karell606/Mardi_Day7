document.querySelectorAll('.item').forEach(item => {
    const quantityInput = item.querySelector('input[type="text"]');
//Ce code sélectionne tous les éléments qui ont la classe .item et, pour chaque élément, 
    //il recherche le champ de saisie de quantité (input) à l'intérieur et le stocke dans la variable quantityInput.//

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
            this.classList.toggle('is-active');//Cette ligne de code permet d'alterner l'état de la classe 'is-active' pour l'élément sur lequel l'utilisateur a cliqué.//
            //Cela signifie que, lorsque l'utilisateur clique, la classe sera ajoutée ou retirée, ce qui peut changer l'apparence de l'élément //
            //(par exemple, pour une animation ou un changement de style).//

//La méthode toggle ajoute la classe 'is-active' si elle n'est pas déjà présente sur l'élément.//
    });
});
