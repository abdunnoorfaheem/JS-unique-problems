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
// console.log(result);


//problem--2



function sendNotification(email) {
    if (email.includes("@") === false) {
        return "Invalid Email";
    } else {
        let find = email.split("@");
        return find.join(" sent you an email from ");
    }
}


let result1 = sendNotification("nadim.naem5@outlook.com");
// console.log(result1);