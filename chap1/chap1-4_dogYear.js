// 개 나이를 구해보자

const myAge = 31; // 내나이

let earlyYears = 2; // 전기 나이 2년
earlyYears *= 10.5; // 10.5를 곱하고 reassign 

let laterYears = myAge - 2; //후기 나이 (내 나이 -2)
laterYears *= 4;

// console.log(earlyYears, laterYears);

myAgeInDogYears = earlyYears + laterYears; // 전기 후기 나이 더하기

const myName = 'JAYK'.toLowerCase() //내이름을 소문자로 표시

console.log(`내이름은 ${myName}입니다. 사람나이로는 ${myAge}입니다. 개나이로는 ${myAgeInDogYears}이에요.`)
