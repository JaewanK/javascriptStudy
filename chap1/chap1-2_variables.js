// Variable

// Var
var myName = 'JayK';
console.log(myName); 

// let - 변경이 가능한 변수
let meal = 'rice';
console.log(meal);

meal = 'ham'; // 변수 value를 바꿀수 있음
console.log(meal);

//const - 변경불가능한 변수
const meal2 = 'rice';
console.log(meal2);
// meal2 = 'ham' // 이미 선언된 변수라고 Error 발생


// mathematical assignment operators : 수학연산자
let a = 100;
a += 100; // a = a +100 이랑 같은 의미 /,*,- 다른 연산자들도 사용가능함
console.log(a);


// the increment operator ++ or -- : +1 혹은 -1 
let b = 100;
b++;
console.log(b); // 101출력

// String Interpolation : ` 와 ${}요거 필요함
const age = 31;
console.log(`My age is ${age}`);

//typeof operator : 변수값의 Type을 확인할때 사용
//console.log(typeof Variable) 형태도 사용
let city = 'seoul';
let year = 2021;
console.log(typeof city);
console.log(typeof year);
