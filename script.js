var button=document.getElementById("enter");
var input=document.getElementById("input");
var ul=document.querySelector("ul");

button.addEventListener("click",addlistafterclick);
function addlistafterclick(){if(input.value.length>0){
    creatingelement();}}
    
 function creatingelement(){
    var li=document.createElement("li");
   var button1=document.createElement("button");
    li.appendChild(document.createTextNode(input.value));
    button1.appendChild(document.createTextNode("Delete"))
    ul.appendChild(li);
    li.append(button1);
    input.value=""
}

function addlistafterkeypress(event){
    
    if(input.value.length>0&&event.code==="Enter"){
    creatingelement();
  }}

button.addEventListener("click",addlistafterclick);
input.addEventListener("keypress",addlistafterkeypress);

//this loop worked but it cant accept new descendents 
// var done=document.getElementsByTagName("li");
// for(let i=0;i<done.length;i++){
//   done[i].addEventListener("click",function (){
//     done[i].classList.toggle("done");
//   })
// } 
ul.addEventListener("click",function(e){
 
if(e.target.matches("li")){
  e.target.classList.toggle("done")
}
})


ul.addEventListener("click",function(e){
 if( e.target.matches("button")){
   e.target.parentElement.remove();
 }
})
