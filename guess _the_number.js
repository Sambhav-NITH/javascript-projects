chances=100

console.log(`you have ${chances} chances`)

let a = parseInt(Math.random()*101);
console.log(a);


b=45
for(i=chances; i>0;i--)
if(a==b){
    console.log("You guessed it right")
}
else{
    chances-=1
    console.log(`Try again \n You have ${chances} chances left`)
}


