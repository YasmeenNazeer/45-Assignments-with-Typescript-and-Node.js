//write a program that creates objests  containing these items


// data type of person bject
interface person{
    name:string,
    age: number,
    nationality: string,
    student: boolean
}
//person object
let person :person ={
    name:  "Yasmeen",
    age: 19,
    nationality : "Pakistani",
    student: true
}
//print person object
console.log(person);

//data type of car object
interface car{
    name: string,
    color:string,
    automatic:boolean,
    modelnumber:number,

}
// car object
let car:car={
    name: "Toyota",
    color: "black",
    automatic: true,
    modelnumber: 2022,
}
// print car object
console.log(car);
