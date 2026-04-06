const now = new Date();
let month = (now.getMonth() + 1).toString();
let day = now.getDate().toString();
let year = now.getFullYear();

if (month.length < 2) {
    month = "0" + month;
}
if (day.length < 2) {
    day = "0" + day;
}

const dateString = "Today is " + month + "/" + day + "/" + year;
document.getElementById("dateOutput").textContent = dateString;

let val1 = "42";
let val2 = "100";
let val3 = "19.75";
let val4 = "hello";

let num1 = Number(val1);
let num2 = Number(val2);
let num3 = Number(val3);
let num4 = Number(val4);

let res1 = "Original: '" + val1 + "' -> Converted: " + num1 + " -> isNaN: " + Number.isNaN(num1) + " -> isInteger: " + Number.isInteger(num1);
let res2 = "Original: '" + val2 + "' -> Converted: " + num2 + " -> isNaN: " + Number.isNaN(num2) + " -> isInteger: " + Number.isInteger(num2);
let res3 = "Original: '" + val3 + "' -> Converted: " + num3 + " -> isNaN: " + Number.isNaN(num3) + " -> isInteger: " + Number.isInteger(num3);
let res4 = "Original: '" + val4 + "' -> Converted: " + num4 + " -> isNaN: " + Number.isNaN(num4) + " -> isInteger: " + Number.isInteger(num4);

let nanMessage = "";
if (Number.isNaN(num4)) {
    nanMessage = "<br>This value is not a valid number.";
}

document.getElementById("numberConversionOutput").innerHTML = res1 + "<br>" + res2 + "<br>" + res3 + "<br>" + res4 + nanMessage;

let itemPrice = 29.99;
let taxRate = 0.08;
let shippingFee = 5.50;

let taxTotal = itemPrice * taxRate;
let grandTotal = itemPrice + taxTotal + shippingFee;

let mathResults = "Subtotal: $" + itemPrice.toFixed(2) + " | Tax: $" + taxTotal.toFixed(2) + " | Total: $" + grandTotal.toFixed(2);

let shippingMessage = "";
if (grandTotal > 35) {
    shippingMessage = " (Free Shipping Applied)";
} else {
    shippingMessage = " (Standard Shipping Rates)";
}

document.getElementById("mathOutput").textContent = mathResults + shippingMessage;