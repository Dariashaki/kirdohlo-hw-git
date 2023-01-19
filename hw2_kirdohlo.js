//Завдання 1

function food(h, p){
    const people = 4;
    if (h >= people && p >= 1) {
        return 'Ми поїли';
    } else {
        return 'Ми йдемо в інше кафе';
    }
}
console.log(food(4, 1));

//Завдання 2

function comparePrice(c){
        if (c >= 1000 && c <= 1900) {
            return true;
        } else {
            return false;
        }
}
console.log(comparePrice(2000));

//Завдання 3

function comparePrice(c2){
    if (!(c2 >= 1000 && c2 <= 1900)) {
        return true;
    } else {
        return false;
    }
}
console.log(comparePrice(1500));

function comparePrice(c3){
    if (c3 < 1000 || c3 > 1900) {
        return true;
    } else {
        return false;
    }
}
console.log(comparePrice(1500));

//Завдання 4


function seasonId(n){
    const winter = 1;
    const spring = 2;
    const summer = 3;
    const autumn = 4;
    if (n === winter) {
        return 'winter';
     } else if (n === spring) {
         return 'spring';
      } else if (n === summer) {
         return 'summer';
      } else if (n === autumn) {
         return 'autumn';
      }
}
console.log(seasonId(3));

 //Завдання 5

 function someNumber(e, f, g){
    if (e > f) {
        if (e > g) {
            if (g < f) {
                return f;
            } else {
                return g;
            }
        } else {
            return e;
        }
     } else {
        if (e < g) {
            if (f > g) {
                return g;
            } else {
                return f;
            }
        } else {
            return e;
        }
     }
 }
console.log(someNumber(1, 2, 3));
 
 //Завдання 6

 function someDay(a){
    const monday = 1;
    const tuesday = 2;
    const wednsday = 3;
    const thursday = 4;
    const friday = 5;
    const saturday = 6;
    const sunday = 7;
    switch (a) {
        case monday:
            return 'monday'
            break;
        case tuesday: 
            return 'tuesday'
            break;
        case wednsday:
            return 'wednsday'
            break;
        case thursday:
            return 'thursday'
            break;
        case friday: 
            return 'friday'
            break;
        case saturday:
            return 'saturday'
            break;
        case sunday:
            return 'sunday'
            break;
        default: 
            return 'Not available day'
            break; 
    }
 }
console.log(someDay(5));
 

//Завдання 7

function someParam(x, y, sign){
    switch (sign) {
        case '+':
            return x + y;
            break;
        case '-':
            return x - y;
            break;
        case '/':
            return x / y;
            break;
        case '*':
            return x * y;
            break;
    }
}
console.log(someParam(5, 6, '*'));

//Завдання 8

function toDelete(word){
    const result = word.replace(/[аоуеиі]/gi, '');
    return result;
}
console.log(toDelete("П'ятачок, ти приніс?"));

//Завдання 9

function km(meters){
    const kilometers = meters / 1000;
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
    return kilometers + ' ' + plural
}
console.log(km(1500));

