//Declaring variables 


var customerName = 'Gary';

 var customerEmail = 'gary@123.com';

var phoneNo = '14123123435';

 var address = '20, Marble Drive, Eville'

var noOfPizzasOrdered = 10;

var pizzaPrice = 12.5;

var pizzaSize = 'M'

var noOfGarlicBreadOrdered = 5;

var garlicBreadPrice = 5.99;

var noOfBeveragesOrdered = 10;

var beveragePrice = 1.99;



// define function displayCustomerDetails() to display the details of customer passed as parameters.
function displayCustomerDetails(name, email, phoneNo, address){

    console.log('Customer Details ');
    console.log('----------------');
    console.log(`Name of the cutomer is       : ${name}`);
    console.log(`Email of the customer is     : ${email}`);
    console.log(`Contact No of the customer is: ${phoneNo}`);
    console.log(`Address of the customer is   : ${address} `);
    console.log('-------------------------------------------------------');

}
 

// define funciton displayMenu() to raise an alert that displays the menu with 
// category, item names and price
function displayMenu(){

    console.log(' -------------------------');
    console.log('1) Pizza');
    console.log('Price of one regular pizza: $9.99');
    console.log('Price of one medium pizza: $11.99 ');
    console.log('Price of one large pizza: $9.992 ');
    console.log('2) Garlic Bread');
    console.log('Price of one Garlic Bread: $5.99');
    console.log('3) Beverages');
    console.log('Price of one Beverage: $1.99')

}
 

// define function getPriceOfPizzaBasedOnSize() to return price of pizza for the 
// size passed as parameter.
function getPriceOfPizzaBasedOnSize(size){
    priceOfPizza=0;
switch(size){
    case 'R': 
        priceOfPizza = 9.99;
        break;
    case 'M':
        priceOfPizza = 11.99;
        return priceOfPizza;
        break;
    case 'L': 
        priceOfPizza = 13.99;
        break;
    default:  
        alert('Invalid size, Enter 1,2 or 3');
        priceOfPizza = 0;
        break;
   }


}


// define function getPriceOfGarlicBread() to return price of garlic bread as 5.99.
function getPriceOfGarlicBread(){
    return garlicBreadPrice;
}



// define function getPriceOfBeverage() to return price of beverage as 1.99.
function getPriceOfBeverage(){
    return beveragePrice;
}
 

// define function calculatePrice() to return cost of items ordered for the 
// no of items and price passed as parameters.
function calculatePrice(noOfItems, price){
    return noOfItems*price;
}
 

// define function calculateTotalBill() to return total bill amount from the 
// total price of pizza, garlic bread and beverages ordered 
function calculateTotalBill(totalPizzaPrice, totalGarlicBreadPrice, totalBeveragePrice){
    return totalPizzaPrice+totalGarlicBreadPrice+totalBeveragePrice;
}


// define function calculateDiscountAndReturnBillAmount() to return discounted amount 
// which will be calculated only if total bill is more than 50  
function calculateDiscountAndReturnBillAmount(totalBillAmount){
    if(totalBillAmount >= 50){
        totalBillAmount -= totalBillAmount *5/100 ;
    }
    return totalBillAmount;
}
 
// define function displayOrderDetails() to print the order details
function displayOrderDetails(noOfPizza, noOfGarlicBread, noOfBeverages,totalPrice, totalBillAmountAfterDiscount){
    console.log('Order Details ');
    console.log('-----------------');
    console.log(`The number of pizzas ordered       : ${noOfPizza}`);
    console.log(`The number of garlic bread ordered : ${noOfGarlicBread}`);
    console.log(`The number of beverages ordered    : ${noOfBeverages}`);
    console.log(`-----------------------------------------`);
    console.log(`The total bill amount is      : ${totalPrice}`);
    console.log(`The discounted bill amount is : ${totalBillAmountAfterDiscount}`);
    
}

//Main Program
displayCustomerDetails(customerName,customerEmail,phoneNo,address);
displayMenu();
calculatePrice(noOfPizzasOrdered,getPriceOfPizzaBasedOnSize('M'));
calculatePrice(noOfGarlicBreadOrdered,getPriceOfGarlicBread());
calculatePrice(noOfBeveragesOrdered,getPriceOfBeverage());

// call the functions to compute order amount and display order details
var totalBill = calculateTotalBill(calculatePrice(noOfPizzasOrdered,getPriceOfPizzaBasedOnSize("M")),calculatePrice(noOfGarlicBreadOrdered,getPriceOfGarlicBread()),calculatePrice(noOfBeveragesOrdered,getPriceOfBeverage()));
var discountedBill = calculateDiscountAndReturnBillAmount(totalBill);
displayCustomerDetails(customerName,customerEmail,phoneNo,address);
displayOrderDetails(noOfPizzasOrdered,noOfGarlicBreadOrdered,noOfBeveragesOrdered,parseInt(totalBill),parseInt(discountedBill));

