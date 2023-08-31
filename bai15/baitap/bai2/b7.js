let number = prompt("nhap 2 so cach nhau bang  dau  phay");
let a = number.split(",");
function soNguyen(i) {
  let result;
  result = i[0];
  i[0] = i[1];
  i[1] = result;
  console.log(a);
}
soNguyen(a);