let input = document.querySelector("input[type = 'text']");
let ul = document.querySelector("ul");
let container = document.querySelector(".container__todo");
let lists = document.querySelectorAll("li");
let spans = document.getElementsByTagName("span");
let pencil = document.querySelector("#pencil");
let saveBtn = document.querySelector(".save");
let clearBtn = document.querySelector(".clear");
let tipsBtn = document.querySelector(".tipBtn");
let closeBtn = document.querySelector(".closeBtn");
let overlay = document.getElementById("overlay");


//function to delete todo if delete span is clicked.
function deleteTodo(){
    for(let span of spans){
        span.addEventListener ("click",function (){
            span.parentElement.remove();
            event.stopPropagation();
        });
    }
}

//function to load todo if list is found in local storage.
function loadTodo(){
    if(localStorage.getItem('todoList')){
        ul.innerHTML = localStorage.getItem('todoList');
        deleteTodo();
    }
}

//event listener for input to add new todo to the list.
input.addEventListener("keypress",function(keyPressed){
    if(keyPressed.which === 13){
        //creating lists and span when enter is clicked
        var li = document.createElement("li");
        var spanElement = document.createElement("span");
        var icon = document.createElement("i");

        var newTodo = this.value;
        this.value = " " ;

        icon.classList.add('fas', 'fa-trash-alt');
        spanElement.append(icon);
        ul.appendChild(li).append(spanElement,newTodo);

        deleteTodo();

    }

});

// event listener to linethrough list if clicked
ul.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    },false
);

//hide input box,when pencil icon is clicked
pencil.addEventListener('click', function(){
    input.classList.toggle('display');
});



//save todolist state so user can access it later
saveBtn.addEventListener('click',function(){
    localStorage.setItem('todoList',ul.innerHTML );
});

//clear all todo when clear button is clicked
clearBtn.addEventListener('click', function(){
    ul.innerHTML= "";
    localStorage.removeItem('todoList',ul.innerHTML );
});

//display overlay when tips btn is clicked
tipsBtn.addEventListener("click",function(){
    overlay.style.height = "100%";
    overlay.style.opacity = "0.9";
    // overlay.style.position = "relative";
});

// close overlay when close btn is clicked
closeBtn.addEventListener("click", function (e){
    e.preventDefault();
    overlay.style.height = "0";
})


//delete todo
deleteTodo();

//load Todo
loadTodo();


