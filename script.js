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

  //the detailed code
// //   var button=document.getElementById("enter");
// // var input=document.getElementById("userinput");
// // var ul=document.querySelector("ul");
// // button.addEventListener("click",function(){
// //   if(input.value.length>0){
// //     var li=document.createElement("li");
// //    li.appendChild(document.createTextNode(input.value));
// //    ul.appendChild(li)
// //    input.value=""
// // }
// }) 

// input.addEventListener("keypress",function(event){
    
//     if(input.value.length>0 &&event.keyCode===13 ){
//       var li=document.createElement("li");
//      li.appendChild(document.createTextNode(input.value));
//      ul.appendChild(li)
//      input.value=""
//   }
//   })
var done=document.getElementsByTagName("li");
for(let i=0;i<done.length;i++){
  done[i].addEventListener("click",function (){
    done[i].classList.toggle("done");
  })
} 


ul.addEventListener("click",function(e){
 if( e.target.matches("button")){
   e.target.parentElement.remove();
 }
})



