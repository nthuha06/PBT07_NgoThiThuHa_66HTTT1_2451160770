// =======================
// C2 — RESTAURANT BILL
// =======================

const foods = [
    {
        name: "Phở bò",
        price: 65000,
        quantity: 2
    },

    {
        name: "Trà đá",
        price: 5000,
        quantity: 3
    },

    {
        name: "Bún chả",
        price: 55000,
        quantity: 1
    }
];



// =======================
// SETTINGS
// =======================

const isWednesday = true;

const useTip = true;



// =======================
// TÍNH TỔNG
// =======================

let subtotal = 0;

for (let i = 0; i < foods.length; i++) {

    subtotal +=
        foods[i].price *
        foods[i].quantity;
}



// =======================
// GIẢM GIÁ
// =======================

let discountPercent = 0;

if (subtotal > 1000000) {

    discountPercent = 15;
}
else if (subtotal > 500000) {

    discountPercent = 10;
}



// Wednesday discount
if (isWednesday) {

    discountPercent += 5;
}



// =======================
// TÍNH GIẢM
// =======================

const discountAmount =
    subtotal * discountPercent / 100;

const afterDiscount =
    subtotal - discountAmount;



// =======================
// VAT
// =======================

const vat =
    afterDiscount * 0.08;



// =======================
// TIP
// =======================

let tip = 0;

if (useTip) {

    tip = afterDiscount * 0.05;
}



// =======================
// FINAL TOTAL
// =======================

const finalTotal =
    afterDiscount + vat + tip;



// =======================
// FORMAT MONEY
// =======================

function formatMoney(number) {

    return number.toLocaleString("vi-VN") + "đ";
}



// =======================
// PRINT BILL
// =======================

console.log("╔══════════════════════════════════════╗");
console.log("║          HÓA ĐƠN NHÀ HÀNG           ║");
console.log("╠══════════════════════════════════════╣");



for (let i = 0; i < foods.length; i++) {

    const item = foods[i];

    const total =
        item.price * item.quantity;

    console.log(
        `║ ${i + 1}. ${item.name.padEnd(12)} x${item.quantity}  ${formatMoney(item.price).padEnd(10)} = ${formatMoney(total).padEnd(10)}║`
    );
}



console.log("╠══════════════════════════════════════╣");

console.log(
    `║ Tổng cộng:      ${formatMoney(subtotal).padEnd(18)}║`
);

console.log(
    `║ Giảm giá:       ${formatMoney(discountAmount).padEnd(18)}║`
);

console.log(
    `║ VAT (8%):       ${formatMoney(vat).padEnd(18)}║`
);

console.log(
    `║ Tip (5%):       ${formatMoney(tip).padEnd(18)}║`
);

console.log("╠══════════════════════════════════════╣");

console.log(
    `║ THANH TOÁN:     ${formatMoney(finalTotal).padEnd(18)}║`
);

console.log("╚══════════════════════════════════════╝");