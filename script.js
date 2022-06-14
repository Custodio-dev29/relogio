let dateElement = document.querySelector(`.date`);
let digitalElement = document.querySelector(`.digital`);

function upadteDate_Clock() {

    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let day = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();

    dateElement.innerHTML = `${fixedZero(day)}/${fixedZero(month)}/${fixedZero(year)} `;

    digitalElement.innerHTML = `${fixedZero(hour)}:${fixedZero(minute)}:${fixedZero(second)} `;

}
function fixedZero(time) {
    return time < 10 ? `0${time}` : time;

}
setInterval(upadteDate_Clock, 1000);
upadteDate_Clock;