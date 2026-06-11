const form = document.getElementById("formVoli");
const hasil = document.getElementById("hasil");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const namaTim = document.getElementById("namaTim").value;
    const kapten = document.getElementById("kapten").value;

    hasil.innerHTML = `
        ✅ Pendaftaran berhasil!<br>
        Tim: <b>${namaTim}</b><br>
        Kapten: <b>${kapten}</b>
    `;

    form.reset();
});