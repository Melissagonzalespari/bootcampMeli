
var grades = [100, 45, 89, -1, 81];
var total = 0;
var count = 0;
var index = 0;
var Exceptional = false;

for (index = 0; index < grades.length; index++) {
    var grade = grades[index];
    switch (grade) {
        case -1:
            console.log("Note in position ".concat(index, ":This student could not present this test due to a valid reason"));
            index++;
            continue;
        case 1000:
            console.log("Exceptional student! Average is 100!");
            Exceptional = true;
            break;
        default:
            total += grade;
            count++;
            console.log("average score ".concat(grade));
            continue;
    }
}
