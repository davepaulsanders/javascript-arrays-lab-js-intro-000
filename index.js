var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
kittens = kittens.concat(name)
return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  kittenstwo = kittens.concat(name)
  return kittenstwo
}
