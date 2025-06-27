let compnum;
let userfuckingnum;
let attempt = 0;
guess = false;

compnum = Math.floor(Math.random()*100)+1;

console.log(compnum);


document.getElementById("mysubmit").onclick= function(){
    userfuckingnum = document.getElementById("usernum").value;
    document.getElementById("tp").textContent = userfuckingnum;
    
    userfuckingnum = Number(userfuckingnum);
    
    if(userfuckingnum > compnum){
    document.getElementById("result").textContent = "Your guess is too high—like your parents’ hopes before you chose engineering";
    document.getElementById("usernum").value = "";
    attempt++;
}
else if(userfuckingnum < compnum){
    document.getElementById("result").textContent = "your guess is too low just like your academics";
    document.getElementById("usernum").value = "";
    attempt++;
}
else{
     document.getElementById("result").textContent = "voila ho ho mery christmas  mother fucker you guessed it right with ${attempt} ";
     guess = true;
}
}


