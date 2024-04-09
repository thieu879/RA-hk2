
interface Student {
    id: number;
    nameStd: string;
    class: string;
}

let students: Student[] = [
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

function arrayStudentsClass(arrayStudent: Student[], className: string): void {
    arrayStudent.forEach(student => {
        if (student.class === className) {
            console.log(student);
        }
    });
}

arrayStudentsClass(students, "HN-PTIT-KS2023S");

arrayStudentsClass(students, "HN-PTIT-KS2023C");
