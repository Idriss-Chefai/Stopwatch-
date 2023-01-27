const startbtn = document.getElementById("startBtn").addEventListener("click",start);
const endbtn = document.getElementById("endBtn").addEventListener("click",end);
const clearbtn = document.getElementById("clearBtn").addEventListener("click",clear);
const time = document.getElementById("time");

let date = new Date(0);
date.setHours(0,0,0);
let res = "";

function start(){
    
     sec = setInterval(addsec,1000);
}

function end(){
    clearInterval(sec);
    clearInterval(min);
    clearInterval(hour);
}

function clear(){
    date.setHours(0,0,0);
    res = `${date.getHours()}0:${date.getMinutes()}0:${date.getSeconds()}0`;
    time.textContent = res;
}


function addsec(){
    res ="";
    date.setSeconds(date.getSeconds()+1);
    if(date.getHours()<10){
        res += `0${date.getHours()}:`;
    }else{
        res +=`${date.getHours()}:`;
    }
    if(date.getMinutes()<10){
        res +=`0${date.getMinutes()}:`;
    }else{
        res +=`${date.getMinutes()}:`;
    }
    if(date.getSeconds()<10){
        res+=`0${date.getSeconds()}`;
    }else{
        res+=`${date.getSeconds()}`;
    }
    time.textContent = res;
} 
