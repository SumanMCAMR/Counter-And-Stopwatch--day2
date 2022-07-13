//define variables to hold time values
var hr=0;
var min=0;
var sec=0;
var watch = '';

//functions and logics
function Start(){
    watch =setInterval(update, 1000)
   }
function update(){
    sec = sec + 1;
    if(sec>59){
        min = min + 1;
        sec = 0;
        if(min>59){
            hr=hr+1;
            min=0;
            sec=0;
            if(hr>11){
                hr=0;
                min=0;
                sec=0;
            }
        }
    }
    if(sec<10 && min<10 && hr<10){
    document.getElementById('display').innerHTML = '0'+hr+':'+'0'+min+':'+'0'+sec;
    }else{
    document.getElementById('display').innerHTML = hr+':'+min+':'+sec;
    }
    document.getElementById('Stop').onclick=()=>{Stop()};
    document.getElementById('Resume').onclick=()=>{Resume()};
    document.getElementById('Reset').onclick=()=>{Reset()};
    function Stop(){
            
        clearInterval(watch);

    }
    function Resume(){
        watch= setInterval(update, 1000);
    }
    function Reset(){
        hr=0;
        min=0;
        sec=0;
        clearInterval(watch);
        document.getElementById('display').innerHTML= hr+ ':' +min+ ':' +sec;

    }
}