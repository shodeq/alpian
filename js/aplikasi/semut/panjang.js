// todo - memebuat function yang mengeluarkan nilai (gajah, semut, manusia)
function random(){
    return Math.round(Math.random() * 10);
}
function computer (){
    let comp = random();
    let hasil = "";
    if (comp <= 3){
        hasil = "gajah";
    } else if(comp >= 4 && comp <= 6){
        hasil = "manusia";
    } else{
        hasil = "semut"
    }
    return hasil;
}
function game(){
    let comp = computer();
    let user = prompt("masukkan pilihan kamu ( gajah, manusia, semut ) : ");
    console.log({comp,user})
    let hasil;

    if (comp === user){
        hasil = "seri";
    }
    else if(comp === "semut" && user === "manusia"){
        hasil = "kamu menang";
    }
    else if(comp === "semut" && user === "gajah"){
        hasil = "kamu kalah";
    }
    else if (comp === "manusia" && user === "gajah"){
        hasil = "kamu menang";
    }
    else if (comp === "manusia" && user === "semut"){
        hasil = "kamu kalah";
    }
    else if (comp === "gajah" && user === "manusia"){
        hasil = "kamu kalah";
    }
    else if (comp === "gajah" && user === "semut"){
        hasil = "kamu menang";
    }
    return hasil;
}
alert(game());
// game(); 
// todo - menampung 