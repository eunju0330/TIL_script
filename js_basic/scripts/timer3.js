//HTML li상품 1개 준비 후 JS를 이용한 다수의 상품 복제 준비
//1. 복제 전 복제대상 선택
const productLi = document.querySelector('.product_list li'); //li 변수. 중복 가능성이 많은 태그니까 앞에 부모도 적어줌
//2. (위) 오류 없는 거 확인 후 복제변수 생성(true == 자식, 자손까지 복제)
//const productLiClone = productLi.cloneNode(true); //복제변수. 콘솔에 li 두개 나옴
//3. (위) 복제 후 붙여넣기할 위치 변수 선택
const productUl = document.querySelector('.product_list');
//4. (위) 오류 없으면 마지막 붙여넣기 진행
//productUl.appendChild(productLiClone); //ul의 마지막 자식으로 복제된 li가 들어감
//console.log(productLi, productLiClone, productUl);

//반복문 활용 7개 붙여넣기
for(let i=0; i<7; i++){
    const productLiClone = productLi.cloneNode(true);
    productUl.appendChild(productLiClone);
} //for안에다 복제변수 생성, 붙여넣기 진행하면 된다.

//슬라이드 애니메이션(타이머 함수 활용)
const slideContainer = document.querySelectorAll('.slide_container');
let num = 0; //변경될 거니까 const말고 let으로
console.log(slideContainer);
/* 1920 / 4 = 480px */
// 0 = 480*0
// 480 = 480*1
// 960 = 980*2 ... 5 //480은 고정이니까 변수 만들 필요 없고, 뒤에 0~5 숫자는 변수로 만들어줘야한다.
const productTimer = setInterval(()=>{
    //12345012345012345... n초 뒤 나오기 전 0번이 이미 보이는 걸로 시작
    num++;
    if(num>5){num=0}
    //console.log(num, num*480); //요소 이동 좌표로 사용할 것.
    //slideContainer.style.transform = `translateX(-${num*480}px)`
    for(let i of slideContainer){
        i.style.transform = `translateX(-${num*480}px)`
    } //위에 slideContainer 변수 all로 바꾸고 진행해야 함.
},2000)

//동기와 비동기 출력 연습
//console.log('A');
//console.log('B');
//console.log('C');
//(위) 동기 작업은 순차적으로 콜스택에 쌓이며 실행된다.
console.log('A');
setTimeout(()=>{
    console.log('B'); //B는 준비되면 나온다. 콜백큐에 저장돼있다가 나옴.
},2000)
console.log('C');
//(위) 동기(a,c)와 비동기(b)는 순차적으로 실행되지 않는다.
//동기작업(a,c)는 콜스택에 바로 쌓이며 즉시 실행되고
//비동기작업(b)는 콜백 큐에 저장되고 준비가 되면 순차적 순서 상관없이 독립적으로 실행된다.

//clearInterval(setInterval변수명)
//카운트다운 버튼 클릭 시 10초 카운트다운 시작
//1초 간격으로 10->9->8 .. 숫자가 감소되고 0초가 되면 타이머가 멈추고 '이벤트 종료' 메세지 출력
const saleTimer = document.querySelector('.sale_timer em');
const saleBtn = document.querySelector('#timer_btn');
console.log(saleTimer, saleBtn);

//함수명 startCountDownFunc
function startCountDownFunc(){
    let num = 10
    const startCountDown = setInterval(()=>{
        if(num < 0){
            clearInterval(startCountDown); //타이머 종료
            //console.log('종료!');
            alert('종료!');
        }else{
            //console.log(num);
            saleTimer.textContent = num;
            num--;
        }
    },1000)
}
saleBtn.addEventListener('click',startCountDownFunc)
