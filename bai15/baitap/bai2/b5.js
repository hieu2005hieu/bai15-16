function kiemTra() {
    let a=+ prompt("nhap so");
    let b=+ prompt("nhap so");
    let c=+ prompt("nhap so");
    let kiemTraMin=Math.min(a,b,c);
    return kiemTraMin 
}
let ketQua=kiemTra();
console.log(`so be nhat la ${ketQua}`);