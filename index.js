//problem-1


function calculateTax(income, expenses) {

    if (income < 0 || expenses < 0 || expenses > income) {
        return "Invalid Input";

    } else {

        let value = (income - expenses);
        let tax = (value * 20) / 100;

        return tax;

    }

}

let result = calculateTax(6000, -1500);
console.log(result);