//1a
let randomNum = math.floor(math.random() * 5) + 1;
console.log(randomNum);

//1b
if (randomNum >= 4){
    console.log("equal to or more then 4");
} else if (randomNum >= 2){
    console.log("equal to or more then 2");
} else {
    console.log("equal to 1");
}

/*f (randomNum >= 4){
    console.log("equal or more then 4");
}
if (randomNum >= 2){
    console.log("equal or more then 2")
} else {
    console.log ("equal to 1");
} */

//1c
if ((randomNum !== 3)){
    console.log("not equal to 3");
}

//1d
if (randomNum != (3 && 5)){ 
    console.log("not equal to 3 and not equal to 5");
}

// 1e
if (randomNum === 2 || randomNum ===4){
    console.log("Equal to 2 or equal to 4");
}
