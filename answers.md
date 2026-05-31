# Phần A
## Câu A1 — var / let / const
### Đoạn 1:
Dự đoán output: 
undefined

Giải thích: Biến var được hoisting (đưa phần khai báo lên đầu scope), nên JavaScript sẽ hiểu đoạn code như sau:

var x;
console.log(x);
x = 5;

Biến x đã tồn tại nhưng chưa được gán giá trị nên kết quả là undefined.

### Đoạn 2:
Dự đoán output: 
ReferenceError

Giải thích: Biến let cũng được hoisting nhưng nằm trong vùng gọi là Temporal Dead Zone (TDZ). Trong khoảng thời gian này, biến tồn tại nhưng chưa được phép truy cập trước khi khai báo.

Vì vậy khi chạy console.log(y) trước let y = 10 thì chương trình sẽ báo lỗi ReferenceError.

### Đoạn 3:
Dự đoán output:
TypeError: Assignment to constant variable

Giải thích: Biến khai báo bằng const không thể gán lại giá trị sau khi đã khởi tạo.

Biến z đã được gán bằng 15, nên việc z = 20 sẽ gây lỗi TypeError.

### Đoạn 4:
Dự đoán output:
[1, 2, 3, 4]

Giải thích: const không khóa nội dung của object hoặc array mà chỉ khóa địa chỉ tham chiếu của biến.

Vì vậy ta vẫn có thể thay đổi phần tử bên trong mảng bằng:

arr.push(4);

Tuy nhiên nếu gán lại toàn bộ mảng như:

arr = [5, 6];

thì sẽ bị lỗi.

### Đoạn 5:
Dự đoán output
Trong block: 2
Ngoài block: 1

Giải thích:
Biến let có phạm vi hoạt động theo block (block scope).

Biến a bên trong cặp {} là một biến khác hoàn toàn với biến a bên ngoài.

Vì vậy việc thay đổi giá trị bên trong block không ảnh hưởng đến bên ngoài.

## Câu A2 — Data Types & Coercion

### Dự đoán kết quả:

```javascript
object
undefined
number
53
2
15
2
""
"[object Object]"
"[object Object]"
```
### Giải thích:
#### typeof null

Kết quả:

object

Đây là lỗi lịch sử của JavaScript và vẫn được giữ lại để tránh ảnh hưởng đến các chương trình cũ.

#### typeof undefined

Kết quả:

undefined

Biến chưa được gán giá trị sẽ có kiểu dữ liệu undefined.

#### typeof NaN

Kết quả:

number

NaN nghĩa là “Not a Number” nhưng kiểu dữ liệu của nó vẫn là number.

#### "5" + 3

Kết quả:

"53"

Toán tử + khi có string sẽ ưu tiên nối chuỗi.

Số 3 được ép kiểu thành string "3".

#### "5" - 3

Kết quả:

2

Toán tử - luôn ép dữ liệu sang kiểu number để thực hiện phép tính.

String "5" được convert thành số 5.

#### "5" * "3"

Kết quả:

15

Toán tử * sẽ ép cả hai string sang kiểu number.

#### true + true

Kết quả:

2

Trong JavaScript:

```javascript
true = 1
false = 0
```
Nên:

1 + 1 = 2

#### [] + []

Kết quả:

""

Hai mảng rỗng được convert thành chuỗi rỗng rồi nối lại với nhau.

#### [] + {}

Kết quả:

"[object Object]"
[] được convert thành chuỗi rỗng 
```javascript
""
```

{} được convert thành 
```javascript
"[object Object]"
```

Sau đó JavaScript thực hiện nối chuỗi.

#### {} + []

Kết quả trên môi trường chạy của em:

```javascript
"[object Object]"
```

JavaScript convert object thành chuỗi:

```javascript
"[object Object]"
```

và array rỗng thành chuỗi rỗng:

```javascript
""
```

Sau đó thực hiện nối chuỗi.

## Câu A3 — So sánh `==` vs `===`

### Dự đoán kết quả

```javascript
true
false
true
false
false
true
false
true
```

### Giải thích

#### `5 == "5"`
Kết quả:

```javascript
true
```

Toán tử `==` chỉ so sánh giá trị.

JavaScript sẽ tự động ép kiểu:

```javascript
"5" → 5
```

Sau đó so sánh:

```javascript
5 == 5
```

nên kết quả là `true`.

#### `5 === "5"`
Kết quả:

```javascript
false
```

Toán tử `===` so sánh:
- giá trị
- và kiểu dữ liệu

Ở đây:
- `5` là number
- `"5"` là string

Khác kiểu dữ liệu nên kết quả là `false`.

#### `null == undefined`
Kết quả:

```javascript
true
```

Trong JavaScript, `null` và `undefined` được xem là bằng nhau khi dùng `==`.

#### `null === undefined`

```javascript
null === undefined
```

Kết quả:

```javascript
false
```

Vì:
- `null` có kiểu dữ liệu riêng
- `undefined` cũng có kiểu dữ liệu riêng

Khác kiểu nên `===` trả về `false`.

#### `NaN == NaN`
Kết quả:

```javascript
false
```

`NaN` là trường hợp đặc biệt trong JavaScript.

Ngay cả `NaN` cũng không bằng chính nó.

Muốn kiểm tra NaN phải dùng:

```javascript
Number.isNaN(value)
```

#### `0 == false`
Kết quả:

```javascript
true
```

JavaScript ép kiểu:

```javascript
false → 0
```

Sau đó:

```javascript
0 == 0
```

nên kết quả là `true`.

#### `0 === false`
Kết quả:

```javascript
false
```

Vì:
- `0` là number
- `false` là boolean

Khác kiểu dữ liệu nên `===` trả về `false`.

