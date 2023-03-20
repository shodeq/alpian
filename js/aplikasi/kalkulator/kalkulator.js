let ulang;
const penjumlahan = function(a, b){
    let hasil = a + b;
    let hasilnya = (`hasil dari penjumlahan adalah ${hasil}`) 
    alert(hasilnya)
    ulang = confirm("tambah ?")
}
const pengurangan = function(a, b){
    let hasil = a - b;
    let hasilnya = (`hasil dari pengurangan adalah ${hasil}`)
    alert(hasilnya)
    ulang = confirm("tambah ?")
}
const perkalian = function(a, b){
    let hasil = a * b;
    let hasilnya = (`hasil dari perkalian adalah ${hasil}`)
    alert(hasilnya)
    ulang = confirm("tambah ?")
}
const pembagian = function(a, b){
    let hasil = a / b;
    let hasilnya = (`hasil pembagian adalah ${hasil}`)
    alert(hasilnya)
    ulang = confirm("tambah ?")
}
const runing = function(pilih){
    let input1 = parseInt(prompt("masukkan nilai 1"))
    let input2 = parseInt(prompt("masukkan nilai 2"))
    switch (parseInt(pilih)){
        case 1:
        penjumlahan(input1, input2)
        break;
        case 2:
        pengurangan(input1, input2)
        break;
        case 3:
        perkalian(input1, input2)
        break;
        case 4:
        pembagian(input1, input2)
        break;
        default:
            alert("pilihan tidak ada")
    }
}
do{
    runing(prompt("masukkan pilihan \n1.penjumlahan \n2.pengurangan \n3.perkalian \n4.pembagian"))
}while(ulang)
alert("thx")