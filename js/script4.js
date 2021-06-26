//Part4

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


function studentInvoice() {
    var sumInvoice1 = ((caprese + carbonara +diavolo)*0.9) + iceTea;
    var sumInvoice2 = ((bolognese + lasagne + rucola)*0.9) + sanPellegrino;
    var sumInvoice3 = ((pollo + gambaretti + capricciosa)*0.9) + fanta;

    return `
    First invoice with 10% discount to dishes = ${sumInvoice1.toFixed(2)}
    Second invoice with 10% discount to dishes = ${sumInvoice2.toFixed(2)}
    Third invoice with 10% discount to dishes = ${sumInvoice3.toFixed(2)}`
}

console.log(studentInvoice());