// Bài 1. Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.

let a = 0;
while (a < 100) {
  console.log(` ${a}`);

  if (a === 99) {
    console.log("Hoàn thành");
  }
  a = a + 1;
}

// Bài 2. Hiển thị ra 20 số trong dãy fibonacci đầu tiên.

let number20 = 20;
let numb1 = 0,
  numb2 = 1,
  hihi;

console.log("Fibonacci:");

for (let i = 1; i <= number20; i = i + 1) {
  console.log(numb1);
  hihi = numb1 + numb2;
  numb1 = numb2;
  numb2 = hihi;
}

//   Bài 3.Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.

let so1 = 0;
let so2 = 0;
let so3 = 0;
let chia5 = "";
let fibonacci = "";
for (let bienchay = 0; bienchay < 20; bienchay = bienchay + 1) {
  if (bienchay == 0) {
    so2 = 1;
    so3 = 1;
    fibonacci += so1 + " ";
  } else {
    so1 = so2 + so3;
    so2 = so3;
    so3 = so1;
    fibonacci += so1 + " ";
    console.log(bienchay + " = " + so1);
    if (so1 % 5 == 0) {
      chia5 = so1;
      break;
    }
  }
}
// console.log(" Số đầu tiên chia hết cho 5 trong dãy là " + chia5);

/// Bài 4. Tính tổng của 20 số đầu tiên trong dãy fibonacci.

let soo1 = 0;
let soo2 = 0;
let soo3 = 0;
let tong20 = 0;
let fibonacci20 = "";
for (let bienchay20 = 0; bienchay20 < 20; bienchay20 = bienchay20 + 1) {
  if (bienchay20 == 0) {
    soo2 = 1;
    soo3 = 1;
    fibonacci20 = fibonacci20 + soo1 + " ";
    tong20 = tong20 + soo1;
  } else {
    soo1 = soo2 + soo3;
    soo2 = soo3;
    soo3 = soo1;
    fibonacci20 = fibonacci20 + soo1 + " ";
    tong20 = tong20 + soo1;
    console.log(bienchay20 + " = " + soo1);
  }
}
console.log(" Tổng 20 số đầu tiên là " + tong20);

///  Bài 5 . Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.

let z = 0;
let tong7 = 0;
let dayso7 = "";
for (let bien7 = 1; ; bien7++) {
  if (bien7 % 7 == 0) {
    dayso7 = dayso7 + bien7 + " ";

    tong7 = tong7 + bien7;
    z = z + 1;
    if (z == 30) break;
  }
}

// console.log("Tổng bằng " + tong7);

/// Bài 6 . Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết
//  cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết
//  cho cả 3 và 5 thì in ra chữ "FizzBuzz".

for (let chiahet = 0; chiahet <= 100; chiahet = chiahet + 1) {
  if (chiahet % 3 === 0 && chiahet % 5) {
    console.log("FizzBuzz");
  } else if (chiahet % 3 === 0) {
    console.log("Fizz");
  } else if (chiahet % 5 === 0) {
    console.log("Buzz");
  }
}

/// Bài 7 .Tính giai thừa của một số nguyên dương

let sogiaithua = Number(prompt("Hãy nhập (n)! bạn muốn tính "));
let abc = 1;
for (let giaithua = 1; giaithua < sogiaithua; giaithua = giaithua + 1) {
  abc = abc + abc * giaithua;
}
console.log(abc);
