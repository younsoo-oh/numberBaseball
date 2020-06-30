const input = document.querySelector('#input');
const check = document.querySelector('#check');
const logs = document.querySelector('#logs');

let list = [];
for (let i=0; i<=9; i++){
    list.push(i);
}

let selectNumber = [];
for (let n=0; n<=3; n++){
    const select = Math.floor(Math.random() * list.length); //랜덤으로 4자리뽑기
    selectNumber.push(list[select]); //list에서 선택된 숫자를 넣음  
    list.splice(select, 1);   //중복되지않도록 선택된 숫자 삭제
}
console.log(selectNumber); //console에서 정답보여지도록
  
let count = 1;
check.addEventListener('click', ()=>{
    const value = input.value; //문자열 상태
    const valueArray = value.split(''); //split은 문자열을 배열로 만들어줌
    if (value.length === 4){
        if (selectNumber.join('') === value) { //join은 배열을 문자열로 만들어줌
            logs.appendChild(document.createTextNode(`HomeRun! ${selectNumber.join('')}정답입니다!`));
        } else {
            let strike = 0; //여기서 초기화 하지않으면 값이 쌓임 (ex.strike가 4이상)
            let ball = 0;
            for (const [s_index, s_Number] of selectNumber.entries()){ //entries는 [key,value]를 같이 반환
                for (const [v_index, v_String] of valueArray.entries()){ 
                    if (s_Number === Number(v_String)){ //input값은 숫자가 아닌 문자열이기때문에
                        if (s_index === v_index){
                            strike++
                        } else{
                            ball++
                        } 
                    } 
                }
            }logs.append(`${value}: ${strike} strike ${ball} ball / ${count} count`, document.createElement('br'));
        }
    }
    if (count > 10) {
        logs.appendChild(document.createTextNode(`횟수초과! 정답은 ${selectNumber.join('')}입니다.`));
    } else {
        count++
    }
    if (value.length !== 4) {
        alert('4자리 숫자를 입력하세요.');
    } else {
        const findDuplicate = Array.from(new Set(value));
        if (findDuplicate.length < 4) {
            alert('중복되지 않는 숫자를 입력하세요.');
        }
    }
    /* 중복되는 숫자를 입력하면 오류가 뜨도록 함 
    set()은 중복되는 값을 넘기면 알아서 앞의 값(한개)만 남기고 무시함
    Array.from()은 배열로 변화시킴
    1) 배열과 비슷한 객체: length 프로퍼티와 인덱스 된 요소를 가지고 있는 객체
    2) 반복할 수 있는 객체 : Map과 Set 객체 및 문자열과 같이 해당 요소를 개별적으로 선택할 수 있는 객체.*/
    input.value = '';
    input.focus();
})
