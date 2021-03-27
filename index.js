// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
const copyOfCats = cats.slice();

function destructivelyAppendCat(name){
    name = cats.push("Ralph");

}

function destructivelyPrependCat(name){
    name = cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
     cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    name = cats.push("Broom")
    name = cats.splice(0,3)
}