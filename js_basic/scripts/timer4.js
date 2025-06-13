//회원가입 버튼 클릭 시 join_msg에 '가입축하합니다' 메세지 출력되고
const joinBtn = document.querySelector('#join')
const joinMsg = document.querySelector('.join_msg')
console.log(joinBtn, joinMsg);
joinMsg.classList.add('hide'); //초기상태(숨기기) 클래스 생성하는 법 classList

joinBtn.addEventListener('click',()=>{
    joinMsg.classList.remove('hide'); //클릭이벤트 안에 hide remove해주기
    joinMsg.textContent = '가입축하합니다';
    //(메세지출력 후) 3초 후 메세지 자동 사라지기
    const hideMsg = setTimeout(()=>{
        joinMsg.classList.add('hide');
    },3000)
});

const payBtn = document.querySelector('#pay');
const payResetBtn = document.querySelector('#pay_reset')
const payMsg = document.querySelector('.pay_msg');
let payMsgOut; //clear하려면 이전에 만들어뒀던 setTimeout변수가 필요하기 때문에 전역변수 만들고 지역변수로 만든 변수의 const는 삭제해줌.
payMsg.classList.add('hide'); //초기 숨기기
payResetBtn.classList.add('hide'); //초기 숨기기

payBtn.addEventListener('click',()=>{
    payMsg.classList.remove('hide'); //숨기는 클래스 제거로 보이게 하기
    payResetBtn.classList.remove('hide');
    payMsg.textContent = '결제완료되었습니다. 5초 후 광고사이트로 이동합니다.'
    payMsgOut = setTimeout(()=>{
        window.location.href = './scripts/timer3.js';//광고
    },5000)
})
//결제취소를 클릭하면 리셋타임아웃 취소되게
payResetBtn.addEventListener('click',()=>{
    clearTimeout(payMsgOut)
    console.log('setTimeout 이동삭제완료')
})