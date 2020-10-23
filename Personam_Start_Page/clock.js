const clockContanier = document.querySelector(".js-clock"),
    clockTitle = clockContanier.querySelector("p");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`
}

function init() {
    getTime();
    setInterval(getTime, 1000); //일정한 시간마다 특정 함수를 실행시켜주는 부분.
}

init();