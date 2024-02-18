document.addEventListener('DOMContentLoaded', () => {
    // Animasi judul
    const judul = document.getElementById('judul');
    judul.style.opacity = 0;
    let op = 0.1;  // opasitas awal
    const timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        judul.style.opacity = op;
        judul.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
});
