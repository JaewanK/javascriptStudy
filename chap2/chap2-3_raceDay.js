// 18세 초과 & resistered early - 9:30am 출발
// 18세 초과 & resistered late - 11:00am 출발
// 18세 미만 - 12:30pm 출발
// 18세 초과시 출전번호는 randomNum에 1000을 더해서 산출함 

// 랜덤하게 1000 미만의 숫자 
let randomNum = Math.floor(Math.random()*1000);

// 일찍 등록했는지 logical value
const resisteredEarly = false;

// 등록한 사람 나이 - 어른인경우
let age = 17;

// 안내문 출력 if statement
if(resisteredEarly && age>18){
    raceNumber = randomNum + 1000;
    console.log(`You will race at 9:30am. Number is ${raceNumber}`)
    // 일찍등록 & 18세 초과시 9:30am 출발
}else if(!resisteredEarly && age>18){
    raceNumber = randomNum + 1000;
    console.log(`You will race at 11:00am. Number is ${raceNumber}`)
    // 늦게등록 & 18세 초과시 9:30am 출발
}else if(age<18){
    raceNumber = randomNum;
    console.log(`You will race at 12:30pm. Number is ${raceNumber}`)
    // Youth에 대한 (등록여부 무관)
}else{console.log('Ask registration desk, plz')
// 18세 일 경우 
}
