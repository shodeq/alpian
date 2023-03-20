let ulang;
const handphone = function(){
    alert("handphone")
    ulang=confirm("tenan po");
}
const laptop = function(){
    alert("laptop")
    ulang=confirm("tenan po")   
}
const computer = function(){
    alert("computer")
    ulang=confirm("tenan po")
}
const samsudin = function(){
    alert("hooh tenan")
    ulang=confirm("tenan po")
}

const program = function(pilihan){
    switch(parseInt(pilihan)){
        case 1:
            handphone()
            break;
        case 2:
            laptop()
            break;
        case 3:
            computer()
            break;
        case 4:
            samsudin()
            break;
        default:
            alert("raroh")
    }
}
do{
    program( prompt("pilih nomor: "))
}while (ulang)
