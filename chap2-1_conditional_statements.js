// if statement
let sale = true;
if (sale){
    console.log('Time to buy!');
}
sale = false
if (sale){
    console.log('Time to buy!');
}

// if else statement
if (sale){
    console.log('Time to buy!');
} else {
    console.log('Time to wait for a sale.');
} // sale 이 false 이므로 else문 실행 

// comparison operator
let hungerLevel = 7;
if(hungerLevel > 7){
    console.log('Time to eat!')
}else{
    console.log('We can eat later.')
} // 7하고 같으므로 else문 실행됨

// logical operator
let mood ='sleepy';
let tirednessLevel = 9;
if(mood ==='sleepy' && tirednessLevel >8){
    console.log('time to sleep')
} else {
    console.log('not bed time yet')
}

// or 문 혹은 부정문!
tirednessLevel = 7
if(mood !='sleepy' || tirednessLevel >8){ 
    console.log('time to sleep')
} else {
    console.log('not bed time yet')
} //sleepy도 아니거나 8보다 큰가? 아니므로 else문 실행

// Truthy & Falsy
// non boolean의 경우 빈값이거나 9 nan 등일경우 false로 반환됨
let numberOfApple = 0; // false
if (numberOfApple){
    console.log('Let us eat apples')
} else {
    console.log('No apples left')
}

// Truthy & Falsy assignment
// short-circuit evaluation (단축평가값) - 왼쪽에서 오른쪽으로 boolean을 확인
let tool = '';
let writingUtensil = tool || 'pen'; //tool 이 false이므로 오른쪽 실행
console.log(`The ${writingUtensil} is mightier than the sword`);

tool = 'marker'
writingUtensil = tool || 'pen'; //tool 이 true이므로 왼쪽실행
console.log(`The ${writingUtensil} is mightier than the sword`);

// Ternary operator (삼항조건연산자)
// ?와 True일떄 : false일때 형태로 if문 형성 
let isLocked = false;
isLocked? console.log('door is locked') : console.log('door is opened');
// isLocked가 false 이므로 콜론 뒤에 값이 실행됨

// else if문 


