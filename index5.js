//problem--5


function waitingTime(waitingTimes, serialNumber) {



    if (Array.isArray(waitingTimes) == false || serialNumber < waitingTimes.length || typeof(serialNumber) !== "number") {
        return "Invalid Input";
    } else {
        let s = 0;
        for (let w of waitingTimes) {
            s = s + w;

        }
        let avgTime = s / (waitingTimes.length);
        let averageForInterview = Math.round(avgTime);

        let serial = serialNumber - waitingTimes.length;
        let beforeSerial = (serial - 1);

        let timeNeeded = (beforeSerial * averageForInterview);

        return timeNeeded;




    }
}
let result5 = waitingTime([7, 8, 3, 4, 5], "9");
console.log(result5);