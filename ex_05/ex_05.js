function findClosestResult(functionsObj, inputNumber, outputNumber) {
//This function, findClosestResult, is designed to find which function in an object (represented by functionsObj) produces the result that is closest to a target number (outputNumber) 
//when applied to a given input (inputNumber)//
 // inputNumber : Un nombre qui sera utilisé comme argument pour appeler chaque fonction dans functionsObj.//
//outputNumber : La valeur cible à laquelle on souhaite comparer les résultats des fonctions.//
    
    let closestKey = null; // Cette variable stocke la clé (ou le nom de la fonction) qui produit le résultat le plus proche. Elle est initialisée à null car aucune fonction n'a encore été évaluée.//
    let closestDifference = Infinity; // Cette variable stocke la plus petite différence trouvée entre le résultat d'une fonction et outputNumber. Elle est initialisée à Infinity pour s'assurer que toute différence trouvée sera plus petite.//

    // Parcours de chaque clé dans l'objet functionsObj
    for (const key in functionsObj) {
        const result = functionsObj[key](inputNumber); // La fonction correspondant à la clé actuelle est appelée avec inputNumber comme argument, et le résultat est stocké dans result.//
        const difference = Math.abs(result - outputNumber); // On calcule la différence absolue entre le résultat et la valeur cible outputNumber pour déterminer à quel point le résultat est proche de cette valeur.//

        //La fonction vérifie si la différence calculée est plus petite que la différence la plus proche trouvée jusqu'à présent :
        //Si c'est le cas, elle met à jour closestDifference et closestKey avec les nouvelles valeurs.//

        if (difference < closestDifference) {
            closestDifference = difference; // Met à jour la différence la plus proche
            closestKey = key; // Met à jour la clé la plus proche
        }
    }

    return closestKey; // La fonction findClosestResult est conçue pour parcourir les fonctions d'un objet, évaluer leurs résultats par rapport à une valeur cible et retourner la clé de la fonction la plus proche.//
    
}
