let todo=[];
let todoSection=document.getElementById("todo-data");
let savebutton=document.getElementById("savebutton");
let textinputbar=document.getElementById("textinput");

textinputbar.addEventListener("keyup",function togglesavebutton(){
    let todotext=textinputbar.value;    
    if(todotext.length==0){
      if(savebutton.classList.contains("disabled"))
        return;
    savebutton.classList.add("disabled");
    }
    else if(savebutton.classList.contains("disabled")){
        savebutton.classList.remove("disabled");
    }

      
} )

savebutton.addEventListener("click",function getTextAnddTodo(){
    let todotext=textinputbar.value.trim();
    if(todotext.length==0)
        return;
    todo.push(todotext);
    addtodo(todotext,todo.length);
    textinputbar.value="";


})
// function removeTodo(event){
//     console.log("click", event.target.parentElement.parentElement.parentElement);
//     event.target.parentElement.parentElement.parentElement.remove();
// }

function addtodo(tododata,todocounts){
    //adding div
    let rowdiv=document.createElement("div") ;
    let todoitem=document.createElement("div");
    let todonumber=document.createElement("div");
    let tododet=document.createElement("div");
    let todosta=document.createElement("div");
    let todoact=document.createElement("div");
    let delbtn=document.createElement("button");
    let finbtn=document.createElement("button");
    let editbtn=document.createElement("button");
    let hr=document.createElement("hr");
    
    // adding class

    rowdiv.classList.add("row");
    todoitem.classList.add("todo-item", "d-flex","flex-row", "justify-content-between","align-items-center");
    todonumber.classList.add("todo-no")
    tododet.classList.add("todo-det","text-muted");
    todosta.classList.add("todo-sta","text-muted");
    todoact.classList.add("todo-act","d-flex",);
    delbtn.classList.add("btn","btn-danger",);
    finbtn.classList.add("btn","btn-success",);
    editbtn.classList.add("btn","btn-warning");

   // delbtn.onclick= removeTodo;



    todonumber.textContent=`${todocounts}.`;
    tododet.textContent= tododata;
    todosta.textContent="In Progress";
    delbtn.textContent="delete";
    finbtn.textContent="finished";
    editbtn.textContent="Edit";

    //remove todo-item
    // Add functionality to delete button
    delbtn.addEventListener("click", function () {
        rowdiv.remove();
        todo.splice(todocounts - 1, 1); // Remove from array
    });

    // Add functionality to finish button
    finbtn.addEventListener("click", function () {
        todosta.textContent = "Completed";
        finbtn.disabled = true; // Disable finish button
    });



    todoact.appendChild(delbtn);
    todoact.appendChild(finbtn);

    todoitem.appendChild(todonumber);
    todoitem.appendChild(tododet);
    todoitem.appendChild(todosta);
    todoitem.appendChild(todoact);
    rowdiv.appendChild(todoitem);
    todoitem.appendChild(editbtn);
    rowdiv.appendChild(hr);
    todoSection.appendChild(rowdiv);

}
// Function to update indexes after deletion
function updateIndexes() {
    let todoItems = document.querySelectorAll(".todo-no");
    todoItems.forEach((item, index) => {
        item.textContent = `${index + 1}.`;
    });
}