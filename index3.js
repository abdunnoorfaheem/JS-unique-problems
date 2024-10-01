//problem--3



function checkDigitsInName(name) {
    let type = typeof(name);

    if (type !== "string") {
        return "Invalid Input";
    } else {

        const checkOrNot = /\d/.test(name);

        return checkOrNot;
    }
}

let result2 = checkDigitsInName("Raj123");
console.log(result2);