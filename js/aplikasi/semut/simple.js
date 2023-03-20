// todo - memebuat function yang mengeluarkan nilai (gajah, semut, manusia)
function computer (random){
    let comp = random;
    if (comp <= 3){
        return  "gajah";
    } else if(comp >= 4 && comp <= 6){
        return  "manusia";
    } else{
        return  "semut"
    }
}
let comp = computer(Math.round(Math.random() * 10));
let user = prompt("masukkan pilihan kamu ( gajah, manusia, semut ) : ");
function game(comp, user){

    if (comp === user){
        return "seri";
    }
    else if(comp === "semut" && user === "manusia"){
        return"kamu menang";
    }
    else if(comp === "semut" && user === "gajah"){
        return "kamu kalah";
    }
    else if (comp === "manusia" && user === "gajah"){
        return "kamu menang";
    }
    else if (comp === "manusia" && user === "semut"){
        return"kamu kalah";
    }
    else if (comp === "gajah" && user === "manusia"){
        return"kamu kalah";
    }
    else if (comp === "gajah" && user === "semut"){
        return"kamu menang";
    }
    return hasil;
}
    function resultselect(compresult, userresult, result){
        alert(`komputer memilih ${compresult} dan kamu memilih ${userresult} maka ${result}`);
    }
resultselect(comp, user, game(comp, user));