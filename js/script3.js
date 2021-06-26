//Part 3
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
    var sumInvoice1 = caprese + carbonara +diavolo + iceTea;
    var sumInvoice2 = bolognese + lasagne + rucola + sanPellegrino;
    var sumInvoice3 = pollo + gambaretti + capricciosa + fanta;

    let result = [sumInvoice1, sumInvoice2, sumInvoice3]
    return `
    First invoice = ${result[0].toFixed(2)}
    Secound invoice = ${result[1].toFixed(2)} 
    Third invoice = ${result[2].toFixed(2)}`;

}

console.log(calculateInvoice());