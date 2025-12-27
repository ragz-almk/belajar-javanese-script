// 1. Komputer memilih angka rahasia (1-10) saat halaman dibuka
let angkaRahasia = Math.ceil(Math.random() * 10);

// (Tips curang: Kita intip angkanya di Console biar gampang ngetesnya)
console.log("Pssst.. Angka rahasianya adalah: " + angkaRahasia);

function cekTebakan() {
    // 2. Ambil angka yang ditulis user di kotak input
    let tebakanUser = document.getElementById("inputUser").value;
    
    // Ambil elemen tempat menulis hasil
    let teksHasil = document.getElementById("hasil");

    // 3. Bandingkan (Logika If/Else)
    if (tebakanUser == angkaRahasia) {
        teksHasil.innerText = "🎉 BENAR! Kamu Hebat!";
        teksHasil.style.color = "green";
    } else if (tebakanUser > angkaRahasia) {
        teksHasil.innerText = "📈 Terlalu TINGGI! Coba lagi.";
        teksHasil.style.color = "orange";
    } else if (tebakanUser < angkaRahasia) {
        teksHasil.innerText = "📉 Terlalu RENDAH! Coba lagi.";
        teksHasil.style.color = "orange";
    }
}