// =======================
// B3 — GUESS NUMBER GAME
// =======================


// Random số từ 1-100
const randomNumber = Math.floor(Math.random() * 100) + 1;


// Số lượt tối đa
const maxAttempts = 7;


// Đếm số lần đoán
let attempts = 0;


// Lưu các số đã đoán
let guessedNumbers = [];


// =======================
// GAME LOOP
// =======================

while (attempts < maxAttempts) {

    let input = prompt(
        `Nhập số từ 1-100\nLượt ${attempts + 1}/${maxAttempts}`
    );


    // =======================
    // KIỂM TRA CANCEL
    // =======================

    if (input === null) {
        alert("Bạn đã thoát game!");
        break;
    }


    // Convert sang number
    let guess = Number(input);


    // =======================
    // VALIDATE INPUT
    // =======================

    if (
        isNaN(guess) ||
        guess < 1 ||
        guess > 100
    ) {
        alert("Vui lòng nhập số từ 1-100!");
        continue;
    }


    // =======================
    // KIỂM TRA NHẬP TRÙNG
    // =======================

    if (guessedNumbers.includes(guess)) {
        alert("Bạn đã đoán số này rồi!");
        continue;
    }


    // Lưu số đã đoán
    guessedNumbers.push(guess);


    // Tăng số lượt
    attempts++;


    // =======================
    // SO SÁNH
    // =======================

    if (guess === randomNumber) {

        alert(
            `Đúng rồi!\nBạn đoán đúng sau ${attempts} lần!`
        );

        break;
    }

    else if (guess < randomNumber) {

        alert("Cao hơn!");
    }

    else {

        alert("Thấp hơn!");
    }


    // =======================
    // HẾT LƯỢT
    // =======================

    if (attempts === maxAttempts) {

        alert(
            `Bạn đã thua!\nĐáp án là: ${randomNumber}`
        );
    }
}