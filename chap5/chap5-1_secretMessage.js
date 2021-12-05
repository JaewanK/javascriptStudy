// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let secretMessage = ['Learning', 
'is', 'not', 'about', 'what',
'you', 'get', 'easily', 'the', 
'first', 'time,', 'it', 'is', 'about', 
'what', 'you', 'can', 'figure', 'out.', 
'-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// console.log(secretMessage.length); // secretMessage 24개

//pop : 맨 뒤 값을 삭제
secretMessage.pop(); // 마지막 string 값 삭제
// console.log(secretMessage.length); // secretMessage 23개

//push : 맨 뒤에 값 추가
secretMessage.push('to','Program'); // toi Program 값 추가
// console.log(secretMessage.length);// secretMessage 25개

// indexOf : 값 index 확인
// console.log(secretMessage.indexOf('easily')); // easily index 값 확인
secretMessage[7] = 'right' // easily -> right으로 변경
// console.log(secretMessage); 

// shift : 첫번째 값 삭제
secretMessage.shift();
// console.log(secretMessage); 

secretMessage.unshift('Programming');
// console.log(secretMessage); 

// splice : 해당 인덱스 다음부터 설정한 개수만큼 삭제(대체도 가능)
// console.log(secretMessage.indexOf('get'));
secretMessage.splice(6,5,'know');
// console.log(secretMessage);

// join : 리스트 값 다 잇는 method
console.log(secretMessage.join(' '));
