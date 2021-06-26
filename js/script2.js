//Part 2 With prices

// Salats
var caprese = 9.49;
var pollo = 7.19;
var panzanella = 8.09;
var dellamore = 9.29;
//Pasta
var gambaretti = 11.49;
var carbonara = 9.49;
var lasagne = 8.9;
var bolognese = 9.49;

//Pizza
var margherita = 9.19;
var capricciosa = 11.49;
var rucola = 10.29;
var diavolo = 11.49;

//Beverage
var coke = 2.49;
var iceTea = 2.49;
var sanPellegrino = 1.99;
var fanta = 2.49;


function calculateInvoice() {
    var sum = caprese + gambaretti +margherita + coke;
    return`Invoice = ${sum.toFixed(2)} `;

}

console.log(calculateInvoice());