// =======================
// B4 — FIZZBUZZ
// =======================

console.log("===== VERSION 1 =====");


// =======================
// VERSION 1 — CLASSIC
// =======================

for (let i = 1; i <= 100; i++) {

    let result = "";


    if (i % 3 === 0) {
        result += "Fizz";
    }

    if (i % 5 === 0) {
        result += "Buzz";
    }


    if (result === "") {
        result = i;
    }

    console.log(result);
}




// =======================
// VERSION 2 — CUSTOM
// =======================

console.log("\n===== VERSION 2 =====");


function customFizzBuzz(n, rules) {

    for (let i = 1; i <= n; i++) {

        let result = "";


        // =======================
        // DUYỆT RULES
        // =======================

        for (let j = 0; j < rules.length; j++) {

            if (i % rules[j].divisor === 0) {

                result += rules[j].word;
            }
        }


        // =======================
        // KHÔNG MATCH
        // =======================

        if (result === "") {
            result = i;
        }


        console.log(result);
    }
}



// =======================
// TEST
// =======================

customFizzBuzz(30, [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
]);