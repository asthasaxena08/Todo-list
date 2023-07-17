const inputBox = document.getElementById("input-box");
const todoLists = document.getElementById("todo-lists");

function addTask(){
    if (inputBox.value=== '') {
        alert("must write something!!!");
    } 
    else {
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        todoLists.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "" ;
  
}

todoLists.addEventListener("click", function (e) {
    if (e.target.tagName === "LI")
     {
        e.target.classList.toggle("right");
       
    }
    else if (e.target.tagName === "SPAN") 
    {
        e.target.parentElement.remove();
       
    }
}, false);
