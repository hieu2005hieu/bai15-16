let number = prompt("nhap so cach nhau bang dau phay");
let a = number.split(",");
function doiViTri(i) {
  return i.reverse();
}
console.log(doiViTri(a));