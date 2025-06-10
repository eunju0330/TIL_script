const studyDate = document.querySelector('#studydate');
const studyBtn = document.querySelector('#study_btn');
const resultDate = document.querySelector('.date em');
const resultTime = document.querySelector('.time em');
console.log(studyDate, studyBtn, resultDate, resultTime);

studyBtn.addEventListener('click',studyFunc)
function studyFunc(){
    const study = new Date(studyDate.value);
    const today = new Date();
    console.log(study,today);
    const studyToday = today.getTime() - study.getTime();
    console.log(studyToday);
    const dateFlow = Math.floor(studyToday / (1000*60*60*24));
    const timeFlow = Math.floor(studyToday / (1000*60*60));
    resultDate.textContent = dateFlow;
    resultTime.textContent = timeFlow;
}
