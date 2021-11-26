// 온도 구하기 문제

// const kelvin = 293; // 오늘의 온도는 kelvin 293 
// let celsius = kelvin - 273 ; // 섭씨온도는 kelvin - 273
// let fahrenheit = Math.floor(celsius*(9/5) + 32); // 화씨온도는 섭씨*(9/5) + 32
// console.log(`오늘 화씨 온도는 ${fahrenheit} 입니다.`);

// 만약에 kelvin온도가 0이라면?
const kelvin = 0;
let celsius = kelvin - 273 ; // 섭씨온도는 kelvin - 273
let fahrenheit = Math.floor(celsius*(9/5) + 32); // 화씨온도는 섭씨*(9/5) + 32
console.log(`오늘 화씨 온도는 ${fahrenheit} 입니다.`);

//Newton의 값을 구해보자
let newton = Math.floor(celsius*(33/100));
console.log(`오늘 Newton의 값은 ${newton} 입니다.`)





