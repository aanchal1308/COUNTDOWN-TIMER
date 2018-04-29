function updateTimer(deadline){
    var time= deadline - new Date();
    return{
        'days': Math.floor(time/(1000*60*60*24)),
        'hours': Math.floor( (time/(1000*60*60))%24),
        'minutes': Math.floor((time/1000/60)%60),
        'seconds': Math.floor((time/1000)%60),
        'total' : time
    };
}




function startTimer(id,deadline){
    var timerInterval = setInterval(function(){
        var clock = document.getElementById(id);
        var timer = updateTimer(deadline);

        clock.innerHTML = '<span>' + timer.days + '</span>'
                        + '<span>' + timer.hours + '</span>'
                        + '<span>' + timer.minutes + '</span>'
                        + '<span>' + timer.seconds + '</span>';

        
        //end of timer
        if(timer.total<1){
            clearInterval(timerInterval);
            clock.innerHtML = '<span>0</span><span>0</span><span>0</span><span>0</span><span>0</span>'
        }
                       
    }, 1000);
}

window.onload = function(){
    var deadline = new Date("October 10,2020 9:00:00");
    startTimer("clock",deadline);
};
	