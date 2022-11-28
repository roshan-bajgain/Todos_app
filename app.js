const input = document.querySelector(".input-field");
const btn = document.querySelector(".btn");
const todoList = document.querySelector(".list")
const clearbtn = document.querySelector(".btns")

// If user click on the add btn
btn.onclick = () => {
    let userdata = input.value;
    let getlocalStorage = localStorage.getItem("New Todo"); //getting local storage
    if(getlocalStorage == null) { //if local storage is null
        listArr = []; //creating null array
    }else {
        listArr = JSON.parse(getlocalStorage); //tansforming json into object.
    }
    listArr.push(userdata);  //pushing or adding user data
    localStorage.setItem("New Todo",JSON.stringify(listArr)); //tansforming js oject into string
}
 
//To add task on ul
function showtask(){
    let getlocalStorage = localStorage.getItem("New Todo");
    if(getlocalStorage == null) {
        listArr = [];
    }else {
        listArr = JSON.parse(getlocalStorage);
    }
    const pendinglist = document.querySelector(".pending");
    pendinglist.textContent = listArr.length; // counting the list array and displaying
    let newLi = '';
    listArr.forEach((element,index) => {
        newLi += `<li>
                ${element} <span onclick="deletetask(${index})";><i class="fa fa-trash" aria-hidden="true"></i></span>
            </li>`
    });
    todoList.innerHTML= newLi;
    input.value = '';
}
showtask();

//deleting the task function
function deletetask(index){
    let getlocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getlocalStorage);
    listArr.splice(index, 1); //delete or remove one item from particular li
    //After removing the list array update local storage again
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showtask();
}

clearbtn.onclick = ()=> {
    let getlocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getlocalStorage);
    listArr = [];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showtask();
}

