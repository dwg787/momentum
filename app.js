const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
//const loginButton = document.querySelector("#login-form button");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    //const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //removeItem, getItem
    //console.log(username);
    //greeting.innerText = "Hello " + username;
    paintGreetings(username);
    /*
    greeting.innerText = `Hello ${username}`; //백틱. 작은 따옴표 ''와 혼동 주의할 것!
    greeting.classList.remove(HIDDEN_CLASSNAME);
    */
    //const username = loginInput.value;
    //console.log(loginInput.value);
    /*
    if(username == ""){
       alert("please write your name.");
    }
    else if(username.length > 15){
        alert("Your name is too long.")
    }*/
    //console.log(loginInput.value);
    //console.log("click");
}
//loginForm.addEventListener("submit",onLoginSubmit);
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
    //show the greetings
}
/*
function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
    alert("clicked");
}*/

//link.addEventListener("click", handleLinkClick);

//loginButton.addEventListener("click", LogInButtonClick);
/*
const age = parseInt(prompt("How old are you?")); //prompt함수 안에 "asdfasd"인 경우는 string을 number로 변환 못해서 NaN가 된다.
//parseInt 가 string을 받아 숫자로 바꾸려고 한다.
//console.log(age, parseInt(age));
//NaN = Not a Number
if(isNaN(age)){
    console.log("please write a number");
} else if (age < 18){
    console.log("You are too young.");
} else {
    console.log("You can drink");
}*/