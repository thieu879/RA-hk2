"use strict";
let students = [
    {
        id: 1,
        nameStd: "Thiều",
        class: "HN-PTIT-KS2023S"
    },
    {
        id: 2,
        nameStd: "Vải",
        class: "HN-PTIT-KS2023C"
    }
];
function arrayStudentsClass(arrayStudent, className) {
    arrayStudent.forEach(student => {
        if (student.class === className) {
            console.log(student);
        }
    });
}
arrayStudentsClass(students, "HN-PTIT-KS2023S");
arrayStudentsClass(students, "HN-PTIT-KS2023C");
