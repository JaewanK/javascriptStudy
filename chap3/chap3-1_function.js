// function declation
function getReminder() {
    console.log('Water the plants.');
}
getReminder();
function greetInSpanish() {
    console.log('Buenas Tardes.');
}
greetInSpanish();

// 매개변수(parameter)와 인자(argument)
function sayThanks(name){
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
} // name은 매개변수
sayThanks('Cole'); // cole 이 인자

// default parameters
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
    console.log(`My shopinglist : ${item1}, ${item2}, ${item3}`);
}
makeShoppingList(); // 인자가 없는경우 default는 함수 선언시에 설정이 됨
makeShoppingList('apple','banana','orange'); // 인자를 포함하면 인자값이 나옴

//return
function monitorCount(rows,columns) {
    return rows*columns;
}
const numOfMonitors = monitorCount(5,4);
console.log(numOfMonitors);

// helper function 
function costOfMonitors(rows,columns) {
    return monitorCount(rows,columns) * 200; //helper function은 monitorCount
}
const totalCost = costOfMonitors(5,4); 
console.log(totalCost);

// function expressions
const plantNeedsWater = function(day){
    if (day === 'Wednesday') {return true
    }else{return false};
}
console.log(plantNeedsWater('Tuesday'))

// Arrow function
const plantNeedsWater2 = (day) => {
    if (day === 'Wednesday') {return true
    }else{return false};
}
console.log(plantNeedsWater2('Wednesday'))

// Concise Body Arrow function
const plantNeedsWater3 = day => (day = 'Wednesday') ? true : false; // single line 일때만.. {}생략
console.log(plantNeedsWater3('Wednesday'));
