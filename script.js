const currentDate = new Date();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();
let year = currentDate.getFullYear();

let formattedMonth = month < 10 ? "0" + month : month;
let formattedDay = day < 10 ? "0" + day : day;

document.getElementById("dateOutput").textContent = "Today is " + formattedMonth + "/" + formattedDay + "/" + year;

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

let conversionHTML = res1 + "<br>" + res2 + "<br>" + res3 + "<br>" + res4;

if (Number.isNaN(num4)) {
    conversionHTML += "<br>">+val4+"<p> This value is not a valid number.</p>";
} else {
    conversionHTML += "<br>"+val4+"<p> This value is a valid number.</p>";
}

document.getElementById("numberConversionOutput").innerHTML = conversionHTML;

let itemPrice = 20.00;
let taxAmount = 1.50;
let quantity = 2;

let subtotal = itemPrice + taxAmount;
let total = subtotal * quantity;

let mathResults = "Price ($" + itemPrice.toFixed(2) + ") + Tax ($" + taxAmount.toFixed(2) + ") = Subtotal: $" + subtotal.toFixed(2);
mathResults += " | Subtotal multiplied by Quantity (" + quantity + ") = Total: $" + total.toFixed(2);

if (total > 30) {
    mathResults += " (This total is greater than 30)";
} else {
    mathResults += " (This total is 30 or less)";
}

document.getElementById("mathOutput").textContent = mathResults;