function laKyTuSo(kyTu) {
    return !isNaN(kyTu);
}
let kyTuNhapVao =prompt("Nhap 1 ki tu");
let ketQua = laKyTuSo(kyTuNhapVao);
if (ketQua) {
    console.log(`Ký tự ${kyTuNhapVao} true.`);
} else {
   console.log(`Ký tự ${kyTuNhapVao} false `);
}
