const namaSiswa = [
    "Andi",
    "Budi",
    "Citra",
    "Dewi",
    "Eko"
];

const nilaiSiswa = [80, 75, 90, 85, 70];

console.log("Jumlah siswa: ", namaSiswa.length);

console.log("Nama siswa pertama: ", namaSiswa[0]);
console.log("Nilai siswa pertama: ", nilaiSiswa[0]);

console.log("Nama siswa terakhir: ", namaSiswa[namSiswa.length - 1]);
console.log("Nilai siswa terakhir: ", nilaiSiswa[nilaiSiswa.length - 1]);

nilaiSiswa[1] = 88;
nilaiSiswa[4] = 82;
console.log("Nilai siswa setelah diubah: ", nilaiSiswa);

console.log("Nama siswa ketiga: ", namaSiswa[2]);
console.log("Nilai siswa ketiga: ", nilaiSiswa[2]);

console.log("Seluruh nama siswa: ", namaSiswa);
console.log("Seluruh nilai siswa: ", nilaiSiswa);