const form = document.querySelector(".js-form"),//querySelector은 모든걸 가져 온다.
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const User_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(User_LS, text);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Have a good day, ${text}`
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}

function loadName() {
    const currentUser = localStorage.getItem(User_LS);
    if(currentUser === null) {
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();