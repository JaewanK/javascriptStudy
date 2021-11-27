const userName = 'JAYK';

userName? console.log(`Hello,${userName}`) : console.log('Hello');

const userQuestion ='Am I doing well?';

console.log(`${userName}\'s question : ${userQuestion}`);

const randomNumber = Math.floor(Math.random()*8); //0~7 까지의 랜덤숫자 추출
//console.log(randomNumber)

let eightBall ='';
switch(randomNumber){
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall ='It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'Outlook not so good';
        break;
    case 6:
        eightBall = 'My sources say no';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
}
console.log(eightBall)


