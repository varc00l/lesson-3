let result;

result= 5+5+'5';
console.log(result);
console.log(typeof result);

let email = "ivalchuk4@gmail.com";
let containsAtSymbol = email.includes('@');
let totalCharacters = email.length;
console.log("Містить символ '@':", containsAtSymbol);
console.log("Загальна кількість символів:", totalCharacters);

let word1 = "My";
let word2 = "name";
let word3 = "is";
let fullName = word1 + " " + word2 + " " + word3;
fullName += " Viktor";
console.log(fullName);

let userName = "Олександра";
let payment = 300;
let message = `Дякуємо, ${userName}! До сплати ${payment} гривень`;
alert(message);
