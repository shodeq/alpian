for ( let i = 1; i <= 10; i++){
    if(i===3 || i===5 || i===7) {
        console.log (chalk.red(`angkot dengan nomor ${i} sedang tidak beroperasi.`));
    } else if (i === 6 ){
        console.log(chalk.yellow(`angkot dengan nomor ${i} sedang di peraiki.`));
    }
    else {
        console.log(chalk.green(`angkot dengan nomor ${i} sedang berjalan dengan baik.`));
    }
}