#### `"" == false`
Kết quả:

```javascript
true
```

JavaScript ép kiểu:
- `"" → 0`
- `false → 0`

Sau đó:

```javascript
0 == 0
```

nên kết quả là `true`.

### Kết luận
Trong JavaScript nên ưu tiên dùng:

```javascript
===
```

vì:
- không tự động ép kiểu
- tránh bug khó phát hiện
- an toàn và dễ kiểm soát hơn

Toán tử `==` dễ gây lỗi do JavaScript tự động convert kiểu dữ liệu.

## Câu A4 — Truthy & Falsy

### Các giá trị Falsy trong JavaScript

Trong JavaScript, các giá trị sau được xem là Falsy:

```javascript
false
0
-0
0n
""
null
undefined
NaN
```

Ngoài các giá trị trên, tất cả các giá trị còn lại đều là Truthy.

### Dự đoán kết quả
```javascript
A
C
D
G
H
```

### Giải thích

#### `if ("0")`

Kết quả:

```javascript
A
```

String `"0"` không phải chuỗi rỗng nên là Truthy.

#### `if ("")`
Không in gì.

Chuỗi rỗng `""` là Falsy.

### `if ([])`
Kết quả:

```javascript
C
```

Array rỗng vẫn là Truthy trong JavaScript.

### `if ({})`
Kết quả:

```javascript
D
```

Object rỗng vẫn là Tr

### `if (null)`
Không in gì.

`null` là Falsy.

### `if (0)`
Không in gì.

`0` là Falsy.

### `if (-1)`
Kết quả:

```javascript
G
```

Mọi số khác `0` đều là Truthy.

### `if (" ")`
Kết quả:

```javascript
H
```

Đây là chuỗi chứa dấu cách, KHÔNG phải chuỗi rỗng nên là Truthy.

## Câu A5 — Template Literals

### Viết lại bằng Template Literal

#### Cách 1

```javascript
const greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
```

#### Cách 2

```javascript
const url = `https://api.example.com/users/${userId}/orders?page=${page}`;
```

#### Cách 3

```javascript
const html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;
```
# Phần B
## Câu B1 — Máy tính đơn giản
### Code

```javascript
function calculate(num1, operator, num2) {

    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "Lỗi: Input không phải số";
    }

    if (operator === "/" && num2 === 0) {
        return "Lỗi: Không thể chia cho 0";
    }

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
```

---

### Giải thích

#### Hàm `calculate()`

Hàm nhận:
- số thứ nhất
- phép toán
- số thứ hai

và trả về kết quả tương ứng.

#### Kiểm tra input

```javascript
typeof num1 !== "number"
```

Nếu dữ liệu không phải number thì trả về thông báo lỗi.

#### Kiểm tra chia cho 0

```javascript
if (operator === "/" && num2 === 0)
```

Ngăn trường hợp chia cho 0 gây lỗi logic.

#### `switch case`

Dùng để xử lý nhiều phép toán khác nhau:
- cộng
- trừ
- nhân
- chia
- chia dư
- lũy thừa

#### Operator `**`

```javascript
2 ** 10
```

nghĩa là:

```javascript
2 mũ 10
```

Kết quả là:

```javascript
1024
```

### Kết quả chạy chương trình

```javascript
15

Lỗi: Không thể chia cho 0

Lỗi: Operator '^' không hợp lệ

Lỗi: Input không phải số

1024
```

## Câu B2 — Xử lý dữ liệu sinh viên

### Code

```javascript
average =
    math * 0.4 +
    physics * 0.3 +
    cs * 0.3;
```

```javascript
if (average >= 8.0) {
    rank = "Giỏi";
}
else if (average >= 6.5) {
    rank = "Khá";
}
else if (average >= 5.0) {
    rank = "Trung bình";
}
else {
    rank = "Yếu";
}
```

---

### Giải thích

- Chương trình sử dụng `for loop` để duyệt mảng sinh viên.
- Tính điểm trung bình theo công thức:
  
```javascript
math * 0.4 + physics * 0.3 + cs * 0.3
```

- Dùng `if...else` để xếp loại sinh viên.
- Sử dụng biến đếm để thống kê số lượng:
  - Giỏi
  - Khá
  - Trung bình
  - Yếu

- Tính điểm trung bình từng môn bằng cách cộng tổng rồi chia cho số sinh viên.
- Tìm sinh viên cao nhất và thấp nhất bằng cách so sánh điểm trung bình.

### Kết quả

```javascript
===== THỐNG KÊ =====

Giỏi: 2
Khá: 3
Trung bình: 2
Yếu: 1
```

```javascript
===== CAO NHẤT =====

Em - 9.1
```

```javascript
===== THẤP NHẤT =====

Phong - 3.9
```

## Câu B4 — FizzBuzz nâng cao
### Code

```javascript
if (i % 3 === 0) {
    result += "Fizz";
}

if (i % 5 === 0) {
    result += "Buzz";
}
```

```javascript
function customFizzBuzz(n, rules)
```

### Giải thích

#### Version 1 — Classic

- Dùng vòng lặp từ `1 → 100`
- Nếu chia hết cho:
  - `3` → thêm `"Fizz"`
  - `5` → thêm `"Buzz"`

- Nếu chia hết cả 2:
  
```javascript
FizzBuzz
```

#### Version 2 — Custom Rules

Chương trình sử dụng:

```javascript
rules
```

để tạo bộ luật linh hoạt.

Ví dụ:

```javascript
[
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
]
```

Nếu số chia hết cho nhiều divisor thì sẽ nối các từ lại.

Ví dụ:

```javascript
105
```

chia hết cho:
- 3
- 5
- 7

Kết quả:

```javascript
FizzBuzzJazz
```
