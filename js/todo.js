const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//const toDos = []; //localStorage에는 array를 저장할 수 없고 text로만 저장할 수 있다.
let toDos = [];

function saveToDos(){
    //localStorage.setItem("todos",toDos);
    localStorage.setItem("todos",JSON.stringify(toDos));
    
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    //console.dir(event.target.parentElement.innerText);
    //어떤 버튼이 클릭되었는지 모른다.
    //그래서 event를 받아 event의 Property중 path 어디서 클릭이 발생되었는지 확인한다. 
    //path property에서 target을 확인하고 target의 parentNode 혹은 parentElement를 확인한다. 
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
    //console.log(newTodo, toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
/*
function sayHello(item){
    console.log("Hello", item);
}
*/
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    //위에 sayhellofunction 대신 parsedToDos.forEach((item)=>console.log("Hello",item)); 화살표 함수를 사용하여 짧게 쓸 수도 있다.
}
/*
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(sayHello);
    //위에 sayhellofunction 대신 parsedToDos.forEach((item)=>console.log("Hello",item)); 화살표 함수를 사용하여 짧게 쓸 수도 있다.
}
*/
//JSON.parse("[1,2,3,4]"); string을 array(alive JavaScript Object)로 변환

/*
array나 어떤 것이든 string으로 바꿔줌
const player = {name: "nico"};
name으로 nico를 가진 player가 있다.
이것을 string으로 바꾸려면 JSON.stringify(player)를 해주면 된다.
*/