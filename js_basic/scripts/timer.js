function greeting(){
    return console.log('hello');
}

setInterval(greeting,3000);
//타이머함수 setInterval 일정시간반복
let num1 = 0;
function num1Func(){
    num1++;
    if(num1>4){num1=1}
    console.log(num1)
    //1234123412341234...
}
//setInterval(num1Func,1000)

let num2 = 0;
//0~5 반복 출력 타이머 012345012345...
function num2Func(){
    console.log(num2);
    num2++;
    if(num2>5){num2=0}
}
//setInterval(num2Func, 1000);

//6~0 출력타이머 65432106543210...
let num3 = 6;
function num3Func(){
    console.log(num3);
    num3--;
    if(num3==-1){num3=6}
}
setInterval(num3Func, 500);