function getSleepHours (day){
    if (day === 'monday'){
        return 8;
    } else if (day === 'tuesday'){
        return 7;
    } else if (day === 'wednesday'){
        return 7;
    } else if (day === 'wednesday'){
        return 5;
    } else if (day === 'thursday'){
        return 9;
    } else if (day === 'friday'){
        return 6;
    } else if (day === 'saturday'){
        return 8;
    } else if (day === 'sunday'){
        return 8;
    }
}

function getActualSleepHours (){
    return getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+
    getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');
}

function getIdealSleepHours (){
    const idealHours = 9
    return idealHours * 7
}

function calculateSleepDebt (){
    const actualSleepHours = getActualSleepHours ()
    const idealSleepHours = getIdealSleepHours()
    if (actualSleepHours === idealSleepHours){
        console.log('잠 아주 잘자고 있습니다');
    } else if (actualSleepHours > idealSleepHours){
        console.log((actualSleepHours - idealSleepHours) + '시간, 권장시간보다 더 자네요. '
        + '잠 너무 많이 자고 있습니다');
    } else {
        console.log((idealSleepHours - actualSleepHours) + '시간, 권장시간보다 덜 자네요. '
        + '잠 너무 적게 자고 있습니다');
    }
}

calculateSleepDebt ();