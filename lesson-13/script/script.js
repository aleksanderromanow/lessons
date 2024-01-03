const MALE_RETIREMENT_AGE = 65;
const FEMALE_RETIREMENT_AGE = 60;

let lastName = prompt("Какая Ваша фамилия?");
let firstName = prompt("Какое Ваша имя?");
let age = +prompt("Какой Ваш возраст?");
let isMale = confirm("Какой Ваш пол? (ок - мужской, отмена - женский)");

let isOnRetirement = function (age, isMale) {
    if ((isMale && age >= MALE_RETIREMENT_AGE) || (!isMale && age >= FEMALE_RETIREMENT_AGE)) {
        return "Да";
    } else {
        return "Нет";
    }
}

let genderToString = function (isMale) {
    return isMale ? "Мужской" : "Женский";
}

let result = `Ваше имя: ${lastName}\nВаша фамилия: ${firstName}\nВаш пол: ${genderToString(isMale)}\nВы на пенсии: ${isOnRetirement(age, isMale)}`;
alert(result);