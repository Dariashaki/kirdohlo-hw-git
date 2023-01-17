//Завдання 1

const people = 4;
let humburgers = 4;
let potatoes = 1; 
if (humburgers >= people && potatoes >= 1) {
    console.log('Ми поїли');
} else {
    console.log('Ми йдемо в інше кафе');
}

//Завдання 2

let price2 = 1500;
// const result2 = price2 >= 1000 && price2 <= 1900;
// console.log(result2);
if (price2 >= 1000 && price2 <= 1900) {
    console.log(true);
} else {
    console.log(false);
}

//Завдання 3

let price3 = 1500;

if (!(price3 >= 1000 && price3 <= 1900)) {
    console.log(true);
} else {
    console.log(false);
}

if (price3 < 1000 || price3 > 1900) {
    console.log(true);
} else {
    console.log(false);
}

//Завдання 4

const winter = 1;
const spring = 2;
const summer = 3;
const autumn = 4;

let number = 3;

if (number === winter) {
   console.log('winter');
} else if (number === spring) {
    console.log('spring');
 } else if (number === summer) {
    console.log('summer');
 } else if (number === autumn) {
    console.log('autumn');
 }

 //Завдання 5

 let a = 1;
 let b = 2;
 let c = 3;

 if (a > b) {
    if (a > c) {
        if (c < b) {
            console.log (b);
        } else {
            console.log (c);
        }
    } else {
        console.log (a);
    }
 } else {
    // a < b
    if (a < c) {
        if (b >c) {
            console.log (c);
        } else {
            console.log (b);
        }
    } else {
        console.log (a);
    }
 }

 //Завдання 6

 const monday = 1;
 const tuesday = 2;
 const wednsday = 3;
 const thursday = 4;
 const friday = 5;
 const saturday = 6;
 const sunday = 7;
 
 let day = 5;

 switch (day) {
    case monday:
        console.log('monday')
        break;
    case tuesday: 
        console.log('tuesday')
        break;
    case wednsday:
        console.log('wednsday')
        break;
    case thursday:
        console.log('thursday')
        break;
    case friday: 
        console.log('friday')
        break;
    case saturday:
        console.log('saturday')
        break;
    case sunday:
        console.log('sunday')
        break;
    default: 
        console.log('Not available day')
        break; 
}

//Завдання 7

let par1 = 7;
let par2 = 3;

let sign = '+';

switch (sign) {
    case '+':
        console.log(par1 + par2);
        break;
    case '-':
        console.log(par1 - par2);
        break;
    case '/':
        console.log(par1 / par2);
        break;
    case '*':
        console.log(par1 * par2);
        break;
}

//Завдання 8

let word = "П'ятачок, ти приніс?";

const result = word.replace(/[аоуеиі]/gi, '');
console.log(result);

//Завдання 9

let meters = 1500;
const kilometers = meters / 1000;
const kilometersString = kilometers.toString();
const last = kilometersString[kilometersString.length - 1];

let plural = 'кілометр';

if (kilometers % 1 !== 0) {
    // якщо дрібне, то завжди буде а на кінці
    plural += 'а';
} else {
    // знаходимо останню цифру
    const last = kilometers % 10;
 
    if (last !== 1) {
        if (last >= 2 && last <= 4) {
            plural += 'и';
        } else {
            plural += 'ів';
        }
    }
}

console.log(kilometers, plural);

