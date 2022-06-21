const spesa = [
    'uova',
    'pane',
    'pasta',
    'latte',
    'farina',
    'lievito'
];

const pezzo= document.getElementById('spesa');
console.log(spesa);


let i=0;

while(i<spesa.length){

    const newElement = document.createElement('li');
    
    newElement.innerHTML=spesa[i];

    pezzo.append(newElement);
    
    i++;

   
}