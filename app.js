// Inisialisasi Pi SDK
const Pi = window.Pi;

if (Pi) {
    Pi.init({ version: "2.0", sandbox: true });
}

document.addEventListener("DOMContentLoaded", () => {
    const userStatus = document.getElementById("user-status");
    const bidBtn = document.getElementById("bid-btn");
    const highestBidElem = document.getElementById("highest-bid");
    const countdownElem = document.getElementById("countdown");

    let currentBid = 10.0;

    // Simulasi Status User di Pi Browser
    if (typeof Pi !== 'undefined') {
        userStatus.innerText = "Terdeteksi di Pi Browser. Siap autentikasi.";
    } else {
        userStatus.innerText = "Mode Preview (Buka di Pi Browser untuk transaksi asli)";
    }

    // Tombol Aksi Tawar (Bid)
    bidBtn.addEventListener("click", () => {
        currentBid += 0.5;
        highestBidElem.innerText = currentBid.toFixed(1) + " π";
        alert("Berhasil melakukan penawaran (Bid) sebesar " + currentBid.toFixed(1) + " π!");
    });

    // Countdown Timer Sederhana
    let totalSeconds = 24 * 3600;
    setInterval(() => {
        if (totalSeconds > 0) {
            totalSeconds--;
            let hours = Math.floor(totalSeconds / 3600);
            let minutes = Math.floor((totalSeconds % 3600) / 60);
            let seconds = totalSeconds % 60;
            countdownElem.innerText = 
                String(hours).padStart(2, '0') + ":" + 
                String(minutes).padStart(2, '0') + ":" + 
                String(seconds).padStart(2, '0');
        }
    }, 1000);
});
