let num = "12345";
let a = 0, b = 1;
for (let i = 0; i < num.length; i++) {
    a += Number(num[i]);
    b *= Number(num[i]);
}
alert(a);
alert(b);