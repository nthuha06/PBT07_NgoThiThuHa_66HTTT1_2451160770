// =======================
// B2 — STUDENT DATA
// =======================

const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];



// =======================
// TÍNH ĐIỂM TRUNG BÌNH
// =======================

let gioi = 0;
let kha = 0;
let trungBinh = 0;
let yeu = 0;

let maxStudent = students[0];
let minStudent = students[0];

let totalMath = 0;
let totalPhysics = 0;
let totalCS = 0;

let maleTotal = 0;
let maleCount = 0;

let femaleTotal = 0;
let femaleCount = 0;



console.log("| STT | Tên | TB | Xếp loại |");
console.log("|-----|------|------|-----------|");



for (let i = 0; i < students.length; i++) {

    let student = students[i];

    let average =
        student.math * 0.4 +
        student.physics * 0.3 +
        student.cs * 0.3;

    average = average.toFixed(1);

    let rank = "";



    // =======================
    // XẾP LOẠI
    // =======================

    if (average >= 8.0) {
        rank = "Giỏi";
        gioi++;
    }
    else if (average >= 6.5) {
        rank = "Khá";
        kha++;
    }
    else if (average >= 5.0) {
        rank = "Trung bình";
        trungBinh++;
    }
    else {
        rank = "Yếu";
        yeu++;
    }



    // =======================
    // IN BẢNG
    // =======================

    console.log(
        `| ${i + 1} | ${student.name} | ${average} | ${rank} |`
    );



    // =======================
    // TÌM MAX / MIN
    // =======================

    if (average > (
        maxStudent.math * 0.4 +
        maxStudent.physics * 0.3 +
        maxStudent.cs * 0.3
    )) {
        maxStudent = student;
    }

    if (average < (
        minStudent.math * 0.4 +
        minStudent.physics * 0.3 +
        minStudent.cs * 0.3
    )) {
        minStudent = student;
    }



    // =======================
    // TỔNG ĐIỂM MÔN
    // =======================

    totalMath += student.math;
    totalPhysics += student.physics;
    totalCS += student.cs;



    // =======================
    // BONUS GIỚI TÍNH
    // =======================

    if (student.gender === "M") {
        maleTotal += Number(average);
        maleCount++;
    }
    else {
        femaleTotal += Number(average);
        femaleCount++;
    }
}



// =======================
// THỐNG KÊ
// =======================

console.log("\n===== THỐNG KÊ =====");

console.log("Giỏi:", gioi);
console.log("Khá:", kha);
console.log("Trung bình:", trungBinh);
console.log("Yếu:", yeu);



// =======================
// MAX / MIN
// =======================

function getAverage(student) {
    return (
        student.math * 0.4 +
        student.physics * 0.3 +
        student.cs * 0.3
    ).toFixed(1);
}

console.log("\n===== CAO NHẤT =====");
console.log(maxStudent.name, "-", getAverage(maxStudent));

console.log("\n===== THẤP NHẤT =====");
console.log(minStudent.name, "-", getAverage(minStudent));



// =======================
// TB TỪNG MÔN
// =======================

console.log("\n===== TB TỪNG MÔN =====");

console.log(
    "Math:",
    (totalMath / students.length).toFixed(1)
);

console.log(
    "Physics:",
    (totalPhysics / students.length).toFixed(1)
);

console.log(
    "CS:",
    (totalCS / students.length).toFixed(1)
);



// =======================
// BONUS GIỚI TÍNH
// =======================

console.log("\n===== TB THEO GIỚI TÍNH =====");

console.log(
    "Nam:",
    (maleTotal / maleCount).toFixed(1)
);

console.log(
    "Nữ:",
    (femaleTotal / femaleCount).toFixed(1)
);