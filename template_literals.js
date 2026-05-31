// =======================
// A5 — TEMPLATE LITERALS
// =======================

console.log("===== TEMPLATE LITERALS =====");


// =======================
// CÁCH 1
// =======================

const name = "Hà";
const age = 19;

const greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

console.log(greeting);


// =======================
// CÁCH 2
// =======================

const userId = 101;
const page = 2;

const url = `https://api.example.com/users/${userId}/orders?page=${page}`;

console.log(url);


// =======================
// CÁCH 3
// =======================

const title = "iPhone 15";
const description = "Điện thoại flagship";
const price = 25000000;

const html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;

console.log(html);