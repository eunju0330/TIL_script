//5/22 DOM 이벤트와 함수
//함수의 매개변수, 익명함수, 화살표함수 (매개변수는 있으면 쓰고, 없으면 비워두고)
//function 함수명(매개변수, 매개변수){실행}
//const 변수명 = fuction(매개변수){실행}
//const 변수명 = (매개변수) => {실행}
const bg = document.querySelector('#bg');
const bg1Btn = document.querySelector('#bg1_btn');
const bg2Btn = document.querySelector('#bg2_btn');
console.log(bg, bg1Btn, bg2Btn);
bg.style.height = '100vh';
bg.style.backgroundColor = 'yellow';
//버튼에 마우스 올렸을 때 배경색변경제어 알고리즘
//이벤트와 함수 생성 후 생성한 함수를 이벤트 내 콜백함수로 불러오기
//이벤트
bg1Btn.addEventListener ('mouseover',bgChangeOver);
bg1Btn.addEventListener ('mouseout',bgChangeOut);
//bg2Btn.addEventListener ('mouseover',bgChange('coral'));
//(위 에러 해결법) 객체 이벤트에서 매개변수가 있는 함수를 호출하려면 익명함수 또는 화살표함수로 변경해야 호출이 가능하다.
bg2Btn.addEventListener('mouseover',function(){
    bgChange('coral');//익명함수 내 매개변수가 있는 함수 호출
})
bg2Btn.addEventListener('mouseout',()=>bgChange('brown'));
//(위)화살표 함수 내 매개변수가 있는 함수 호출(한줄이면 중괄호 생략)
//매개변수 ver 함수
function bgChange(color){
    return bg.style.backgroundColor = color;
}
//함수
function bgChangeOver (){
    return bg.style.backgroundColor = 'aqua';
}
function bgChangeOut (){
    return bg.style.backgroundColor = 'yellow';
}
