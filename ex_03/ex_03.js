function map(elements, modifier) {
    const result = [];
 
    for (let i = 0; i < elements.length; i++) {
        const modifiedElement = modifier(elements[i]);
        result.push(modifiedElement);
    }
 
    return result;
}
 
function isEven(number) {
    return number % 2 === 0; 
}
 
console.log(map([5, 8, 10], isEven));
