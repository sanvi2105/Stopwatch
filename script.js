let start=document.querySelector('#start');
let displayTime=document.querySelector('.displayTime');
let timer=null;
let stop=document.querySelector("#stop");
let reset=document.querySelector("#reset");

//we will make an array
let[seconds,minutes,hours]=[0,0,0];






function stopwatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }

    let h=hours<10 ? "0"+hours: hours;
    let m=minutes<10 ? "0"+minutes: minutes;
    let s=seconds<10 ? "0"+seconds: seconds;

    displayTime.innerText=h+":"+m+":"+s;


};



function watchStart(){
    if(timer!==null){
        clearInterval(timer); //stops the previous timer
    }

    timer=setInterval(stopwatch,1000); //1000ms seconds , saves the interval ID in timer.
   //setInterval is a function that calls function repeatedly
};


start.addEventListener('click',()=>{
    watchStart();
  

});


function watchStop(){
    clearInterval(timer);
}



function resetWatch(){
    clearInterval(timer);
    [seconds,minutes,hours]=[0,0,0];
    displayTime.innerHTML="00:00:00";

   
};



reset.addEventListener("click",()=>{
    resetWatch();
    

});


stop.addEventListener('click',()=>{
    watchStop();
})