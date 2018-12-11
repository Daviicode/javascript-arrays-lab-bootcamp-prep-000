var kittens = ["Milo", "Otis", "Garfield"]; //define your array here
var newkittens = "Ralph"

function destructivelyAppendKitten (kittens, newkittens){ 
 var kitten = kittens.concat(newkittens);
 kittens.push(newkittens)
 return kitten
}