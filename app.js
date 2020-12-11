let time;
const timer = document.getElementById('#timer');
let timeCount = 0;
let timeInterval;
const buttons = document.querySelectorAll('.button');

// function print(txt) {
//     document.getElementById("timer").innerHTML = txt;
//   }

//creating minutes and seconds format
function timeToString(timeCount){
    let hours = timeCount/3600000;
    let hr = Math.floor(hours);
    let minutes = (hours - hr) * 60;
    let min = Math.floor(minutes); 

    let seconds = (minutes - min) * 60;
    let sec = Math.floor(seconds); 
}

buttons.forEach(function(button){
 console.log(button);
    button.addEventListener('click', function(event){
        const target = event.currentTarget.classList;
        if(target.contains('start')){
            // function start(){
                time = Date.now() - timeCount;
                timeInterval = setInterval(function returnTime(){
                    timeCount = Date.now() - time;
                    console.log(timeToString(timeCount));
                },1000);          
            // }
    
        }else if(target.contains('stop')){
            clearInterval(timeInterval);
    
        }else {
            clearInterval(timeInterval);
            return ('00:00');
            timeCount = 0;
            }
        
    });
    

});

