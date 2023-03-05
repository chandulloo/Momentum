//clock
const clock = document.querySelector("#clock");
const hello = document.querySelector("#title");
const todo = document.querySelector("#todo-form");
//login
const loginForm  = document.querySelector("#loginForm");
const names = document.querySelector("#name");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function enterkey(event){
  if (window.event.keyCode===13) {
     event.preventDefault();
     loginForm.classList.add(HIDDEN_CLASSNAME);
     hello.classList.remove(HIDDEN_CLASSNAME);
     clock.classList.remove(HIDDEN_CLASSNAME);
     todo.classList.remove(HIDDEN_CLASSNAME);
     const username = names.value;
     localStorage.setItem(USERNAME_KEY, username);
     paintGreetings();

  }
}

function paintGreetings(H) {
  const username = localStorage.getItem(USERNAME_KEY);
  if (H <= 11 && H >= 6) {//6~11
    hello.innerText = `Good Morning, ${username} `;
  }else if(H <= 17 && H >= 12){ //12~17
    hello.innerText = `Good afternoon, ${username} `;
  }else if(H <= 21 && H >= 18){ //18~21
    hello.innerText = `Good evening, ${username} `;
  }else{ //22~5
    hello.innerText = `Good night, ${username} `;
  }
}

function time() {
  const date = new Date();
  const H = String(date.getHours()).padStart(2, "0");
  const M = String(date.getMinutes()).padStart(2, "0");

  clock.innerText = `${H}:${M}`;
  paintGreetings(H);
};

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("keyup",enterkey);
}else {
  paintGreetings(saveUsername);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  hello.classList.remove(HIDDEN_CLASSNAME);
  clock.classList.remove(HIDDEN_CLASSNAME);
  todo.classList.remove(HIDDEN_CLASSNAME);
}



time();
setInterval(time, 1000);
