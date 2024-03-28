const inbox =document.getElementById("inbox");
const listcon =document.getElementById("list-container");

function addTask(){
    if(inbox.value===''){
        alert("Empty!!!");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML= inbox.value;
        listcon.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inbox.value="";
}

listcon.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);