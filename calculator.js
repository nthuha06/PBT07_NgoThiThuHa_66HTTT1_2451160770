// =======================
// B1 — SIMPLE CALCULATOR
// =======================

function calculate(num1, operator, num2) {

    // =======================
    // KIỂM TRA INPUT
    // =======================

    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "Lỗi: Input không phải số";
    }

    // =======================
    // KIỂM TRA CHIA CHO 0
    // =======================

    if (operator === "/" && num2 === 0) {
        return "Lỗi: Không thể chia cho 0";
    }

    // =======================
    // XỬ LÝ PHÉP TOÁN
    // =======================

    switch (operator) {

        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            return num1 / num2;

        case "%":
            return num1 % num2;

        case "**":
            return num1 ** num2;

        default:
            return `Lỗi: Operator '${operator}' không hợp lệ`;
    }
}



// =======================
// TEST CASES
// =======================

console.log(calculate(10, "+", 5));

console.log(calculate(10, "/", 0));

console.log(calculate(10, "^", 5));

console.log(calculate("abc", "+", 5));

console.log(calculate(2, "**", 10));