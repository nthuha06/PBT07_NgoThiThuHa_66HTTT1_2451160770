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
