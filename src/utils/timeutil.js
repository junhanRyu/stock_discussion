
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;
const month = week * 4;
const year = month * 12;


function getLeftTimeString(time) {

    if(time == undefined)
        return undefined;

    let now =  new Date();
    let diff = now.getTime() - time.getTime();

    if (diff < second) {
        return "방금 전"
    } else if (diff < minute) {
        let seconds = getShare(diff, second);
        return seconds + "초 전";
    } else if (diff < hour) {
        let minutes = getShare(diff, minute);
        return minutes + "분 전";
    } else if (diff < day) {
        let hours = getShare(diff, hour);
        return hours + "시간 전";
    } else if (diff < week) {
        let days = getShare(diff, day);
        return days + "일 전";
    } else if (diff < month) {
        let weeks = getShare(diff, week);
        return weeks + "주 전";
    } else if (diff < year) {
        let months = getShare(diff, month);
        return months + "달 전";
    } else {
        let years = getShare(diff, year);
        return years + "년 전";
    }
}

function getShare(value, divider) {
    return Math.floor(value / divider);
}

function getTimeToString(time) {
    //example 2021-02-10 09:12:33
    try {
        let year = time.substr(0, 4);
        let month = time.substr(5, 2);
        let day = time.substr(8, 2);
        let hour = time.substr(11, 2);
        let minute = time.substr(14, 2);
        let second = time.substr(17, 2);
        let date = new Date(parseInt(year), parseInt(month-1), parseInt(day), parseInt(hour), parseInt(minute), parseInt(second));
        return date;
    } catch {
        return undefined;
    }
}

export {
    getLeftTimeString, getTimeToString
}