// 유저가 낼 가위바위보 

const getUserChoice = userInput => {
    // 매개변수는 iserInput
    userInput = userInput.toLowerCase(); // 대소문자 무관하게 설정
    switch(userInput){
      case 'rock':
        return userInput; // 인자가 rock이면 결과값을 rock로
      case 'paper':
        return userInput; // 인자가 paper이면 결과값을 paper로
      case 'scissors':
        return userInput; // 인자가 scissors이면 결과값을 scissors로
      case 'bomb':
        return userInput; // 치트키 bomb
      default:
        console.log('Value Error'); // 3개중에 없으면 error 발생
    }
}
  
// console.log(getUserChoice('bomb'))

// 컴퓨터의 가위바위보
const getComputerChoice = () => {
    num = Math.floor(Math.random()*3); // 0~3 사이의 정수 (3은 포함x)
    switch(num){
        case 0:
        return 'rock';
        case 1:
        return 'paper';
        case 2:
        return 'scissors';
    }
}

// 승부를 결정하는 함수
const determineWinner = (userChoice,computerChoice) => {
    if(userChoice === 'bomb'){
        return 'user win' // 유저가 bomb이면 무조건 유저승
    }else if(userChoice === computerChoice){
        return 'tied';
    }else if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'computer win';
        }else{
            return 'user win';} // 유저 = rock 인경우 컴퓨터 = paper or scissors
    }else if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return 'computer win';
        }else{
            return 'user win'}; // 유저 = paper 인경우 컴퓨터 = paper or rock
    }else if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return 'computer win';
        }else{
            return 'user win'}; // 유저 = scissors 인경우 컴퓨터 = paper or rock
    }
}
  
const playGame = () => {
    const userChoice = getUserChoice('rock'); // 유저가 rock인경우
    const computerChoice = getComputerChoice();
    console.log('YOU :' + userChoice);
    console.log('COMPUTER :' + computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
}
  
playGame() // 가위바위보 함수실행