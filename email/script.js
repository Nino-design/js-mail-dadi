const emailList = ['ninopompili@gmail.com', 'francorossi@gmail.com', 'pincopallino@gmail.com', 'mariobianchi@gamil.com', 'giuliaverdi@gmail.com'];

console.log(emailList);

const userEmail = prompt('Inserisci la tua email');

let trovata = false;

for (let i = 0; i < emailList.length; i++) {
    if (userEmail === emailList[i]) {
        trovata = true;
    }
}

if (trovata === true) {
    console.log('trovata');
} else {
    console.log('non trovata');
}

