const input = document.getElementById("Pengunjung")
const button = document.getElementsByClassName("button")[0]
const kunjung = document.querySelector(".kunjung")
const hasil = document.querySelector(".hasil")
let hitung = 0

button.addEventListener('click', () =>{
    let list = document.createElement('p')
    list.classList.add('isi')
    list.innerHTML = input.value
    kunjung.appendChild(list)

    hitung = hitung + 1
    hasil.innerHTML = hitung

})

