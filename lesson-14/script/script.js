let calculateSumAndAlert = function (values) {
    alert(calculateSum(values));
}

let calculateSum = function (values) {
    let result = 0;
    for (let value of values) {
        result += value;
    }
    return result;
}

let getValues = function () {
    let values = [];

    while (true) {
        let value = prompt("Введите число");
        if (value === "" || value === null || isNaN(Number(value))) {
            break;
        }

        values.push(+value);
    }

    return values;
}

window.addEventListener('load', function () {
    calculateSumAndAlert(getValues());
})