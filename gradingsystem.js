let grades = prompt("Enter a number");
let grade = parseInt(grades);

let letterGrade;

switch (true) {
    case (grade >= 90 && grade <= 100):
        letterGrade = 'A++';
        break;
    case (grade >= 80 && grade < 90):
        letterGrade = 'A+';
        break;
    case (grade >= 70 && grade < 80):
        letterGrade = 'B';
        break;
    case (grade >= 60 && grade < 70):
        letterGrade = 'C';
        break;
    case (grade >= 50 && grade < 60):
        letterGrade = 'C-';
        break;
    case (grade >= 40 && grade < 50):
        letterGrade = 'D';
        break;
    case (grade >= 30 && grade < 40):
        letterGrade = 'F';
        break;
    default:
        letterGrade = 'Invalid grade';
}

console.log(`The grade ${grade} is equivalent to ${letterGrade}`);
