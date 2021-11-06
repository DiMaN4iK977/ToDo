let date = new Date();
let year = date.getFullYear();
let leftMonth = document.querySelector("#month");
let week = document.querySelector("#week");
let day= document.querySelector('#day');
let daysYear = 365;
let daysPassed = 0;


let month = [
    {days: 31, num: 1},
    {days: 28, num: 2},
    {days: 31, num: 3},
    {days: 30, num: 4},
    {days: 31, num: 5},
    {days: 30, num: 6},
    {days: 31, num: 7},
    {days: 31, num: 8},
    {days: 30, num: 9},
    {days: 31, num: 10},
    {days: 30, num: 11},
    {days: 31, num: 12}
]

if(year%4===0) {
    month[1].days = 29;
    daysYear = 366;
}

for (let i = 0; i < month[date.getMonth() - 1].num; i++) {
    daysPassed += month[i].days;
}
daysPassed += date.getDate();

document.querySelector('.result').innerHTML = (`${daysYear - daysPassed} days left`);

leftMonth.addEventListener('click', () => {

    if((month[date.getMonth()].days - date.getDate() - 1) === 1) {
        document.querySelector('.result').innerHTML = (`${12- month[date.getMonth()].num} month ${month[date.getMonth()].days - date.getDate() - 1} day left`);
    } else {
        document.querySelector('.result').innerHTML = (`${12- month[date.getMonth()].num} month ${month[date.getMonth()].days - date.getDate() - 1} days left`);
    }
})



let weeks = "weeks";

if(Math.trunc((daysYear - daysPassed)/7) === 1) {
    weeks = "week";
}
week.addEventListener('click', () => {
    let daysLast = daysYear - daysPassed - Math.trunc((daysYear - daysPassed)/7)*7;
    if(daysLast === 0) {
        document.querySelector('.result').innerHTML = `${Math.trunc((daysYear - daysPassed)/7)} ${weeks}`;
    } else {
        if(daysLast !== 1) {
            document.querySelector('.result').innerHTML = `${Math.trunc((daysYear - daysPassed) / 7)} ${weeks} ${daysLast} days`;
        } else {
        document.querySelector('.result').innerHTML = (`${Math.trunc((daysYear - daysPassed)/7)} ${weeks} ${daysLast} day`)
    }
}})

let days = "days"

day.addEventListener('click', () => {
    if(daysYear - daysPassed === 1) {
        days = "day"
    }
    document.querySelector('.result').innerHTML = (`${daysYear - daysPassed} ${days} left`);
})


