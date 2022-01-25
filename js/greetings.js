const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const logoutForm = document.querySelector("#logout-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(event) {
event.preventDefault();
const username = loginInput.value;
loginForm.classList.add(HIDDEN_CLASSNAME);
logoutForm.classList.remove(HIDDEN_CLASSNAME);
localStorage.setItem(USERNAME_KEY, username);
paintGreetings(username);
}

function paintGreetings(username) {
greeting.innerText = `Hello! ${username}`;
greeting.classList.remove(HIDDEN_CLASSNAME);
}

function logoutBtn() {
localStorage.removeItem(USERNAME_KEY);
location.reload();
}

logoutForm.addEventListener("click", logoutBtn);
//

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
loginForm.classList.remove(HIDDEN_CLASSNAME);
loginForm.addEventListener("submit", loginSubmit);
} else {
paintGreetings(savedUsername);
}
/*
const loginForm = document.querySelector("#login-form");
const logoutForm = document.querySelector("#logout-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("h1#greeting");
const HIDDEN_CLASSNAME = "hidden";
const HIDDEN_CLASSNAME2 = "hidden2";
const USERNAME_KEY = "username";

function onLoginSubmit(event){  
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    logoutForm.classList.add(HIDDEN_CLASSNAME2);
    const username = loginInput.value;
    //localStorage.setItem(USERNAME_KEY, loginInput.value);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function LogoutSubmit(event){
    logoutForm.addEventListener("submit", logoutGreetings);
    
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function logoutGreetings(username){
    console.log(`See you again ${username}`);
    logoutGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
logoutForm.classList.add(HIDDEN_CLASSNAME2);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
    //logoutGreetings(savedUsername);
    logoutForm.classList.remove(HIDDEN_CLASSNAME2);
    logoutForm.addEventListener("click", LogoutSubmit);
    //show the greetings
}
*/

