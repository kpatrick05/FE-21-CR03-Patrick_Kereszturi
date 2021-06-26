//Part 1 invoice for one costumer

function calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice) {
    var result = Number(starterPrice) + Number(maindishPrice) + Number(dessertPrice) + Number(beveragePrice);
    return `Invoice for one costumer ${result}` ;

}

console.log(calculateInvoice(5,"15",3,2));


