let magacian:string[]= ['Herry Potter', 'Hermione Granger' , 'Ron Weasley' , 'Albus Dumbledore'];

function copyArray(arr:string[]){
  return  [...arr]
}



function make_Great(magicianArray:string[]) {

    for (let i= 0; i< magicianArray.length; i++) {
        magicianArray[i] = 'The Great ' + magicianArray[i]
        
    }
    
}

function make_Magician(magicians:string[]) {
    magicians.forEach(element =>{
        console.log(element);
        
    })};

    let coppyArray= copyArray(magacian)
    make_Great(coppyArray)
    console.log('\n\nThis is my original array');
    make_Magician(magacian);
    console.log('\n\nThis is my modified copy of array');
    make_Magician(coppyArray);