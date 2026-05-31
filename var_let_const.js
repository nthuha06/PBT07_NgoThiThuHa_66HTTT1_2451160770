// =======================
// ĐOẠN 1
// =======================

console.log("===== ĐOẠN 1 =====");

console.log(x);
var x = 5;

// Dự đoán:
// undefined

// Giải thích:
// var được hoisting



// =======================
// ĐOẠN 2
// =======================

console.log("===== ĐOẠN 2 =====");

try {
    console.log(y);
    let y = 10;
} catch (error) {
    console.log(error.message);
}

// Dự đoán:
// ReferenceError

// Giải thích:
// let có TDZ



// =======================
// ĐOẠN 3
// =======================

console.log("===== ĐOẠN 3 =====");

try {
    const z = 15;
    z = 20;

    console.log(z);
} catch (error) {
    console.log(error.message);
}

// Dự đoán:
// TypeError

// Giải thích:
// const không cho phép gán lại



// =======================
// ĐOẠN 4
// =======================

console.log("===== ĐOẠN 4 =====");

const arr = [1, 2, 3];

arr.push(4);

console.log(arr);

// Dự đoán:
// [1, 2, 3, 4]

// Giải thích:
// const không khóa nội dung array



// =======================
// ĐOẠN 5
// =======================

console.log("===== ĐOẠN 5 =====");

let a = 1;

{
    let a = 2;

    console.log("Trong block:", a);
}

console.log("Ngoài block:", a);

// Dự đoán:
// Trong block: 2
// Ngoài block: 1

// Giải thích:
// let có block scope