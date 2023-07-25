// search tab border functionallity
// const searchDiv=document.getElementById("searchTab")
// const searchInput=document.getElementById("searchInput")

// searchInput.addEventListener(click,function (e) {
//     searchDiv.classList.add('orange-border')
// })
// // function ParentBorder() {
// //     const element=document.getElementById("searchTab");
// //     element.classList.add("orange-border")
// // }

// document.addEventListener(click,function (e) {
//     if(!searchDiv.contains(e.target) && e.target!==searchInput){
//         searchDiv.classList.remove("orange-border")
//     }
    
// })


const parentDiv = document.getElementById('searchTab');
const textInput = document.getElementById('searchInput');

// Apply style to parent div on input click
textInput.addEventListener('click',function () {
  parentDiv.classList.add('orange-border');
//   console.log("hi");

});

// Remove style from parent div when clicking outside the input
document.addEventListener('click',function (event) {
  if (!parentDiv.contains(event.target) && event.target !== textInput) {
    parentDiv.classList.remove('orange-border');
  }
  console.log("hi");


});

