const currentDate = new Date();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();
let year = currentDate.getFullYear();

let formattedMonth = month < 10 ? "0" + month : month;
let formattedDay = day < 10 ? "0" + day : day;

document.getElementById("dateOutput").textContent = "Today is " + formattedMonth + "/" + formattedDay + "/" + year;

let val1 = "85";
let val2 = "92";
let val3 = "78.5";
let val4 = "absent";

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
    conversionHTML += "<p>The value '" + val4 + "' is not a valid number.</p>";
} else {
    conversionHTML += "<p>All values are valid.</p>";
}

document.getElementById("numberConversionOutput").innerHTML = conversionHTML;

let score1 = 90;
let score2 = 85;
let score3 = 72;

let totalScore = score1 + score2 + score3;
let averageScore = totalScore / 3;

let mathResults = "Addition: " + score1 + " + " + score2 + " + " + score3 + " = Total Score: " + totalScore;
mathResults += " | Division: " + totalScore + " / 3 = Average Score: " + averageScore.toFixed(2);

if (averageScore >= 70) {
    mathResults += "<p>The average of " + averageScore.toFixed(2) + " is Passing.</p>";
} else {
    mathResults += "<p>The average of " + averageScore.toFixed(2) + " is Not passing.</p>";
}

document.getElementById("mathOutput").innerHTML = mathResults;