//로그인 후 활동 없을 시 5초 후 자동 로그아웃 알고리즘
//활동 없을 시(키보드, 마우스 사용x) - 이벤트
let userLogin = true; //사용자의 로그인 상태(참,거짓)
let logoutTime = 5000; //5초(밀리초)
let logoutInterval;

//1. 사용자가 로그인한 상태라면 자동로그아웃 알고리즘을 시작한다.
if(userLogin == true){logoutTimerFunc()}

function logoutTimerFunc(){
    clearInterval(logoutInterval); //setInterval 위에 쓰면 이전에 움직이던 setInterval을 멈춘다. 

    logoutInterval = setInterval(()=>{
        console.log('활동없음. 자동로그아웃 합니다!')
        window.location.href = './index.html';
    },logoutTime)
}

//사용자의 활동감기 이벤트(마우스이동, 키보드누를때, 마우스클릭)
document.addEventListener('mousemove', logoutTimerFunc)
document.addEventListener('keypress', logoutTimerFunc) //keydown도 맞음
document.addEventListener('click', logoutTimerFunc)