// =======================
// C1 — DEBUG JAVASCRIPT
// =======================

function tinhGiaGiamGia(giaBan, phanTramGiam) {

    // =======================
    // VALIDATE INPUT
    // =======================

    if (
        typeof giaBan !== "number" ||
        typeof phanTramGiam !== "number"
    ) {
        return "Input không hợp lệ";
    }


    // =======================
    // KIỂM TRA %
    // =======================

    if (
        phanTramGiam < 0 ||
        phanTramGiam > 100
    ) {
        return "Phần trăm giảm không hợp lệ";
    }


    // =======================
    // TÍNH GIẢM GIÁ
    // =======================

    const giamGia =
        giaBan * phanTramGiam / 100;

    let giaSauGiam =
        giaBan - giamGia;


    // =======================
    // KIỂM TRA FREE
    // =======================

    if (giaSauGiam === 0) {

        console.log("Sản phẩm miễn phí!");
    }


    return giaSauGiam;
}



// =======================
// TEST
// =======================

const gia =
    tinhGiaGiamGia(100000, 20);

console.log(
    "Giá sau giảm:",
    gia + "đ"
);



const gia2 =
    tinhGiaGiamGia(50000, 110);

console.log(
    "Giá:",
    gia2
);



// =======================
// LOOP
// =======================

for (let i = 0; i < 5; i++) {

    setTimeout(function () {

        console.log("Item " + i);

    }, 1000);
}