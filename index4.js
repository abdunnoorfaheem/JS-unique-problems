//problem--4


function calculateFinalScore(obj) {

    let type = typeof(obj);
    if (type !== "object") {

        return "Invalid Input";
    } else {
        if (obj.name === "Rajib" && obj.testScore <= 50 && obj.schoolGrade <= 30 && obj.isFFamily == true) {
            let isFamilyTrue = 20;
            let totalScore = obj.testScore + obj.schoolGrade + isFamilyTrue;


            if (totalScore >= 80 && totalScore <= 100) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

}
let result4 = calculateFinalScore({
    name: "Rajib",
    testScore: 15,
    schoolGrade: 25,
    isFFamily: true
});
console.log(result4);