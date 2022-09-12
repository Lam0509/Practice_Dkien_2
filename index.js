// Bài 1
// // let c = prompt('Nhập giá trị độ C');
// // let f = c * (9 / 5) + 32;
// // alert('Giá trị độ F là ' + f);

//Bài 2
// let m = prompt('Nhập giá trị mét');
// let ft = m * 3.2808;
// alert('Giá trị đổi sang feet là ' + ft);

// Bài 3
// let a = prompt('Cạnh hình vuông có giá trị là')
// let area = a ** 2;
// alert('Diện tích hình vuông là ' + area);

// Bài 4
// let a = prompt('Chiều rộng của hình chữ nhật là');
// let b = prompt('Chiều dài của hình chữ nhật là');
// let area = a * b;
// alert('Diện tích hình chữ nhật là ' + area);

// Bài 5
// let a = prompt('Cạnh kề 1 của tam giác vuông');
// let b = prompt('Cạnh kề 2 của tam giác vuông');
// let area = (1 / 2) * a * b;
// alert('Diện tích của tam giaác vuông là ' + area);

// Bài 6
// let a = parseInt(prompt('Nhập vào hệ số a'));
// let b = parseInt(prompt('Nhập vào giá trị b'));
// if (a == 0)
// {
//     if (b == 0) {
//         alert('Phương trình vô số nghiệm');
//     } else {
//         alert('Phương trình vô nghiệm');
//     }
// } else {
//     let x = - b / a;
//     alert('Phương trình có nghiệm x là ' + x)
// }

// Bài 7
// let a = parseInt(prompt('Nhập giá trị a'));
// let b = parseInt(prompt('Nhập giá trị b'));
// let c = parseInt(prompt('Nhập giá trị c'));
// let denta = b ** 2 - (4 * a * c);
// if (denta > 0) {
//     let x1 = (- b + Math.sqrt(denta)) / (2 * a);
//     let x2 = (- b - Math.sqrt(denta)) / (2 * a);
//     alert('Phương trình có 2 nghiệm x1 là ' + x1 + ' và x2 là ' + x2);
// } else if (denta == 0) {
//     let x3 = (- b) / (2 * a);
//     alert('Phương trình có nghiệm kép là ' + x3);
// } else {
//     alert('Phương trình vô nghiệm')
// }

// Bài 8
// let a = parseInt(prompt('Nhập số'));
// if (a >= 120 || a <= 0 ) {
//     alert('Không có độ tuổi này');
// } else {
//

// Bài 9
// let a = parseInt(prompt('Nhập a'));
// let b = parseInt(prompt('Nhập b'));
// let c = parseInt(prompt('Nhập c'));
// if (a > 0 && b > 0 && c > 0) {
//     if (a + b > c && b + c > a && a + c > b) {
//         alert('Đây là 3 cạnh của 1 tam giác');
//     } else {
//         alert('Đây không phải là 3 cạnh của 1 tam giác');
//     }
// } else {
//     alert('Đây không phải là 3 cạnh của 1 tam giác');
// }

// Bài 10
// let a = prompt('Nhập lượng điện năng tiêu thụ');
// let b = 1.678;
// let c = 1.734;
// let d = 2.014;
// let e = 2.536;
// let f = 2.834;
// let g = 2.927;
// if (a <= 50) {
//     let b = 1.678;
//     let res = a * b
//     alert('Tiền điện tháng này là ' + 1.1 * res);
// } else if (a <= 100) {
//     let res = 50 * b + (a - 50) * c;
//     alert('Tiền điện tháng này là ' + 1.1 * res);
// } else if (a <= 200) {
//     let res = 50 * b + 50 * c + (a - 100) * d;
//     alert('Tiền điện tháng này là ' + 1.1 * res);
// } else if (a <= 300) {
//     let res = 50 * b + 50 * c + 100 * d + (a - 200) * e;
//     alert('Tiền điện tháng này là ' + 1.1 * res);
// } else if (a <= 400) {
//     let res = 50 * b + 50 * c + 100 * d + 100 * e + (a - 300) * f;
//     alert('Tiền điện tháng này là ' + 1.1 * res);
// } else {
//     let res = 50 * b + 50 * c + 100 * d + 100 * e + 100 * f + (a - 400) * g;
//     alert('Tiền điện tháng này là ' + 1.1 * res);
// }

// Bài 11
// let a = prompt('Nhập thu nhập tính thuế');
// let b = 0.05;
// let c = 0.1;
// let d = 0.15;
// let e = 0.2;
// let f = 0.25;
// let g = 0.3;
// let h = 0.35;
// if (a <= 5) {
//     alert('Số thuế phải nộp là ' + a * b)
// } else if (a <= 10) {
//     alert('Số thuế phải nộp là ' + a * c - 0.25);
// } else if (a <= 18) {
//     alert('Số thuế phải nộp là ' + a * d -0.75);
// } else if (a <= 32) {
//     alert('Số thuế phải nộp là ' + a * e - 1.65);
// } else if (a <= 52) {
//     alert('Số thuế phải nộp là ' + a * f - 3.25);
// } else if (a <= 80) {
//     alert('Số thuế phải nộp là ' + a * g - 5.85);
// } else {
//     alert('Số thuế phải nộp là ' + a * h - 9.85);
// }

// Bài 12
// let tong = 0;
// let soTienBanDau = parseInt(prompt('Nhập số tiền ban đầu'));
// let laiSuat = 6.4 / 100;
// for (i = 1; i <= 5; i++) {
//     let tienLai = (soTienBanDau * laiSuat) / 12;
//     tong += tienLai;
//     soTienBanDau += tienLai;
// }
// alert('Tổng tiền lãi gửi tiết kiệm sau 5 tháng là' + tong);


